import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { regions } from '../data/regions';
import { regionProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const RegionDetail: React.FC = () => {
  const { regionName } = useParams<{ regionName: string }>();
  
  const region = regions.find(r => r.name === regionName);
  const products = regionProducts[regionName || ''] || [];
  
  if (!region) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-medium text-gray-900">Region not found</h1>
        <Link to="/crafts-by-region" className="mt-6 inline-block text-amber-600 hover:text-amber-700">
          ← Back to all regions
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={region.image} 
          alt={region.displayName} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/crafts-by-region" className="text-white hover:text-amber-200 flex items-center mb-4 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to all regions
            </Link>
            <h1 className="text-4xl font-serif font-medium text-white">{region.displayName}</h1>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            {region.description}
          </p>
          
          <div className="mt-6">
            <h2 className="text-xl font-medium text-gray-900 mb-3">Traditional Craft Styles</h2>
            <div className="flex flex-wrap gap-2">
              {region.craftStyles.map((style, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                >
                  {style}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-serif font-medium text-gray-900 mb-8">Products from {region.displayName}</h2>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-gray-100 rounded-lg">
            <p className="text-gray-600">No products available for this region yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegionDetail;