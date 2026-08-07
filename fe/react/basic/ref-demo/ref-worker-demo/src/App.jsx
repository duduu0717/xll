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

  console.log('main thread ')

  const workerRef = useRef(null)// 可持久化的可变对象
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // 开启一个worker线程 开销比较大
    // ref 引用了worker线程
    workerRef.current = new Worker(
      new URL('./worker.js', import.meta.url),
    )
    // 监听worker线程返回的消息
    workerRef.current.onmessage = (e) => {
      console.log(e)
      const { result } = e.data
      setResult(result)
      setLoading(false)
    }
    // 组件卸载时，销毁worker线程
    return () => {
      workerRef.current.terminate()
      workerRef.current = null// 手动回收
    }
  }, [])

  const startHeavyCalc = () => {
    setLoading(true)
    // 消息机制
    // 给worker线程发送一条工作指令，带上参数
    workerRef.current.postMessage({
      num: 88,
    })
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>UseRefer + WebWorker 耗时运算</h2>
      <p>开启 web worker 线程 执行五亿次运算</p>
      <button onClick={startHeavyCalc}
        disabled={loading}>
        {loading ? "正在后台计算" : "启动复杂计算任务"}</button>
      {result && <h3>计算结果：{result}</h3>}
    </div>
  )
}

export default App