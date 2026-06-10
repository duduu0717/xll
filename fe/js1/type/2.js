let a //声明但是未赋值
console.log(a) // undefined

let obj = {}//不存在的属性
console.log(obj.name) // undefined

function noReturn() {
}
noReturn()
// undefined
// 无返回值的函数，默认返回 undefined

let arr = [1, 2, 3]
console.log(arr[5]) // undefined