import {
  useEffect
} from 'react'
import {
  useNavigate // 路由跳转
} from 'react-router-dom'

const NotFound = () => {
  let navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
      // window.location.href = '/'
    }, 3000)
  }, [])

  return (
    <>
      404 Not Found
    </>
  )
}

export default NotFound