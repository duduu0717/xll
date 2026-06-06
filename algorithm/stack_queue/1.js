// 函数表达式
// 定义了一个类 MyQueue
// 早期js没有类
// js是基于原型的面向对象语言
// 不需要class，也可以完成面向对象
// 函数 + prototype 更优秀
// 什么是类 抽象 一套属性 + 方法的模板
// js开发比较快
const MyQueue = function () {
  // 构造函数，有属性
  console.log('实例化', this);
  // this.x = 1
  this.stack1 = [];
  this.stack2 = [];
}
MyQueue.prototype.push = function () {
  console.log('push方法')
}
// new 运算符 this指向实例对象
const queue = new MyQueue();
console.log(queue, queue.push());

