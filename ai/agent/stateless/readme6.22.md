## 无状态智能体 stateless
- 调用大模型接口的本质？
http调用 消耗算力生成结果
高并发，高可用，后端需要支持无状态
- 无状态是什么？
无状态是指每次请求都独立处理，不依赖于之前的请求。
无状态的智能体在处理请求时，不会保留任何状态信息，只根据请求内容进行处理。
无状态的智能体在处理请求时，不会因为之前的请求而改变其行为。
http协议是无状态的，每次请求都是独立的，不会保留任何状态信息。
http无状态协议(get/post...restful)+header(cookie身份/authorization)
所有人都公平

- llm 无状态 基于http
每个请求独立

## llm 运行底层规则
- 无状态
- 尝试让llm懂我们
- 每次手动带上全部对话
- 服务器端并发
 在任何一台服务器上运行都没差别

## 升级
- prompt
历史对话，知识库claude.md ,agent.md 上下文
抽卡，prompt质量或者设计只能提升抽到金卡的概率，不是特别可控的
- Context Engineering 上下文工程
 RAG 大模型不懂或者没有训练的或者更加优质的  mcp
 skill 
- Loop Engineering 循环工程
- Harness AI工程

## chathistory 有什么问题
- 没有维护全部的history 大模型的回复也是关键
- message 越来越多，token开销越大
- LRU 一次对话里面一直聊？ 任务还没有完成
 token开销大 最近在聊的留下，久远的可以适当的删除
 capacity