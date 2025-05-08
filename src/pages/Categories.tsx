import React from 'react';
import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard';

const Categories: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-medium text-gray-900">Traditional Craft Categories</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of handcrafted items organized by category
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        
        <div className="mt-16 bg-amber-50 rounded-lg p-8 border border-amber-100">
          <h2 className="text-2xl font-serif font-medium text-amber-800 mb-6 text-center">The Art of Indian Craftsmanship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Indian handicrafts represent one of the richest and most diverse cultural traditions in the world. Each craft reflects the unique heritage, geography, and cultural history of its region of origin.
              </p>
              <p className="text-gray-700">
                From intricate textiles woven with gold thread to delicate pottery painted by hand, these crafts embody centuries of skill and artistry passed down through generations. Each piece tells a story and preserves techniques that might otherwise be lost to time.
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                At Triha Luxury Craft, we work directly with artisans across India to bring these traditional crafts to a global audience while ensuring fair compensation and recognition for the craftspeople.
              </p>
              <p className="text-gray-700">
                By categorizing these diverse crafts, we hope to help you discover the perfect handcrafted items that speak to your aesthetic preferences while celebrating India's rich artistic heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;