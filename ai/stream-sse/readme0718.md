# SSE Server Sent Events 服务器发送事件
## BFF 层
backend for frontend 为前端服务的后端

Backend 纯后端Server
java/go/node MVC 开发
Model View Controller 后端设计模式
CRUD 接口请求 restful规范
稳定性，并发，安全

JS前端，后端，有很多需求，例如接口需要修改
大前端工程师 自己写常见的node服务，来达成自身的需求

前端（vue/react）-> Node(bff) -> 后端（java/go/node）


## 在流式输出里面
前端业务非常复杂，包含二进制流对象，解码，解析data：各种情况
抽象一下，放到大前端BFF层，放到node里面，可以让前端简洁，降低难度

前端 fetch -> node(bff) -> llm服务器 

vite 创建的vue项目，里面有package.json（后端项目描述文件），也有node_modules（后端项目依赖文件）
vite工程化，是node后端服务，方便用于BFF开发

## node 框架开发
- 安装并且引入后端开发框架 express
- 实例化一个app，并且监听3000端口
- 定义路由

vue前端 可以通过fetch访问BFF 路由

## 跨域问题
- 只要域名，端口，协议（http/https）不同，就会跨域
怎么解决？
- 利用vite解决跨域问题 vite.config.js
1. 请求地址改成/api/stream，/api是标志，表示请求后端api接口
2. /stream 前端不会提供这个路由，在bff后端提供了这个路由
不跨域，但是502错误
所有前端请求，vite都会拦截
3. vite工程 有proxy配置，可以帮我们代理请求，并且转发到3000/stream
在5173端口，访问/api/stream，不跨域，但是502错误 -> 请求都会被拦截 -> vite proxy /api -> 3000端口
