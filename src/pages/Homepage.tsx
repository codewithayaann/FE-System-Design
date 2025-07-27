import React, { useState, useEffect } from 'react';
import ProductListingTemplate from '../templates/ProductListingTemplate';
import ProductCard from '../organism/ProductCard';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
};

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // Dummy data to simulate an API call
    const placeholderImage = 'https://placehold.co/400x400';

    const dummyProducts: Product[] = [
    {
        id: 1,
        name: 'Vintage Camera',
        price: 299.99,
        imageUrl: placeholderImage,
        description: 'A classic film camera.',
    },
    {
        id: 2,
        name: 'Wireless Headphones',
        price: 149.5,
        imageUrl: placeholderImage,
        description: 'Immersive sound experience.',
    },
    {
        id: 3,
        name: 'Smartwatch Pro',
        price: 199.0,
        imageUrl: placeholderImage,
        description: 'Track your fitness and more.',
    },
    ];


      setProducts(dummyProducts);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId: number | string) => {
    console.log(`Product ${productId} added to cart!`);
      // Add to cart logic can go here
    return 1;
  };

  return (
    <ProductListingTemplate>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </ProductListingTemplate>
  );
};

export default HomePage;
