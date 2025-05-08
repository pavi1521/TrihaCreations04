import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-[#33292A] text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-playfair">
              <span className="text-amber-700">Triha</span> Creations
            </h3>
            <p className="text-gray-300 max-w-xs">
              Celebrating the rich heritage of Indian craftsmanship with luxury handcrafted products.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-300 hover:text-amber-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-amber-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-amber-700 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair mb-4 font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-300 hover:text-amber-700 transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-amber-700 transition-colors">About Us</Link></li>
              <li><Link to="/artisans" className="text-gray-300 hover:text-amber-700 transition-colors">Artisans</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-amber-700 transition-colors">Craft Stories</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-amber-700 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-lg font-playfair mb-4 font-medium">Customer Support</h4>
            <ul className="space-y-2">
              <li><Link to="/track-order" className="text-gray-300 hover:text-amber-700 transition-colors">Track Order</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-amber-700 transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-amber-700 transition-colors">Shipping Policy</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-amber-700 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-playfair mb-4 font-medium">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-4">Stay updated with our new collections and artisan stories.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full p-2 bg-white/10 border border-amber-700/30 rounded-md focus:outline-none focus:border-amber-700"
                required
              />
              <button type="submit" className="w-full py-2 bg-amber-700 hover:bg-amber-700/90 rounded-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Triha Creations. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/privacy" className="hover:text-amber-700 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-amber-700 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
