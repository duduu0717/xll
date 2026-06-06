# 如何用栈模拟队列
线性
 栈，队列，链表
非线性
 树
- 栈 stack
 FILO
队列 Queue FIFO 先进先出
push()将一个元素放入队列的尾部
pop()从队列首部移除一个元素
peek()返回队列首部的元素
empty()判断队列是否为空

## js的面向对象
- 不走寻常路
 不需要class 也可以也可以完成面向对象
 函数也是对象(一等对象)
 普通函数来用
  this指向全局
 new + 构造函数
   this指向新创建的对象
   new + 构造函数运行时,this指向不断地完成
 原型式的面向对象
   js没有类，只有对象 MyQueue就是对象
   Myqueue.prototype 也是一个对象

## new的过程
-创建一个空对象,this指向新创建的对象
-构造函数执行,this上添加这些属性,实例也就有了属性
-构造函数有一个prototype属性,指向原型对象
 原型对象上拥有的方法,实例也会拥有


## js 设计哲学
- 一切皆对象没有类
- Object 是顶层对象
 按照原型式的面向对象来设计的
 Object() 函数对象
 Object.prototype 是原型对象
 let obj = new Object()
 Function Array 函数对象
 下一站Object 原型链

-任何的实例对象都有一个__proto__私有属性,指向原型对象
-沿着__proto__一直查找,沿着原型链查找
 终点是null
任何函数都有prototype属性,指向原型对象
 负责给实例们提供共享方法
-原型对象上有constructor属性,指向构造函数
-实例先在自身查找属性,沿着原型链查找属性或方法
-任何对象要不原型直接是Object.prototype,要不终点前object.prototype