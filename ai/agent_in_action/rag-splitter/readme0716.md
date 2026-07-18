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

- 爬虫 crawl
 - 从目标url开始,发送请求,拿到html字符串
 - 解析html字符串,提取出文档的内容(以前会使用正则表达式,现在使用cheerio库)
 - cheerio 另辟蹊径,前端思维 css 选择器 选择需要的内容
 - cheerio.load(html)
   $(css selector).text()

## AI时代程序员价值
 - 不再是coding ,交给AI
 - vibe coding 问出好的问题(prompt),提供丰富准确的上下文(context),去驾驭(Harness)并且部署(FDE)Agent产品,设计长时间稳定运行的loop,用好AI,快速成为一名AI 架构师

- 切割的意义
保持语义的完整性
- separators 语义的最基本构成符号 。! ?
- 按chunksize 大小切割
- 切断了,chunk的最后一句和下一个chunk第一句,他们的语义相关性是最大的,但是因为chunsize切开了,用overlap来确保语义的完整性