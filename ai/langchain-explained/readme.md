# LangChain 详解

## 什么是 LangChain？

LangChain 是一个 **LLM 应用开发框架**。核心思想：把 AI 应用的每个环节抽象成独立模块，然后用 `.pipe()` 像水管一样串起来。

```
lang（语言/LLM） + chain（链/工作流编排）
```

没有 LangChain 时，你需要手动处理每一步；有了它，所有步骤标准化、可复用、可组合。

---

## 为什么需要 LangChain？

| 不用 LangChain | 用 LangChain |
|---|---|
| 手动拼 prompt 字符串 | PromptTemplate 模板化复用 |
| 手动从 response 里取 `.content` | OutputParser 自动解析 |
| 每次调 API 都要写一堆重复代码 | 模块化，换模型/换 prompt 即插即用 |
| 多轮对话要自己维护历史数组 | Messages 模块帮你管 |
| Function Calling 要手写 JSON Schema | Tools 模块自动生成 |

一句话：**让开发者专注在业务逻辑上，而不是胶水代码上。**

---

## 核心概念：Chain（链）

把 AI 工作流的每个步骤串成一条流水线：

```
输入 → [Prompt模板] → [LLM调用] → [输出解析] → 结果
         .pipe()        .pipe()
```

```javascript
const chain = promptTemplate    // 1. 把变量填进模板
  .pipe(model)                  // 2. 送给模型推理
  .pipe(outputParser)           // 3. 提取纯文本

const result = await chain.invoke({ theme: "落日" })
// result = "晚风轻拂过金色的麦田..."
```

**`.pipe()` 做的事**：上一个的输出，自动变成下一个的输入。

---

## 一、@langchain/core 核心模块

### 1. Prompts — 提示词模板

**问题**：prompt 硬编码在代码里，换了业务就得改代码。

**解决**：模板化，变量用 `{}` 占位，调用时传入。

```javascript
import { PromptTemplate } from '@langchain/core/prompts'

// 定义模板
const prompt = PromptTemplate.fromTemplate(
  '你是一个{role}，请用{style}风格回答：{question}'
)

// 填入变量
const filled = await prompt.format({
  role: '诗人',
  style: '温柔',
  question: '什么是爱'
})
// → "你是一个诗人，请用温柔风格回答：什么是爱"
```

**常见类型**：

| 类型 | 用途 |
|---|---|
| `PromptTemplate` | 最简单的字符串模板，`{variable}` 占位 |
| `ChatPromptTemplate` | 多轮对话模板，支持 system/user/assistant 角色消息 |
| `FewShotPromptTemplate` | 给模型看几个例子（few-shot），再问问题 |
| `MessagesPlaceholder` | 留给对话历史的占位，动态插入历史消息 |

`ChatPromptTemplate` 例子：

```javascript
import { ChatPromptTemplate } from '@langchain/core/prompts'

const chatPrompt = ChatPromptTemplate.fromMessages([
  ['system', '你是一个{role}'],
  ['user', '{input}'],
])

const messages = await chatPrompt.formatMessages({
  role: '数学老师',
  input: '1+1等于几？'
})
```

---

### 2. Messages — 对话消息

**问题**：多轮对话需要维护历史消息列表，格式各不统一。

**解决**：标准化的消息对象，所有 LLM 提供商的通用格式。

```javascript
import { HumanMessage, AIMessage, SystemMessage } from '@langchain/core/messages'

const history = [
  new SystemMessage('你是一个友好的助手'),       // 系统指令
  new HumanMessage('你好'),                      // 用户消息
  new AIMessage('你好！有什么可以帮你的？'),      // AI回复
  new HumanMessage('今天天气怎么样'),            // 新一轮用户消息
]
```

**消息类型**：

| 类型 | 角色 | 用途 |
|---|---|---|
| `SystemMessage` | system | 设定 AI 行为、规则、人设 |
| `HumanMessage` | user | 用户说的话 |
| `AIMessage` | assistant | AI 回复的内容 |
| `ToolMessage` | tool | Function Calling 中工具的返回结果 |

---

### 3. Output Parsers — 输出解析器

**问题**：LLM 返回的是复杂对象 `{ content, metadata, ... }`，每次手动取 `.content` 很烦；如果想让模型输出 JSON，还得自己解析。

**解决**：自动提取/转换输出格式。

```javascript
import { StringOutputParser } from '@langchain/core/output_parsers'

const parser = new StringOutputParser()
// 内部做的事：result.content → 纯字符串
```

**常用解析器**：

| 解析器 | 输入 | 输出 | 用途 |
|---|---|---|---|
| `StringOutputParser` | 任意消息对象 | 纯文本字符串 | 最常用，对话/写作 |
| `JsonOutputParser` | 含 JSON 的文本 | JS 对象 | 结构化数据提取 |
| `StructuredOutputParser` | 指定 Zod Schema | 符合 Schema 的对象 | 严格格式化输出 |
| `CommaSeparatedListOutputParser` | 逗号分隔文本 | 字符串数组 | 标签/关键词提取 |

`JsonOutputParser` 例子：

```javascript
import { JsonOutputParser } from '@langchain/core/output_parsers'

const parser = new JsonOutputParser()
// LLM 输出: '{"name": "张三", "age": 25}'
const result = await chain.invoke({ input: '...' })
// result = { name: "张三", age: 25 }   ← 已经是解析好的对象
```

---

### 4. Tools — 工具（让模型调用外部能力）

**问题**：模型只能根据训练数据回答，无法获取实时信息、操作数据库、调用 API。

**解决**：定义工具，模型可以"决定"调用哪个工具，拿到结果再继续回答。

```javascript
import { tool } from '@langchain/core/tools'
import { z } from 'zod'

// 定义一个查询天气的工具
const weatherTool = tool(
  async ({ city }) => {
    // 实际去查天气 API
    return `${city}今天晴，25°C`
  },
  {
    name: 'get_weather',
    description: '查询指定城市的天气',
    schema: z.object({
      city: z.string().describe('城市名称'),
    }),
  }
)

// 绑定工具到模型
const modelWithTools = model.bindTools([weatherTool])
```

**流程**：

```
用户: "北京天气怎么样？"
  → 模型判断：需要调用 get_weather 工具
  → 返回 tool_call: { name: "get_weather", args: { city: "北京" } }
  → 你执行工具：拿到 "北京今天晴，25°C"
  → 模型收到结果：回答 "北京今天晴，25°C"
```

---

### 5. Vector Stores — 向量数据库（RAG 的核心）

**问题**：模型上下文有限，无法装下几百页的文档。

**解决**：把文档切成小块 → 向量化 → 存到向量数据库 → 搜索时找最相关的片段喂给模型。

```javascript
import { OpenAIEmbeddings } from '@langchain/openai'
import { MemoryVectorStore } from 'langchain/vector_stores/memory'

// 1. 文档切片
const docs = [
  'LangChain 是一个 LLM 应用框架...',
  'Temperature 控制模型随机性...',
]

// 2. 向量化 + 存储
const store = new MemoryVectorStore(new OpenAIEmbeddings())
await store.addDocuments(docs)

// 3. 搜索最相关的文档
const relevant = await store.similaritySearch('怎么控制模型随机性', 2)
// → ['Temperature 控制模型随机性...']
// 4. 把搜到的内容拼进 prompt 一起发给模型
```

---

### 6. Document Loaders — 文档加载器

```javascript
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'

const loader = new TextLoader('./data.txt')
const docs = await loader.load()
// → [{ pageContent: "...", metadata: { source: "./data.txt" } }]
```

---

### 7. Text Splitters — 文本切分器

文档太长，需要切成小块：

