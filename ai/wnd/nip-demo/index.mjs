import {
  getCompletion

} from './completion.mjs'

// function sleep(ms) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve()
//     }, ms)
//   })
// }

// 箭头函数

const sleep = ms => new Promise(r => setTimeout(r, ms))

const main = async () => {
  console.log('----------')
  await sleep(2000)
  console.log('----------')
}
main()