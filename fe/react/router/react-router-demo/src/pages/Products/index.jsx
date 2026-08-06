import {
  Outlet // 二级路由出口
} from 'react-router-dom'

const Products = () => {
  return (
    <>
      <h1>商品列表</h1>
      <Outlet />
    </>
  )
}

export default Products