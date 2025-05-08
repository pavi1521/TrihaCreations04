import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { craftTechniques } from '../data/craftTechniques';
import { regionProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const CraftTechniqueDetail: React.FC = () => {
  const { techniqueName } = useParams<{ techniqueName: string }>();
  
  const technique = craftTechniques.find(t => t.name === techniqueName);
  
  // Find products that use this technique
  const relatedProducts = Object.values(regionProducts)
    .flat()
    .filter(product => product.technique === technique?.displayName)
    .slice(0, 4);
  
  if (!technique) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-medium text-gray-900">Technique not found</h1>
        <Link to="/craft-techniques" className="mt-6 inline-block text-amber-600 hover:text-amber-700">
          ← Back to all techniques
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={technique.image} 
          alt={technique.displayName} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/craft-techniques" className="text-white hover:text-amber-200 flex items-center mb-4 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to all techniques
            </Link>
            <h1 className="text-4xl font-serif font-medium text-white">{technique.displayName}</h1>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">About this Technique</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {technique.description}
              </p>
              
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Cultural Significance</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {technique.culturalSignificance}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Regions where practiced</h3>
                <div className="flex flex-wrap gap-2">
                  {technique.regions.map((region, index) => {
                    let displayName = '';
                    
                    switch (region) {
                      case 'tamilnadu': displayName = 'Tamil Nadu'; break;
                      case 'rajasthan': displayName = 'Rajasthan'; break;
                      case 'kerala': displayName = 'Kerala'; break;
                      case 'gujarat': displayName = 'Gujarat'; break;
                      case 'odisha': displayName = 'Odisha'; break;
                      case 'andhrapradesh': displayName = 'Andhra Pradesh'; break;
                      case 'northeast': displayName = 'Northeast India'; break;
                      default: displayName = region;
                    }
                    
                    return (
                      <Link 
                        key={index}
                        to={`/region/${region}`}
                        className="inline-block bg-amber-100 text-amber-800 hover:bg-amber-200 px-3 py-1 rounded-full text-sm transition-colors"
                      >
                        {displayName}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4 h-96">
              {technique.videoUrl ? (
                <div className="relative h-full">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src={technique.videoUrl}
                    title={`${technique.displayName} Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <img 
                    src={technique.image}
                    alt={technique.displayName}
                    className="max-h-full max-w-full rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          <>
            <h2 className="text-2xl font-serif font-medium text-gray-900 mb-8">Products using {technique.displayName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CraftTechniqueDetail;