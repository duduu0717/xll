## 入手ai，需要搞懂哪几个关键概念？

## Agent（智能体）
现在最值钱的就是Agent，Agent工程师已经取代传统软件工程师，刷新工资上限

FDE 通过开发各种Agent，帮助企业AI落地，降本增效
现在用的很多AI产品，本质已经是Agent
Cursor/Claude Code/Codex 等，都是基于Agent的智能体
核心都一样，能够帮我们干活
不只是回答问题，还能读文件，搜网络，写代码，操作浏览器，都是Agent在做

一个Agent有多强，取决于用了什么大脑（llm），装了什么工具，拿到了什么信息

## LLM
大模型 是agent的大脑
LLM只负责**推理**和生成，真正的行动能力来自工具的调用

## 工具 Tools
LLM 只有推理生成能力，无法对接外部世界，tool可以补齐操作短板
没有tool，ai只能回答问题，不能做任何实际操作，无法完成自动化任务

- reasoning_effort 推理
  - high：深度推理模式，能够完成复杂的任务
  - low：快速推理模式，能够快速回答简单问题
给出llm的规划和思维，方便我们了解和介入

- message 多轮对话列表
- reasoning_effort 推理模式
- reasoning_content 思考过程
指导生成，流式输出
- content 回答内容

- 青岛啤酒股价多少
llm 推理需要调用工具
getPrice 函数结果
结果再次返回给llm
llm就知道如何回答
openai 提供了接口 tools
tool函数（llm 理解 需要的参数）
结果在交给llm，在completion一次
1