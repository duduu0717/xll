# Harness 工程
用工程化手段，进一步解决llm 幻觉和落地
harness 是一种将llm生成(让llm当评委)，自动评测，择优筛选，串联成闭环的流水线编排框架
像被马具（harness）驾驭的马一样，在解构化流程中自动产出更高质量的结果
ReAct Agent的思维框架

这是一个LLM as Judge + Best of N Sampling 组合的harness模式
核心思想
1. Best of N Sampling 并行生成多个候选代码，通过随机性覆盖更多可能性
2. LLM as Judge 用llm 充当自动化评分器，替代人工评测，实现自动闭环
3. harness 抽象 将生成，评测，择优，三阶段解耦为流水线 harness 工程