# jwt 登录鉴权
登录用的都是JWT json web token
- HTTP 无状态 Stateless 用户身份？
- 请求头带上 Authorization
- 令牌格式 Bear Token 一串鉴权码 身份凭证 加密
- /login admin + password
 {
  id：1
  username：admin
  role：admin
 }

JSON 身份对象 -> JWT（单向操作） -> Token 颁发给登录者
每次带上 Token -> Authorization -> decode -> JSON对象

## Zusatand
轻量级状态管理框架 react全家桶 react + react-router-dom + zustand
- 父子传递 组件通信 状态共享
- createContext + useContext 跨层级共享
- 登录与否 用户信息 全局状态
 全局共享，跨路由
 zustand 统一管理状态 store 状态仓库

 React App = UI components + Store

## mockjs 大前端鉴权
- axios baseURL
- vite mockjs 插件
 /api

## JSON Web Token
sign verify 两个动作
sign 用户json对象 身份信息 json具有强大的表现力
cookie/session 登录方案
cookie 请求每次都会带上 sessionId
sessionId -> 内存中 session
jwt没有这个问题 任何一台服务器签发的token 都可以在任何一台其他自己的服务器上，解码出来 json对象

## 拦截器
axios 默默地做了很多
1. 后端签发的token 放在localStorage
2. axios 配置里添加一个interceptors
- request 
 每个axios请求拦截下来
  config 请求配置对象
  config.headers['Authorization'] 
  每次请求自动带上
 return config
- response
 服务器返回的数据作为response.data
 response.headers..