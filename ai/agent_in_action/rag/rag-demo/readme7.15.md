# RAG 
Retrieval Augment Generation
Retrival 检索器
知识库 -> 先embedding 基于向量数据库 -> 检索器（embedding + 相似度 + prompt embedding）

## langchain RAG 业务能力
开箱即用的llm开发框架
- @langchain/openai chatOpenai Embedding
- @langchain/openai/documents
 embedding 的最小单元
 知识库 由文件（文本，图片，视频，音频）组成
 某个段落的文字，有我们要找的语义
 {
  pageContent：'要单独embedding的文本'
  meta:{元数据 不做embedding
  ...
  link: 'http://www.baidu.com',
  author: 'xll',

  }
 }
 docments ... 简单就放内存 复杂就放向量数据库
- @langchain/classic llm开发以来 langchain的经典常用模块

MemoryVectorStore 内存向量储存

检索器 = （知识库 -> 文档 ->documents -> embedding -> MemoryVectorStore）
invoke()

AI发展迅猛 langchain 版本更新快，看文档

- retrieval.invoke(3) top_k
 在相似度查询的基础上,还会做去重,过滤,rerank等
- vectorStore.similaritySearchWithScore(3) 只做向量查询
score 会表达内容的质量 增加高质量的数据 向量化
