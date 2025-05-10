import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
            <img src="/dist/logo.jpeg" alt="triha" className="h-12 w-12 rounded-full object-cover border border-amber-700 shadow-sm" />
            <span className="text-2xl font-serif tracking-wider text-amber-1500 ml-2">Triha</span>
               <span className="text-2xl font-serif tracking-wider text-amber-1500">Creation</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-amber-700 transition font-medium">Home</Link>
            <Link to="/crafts-by-region" className="text-gray-700 hover:text-amber-700 transition font-medium">Crafts by Region</Link>
            <Link to="/craft-techniques" className="text-gray-700 hover:text-amber-700 transition font-medium">Craft Techniques</Link>
            <Link to="/categories" className="text-gray-700 hover:text-amber-700 transition font-medium">Categories</Link>
            <Link to="/corporate-gifting" className="text-gray-700 hover:text-amber-700 transition font-medium">Corporate Gifting</Link>
            <Link to="/workshops" className="text-gray-700 hover:text-amber-700 transition font-medium">Workshops</Link>
            <Link to="/cart" className="text-gray-700 hover:text-amber-700 transition font-medium flex items-center">
              <ShoppingCart className="h-5 w-5 mr-1" />
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 bg-amber-600 text-white text-xs rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <Link to="/cart" className="mr-4 text-gray-700 relative">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 bg-amber-600 text-white text-xs rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-700 hover:bg-gray-50 rounded-md"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/crafts-by-region" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-700 hover:bg-gray-50 rounded-md"
              onClick={closeMenu}
            >
              Crafts by Region
            </Link>
            <Link 
              to="/craft-techniques" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-700 hover:bg-gray-50 rounded-md"
              onClick={closeMenu}
            >
              Craft Techniques
            </Link>
            <Link 
              to="/categories" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-700 hover:bg-gray-50 rounded-md"
              onClick={closeMenu}
            >
              Categories
            </Link>
            <Link 
              to="/corporate-gifting" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-700 hover:bg-gray-50 rounded-md"
              onClick={closeMenu}
            >
              Corporate Gifting
            </Link>
            <Link 
              to="/workshops" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-700 hover:bg-gray-50 rounded-md"
              onClick={closeMenu}
            >
              Workshops
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;