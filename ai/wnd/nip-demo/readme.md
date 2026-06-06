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