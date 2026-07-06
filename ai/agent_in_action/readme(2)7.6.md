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