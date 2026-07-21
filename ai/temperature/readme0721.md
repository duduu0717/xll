# 大模型是怎么随机说话的？
控制大模型随机性的关键参数
temperature是一个参数，用于控制大模型的随机性。 文艺创作 | 代码创作
Temperature 就是"马太效应"的调节阀——低温让强者更强，高温让大家都有机会。 改了概率之后，最终还是随机采样从新分布里抽一个词。
Top-k 随机样本 得分排序

用户输入：你好
- Top-k 只保留概率最高的 3 个，其余直接归零，然后在这 3 个里重新归一化随机选
- Top-p p=0.7 → 从高到低累加，加到 70% 就停
        p=0.5 → 到 35%+20%=55% 已超过 50%
Top-k 是"只留前 k 名"（固定名额），Top-p 是"凑够 p% 就行"（动态名额）

- 幻觉问题
- 开发者有效，靠谱的去使用，控制AI应用的随机性

- 如果把temperature设置得高，随机性会增加，生成会更随机
- 有些创作类的 随机性 去增加创意，但是想保证质量
分两步做
- 先用 Top-k 把高概率的词先选出来
- 再用temperature控制随机性
0.2 代码，法律，公司合同
0.8 文艺创作，多模态模型，AI漫剧

- temperature和Top-k可以同时使用，但是不可能都太大和太小
 - temperature太大，Top-k太小，靠谱的创意性
 - temperature太小，Top-k太大，准确，艺术性


## langchain 
lang(语言) + chain(llm 工作链|流编排)
### 核心模块 @langchain/core
- message 对话列表
- output_parsers 输出解析器
 帮我们自动的解析出相应的格式
- tools
- prompts 提示词模板


为什么需要langchain？
开发更快，业务类
AI Agent应用，生成式，概率分布
要么觉得项目不太智能，要么觉得项目太智能
chain 就是把AI 工作链条上的每个节点链起来

## AI 工作流
- llm 创意和严谨 适合不同的业务
- promptTemplate 提示词模板
- stringOutputParser 输出解析器

start - promptTemplate - llm - stringOutputParser