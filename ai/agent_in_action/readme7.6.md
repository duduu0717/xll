# Agent

最值钱的Agent开发
如和打造自己的Agent？
- 不是直接调用大模型接口

llm有一些问题
- 你上周和它聊过的信息，它能记住吗？
 llm是stateless的，它不能记住信息
   数据库，前端存储，redis
   llm + 后端
   Memory模块
- 让llm帮忙访问一个网页，做一些事情，llm只能告诉你一个思路，让我们自己做
  Tool Use 模块
- 访问内部私有文档，llm没有权限访问
  RAG模块
- 最新的世界杯新闻，新的东西不在预训练数据中
  MCP（第三方Tool llm协议）
- 做ppt，分析股市并且自动购买
  skill技能 蒸馏功能


Agent就是围绕以上问题，给大模型加上Memory记忆模块，Tool工具调用，RAG，MCP，SKills等
Agent = llm + Memory + Tool + RAG + MCP + SKills

Claude code，Codex，Coding agent
小龙虾，Manus自动化任务

## Agent的工作流程
User以prompt的形式提出一个任务（复杂任务）交给Agent智能体
llm进行一个planning +Reasioning（计划+推理），分析要不要加载Memory记忆模块，要不要调用Tool工具（分步骤，多个工具），要不要调用RAG模块（将查询的内容加载到Prompt Template），最后会得到一个Response返回给User


## Agent 开发框架 Langchain
node（nestjs） + langchain（单智能体开发框架） + langgraph（多智能体开发框架）

结合后端技术，开发ai全栈agent产品，让ai技术通过Harness Engineering落地，实习ai技术的商业价值（FDE）

Agent其实也不复杂。llm本身也可以思考，规划，给它用tool扩展能力，能自己做事情，用memory管理记忆，他就可以你要它记住的东西，还可以用RAG查询内部知识库来获取知识，这样一个知道内知识，可以思考规划，帮你做事情的扩展后的模型，就是一个agent
- nestjs
- langchain js
MCP/RAG/Skills

## langchain
- llm统一且兼容 chatOpenAi
  @langchain/openai
  按需要加载的llm
- Tool
 langchain 接管Tool调用 @langchain/core zod 验证工具
 tool openai 接口 里面有描述和格式的约束
- 两个部分 一个是（异步）处理函数，另一个是函数描述对象
 description 详细功能，覆盖场景，参数需求
 schema 参数约束，参数类型，参数描述。tool和llm要调用此参数必须提供schema约定的参数
- tool
 llm有自知之明，当要调用tool的时候，不生成，停下来告诉用户tool_calls要调用的工具列表，id，name，arguments 多个工具 id关联tool 函数调用结果 需要历史会话列表 才能组成完整的任务上下文
 tool是异步的，llm哪个任务细节由哪个工具执行，id关联 
 llm基于自然语言的

## llm tool 性能
- llm任务复杂 可能调用多个tool，或者一个tool调用多次
- promise.all static 方法**并行执行**多个promise，等待所有promise完成，返回结果数组
-promise es6 提供的异步语法，有三种状态
  - pending 等待中
  - resolve（）成功 pending -> fulfilled 已完成
  - reject（）失败 pending -> rejected 已拒绝
- await es8 最优雅的异步变同步语法
- promise.all([promise1, promise2, promise3...]) 并行执行多个promise，等待所有promise完成，返回结果数组,顺序和输入顺序一致


即将打造一个高性能的Agent

