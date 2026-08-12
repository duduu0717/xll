import {
  AutoTokenizer, // 分词器
  AutoModelForCausalLM, // 大模型
  TextStreamer, // 文本流式输出
  InterruptableStoppingCriteria, // 终端生成 条件 设置一个条件， 每次预测以一个token 
  // 检测这个值， 停下来
} from "@huggingface/transformers";

/**
 * 该类使用单例模式，实现流水线的懒加载
 */
// pipeline 流水线  文本生成
// 分词器 大模型 配置文件
class TextGenerationPipeline {
  static model_id = "onnx-community/DeepSeek-R1-Distill-Qwen-1.5B-ONNX";
  // 单例模式 llm 只需要初始化一次， 后面可以一直用， 实例化好性能，单例管理
  static async getInstance(progress_callback = null) {
    // 分词器
    // transform.js 提供的AutoTokenizer 
    // 适配DeepSeek-R1-Distill-Qwen-1.5B-ONNX
    // 下载
    // 下载进度跟新
    // 100% from_pertrained 可以用了
    // tokenizer model 等需要异步的下载并执行 
    this.tokenizer ??= AutoTokenizer.from_pretrained(this.model_id, {
      // 下载进度回调函数
      progress_callback,
    });
    console.log(this.tokenizer, "//////////");
    // 下载模型文件
    this.model ??= AutoModelForCausalLM.from_pretrained(this.model_id, {
      dtype: "q4f16",
      device: "webgpu",
      progress_callback,
    });
    return Promise.all([this.tokenizer, this.model]);
  }
}
// 可被外部中断 的停止条件实例 
const stopping_criteria = new InterruptableStoppingCriteria();
// 每次对话， 都会KV 注意力计算 大量的算力消耗
// message 数组 添加上一条， 缓存之前的计算， 跳过了
let past_key_values_cache = null;

async function generate(messages) {
  console.log(messages, '----------');
  const [tokenizer, model] = await TextGenerationPipeline.getInstance();
  // 分词
  // llm 的模版 deepseek 训练时特定的模版
  // <|im_start|>user 
  // content<|im_end|>   字符串
  const inputs = tokenizer.apply_chat_template(messages, {
    // 会在拼接好的末尾自动追加 <|im_start|>assistant\n
    // 续写回答
    add_generation_prompt: true,
    return_dict: true,
  });
  console.log(inputs, 'token id');
  // 生成是两部分
  // 思考推理部分 + 生成推理部分 + 结束推理部分
  // content 正式
  const [START_THINKING_TOKEN_ID, END_THINKING_TOKEN_ID] = tokenizer.encode(
    "<think></think>",
    { add_special_tokens: false },
  );

  let state = "thinking"; // 'thinking'（思考）或 'answering'（回答）
  let startTime; // 开始时间
  let numTokens = 0;// 处理的token总数
  let tps; // 每秒生成多少token?  token/秒 性能指标

  const token_callback_function = (tokens) => {
    // js 性能优化的API
    startTime ??= performance.now();

    if (numTokens++ > 0) {
      tps = (numTokens / (performance.now() - startTime)) * 1000;
    }
    if (tokens[0] == END_THINKING_TOKEN_ID) {
      state = "answering";
    }
  };

  const callback_function = (output) => {
    self.postMessage({
      status: "update",
      output,
      tps,
      numTokens,
      state,
    });
  };

  const streamer = new TextStreamer(tokenizer, {
    skip_prompt: true,
    skip_special_tokens: true,
    callback_function,
    token_callback_function,
  });

  // 告诉主线程：我们开始生成了
  self.postMessage({ status: "start" });
  const { past_key_values, sequences } = await model.generate({
    // 先手动Token Ids 
    ...inputs,
    // past_key_values: past_key_values_cache,
    do_sample: false,
    max_new_tokens: 2048,
    streamer,
    stopping_criteria,
    return_dict_in_generate: true,
  });
  past_key_values_cache = past_key_values;

  const decoded = tokenizer.batch_decode(sequences, {
    skip_special_tokens: true,
  });

  // 把输出结果发回主线程
  self.postMessage({
    status: "complete",
    output: decoded,
  });
}

// 不能dom
async function check() {
  try {
    // window 
    // DOM Document Object Model  document
    // BOM Browser Object Model navigator 
    // adapter 是 GPU 适配器的抽象，
    // 后续所有 WebGPU 计算/渲染操作都通过 device 执行
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
      // 抛出错误
      throw new Error("WebGPU is not supported (no adapter found)");
    }
    // fp16_supported = adapter.features.has("shader-f16")
  } catch (e) {
    self.postMessage({
      status: "error",
      data: e.toString(),
    });
  }
}

async function load() {
  self.postMessage({
    status: "loading",
    data: "Loading model...",
  });

  const [tokenizer, model] = await TextGenerationPipeline.getInstance((x) => {
    // 同时给流水线加一个进度回调，用来跟踪模型加载进度。
    console.log(x, '//////////////');
    self.postMessage(x);
  });

  self.postMessage({
    status: "loading",
    data: "Compiling shaders and warming up model...",
  });
  // 用一个假输入跑一次模型，用来编译着色器（shader）
  // a 手动分词 
  const inputs = tokenizer("a");
  console.log(inputs);
  // 调用generate 方法 生成文本
  // max_new_tokens 生成的文本长度
  await model.generate({ ...inputs, max_new_tokens: 1 });
  self.postMessage({ status: "ready" });
}
// 事件监听
self.addEventListener("message", async (e) => {
  const { type, data } = e.data;

  switch (type) {
    // 检查webgpu是否支持
    case "check":
      check();
      break;
    // 加载模型
    case "load":
      load();
      break;
    // 生成文本
    case "generate":
      stopping_criteria.reset();
      generate(data);
      break;
    // 中断生成
    case "interrupt":
      // interrupted 设置为true, llm 实例的属性 每次生成token 检测
      stopping_criteria.interrupt();
      break;
    // 重置模型
    case "reset":
      // 清空缓存
      past_key_values_cache = null;
      stopping_criteria.reset();
      break;
  }
});