import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { regions } from '../data/regions';
import { regionProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const CategoryRegionDetail: React.FC = () => {
  const { categoryName, regionName } = useParams<{ categoryName: string; regionName: string }>();
  
  const category = categories.find(c => c.name === categoryName);
  const region = regions.find(r => r.name === regionName);
  
  // Filter products by both category and region
  const products = regionProducts[regionName || '']?.filter(
    product => product.category.toLowerCase() === categoryName
  ) || [];
  
  if (!category || !region) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-medium text-gray-900">Category or region not found</h1>
        <Link to="/categories" className="mt-6 inline-block text-amber-600 hover:text-amber-700">
          ← Back to all categories
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center mb-2">
                <Link to={`/category/${category.name}`} className="text-amber-600 hover:text-amber-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <nav className="flex">
                  <Link to="/categories" className="text-gray-500 hover:text-amber-600">Categories</Link>
                  <span className="mx-2 text-gray-400">/</span>
                  <Link to={`/category/${category.name}`} className="text-gray-500 hover:text-amber-600">{category.displayName}</Link>
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-900">{region.displayName}</span>
                </nav>
              </div>
              <h1 className="text-3xl font-serif font-medium text-gray-900">
                {category.displayName} from {region.displayName}
              </h1>
            </div>
          </div>
        </div>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 mb-4">No products available in this category for this region.</p>
            <Link 
              to={`/category/${category.name}`}
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              View all regions for {category.displayName}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryRegionDetail;