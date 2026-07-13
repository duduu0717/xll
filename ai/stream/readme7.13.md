## 流式输出 Streamable

一次性返回的，等待，等很久
  复杂的计算，推理生成，耗时很久，用户体验差
  如何优化？一个一个token推理生成，实时展示
  不用一次性都给
  api，计算机网络协议层去理解
  chatbot 客户端 不断的拼接token，流式输出就成功了
  llm服务器和chatbot 客户端两边接个管道，流式输出就成功了
  生成的token，就像水流一样流向客户端
llm chatbot 像打字机一样，一次返回一个字符，叫做流式输出，体验很好

对前端工程师来说有点复杂，AI产品的第一个关键用户体验 

## 耗时
主要是推理所花费的时间（transform）和问题复杂度(难度和长度)

## 约定
- 服务器约定 接受 stream：true token生成就输出
- 客户端 发送 stream：true 表示流式输出

## 使用流式（Streaming）传输 减少等待时间
用户体验的打造，前端的责任，必考内容，因为它是AI产品的核心体验

- vite 前端项目中集成deepseek apikey
 vite 会帮我们读取.env.local
 vite 是脚手架（node写的）
 
## VUE 基础
- .vue 后缀
  .vue文件也叫组件文件(component file)
  facebook 网页由一万多个component组成
  组件就是组成网页的最小单位，方便封装，复用，维护 

## 封装 三部分
- template 模板 html是静态的，模板是动态的
  是一段html代码，可以绑定数据，可以响应式更新
- script 逻辑
 引入 vue/react {{}}.vue ref/reactive
 count setup vue3 新增的语法糖，可以支持宏函数，把script全局的数据直接可以被template模板使用
- style 样式