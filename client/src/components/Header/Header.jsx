import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <div className="header-logo">E-Shop</div>
      <div className="header-searchbox">
        <input type="text" id="header-searchbox-input" placeholder="Search product ..." />
      </div>
      <nav className="header-navigate">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
  );
};

export default Header;