```javascript
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,   // 每块最多 500 字
  chunkOverlap: 50, // 块之间重叠 50 字（避免切断上下文）
})

const chunks = await splitter.splitDocuments(docs)
```

---

## 二、@langchain/openai — 模型集成

统一接口调用不同厂商的模型：

```javascript
import { ChatOpenAI } from '@langchain/openai'

const model = new ChatOpenAI({
  model: 'deepseek-v4-pro',     // 模型名
  temperature: 0.7,             // 随机性
  topK: 8,                      // Top-k 采样
  maxToken: 600,                // 最大输出
  apiKey: process.env.API_KEY,  // API 密钥
  configuration: {
    baseURL: 'https://api.deepseek.com/v1',  // 兼容 OpenAI 协议的 API 地址
  },
})

// 直接调
const result = await model.invoke('你好')
// result.content → "你好！有什么可以帮你的？"

// 流水式输出（打字机效果）
const stream = await model.stream('讲个故事')
for await (const chunk of stream) {
  process.stdout.write(chunk.content)
}
```

---

## 三、LangChain 生态全景

| 包 | 作用 |
|---|---|
| `@langchain/core` | 核心抽象：prompts、messages、tools、parsers |
| `@langchain/openai` | OpenAI / 兼容 OpenAI 协议的模型（DeepSeek 等） |
| `@langchain/anthropic` | Claude 模型 |
| `@langchain/community` | 社区贡献的各种集成 |
| `langchain` | 高级封装：chains、agents、RAG、LCEL |

---

## 四、完整 AI 工作流拓扑图

```
                    ┌──────────┐
  用户输入 ────────→│ Prompt   │  ← 模板填入变量
                    │ Template │
                    └────┬─────┘
                         │ 拼好的完整 prompt
                         ↓
                    ┌──────────┐
                    │   LLM    │  ← temperature + topK 控制输出
                    │  Model   │
                    └────┬─────┘
                         │ { content, metadata, ... }
                         ↓
                    ┌──────────┐
                    │  Output  │  ← 提取/转换格式
                    │  Parser  │
                    └────┬─────┘
                         │ 纯字符串 / JSON / ...
                         ↓
                      最终结果
```

### 扩展能力（按需拼接）

```
  ┌──────────┐   ┌─────────────┐   ┌──────────┐
  │ Document │→  │ Text Splitter│→  │ Vector   │   RAG 检索增强生成
  │ Loader   │   │              │   │ Store    │
  └──────────┘   └─────────────┘   └──────────┘

  ┌──────────┐   ┌──────────────┐
  │  Tools   │   │   Agent      │   Agent 自主决策调用工具
  │ 定义能力 │   │ 自主规划执行  │
  └──────────┘   └──────────────┘
```

---

## 五、从你当前代码出发的理解路径

你 [t-demo/main.js](../temperature/t-demo/main.js) 里的代码就是 LangChain 最简工作流：

```javascript
// 1. 定义模型（温度控制）
const creativeModel = new ChatOpenAI({ temperature: 0.8, topK: 4, ... })
const preciseModel  = new ChatOpenAI({ temperature: 0.2, topK: 8, ... })

// 2. 定义 prompt 模板
const storyPrompt = PromptTemplate.fromTemplate('请写一篇短篇散文，主题：{theme}')

// 3. 定义输出解析器
const outputParser = new StringOutputParser()

// 4. 组装 chain
const creativeChain = storyPrompt.pipe(creativeModel).pipe(outputParser)

// 5. 调用
const result = await creativeChain.invoke({ theme: '秋日山野晚风' })
```

### 下一步可以学什么？

1. **ChatPromptTemplate** — 用 system prompt 设定人设
2. **多轮对话** — 用 Messages 维护对话历史
3. **JsonOutputParser** — 让模型输出结构化数据
4. **Tools** — 让模型调用外部 API
5. **RAG** — 把文档喂给模型做知识问答
