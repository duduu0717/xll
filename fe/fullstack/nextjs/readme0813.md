# 大前端手里的next.js
Next 是React 全栈框架，Nuxt 是Vue 全栈框架，Nest 是Node.js 全栈框架
NextJS 适合做全栈项目，可以写页面（前端），也可以写API（后端）
背靠Vercel，seo做的非常棒，很多AI产品用NextJS 做官网
## SEO 搜索引擎优化
SPA好处
体验很好，组件是在前端挂载（useEffect去异步请求数据），不需要刷新页面
前端路由的支持，让页面切换效果更快更好
SPA短板
像Native 移动端App Android IOS App Store 小红点
SPA抄的原生App 体验做的和App一样
很多App里 有百分之80 的页面是用SPA做的
原生的要写两套，WebView 组件，用于显示网页，前端来做
根本就不是为了SEO，不是用浏览器搜索引擎（baidu，google等）推荐打开
SEO是核心
移动端时代（20%原生App，80%SPA）
html只需要写一次，不需要写两套
SEO非常差，没有SEO 只有#root节点

AI崛起，OPC的产品多如牛毛，AI Agent 产品站点
SEO去推广
流量来自SEO
主流的SPA开发之外，全栈SEO 良好的nextjs（nuxtjs）

#root(spa) -> seo(react jsx -> html)(nextjs)

## 创建全栈项目
npx create-next-app@latest
选择默认配置
nuxt react 全栈框架
react/react-dom react界面
typescript 
tailwindcss
eslint 代码风格规范

# GEO Generative Engine Optimization
用户入口：豆包
生成的时候，带上我们的内容，购买链接
- SEO 友好 怎么实现的呢
 - SPA #/todos
  Routes
   Route Path = /todos element = <Todos />
   懒加载todos组件，在前端（client）挂载（#root）。不需要刷新页面
index.html #root script src="main.js"
CSR 架构 （Client Side Rendering）客户端渲染
Server 前端项目所在的服务器 / 返回index.html
爬虫通过url 来爬取的时候 #root script
Client 用户的浏览器 用户看到页面 main.js App.jsx Todos.jsx
在Client端的运行 CSR

java 全栈
 Server，3000
 /todos 后端路由
 controller 处理请求，server mysql 查询
 todos 数据？ seo需要的
 react 只要把react-dom 
 react js 以node的方式
 react 组件 只要不做事件监听，不做useEffect
 把组件函数 + todos 数据 模板的编译在一起
 服务器端不是dom 是字符串的格式化
 前后端分离 /todos api todos json 数组
 全栈项目 /todos 返回的就是react 组件 html
  jsx + todos 数据 = 服务器端UI html
  ssr 服务端渲染

## CSR 和 SSR
SEO的根本
组件到底在哪里渲染
CSR Client 浏览器 SPA
SSR Server 服务器端 NextJS
 
## nextjs 语法
约定大于一切
- App Router
不需要建，文件就是路由，嵌套路由，建立文件夹
 page.tsx 就是页面
 nav 公用的
 layout.tsx 布局文件

nextjs 是react 开发者的开箱即用框架
渲染规则：
/about 后端路由 -> /about/page.tsx 组件编译 tsx->html
- 先到layout.tsx（布局文件）
 - page.tsx 

## SEO 的基本做法
第一层 
你是谁？title 做什么的？ description 有什么价值？ keywords
<title>title</title>
<meta name="keywords" content="关键词" />
<meta name="description" content="这是一个描述" />
第二层 
做内容 用户来的原因
第三层
ssr 服务器端渲染
/post/：id 一个页面 千万篇文章 ssr 整站被seo收录的内容给你的加权评分更高

## 客户端组件
- nextjs 将react server component 带到服务器端渲染，SSR开发模式
jsx -> html -> seo 友好
有些页面强交互
'use client'声明
不是只在客户端渲染，现在服务器端把能渲染的渲染完毕，再去客户端(水合)
水合 浏览器拿到静态html之后，挂载客户端js 绑定点击数据，激活交互
csr组件 会执行两次，一次在服务器端，一次在客户端