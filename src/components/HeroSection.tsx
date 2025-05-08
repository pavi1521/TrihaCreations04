import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
      <img 
  src="https://img.freepik.com/free-photo/wrapped-gift-with-empty-tag-beautiful-flower-wooden-table_23-2148102875.jpg?t=st=1746700441~exp=1746704041~hmac=75d2c8e47491a5cc4c4fae82cc7671159ee7b4c92979db8ea9315dcb2e44587d&w=996" 
  alt="Indian handicrafts"
  className="w-full h-full object-cover"
/>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight max-w-3xl">
          Discover the Timeless Artistry of Indian Crafts
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
          Each piece tells a story of cultural heritage, passed down through generations of skilled artisans.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link 
            to="/crafts-by-region"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300"
          >
            Explore by Region
          </Link>
          <Link 
            to="/craft-techniques"
            className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300"
          >
            Learn Craft Techniques
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;