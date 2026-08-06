import {
  // 代码层面重定向
  // 提供了 navigate 组件 配置的时候
  useNavigate,
  useLocation,
} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/'
  console.log(from)

  const handleSubmit = (e) => {
    e.preventDefault()// 阻止浏览器默认提交
    const formData = new FormData(e.currentTarget)
    const username = formData.get('username')
    const password = formData.get('password')
    if (!username || !password) {
      alert('请输入用户名和密码')
      return
    }
    if (username === 'admin' && password === '123456') {
      alert('登录成功')
      localStorage.setItem('isLogin', 'true')
      // 浏览器访问会留下历史记录，replace 会覆盖历史记录
      // 将新页面的历史记录替换掉当前页面的历史记录
      navigate(from, { replace: true })
    } else {
      alert('用户名或密码错误')
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>登录</h1>
      <input
        name="username"
        placeholder="请输入用户名"
        // html5 表单增强特性
        required
      />
      <input
        name="password"
        placeholder="请输入密码"
        // html5 表单增强特性
        required
      />
      <button type="submit">登录</button>
    </form>
  )
}

export default Login