// 表示空，或者没有
// null
// primitive 原始 内存空间固定
// 拷贝式赋值
// 原始值：空间固定 → 栈存储
// 对象，数组：空间可变 → 堆存储，栈存地址
let a = null
let b = a//拷贝，复印机
b = 2
console.log(a) // null
console.log(b) // 2


let obj1 = { name: "谢鲁立" }
let obj2 = obj1//引用赋值，拷贝地址，一改全改
obj2.company = "快手"
console.log(obj1, obj2)
// { name: '谢鲁立', company: '快手' } { name: '谢鲁立', company: '快手' }


let obj = {
  name: '吴咸鸡',
  address: null
}
console.log(obj.address) // null
console.log(obj.age) // undefined

let largeObject = {
  data: new Array(100000000).fill("xll")
}
// 手动回收内存
largeObject = null; // 释放内存