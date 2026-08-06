import {
  Navigate,
  useLocation
} from 'react-router-dom'

const ProtectRoute = ({ children }) => {
  console.log(children, '-------')
  const location = useLocation()
  // 拦截请求 鉴权
  // html5 本地存储 域名的沙盒环境
  const isLogin = localStorage.getItem('isLogin') === 'true'

  if (!isLogin) {
    // 如果没有登录，跳转到登录页面
    // 路由 设置state状态对象
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return (
    <>
      {children}
    </>
  )
}

export default ProtectRoute