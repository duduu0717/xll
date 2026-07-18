// 常量一开始就要赋值
const item = 1
// let a  undefined
const key = 'abc123'
let points = 50
points = 51
points = '52'
// let 不只是值可以改变，类型也可以改变
let winner = false
winner = '张三'
// 复杂数据类型 对象 const 锁地址，不锁内容
const person = {
  name: '李四',
  age: 18
}
person.age++
console.log(person);
// person = '111'报错
