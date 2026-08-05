# 浏览历史
## 路由 Route
- navigator 对象
- 浏览器 url
 - 输入url之后，浏览器就是访问的代理
 - 通过http协议 向server发起请求
 - 处于server伺服状态 给予浏览器响应 text/html
 - 浏览器拿响应数据，并且渲染页面
 - 向浏览历史插入一条记录

## 链接
万物互联靠的就是链接
<a href="https://www.baidu.com"></a>
除了跳转，还有什么？
传统的，每次都得重新渲染整个页面，速度慢，没有必要重新渲染整个页面
PC时代 -> 移动时代
在移动时代，App的体验是不一样的
单页应用 Single Page Application
SPA 

传统的多页面 每次都需要重新渲染 在移动端时代就没有必要了，页面可能会白一下（如果网速慢一点）

怎么样把丰富的内容在一个网页里显示
DOM 编程

访问体验上提升 
 根据相应的url 
 /index.html content DOM 放到#container
 /about.html content DOM 放到#container

## 单页也有
- 点击链接跳转
 - url和资源是一一对应关系
  不只是dom编程
  怎么改变url
  hash 方式可以做到
  改变hash url就改变了，就不会重新发送请求，不会跳转

## Hash 路由
http(s)://www.baidu.com/u/123?a=1&b=2#page1
protocol    host      path  queryString  hash
url中，hash部分 #开始
- url 一定要变，不同的url对应不同的资源
- 监听变化 根据hash部分 
优点是url改变（局部）但是页面不会重新刷新

锚点链接
hash作为url一部分，标记传统的PC长页面某一部分，坐电梯直达
做前端路由 #/ #/about 不会重新渲染，也可以满足url和资源一一对应，前端路由
当hash部分改变的时候，会有hashchange事件，dom或组件替换