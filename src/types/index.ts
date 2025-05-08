export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  artisan: string;
  description: string;
  category: string;
  region: string;
  technique?: string;
}

export interface Region {
  id: string;
  name: string;
  displayName: string;
  description: string;
  image: string;
  craftStyles: string[];
}

export interface CraftTechnique {
  id: string;
  name: string;
  displayName: string;
  description: string;
  culturalSignificance: string;
  regions: string[];
  image: string;
  videoUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  displayName: string;
  description: string;
  image: string;
  regions: string[];
}

export interface Workshop {
  id: string;
  type: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  instructor: string;
  mode: 'Virtual' | 'On-location';
  capacity: number;
  price: number;
}