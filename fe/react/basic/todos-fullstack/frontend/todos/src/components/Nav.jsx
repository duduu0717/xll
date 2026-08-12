import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
      <Link to="/">Home页面</Link>
      <Link to="/todos">Todos页面</Link>
    </nav>
  );
}

export default Nav