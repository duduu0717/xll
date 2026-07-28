# 天龙八部 RAG
我们学习了 loader，splitter，milvus，RAG的流程完整跑通
- loader 从各种来源加载文档(equb/csv/pdf)都有相应的loader
- splitter 将文档分割成小块
 seperator 切割符号 。？！
 chunk_size 每个chunk的大小
 chunk_overlap 每个chunk的重叠大小
- embedding 
 1024
- milvus 数据库
- RAG 流程
cosine top_k 
