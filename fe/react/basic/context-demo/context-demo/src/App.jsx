// import {
//   useState,
//   useEffect
// } from 'react'

// function App() {
//   const [x, setX] = useState(null)
//   const [y, setY] = useState(null)

//   const handleMouseMove = (e) => {
//     setX(e.clientX)
//     setY(e.clientY)
//   }

//   useEffect(() => {
//     document.addEventListener('mousemove', handleMouseMove)
//     return () => {
//       // 函数组件卸载，不会主动回收
//       // 定时器 worker 事件需要手动回收
//       document.removeEventListener('mousemove', handleMouseMove)
//     }
//   }, [])
import useMouse from './hooks/useMouse.js'
function App() {
  const { x, y } = useMouse()

  return (
    <div style={{
      height: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center'
    }}>
      {x && y ? `鼠标坐标：${x}, ${y}` : '请移动鼠标'}
    </div>
  )
}




export default App