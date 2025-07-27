import React from 'react';
import './style.css';
import Button from '../../atoms/Button';

type Product = {
  id: string | number;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
};

type ProductCardProps = {
  product: Product;
  onAddToCart: (id: string | number) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { id, name, price, imageUrl, description } = product;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-card__image" />
      <div className="product-card__content">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">${price.toFixed(2)}</p>
        {description && <p className="product-card__description">{description}</p>}
        <Button onClick={() => onAddToCart(id)} variant="primary">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
