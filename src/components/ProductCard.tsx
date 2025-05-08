import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-[1.02] flex flex-col h-full">
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-medium text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">By {product.artisan}</p>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">{product.description.substring(0, 80)}...</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-amber-700">₹{product.price.toLocaleString()}</span>
          <button
            onClick={handleAddToCart}
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors duration-300 text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;