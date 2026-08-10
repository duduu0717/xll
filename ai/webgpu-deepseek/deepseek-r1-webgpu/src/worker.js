import {
  AutoTokenizer, // 分词器
} from "@huggingface/transformers";

/**
 * This class uses the Singleton pattern to enable lazy-loading of the pipeline
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
    this.tokenizer ??= AutoTokenizer.from_pretrained(this.model_id, {
      // 下载进度回调函数
      progress_callback,
    });

    return Promise.all([this.tokenizer]);
  }
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

  const [tokenizer] = await TextGenerationPipeline.getInstance((x) => {
    // We also add a progress callback to the pipeline so that we can
    // track model loading.
    console.log(x, '//////////////');
    self.postMessage(x);
  });
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
      break;
    // 中断生成
    case "interrupt":
      break;
    // 重置模型
    case "reset":
      break;
  }
});