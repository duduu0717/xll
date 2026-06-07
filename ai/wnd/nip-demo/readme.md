# Promot 作NLP 任务开发

-有哪些东西可以模块化？
 import from
 export default
 - 维护性和可读性
 - 好复用 随时的引入
-项目模块化搭建
 - main.mjs 单点入口(鉴权，路由)
 - client.mjs client对象
 - completion.mjs 完成任务的函数


## es6 语法特性
es6是javascript的最新版本，新增了很多语法特性，使javascript更加方便、简洁。目标是让js成为一个企业级大型项目的开发语言。
- let const 声明提升bug,支持块级作用域
- let const 不能重复声明 const对于简单数据类型不能重新赋值,对于复杂数据类型可以重新赋值,但是不可以改变其指向的内存地址

- ...rest运算符 | spread展开运算符
...在 = 左边 → rest收拢（零散变数组：合并打包）
...在 = 右边[]/{}里 → spread展开（数组拆零散：拆开）


-解构赋值
 - 对象
 - 数组 简洁且性能好

-模块化 esm 模块
 -import from
 -export default
 -export



## nlp任务
- 情感分类 sentiment analysis
 正面/负面/中性
 电商等行业中非常重要 客服服务，预警，产品质检

- 信息提取 information extraction
- 主题推断 topic detection
- 文本总结 text summarization
 老板，行政岗位，小编 需要对长文本进行总结，提取出信息，减少工作量
仅用几分钟，我们就可以构建多个用于对文本进行推理的系统，而以前需要熟练的机器学习人员数天到数周的时间
让我们兴奋，可以使用prompt构建nlp系统

