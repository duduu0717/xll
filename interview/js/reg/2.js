const str = '价格是100元,'
const reg = /\d+/
// console.log(reg.test(str))
const result = str.match(reg)
console.log(result)
// ['100', index: 3, input: '价格是100元', groups: undefined]

const str1 = '价格是100元,进价是80元，赚20元'
const reg1 = /\d+/g
const result1 = str1.match(reg1)
console.log(result1)
// 带 g 的 match — 返回所有匹配的字符串，不要 index/input 等细节
// str.match(reg)  ['100', '30'] ← 纯数组，只给匹配内容
