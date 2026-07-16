# Document 切割

- 知识库 放的是知识
知识的来源很多，一个word文档，一个pdf文件，一个bilbil视频，一个url，一个靠谱的twitter
从各种格式的文件转换成向量化前的Document 需要loader
不能直接创建Document，需要loader去加载文件

怎么处理一下
Document langchain 提供的标准格式文档 pageContent pageMetadata
pageContent 是文档的内容
pageMetadata 是文档的元数据

## loader
各种知识文件 -> 向量数据库
各种知识文件，后缀，不同的文件也有不同的loader
输入是文件，输出是documents
两件事情要做
1. 选择相应的loader
2. 切割文档，文件太大，要检索的是一定大小具有一定语义的chunk
来自社区@langchain/community 主要由社区维护，我们都可以写loader
langchain @langchain/core 官方维护的
