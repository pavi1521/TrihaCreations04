import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import IndiaMap from '../components/IndiaMap';

const CategoryDetail: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  const category = categories.find(c => c.name === categoryName);
  
  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-medium text-gray-900">Category not found</h1>
        <Link to="/categories" className="mt-6 inline-block text-amber-600 hover:text-amber-700">
          ← Back to all categories
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={category.image} 
          alt={category.displayName} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/categories" className="text-white hover:text-amber-200 flex items-center mb-4 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to all categories
            </Link>
            <h1 className="text-4xl font-serif font-medium text-white">{category.displayName}</h1>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            {category.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Regional Map</h2>
              <p className="text-gray-600 mb-6">
                Select a region on the map to view {category.displayName.toLowerCase()} from that area.
              </p>
              <IndiaMap highlightedRegions={category.regions} categoryName={category.name} />
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-100 mb-8">
              <h2 className="text-xl font-medium text-amber-800 mb-4">About {category.displayName} in India</h2>
              
              {category.name === 'textiles' && (
                <div className="text-gray-700 space-y-4">
                  <p>
                    Indian textiles are renowned worldwide for their extraordinary diversity, craftsmanship, and cultural significance. From the intricate silk weaves of Kanchipuram and Banarasi to the vibrant block prints of Rajasthan and Gujarat, each region has developed unique techniques reflecting local traditions.
                  </p>
                  <p>
                    These textiles aren't merely functional items but cultural artifacts that tell stories of community identity, religious beliefs, and artistic evolution across centuries. Handwoven and hand-printed textiles remain at the heart of India's craft tradition, sustaining communities of skilled artisans who maintain ancient techniques.
                  </p>
                </div>
              )}
              
              {category.name === 'pottery' && (
                <div className="text-gray-700 space-y-4">
                  <p>
                    Indian pottery and sculptural arts date back to the ancient Indus Valley Civilization, evolving over thousands of years into diverse regional styles. From the blue pottery of Jaipur to the terracotta of Molela and bronze casting of Swamimalai, each tradition showcases remarkable technical skill and artistic vision.
                  </p>
                  <p>
                    These three-dimensional art forms serve both utilitarian and decorative purposes, with many pieces holding deep religious or cultural significance. The skills required to create these works are passed down through family lineages, with each generation adding subtle innovations while preserving traditional techniques.
                  </p>
                </div>
              )}
              
              {category.name === 'bags' && (
                <div className="text-gray-700 space-y-4">
                  <p>
                    Traditional Indian bags and accessories blend functionality with artistic expression, showcasing regional craft techniques like embroidery, beadwork, and weaving. From Kutch embroidered bags to Manipuri handwoven purses, each region has developed distinctive styles that reflect local aesthetics and available materials.
                  </p>
                  <p>
                    These accessories were traditionally created for daily use or special occasions, with designs and decorative elements often carrying symbolic meaning. Today, artisans are innovating within these traditions, creating contemporary pieces that appeal to modern consumers while preserving traditional craft skills.
                  </p>
                </div>
              )}
              
              {category.name === 'wall-hangings' && (
                <div className="text-gray-700 space-y-4">
                  <p>
                    Indian wall art encompasses a wide range of traditions from painted scrolls like Pattachitra and Kalamkari to metal reliefs and textile hangings. These decorative pieces often serve as visual storytelling media, depicting mythology, folklore, and cultural narratives through various materials and techniques.
                  </p>
                  <p>
                    Wall hangings have long been an important element in Indian homes and sacred spaces, bringing beauty, meaning, and sometimes protective symbolism to interior environments. Many traditional forms of wall art were originally created for religious purposes but are now appreciated for their artistic merit and cultural significance.
                  </p>
                </div>
              )}
            </div>
            
            <h3 className="text-xl font-medium text-gray-900 mb-4">Select a Region</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.regions.map((region) => {
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
                    key={region}
                    to={`/category/${category.name}/${region}`}
                    className="bg-white hover:bg-amber-50 border border-gray-200 hover:border-amber-200 rounded-lg p-4 text-center transition-colors duration-300"
                  >
                    <span className="text-gray-900 font-medium">{displayName}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;