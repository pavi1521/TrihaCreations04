import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { regions } from '../data/regions';
import { craftTechniques } from '../data/craftTechniques';
import { categories } from '../data/categories';
import { regionProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  // Get featured products (one from each region)
  const featuredProducts = Object.values(regionProducts)
    .map(products => products[0])
    .slice(0, 4);
  
  return (
    <div>
      <HeroSection />
      
      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium text-gray-900">Explore by Category</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Discover the diverse world of Indian crafts organized by category</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map(category => (
              <Link 
                key={category.id}
                to={`/category/${category.name}`}
                className="group relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={category.image}
                  alt={category.displayName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif mb-2">{category.displayName}</h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{category.description.substring(0, 80)}...</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/categories"
              className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium"
            >
              View all categories
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium text-gray-900">Featured Crafts</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Handpicked selections from our skilled artisans across India</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/crafts-by-region"
              className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium"
            >
              Explore all regions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Craft Techniques */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium text-gray-900">Traditional Craft Techniques</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Discover the ancient methods and cultural significance behind India's most cherished crafts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {craftTechniques.slice(0, 3).map(technique => (
              <Link 
                key={technique.id}
                to={`/craft-technique/${technique.name}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={technique.image} 
                    alt={technique.displayName} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-serif text-white">{technique.displayName}</h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/craft-techniques"
              className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium"
            >
              Explore all techniques
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Workshops Promotion */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-serif font-medium">Experience the Art of Crafting</h2>
              <p className="mt-4 text-lg text-gray-300">Join our traditional craft workshops led by master artisans and learn ancient techniques firsthand</p>
              <Link 
                to="/workshops"
                className="mt-6 inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300"
              >
                View Workshops
              </Link>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.stockcake.com/public/3/a/3/3a3ddf58-683e-4d6c-adc6-02c95c20eb33_large/sunlit-craft-workshop-stockcake.jpg" 
                  alt="Craft Workshop" 
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;