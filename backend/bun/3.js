function sleep(t) {
  //es6 提供的解决异步的api 许下诺言
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t);
  });
}

// 如何封装一个sleep函数？2000？
async function main() {
  console.log('--start--');
  // await 后面要接受一个promise
  await sleep(2000)//将异步任务同步化
  console.log('--end--');
}
main();