//symbol 唯一的标识符，用函数创建，但是为简单数据类型
//独一无二
console.log(Symbol("xll") === Symbol("xll"))//false
console.log(typeof Symbol("xll"))//Symbol
console.log(Symbol())//Symbol() 表示绝对唯一，可以传一个标签

let obj = {
  [Symbol("xll")]: "谢鲁立",
  prop: "1"
}