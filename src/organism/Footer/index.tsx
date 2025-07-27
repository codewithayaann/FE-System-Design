import React from 'react';
import './style.css';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
        <div className="site-footer__links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
