import {
  lazy,
  Suspense
} from 'react'

import {
  // location.hash
  HashRouter as Router, // 前端路由 #/ hashchange
  Routes,
  Route
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
              {/* 404 Not Found */}
              {/* *贪婪匹配所有，最后404兜底 */}
              {/* 多级路由，嵌套路由 */}
              <Route path="/products" element={<Products />}>
                {/* 二级路由 */}
                <Route path=":productId" element={<ProductDetail />} />
                <Route path="new" element={<NewProduct />} />
              </Route>
              <Route path="*" element={<NotFound />} />

            </Routes>
          </Suspense>
        </div>
      </Router >
    </>
  )
}

export default App