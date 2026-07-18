const queue = []//空队列
queue.push('吴')
queue.push('咸')
queue.push('鸡')
while (queue.length) {
  const top = queue[0]
  console.log(`取出来的是${top}`)
  queue.shift()

}
console.log(queue)