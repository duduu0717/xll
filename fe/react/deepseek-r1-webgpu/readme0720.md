# deepseek-r1-webgpu

简历中的超燃项目，覆盖以下技能

## 端侧模型
区别于OpenAI/deepseek API调用，llm在远端，和调用客户端不在一起
云端版缺点
- 贵
- 不安全，数据隐私风险
 context会随着请求发送到云端，存在数据隐私风险

ollama 本地开源模型部署，在用户端，是端侧模型
手机端，汽车端，Agent任务 划分的
开源小参数模型就能完成这些任务
浏览器端，随时下载，随时使用

## React + TS
AI时代的大型项目，首选前端项目
- react 比vue 难入门
- 大型项目
- AI训练代码 react偏多

## 新建项目
react + typescript + eslint（代码约束，大公司必备，代码风格一致）
eslint负责做约束，约束代码风格

## tailwindcss
几乎不需要再写css，原子css类

## react 组件化
搭积木的方式搭建页面,是由一组html,css,js组合在一起,成为一个组件,一个功能单元
vue 通过template,script,style 组合在一起,成为一个组件,一个功能单元,vue好入门
封装一个组件(函数),函数就是一个组件
 只要函数返回一个html,就是一个组件
 函数return之前,也就是js部分,css引入样式

## tailwind 运行原理
- 不是原生css 
- 原子类css 框架,会提供一堆的css类名
- 不用写css了,选择器,css rules 太低效了
- vite 插件就可以使用,将我们申明的类名,它的样式提取出来,加到代码里
- 原子类名,简单,语义化很好,特别适合自然语言编程

如果说以前的css选择器,rules(key:value)
太底层,太低效
现在写类名就好
tailwindcss 已经成为vibe UI的基本构成

- className
 class js 里的类名关键字,函数里面写JSX
 所以不能用class,理解为你要申明一个js类 className没有这个问题

- JSX
 JSX是 react专用语法(模板),能在 js 代码里直接写 html 标签,编译后转为原生 dom 操作
 react 最为骄傲的一大特性之一,非常方便表达 UI界面
 javascript with xml

 ## React 合成事件
- onClick 最原始的 事件监听 dom0级事件监听
 缺点：html css js 不要耦合在一起，模块化分离
- dom1级
dom n 是html标准的执行迭代
dom1版本没有更新事件相关
- addEventLister dom2级事件监听
- 同一个dom元素，可以多次监听同一事件
 优点：可以模块化分离
 -react 有点代码洁癖，能不发明新概念就不发明
  @事件绑定 ..vue
  react 直接用已有的概念
  onClick 作为高手没有学习成本
- react 里的事件不是原生事件，是合成事件

## 封装进度条组件
比较独立,可复用的业务模块
把它单独的从App.jsx中抽离出来,作为组件


## 组件树
- 代替dom树
- 基于组件封装,组件树
 立刻就看出页面的组件构成
 页面的组件化程度,粒度
 前端发展的必然
 页面交付越来越复杂,组件开发作为开发的最小单元,团队好协作,好复用