# 向量数据库
- loader and splitter
- 内存向量数据库

## Milvus
文档向量化放到向量数据库，每次查询根据向量化的query 去数据库做相似度匹配，查出相关文档，放入prompt供大模型检索，大模型来生成回答

- 从内存到向量数据库
Milvus 是一款开源的向量数据库，专为处理海量高维向量数据而设计
AI Agent产品都会使用Milvus 这样的vector store

web应用，会把数据存到Mysql里面，Splite，Psql
基于对数据的增删改查，实现各种业务功能，CRUD
根据id或者关键词（like）去关联查询一些列表数据
Agent会把知识，记忆放在Milvus数据库中，对知识，记忆语义检索，进行增删改查

## AI 日记本 Diary
- 日记的增删改查CRUD Mysql 非AI 功能 结构化数据是什么
- 最近心情好的日记
 同时将entity向量化存储到Milvus中 AI功能
 像什么

## zilliz
基于Milvus 的全托管向量数据库服务