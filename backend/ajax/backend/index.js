//node内置的http模块
//早期js，特别是前端没有模块化系统，靠function封装
//node 一定要上模块化方案 commonjs 关键字：require + module.exports
//esm 是升级版 关键字：import + export default
//require node早期的模块化系统 commonjs
const http = require('http')
//伺服状态
http.createServer((req, res) => {
  //用户服务函数
  const todos = [
    {
      id: 1,
      title: '过四六级',
      completed: false
    },
    {
      id: 2,
      title: '玩游戏',
      completed: false
    },
  ]


  //req用户对象
  if (req.url === '/') {
    res.end("hello world")
  }
  if (req.url === '/todos') {
    //二进制文本
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end(JSON.stringify(todos))
  }
}).listen(3000, () => {
  console.log(`server is running on port 3000`)
})

