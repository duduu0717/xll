// 要求：去掉-，将w改成大写W
const str = 'hello-world'
// () 意思为分组
const ref = /-(\w)/
console.log(str.match(ref))
// [ '-w', 'w', index: 5, input: 'hello-world', groups: undefined ]
const res = str.replace(reg, (_, c) => {
  console.log(c)
  return c.toUpperCase()
})
console.log(res)

// const ref1 = /-(\w)(\w)/
// console.log(str.match(ref1))
// [ '-wo', 'w', 'o', index: 5, input: 'hello-world', groups: undefined ]