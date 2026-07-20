// 现代前端开发框架
// .vue -> tsx 组件化 ts + jsx
// 响应式,数据绑定
// 函数有封装特性,html,css,js,封装成一个组件
import {
  useState,// 体现react 函数式思想,以use开头
  useEffect// 生命周期hook函数,在组件挂载时执行
} from 'react'

// use 使用 ,status 状态
// hook函数
function App() {
  // 数据状态可以驱动页面状态
  // 以前叫做变量或者常量 -> 框架里变成数据(数据绑定 data binding ,data driving,不需要做dom编程)
  // ->数据状态(响应式,修改状态,界面会跟着变)
  // 数据有不同的状态,界面也会有不同的状态
  // null是初始状态,后续会根据用户操作,修改状态 -> loading 加载中 ->ready llm准备好了
  const [status, setStatus] = useState(null)// 响应式数据状态
  const [err, setErr] = useState('错误')// 响应式数据状态
  // 加载信息
  const [loadingMessage, setLoadingMessage] = useState('')// 响应式数据状态
  const [progressItems, setProgressItems] = useState([{
    file: 'model.onnx',
    progress: 0,
    total: 1000
  }])
  // 浏览器导航栏 是否支持WebGPU
  // 现代浏览器的重要特性
  // !取反 navigator.gpu不支持的时候undefined
  // !!再取反,一定可以转成boolean类型
  const IS_WEBGPU_AVALABLE = !!navigator.gpu;
  // 错误对象
  // 组件的生命周期,副作用
  // 组件挂载后,附带做什么,就是副作用
  useEffect(() => {
    console.log('组件挂载完成')
    setStatus('ready')
    // setTimeout(() => {
    // setStatus('go')
    // }, 2000)
  }, [])

  console.log('组件函数执行')

  // js脚本,数据逻辑和交互区域
  // count 数据状态
  // 修改count 要调用setCount 函数
  // const [count, setCount] = useState(0) 响应式 ref

  return (
    // 返回 html jsx 代码 react的 UI 表现格式
    // <div className="flex justify-center">
    // Hello 嘟嘟!{status}
    // <h1 className="text-8xl font-bold underline">你好,嘟嘟</h1>
    // </div>
    // flex-direction 主轴,100vh,margin x水平居中对齐
    // 原子类,组合一下 
    IS_WEBGPU_AVALABLE ? (<div className="flex flex-col h-screen mx-auto items-center justify-center text-gray-800 bg-white">
      <div className="h-full overflow-auto flex justify-center
      items-center flex-col relative">
        {/* 1rem = 4,1单位= 4px */}
        {/* []代表指定样式大小 */}
        <div className="flex flex-col items-center mb-1 max-w-[400px] text-center">
          <h1 className="text-4xl font-bold mb-1"> DeepSeek-R1 WebGPU </h1>
          <h2 className="font-semibold">
            A next generation reasoning model that runs locally in your browser
            with WebGPU acceleration
          </h2>
        </div>
        <div className="flex flex-col items-center px-4">
          <p className="mx-w-[510px] mb-4">
            <br />
            Your are about to load
            <a
              href="https://huggingface.co/onnx-community/DeepSeek-R1-Distill-Qwen-1.5B-ONNX"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline"
            >
              {/* DeepSeek-R1 的 15 亿参数量蒸馏版，用 Qwen 架构，适合本地轻量推理。
                蒸馏Qwen Resoning 推理模型
                HuggingFace 抱抱脸 全球最大开源模型社区
              */}
              DeepSeek-R1-Distill-Qwen-1.5B
            </a>
            , a 1.5B parameter reasoning LLM optimized for in-browser
            inference. Everything runs entirely in your browser with WebGPU acceleration
            {
              // transformers 是huggingfacs推出的js库,用于加载和推理模型
            }
            <a
              href="https://huggingface.co/docs/transformers.js"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              🤗&nbsp;Transformers.js
            </a>{" "}
            {/* Open Neural Network Exchange */}
            and ONNX Runtime Web, meaning no data is sent to a server. Once
            loaded, it can even be used offline. The source code for the demo
            is available on{" "}
          </p>
          {
            // 报错界面状态,响应式的
            err && (
              <div className="text-red-500 text-center mb-2">
                <p className="mb-1">
                  Unable to load model due to the following error:
                </p>
              </div>
            )
          }
        </div>
      </div>
    </div>
    )
      : <div>你的浏览器不支持WebGPU, 请升级浏览器或使用其他浏览器</div>
  )
}
export default App