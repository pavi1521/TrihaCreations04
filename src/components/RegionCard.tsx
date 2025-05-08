import React from 'react';
import { Link } from 'react-router-dom';
import { Region } from '../types';

interface RegionCardProps {
  region: Region;
}

const RegionCard: React.FC<RegionCardProps> = ({ region }) => {
  return (
    <Link 
      to={`/region/${region.name}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={region.image} 
          alt={region.displayName} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-serif text-white">{region.displayName}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-4 line-clamp-2">{region.description}</p>
        <div className="flex flex-wrap gap-2">
          {region.craftStyles.slice(0, 3).map((style, index) => (
            <span 
              key={index} 
              className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full"
            >
              {style}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default RegionCard;