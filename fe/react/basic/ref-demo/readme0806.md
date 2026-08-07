# react 常用的hooks
## useState
响应式的状态

## useEffect
副作用

## useRef
可变对象
- 只想可变，但是不希望触发渲染
- 绑定DOM对象
react 不直接操作DOM
万一要操作DOM

## DOM编程
- js在v8引擎
- dom在渲染引擎
js 里做DOM 编程非常消耗性能
- react vue之前 原生js 做DOM 编程 性能差
- react vue 新框架
 直接规避DOM编程 不要做DOM编程
 react框架帮我们做
 useState 数据绑定 + 响应式编程
前端开发方式直接改变

## 如果非要DOM编程
不是不可以做DOM编程
如果需要DOM useRef
- useRef 申明一个可变对象
- jsx dom ref 属性绑定
current 指向这个dom节点对象
- useEffect
- 和useState 相同点和区别点
都可以改变 
useState 聚焦数据状态业务
useRef 聚焦DOM操作业务
useState是响应式的
useRef 不是响应式的

## 总结定义
useRef 是一个react的一个提供持久可变的hook函数，经常用来引用DOM节点对象
它拥有current属性，可以指向任何值或者对象，不会触发渲染更新

## useRef worker 对象

## js 单线程
做一些前端交互，脚本工作，简单，显示和操作的页面，一致性，不能出问题，js如果是多线程，可能会有冲突
页面复杂起来，有很多任务要做，耗时任务，event loop js执行机制
异步无阻塞，不要卡在这里，前端要尽快的去响应用户的交互（滚动屏幕，点击）

llm，游戏
非见面的业务逻辑，很耗时，event loop 异步搞不定
js 提供了worker线程，接下更耗时，复杂的任务，使用浏览器独立开辟的内存，复杂计算
完成后告知主线程（消息机制）

## Web Worker 线程
浏览器提供给js 可以调用的耗时计算，或者llm，游戏等复杂任务的worker线程

js单线程 event loop 机制
不适合某些复杂的计算业务，html5提供的新特性
web worker 线程
- 开启了一个新线程
new Worker(
  new URL('./worker.js', import.meta.url),
)

## Web Worker 适合的场景
- event loop 同步代码 + 异步代码？
- 耗时性复杂专项任务
 - 游戏严谨计算
 - llm 
 - 加密等密集计算

- 先new一个（实例化）worker线程
- 消息机制
- js 难道变成了多线程语言？
 js单线程机制并没有改变，只是在执行一些很复杂的任务时，主线程和由浏览器提供的web worker 线程，通信
 js 是v8引擎
 浏览器 c++ 多线程多进程的软件

- js 主线程和worker线程是隔离开的
 - 两个机制互不打扰，并行执行

## 总结
useRef 用来持久存放web worker实例，组件每次渲染不会重置该线程对象
并且在useEffect 组件挂载后初始化，优先渲染
有worker线程，可以方便监听，发送数据，以及组件卸载时销毁线程

js为主线程单线程event loop 机制，主线程负责脚本执行，dom渲染，用户交互等
繁重的cpu计算会阻塞主线程，造成页面卡顿，于是浏览器提供了Web Worker 开辟独立后台线程承担计算任务
work无法访问DOM，只能通过消息和主线程相互通信
它只是浏览器提供的辅助线程，页面渲染，组件更新，交互事件，依旧
只能在唯一js线程中执行，因此，js任是单线程语言
