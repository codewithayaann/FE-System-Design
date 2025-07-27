import React from 'react';
import './style.css';
import Header from '../../organism/Header';
import Footer from '../../organism/Footer';

type ProductListingTemplateProps = {
  children: React.ReactNode;
};

const ProductListingTemplate: React.FC<ProductListingTemplateProps> = ({ children }) => {
  return (
    <div className="product-listing-template">
      <Header />
      <main className="product-listing-template__main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ProductListingTemplate;
