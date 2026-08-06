import {
  useRef,
  useEffect,
  useState
} from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)
//   // ref 对象引用 null 初始的时候
//   // 未来它会引用的
//   console.log('------------')
//   const inputRef = useRef(null)

//   useEffect(() => {
//     console.log(inputRef.current)
//     inputRef.current.focus()
//   }, [])

//   return (
//     <>
//       {/* 把用户当小白，职责就是打造良好的用户体验，
//       挂载后直接focus input，不用点一下 */}
//       {/* autoFocus属性 */}
//       {/* react如何持有一个dom节点对象 */}

//       <input type="text"
//         placeholder="请输入用户名"
//         ref={inputRef} />

//       {count}
//       <button onClick={() => setCount(count + 1)}>增加</button>
//     </>
//   )
// }

const App = () => {
  const numRef = useRef(0);//引用一个值
  const [, forceRender] = useState(0);//响应式
  console.log(numRef.current)
  return (
    <>
      <div onClick={() => { numRef.current += 1; forceRender() }}>{numRef.current}</div>
    </>
  )
}
export default App