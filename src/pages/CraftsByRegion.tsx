import React from 'react';
import { regions } from '../data/regions';
import RegionCard from '../components/RegionCard';

const CraftsByRegion: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-medium text-gray-900">Crafts by Region</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the diverse craft traditions of India, each region offering unique artistic expressions rooted in cultural heritage
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map(region => (
            <RegionCard key={region.id} region={region} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CraftsByRegion;