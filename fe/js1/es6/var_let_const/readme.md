# es6
js 借鉴了 java
是弱类型动态语言，早期就是用来给网页添加交互（幻灯片），和DOM编程
js 是一个以Escript为语言标准的语言
es6是 js 的新版本，早期是es5
目标是向企业级大型项目开发发展
js 是一个KPI项目 一周就开发出来

## 声明变量并赋值
-let 可以代替 var

## 作用域 scope
### 作用域的嵌套
- 全局作用域 global scope
- 函数局部作用域 local scope
 -局部作用域
-块级作用域 block scope { }
变量属于作用域
变量声明不需要，js是弱类型，类型由值决定
-查找变量的规则
  1.先在当前作用域查找，如果找到了，直接拿到变量的值
  2.如果没有找到，向外层作用域查找，冒泡查找
  3.当在全局作用域都没有找到，那就报错
-函数/代码块运行后，垃圾回收机制会回收作用域中的变量
 -内存角度理解变量的声明
 在内存中申请了一块区域
 销毁函数，回收内存
 变量的生命周期

-Assignment to constant variable
-ReferenceError ：xxx is not defined


## var let const
早期的js 使用var 声明变量，没有常量，用代码规范约束
var PI = 3.1415926;
var CHATMMODE = ‘deepseek-chat’
var不支持块级作用域
js 设计的时候比较简约，浏览器的副产品
js 没有经过深思熟虑，有一些瑕疵
let 负责变量，const 常量
支持块级作用域
const constant variable
不可变变量 
变量的类型由值决定


## for+setTimeout
var 不支持块级作用域 只有一个i
同步的i=10，setTimeout打印10
let 支持块级作用域，嵌套着n个局部作用域

const 声明时就要赋值
let声明和赋值可以分开进行 不赋值时，值是undefined
const variable
简单数据类型不可以改变值
复杂数据类型值可以改变，类型不可以改变
简单数据类型（数字、字符串、布尔等）
const 声明 → 值完全不能改！
复杂数据类型（对象、数组）
const 声明 → 里面的值可以改，但是类型 / 本身不能改！

## 变量的提升 hoisting
-代码先有编译阶段
 准备执行上下文
 全局执行上下文
-再有执行阶段
-不好的东西
 和代码顺序，直觉不符合
 避免变量提升
 let 不支持变量提升

var（一句话口诀：声明飞上天，赋值留在原地等执行）
声明会提升
未赋值前是 undefined
不会报错
let
声明不提升
用在声明前 = 直接报错
必须先声明，再使用