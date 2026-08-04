# React + TypeScript
- React + TS 非常适合企业级开发
- TS 提供了类型约束，静态编译，大型语言的丰富功能

## React 的类型约束
- React.FC 
 React 函数组件的类型
 () => void
 () => ReactNode
 react 本身就是ts写的，ReactNode，React.FC 内置的类型声明

- Hello 组件，像某人打招呼
React.FC父子之间的props的声明 数据约束 ts出现
FC<T> 泛型，泛指内部的类型，proos的类型传参
可以用interface声明

返回结果一定是Reactelement
type 类型别名 FC 简短一些
默认值为{} 如果传了就用传递的类型来约束

ts里type和interface都可以用于声明一个类型
但我们的子组件需要满足Props中的属性和方法,接口用来定义对象需要满足的属性和方法

- interface 自定义事件
- 函数的类型申明 (e: React.ChangeEvent<HTMLInputElement>) => void
- React 合成事件 看过去像原生事件
 React.ChangeEvent<HTMLInputElement>
 泛指内部需要用到的类型，事件最重要的目标元素

- 组件升级
 - 组件通信 单向数据流
 - 多个组件之间共享状态
- 子组件
 如果不需要共享，子组件的私有状态
 React.ChangeEvent<HTMLInputElement>复杂性放在了内部

- useEffect
 - 副作用
  在组件挂载后，再去请求接口，拿到数据，响应式更新，满足组件即刻挂载

- 版本的变迁
 1. 把子组件的event 对象传给父组件，导致两边都要ReactEvent.ChangeEvent<HTMLInputElement> 单向数据流 父子组件通信
 把state 交给父组件，再通过props 传递给子组件，应用状态正确的前提
 影响了父组件的可读性，因为父组件原来的使命就是持有状态和修改状态，让子组件共享
 2. 在子组件之中，添加了一个私有的状态叫editingName，在进行onChange时自己修改，提交父组件时只需要给值
 3. 将私有状态提升到父组件，再通过props传过来，onChange修改editingName私有状态
 子组件没有状态，性能会更好，只需要负责展示
 UI = fn(props)
 子组件职责非常单一，就是负责展示，不负责修改状态

## useEffect
- 副作用
太多的生命周期，或者状态改变
附带存储一下，清除垃圾
- hook
对应三个生命周期
1. 挂载后 mounted
2. 更新后 updated
3. 卸载前 打扫工作
- 生命周期
 - 挂载后 mounted
  []
 - 挂载以及更新后
  [todos] 少写很多东西
  - 挂载，任何项更新都执行
  第二个参数不传


## 前端本地存储
- 浏览器中 有一个区间用于存内容
 - 浏览器缓存静态资源
 - localStroge key：value 配置
   关键数据 5M左右大小
    - setItem(key,字符串,JSON.stringify(value))
    - getItem(key)
 - 前端也有类似Mysql数据库 存更多的数据 IndexDB