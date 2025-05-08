import React from 'react';
import { Link } from 'react-router-dom';
import { CraftTechnique } from '../types';

interface TechniqueCardProps {
  technique: CraftTechnique;
}

const TechniqueCard: React.FC<TechniqueCardProps> = ({ technique }) => {
  return (
    <Link 
      to={`/craft-technique/${technique.name}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={technique.image} 
          alt={technique.displayName} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-serif text-white">{technique.displayName}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-4 line-clamp-3">{technique.description}</p>
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
              <span 
                key={index} 
                className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full"
              >
                {displayName}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default TechniqueCard;