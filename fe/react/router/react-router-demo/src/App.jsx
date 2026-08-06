import {
  lazy,
  Suspense
} from 'react'

import {
  // location.hash
  // 前端路由有两种形式，hash路由和browser路由
  BrowserRouter as Router, // 前端路由 #/ hashchange
  Routes,// 路由配置组件数组
  Route,// 路由组件
  Navigate
} from 'react-router-dom'
import Navigation from './components/Navigation'
// spa 动态的切换多个页面
// 下载执行，影响首页的加载速度
// 只需要加载当前页面就好，路由懒加载
// import Home from './pages/Home'
// import About from './pages/About'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const UserProfile = lazy(() => import('./pages/UserProfile'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Products = lazy(() => import('./pages/Products'))
const ProductDetail = lazy(() => import('./pages/Products/detail'))
const NewProduct = lazy(() => import('./pages/Products/New'))
const Login = lazy(() => import('./pages/Login'))
const Pay = lazy(() => import('./pages/Pay'))
const ProtectRoute = lazy(() => import('./ProtectRoute'))

const App = () => {
  return (
    <>
      {/* 前端路由接管一切 */}
      <Router>
        {/* 导航栏组件 */}
        <Navigation />
        {/* 动态页面切换部分 */}
        <div id="container">
          {/* 即是配置，也是出现的地方 */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* 有且仅有一个route显示 当前location.hash
            对应页面级别组件 */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:id" element={<UserProfile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/pay" element={
                // 门禁保安
                // pay 要进去的页面
                // children 用来定制化组件
                <ProtectRoute>
                  {/* children */}
                  <Pay />
                </ProtectRoute>
              } />

              {/* 多级路由，嵌套路由 */}
              <Route path="/products" element={<Products />}>
                {/* 二级路由 */}
                <Route path=":productId" element={<ProductDetail />} />
                <Route path="new" element={<NewProduct />} />
              </Route>
              {/* 有个活动/game /result 活动结束
              /home 首页 重定向到/ 
              user/：id 是否登录？ 未登录重定向到/login 登陆成功后重定向到/user/：id */}
              <Route path="/old-path" element={<Navigate to="/new-path" replace />} />

              {/* 404 Not Found */}
              {/* *贪婪匹配所有，最后404兜底 */}
              <Route path="*" element={<NotFound />} />

            </Routes>
          </Suspense>
        </div>
      </Router >
    </>
  )
}

export default App