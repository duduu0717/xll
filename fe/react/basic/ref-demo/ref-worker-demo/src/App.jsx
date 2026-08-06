import {
  useRef,
  useState,
  useEffect
} from 'react'


function App() {
  // 主线程 单线程 web worker 
  // 离开主线程，开辟新的线程 
  // console.time('主线程')
  // for (let i = 0; i < 1000000; i++) {
  //   console.log(i)
  // }
  // console.timeEnd('主线程')
  // 会阻塞页面

  // let worker = new Worker('/worker.js')
  // 为组件的渲染 挂载让路
  const workerRef = useRef(null)// 可持久化的可变对象
  useEffect(() => {
    // 开启一个worker线程 开销比较大
    // ref 引用了worker线程
    workerRef.current = new Worker(
      new URL('./worker.js', import.meta.url),
    )
  }, [])

  return (
    <>
    </>
  )
}

export default App