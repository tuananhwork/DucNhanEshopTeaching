import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <div className="header-logo">E-Shop</div>
      <div className="header-searchbox">
        <input type="text" id="header-searchbox-input" placeholder="Search product ..." />
      </div>
      <nav className="header-navigate">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
