import {
  useState,
  useEffect
} from 'react'

const useMouse = () => {
  const [x, setX] = useState(null)
  const [y, setY] = useState(null)

  const handleMouseMove = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      // 函数组件卸载，不会主动回收
      // 定时器 worker 事件需要手动回收
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return { x, y }
}

export default useMouse
