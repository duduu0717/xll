// fs FileSystem 是文件系统模块，用于操作文件和目录
import fs from 'fs';// 没加/promise
import { json } from 'stream/consumers';
// fs是I/O操作，可异步可同步 readFileSync是同步阻塞操作
// 简单粗暴，性能差一点
// JS单线程，但是充斥着异步，高性能解决方案
// node 和前端环境不一样，可异步（node的优势）可同步
// node异步无阻塞 no block
// node 省很多的服务器资源
// node c++ 写出来的（fs，path,暴露给js代码） 封装了v8引擎，性能高（解析js）
const syncData = fs.readFileSync('./test.txt', 'utf-8');
console.log(syncData);
// 异步 跳过执行后面的，将回调函数放入事件循环 event loop
// 流程控制

// es6之前的老办法 回调函数
// 回调函数处理异步有缺陷，es6 之后的 Promise 解决了回调地狱问题
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
// node 第一个参数是err错误对象
//   if (!err) {
//     console.log(data)
//   } else {
//     console.log(err)
//   }
// })
// console.log('不阻塞')

// 先读取file1.txt，再读取file2.txt，最后读取file3.txt
// 回调地狱
// js 异步业务，流程控制越来越复杂，callback不怎么使用
fs.readFile('./file1.txt', 'utf-8', (err, data) => {
  if (!err) {
    console.log('file1.txt', data)
  } else {
    console.log(err)
  }
  // 读取file2.txt
  fs.readFile('./file2.txt', 'utf-8', (err, data) => {
    if (!err) {
      console.log('file2.txt', data)
    } else {
      console.log(err)
    }

    // 读取file3.txt
    fs.readFile('./file3.txt', 'utf-8', (err, data) => {
      if (!err) {
        console.log('file3.txt', data)
      } else {
        console.log(err)
      }
    })
  })

})
