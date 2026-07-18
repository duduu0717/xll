// node的内置模块 join，resolve有什么区别
import path, { join } from 'path';
// join路径拼接,比较简陋，不验证正确性
console.log(path.join('a', 'b', 'c'))
// 根目录，开发目录放在src目录下，assets放静态资源
console.log(path.join(process.cwd(), '/hello', 'world'))

console.log(path.resolve('a', 'b', 'c'))

console.log(path.resolve('/hello', 'world', './a', 'b'))

console.log(path.join('/hello', 'world', './a', 'b'))

console.log(path.resolve('/hello', 'world', '../a', 'b'))