// 返回jsx的函数就是组件
// 函数可以接受传参,复用组件的时候,进度,文件,大小不一样
// 这些是组件的属性,是提供html属性的方式传过来的 props
const Progress = ({ text, percentage, total }) => {
  console.log(text, percentage, total)
  percentage ??= 0
  return (
    <div>
      <p>{text}</p>
      <p>{percentage}%</p>
      <p>{total}</p>
    </div>
  )
}

export default Progress