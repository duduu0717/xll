import fs from 'fs/promises';
import path from 'path';
import { json } from 'stream/consumers';
import { callbackify } from 'util';
// 立即执行 IIFE
// 异步的，只是语法糖，不是fs.readFile sync
// await 帮我们实现了流程控制，不用手动处理then链式
// 同步 -> js单线程，耗时任务 -> 异步 ->(event loop) -> callback(回调) -> 流程控制业务复杂（回调地狱） 
// -> promise + then (略微复杂) -> async/await 语法糖，更方便，更清晰(异步代码同步化) 加强可读性 本质还是promise，异步中的微任务
(async () => {
  // console.log('111');
  const file1Data = await fs.readFile('./file1.txt', 'utf-8');
  console.log('file1', file1Data);
  const file2Data = await fs.readFile('./file2.txt', 'utf-8');
  console.log('file2', file2Data);
  const file3Data = await fs.readFile('./file3.txt', 'utf-8');
  console.log('file3', file3Data);
})();