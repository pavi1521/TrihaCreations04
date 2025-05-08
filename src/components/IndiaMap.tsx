import React from 'react';
import { Link } from 'react-router-dom';

interface IndiaMapProps {
  highlightedRegions: string[];
  categoryName: string;
}

const IndiaMap: React.FC<IndiaMapProps> = ({ highlightedRegions, categoryName }) => {
  const regions = [
    { id: 'tamilnadu', name: 'Tamil Nadu', x: 65, y: 78 },
    { id: 'rajasthan', name: 'Rajasthan', x: 40, y: 38 },
    { id: 'kerala', name: 'Kerala', x: 55, y: 85 },
    { id: 'gujarat', name: 'Gujarat', x: 30, y: 50 },
    { id: 'odisha', name: 'Odisha', x: 65, y: 55 },
    { id: 'andhrapradesh', name: 'Andhra Pradesh', x: 60, y: 65 },
    { id: 'northeast', name: 'Northeast India', x: 85, y: 40 }
  ];

  return (
    <div className="relative w-full aspect-[4/5] bg-amber-50 rounded-lg overflow-hidden border border-amber-200">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path 
          d="M25,25 Q30,20 40,25 Q50,30 60,25 Q70,20 80,30 Q85,40 85,50 Q85,60 80,70 Q75,80 65,85 Q55,90 45,85 Q35,80 30,70 Q25,60 25,50 Q25,40 25,25 Z" 
          fill="#ffffff" 
          stroke="#e5e5e5" 
          strokeWidth="1"
        />
        
        {regions.map((region) => {
          const isHighlighted = highlightedRegions.includes(region.id);
          return (
            <Link key={region.id} to={`/category/${categoryName}/${region.id}`}>
              <circle 
                cx={region.x} 
                cy={region.y} 
                r={2.5}
                fill={isHighlighted ? '#d97706' : '#e5e5e5'} 
                stroke={isHighlighted ? '#92400e' : '#cccccc'}
                strokeWidth="0.5"
                className="cursor-pointer transition-all hover:fill-amber-500"
              />
              <text 
                x={region.x} 
                y={region.y + 4.5} 
                textAnchor="middle" 
                fill={isHighlighted ? '#78350f' : '#666666'} 
                fontSize="2.2"
                fontWeight={isHighlighted ? 'bold' : 'normal'}
                className="pointer-events-none"
              >
                {region.name}
              </text>
            </Link>
          );
        })}
      </svg>

      <div className="absolute bottom-4 left-4 text-xs text-gray-500">
        Click on a highlighted region to view products
      </div>
    </div>
  );
};

export default IndiaMap;
