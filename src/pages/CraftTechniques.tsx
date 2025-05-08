import React from 'react';
import { craftTechniques } from '../data/craftTechniques';
import TechniqueCard from '../components/TechniqueCard';

const CraftTechniques: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-medium text-gray-900">Traditional Craft Techniques</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the ancient methods, cultural significance, and artistry behind India's most cherished craft traditions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {craftTechniques.map(technique => (
            <TechniqueCard key={technique.id} technique={technique} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CraftTechniques;