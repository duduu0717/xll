# 路由
- restful 一切皆资源
- 前端路由负责切换页面
 以前是要后端路由支持的，传统，慢，页面会白一下，体验不好
 前后端分离，SPA hashRouter
 hash 锚链接 改变url hash部分不会刷新页面
 hashchange 

## React 集成前端路由
react开发全家桶
- react 组件开发，响应式等
- react-router-dom 给应用添加路由（前端）SPA
- zustand pinia 状态管理
 hashRouter

## 路由懒加载
首页/页面加载速度 非当前路由页面不加载
- 性能优化

## 各种路由
- 动态路由
- 404 Not Found

## 鉴权路由
- http 无状态的
- 有状态
 - 请求头 token Authorization
 - Cookie
 - localStorage 存储登录状态
  user admin
  password 123456
- 组件内部的子组件
 props.children 拿到组件申明的内部所有的子节点
 modal 弹窗组件 mask蒙层
 窗体 头部 尾部 主题部分children 传入
 定制性高
 <Modal>
  {children 定制}
  </Modal>
 

 ## 路由兑现
 - spa 需要前端路由
 - url 改变 对应不同的资源 resetful 设计理念
 hash #/pay browserRouter history
  - navigator 导航栏
  - location 当前路由信息
  - history 历史记录
  - link 组件
    to
    replace

## 路由 两种选型
- hashRouter
 - url 局部改变hash部分，不刷新页面
 - url和后端路由不一样
  后端就是 /pay而不是 /#pay

- browserRouter 不是hash方案实现SPA