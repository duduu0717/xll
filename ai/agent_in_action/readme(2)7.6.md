# Tool 让大模型自动干活

## demo
```
创建一个react+vite的todolist
```
要用到哪些tool？
编程任务planning 分三步
- vite 创建项目，写入文件tool
- llm 选择编程能力比较强的模型
- 项目运行起来，调用cli命令的tool

## 手写一个简单版本的claud code agent
llm + tool(fs + cli)


## langchain
llm开发框架 比openai（transformer，generative）早诞生
- llm有很多家，兼容各家大模型
@langchain/openai

## Message
SystemMessage 设置AI是谁，可以干什么，有什么能力，以及一些回答行为的规范等
HumanMessage 用户的问题
AIMessage AI的回答
ToolMessage 调用tool结果的message ，包含tool_id


原生openai 返回工具调用 additional_kwargs ->tools -> 每个tool
langchain invoke 原样输出上面的，同时还会细心的准备tools加到后面
llm工程开发的便捷性，可读性

## AI工程
- 工程目录
 根目录 package.json  node_modules 
- src 开发代码目录
 - promise 特性
 asyn 函数 就是promise实例，return resolve 并且return的结果就是

 ## 总结第一个编程助手Agent
- ReAct Agent 工作流框架
 分析出Agent的执行流程 每一步的reason，act，observe
- langchain 
 tools的声明 （async fn + shcema（zod））
 invoke执行（messages，tool等）
 四种message派生类
 modelWithTools llm工作流coze节点之间连线
 langchain 工作流chatOpenAi -> tools -> bindTools -invoke
 llm工作流编排框架
 
- Agent 工作流程
 - llm能力边界
   stateless + 不能直接干活
  - 不停的维护messages数组
  - llm reason不能直接生成，直接返回带tool的消息
  - tool 执行 ToolMessage tool_id加入
  - 最简单的loop 有工具调用
   如果没有，拿着所有massage去最后一次调用llm
- promise 升级
 async 函数执行完后 是promsie return resolve值
 promise.all find map
 if(tool)
 try catch