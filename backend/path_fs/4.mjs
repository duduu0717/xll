import fs from 'fs/promises';
// es6  es8 
// then的链式调用 爬楼梯，相对于回调地狱，更清晰，但是也很麻烦
// es8 引入了async/await 语法糖，更方便x'zaxza
fs.readFile('./file1.txt', 'utf-8')
  .then(data => {  // callback 优雅 then 语义 好理解
    console.log('file1', data);
    // promise 实例 
    // then 返回的promise, 继续then 链式调用
    return fs.readFile('./file2.txt', 'utf-8');
  })
  .then(data => {
    console.log('file2', data);
    return fs.readFile('./file3.txt', 'utf-8');
  })
  .then(data => {
    console.log('file3', data);
  })


// 解决回调地狱