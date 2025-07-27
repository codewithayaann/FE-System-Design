import React from 'react';
import './style.css';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="site-header__container">
        <h1 className="site-header__logo">MyShop</h1>
        <nav className="site-header__nav">
          <a href="/" className="site-header__link">Home</a>
          <a href="/products" className="site-header__link">Products</a>
          <a href="/cart" className="site-header__link">Cart</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
