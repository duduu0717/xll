// a 标签点击后会跳转，一般不直接用a标签
// react-router-dom 提供的 Link 组件，点击后不会刷新页面
// 适合SPA 路由跳转的组件功能
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/user/123">小家</Link></li>
        <li><Link to="/products">商品列表</Link></li>
        <li><Link to="/products/123">商品详情</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation