import React from 'react';
import { Link } from 'react-router-dom';

const CorporateGifting: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-80 overflow-hidden">
        <img 
          src="https://static.vecteezy.com/system/resources/previews/028/121/577/non_2x/illustration-of-a-gift-box-in-hand-with-a-christmas-background-ai-generated-photo.jpg" 
          alt="Corporate Gifting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-serif font-medium text-white">Corporate Gifting</h1>
            <p className="mt-2 text-lg text-gray-200 max-w-2xl">
              Unique handcrafted gifts that reflect your company's values and appreciation
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Why Choose Handcrafted Corporate Gifts?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In today's world of mass production, handcrafted gifts stand out as thoughtful, unique tokens of appreciation. 
            Each piece tells a story of cultural heritage and skilled craftsmanship that reflects your company's values of 
            quality, attention to detail, and social responsibility.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-amber-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">1</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Unique & Meaningful</h3>
              <p className="text-gray-700">
                Each handcrafted item is one-of-a-kind, making your corporate gifts stand out and be remembered.
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">2</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Social Impact</h3>
              <p className="text-gray-700">
                Support traditional artisans and sustainable practices while strengthening your brand's social responsibility.
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">3</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Customizable</h3>
              <p className="text-gray-700">
                Many products can be customized with your company logo or personalized message for a tailored experience.
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-serif font-medium text-gray-900 mb-8">Our Corporate Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.ctfassets.net/pdf29us7flmy/1zfUGtw1ejDN3wAkngLdH7/1ce4e9a7e943194b22f0808a02b7155c/retail-customer-service.jpg" 
                alt="Corporate Inquiry" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Custom Inquiry</h3>
              <p className="text-gray-700 mb-4">
                Have a specific vision or requirement for your corporate gifts? Fill out our inquiry form, and our team will work with you to create a personalized solution.
              </p>
              <Link 
                to="/corporate-gifting/inquiry"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded transition-colors duration-300"
              >
                Submit Inquiry
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://www.re-thinkingthefuture.com/wp-content/uploads/2022/07/A7341-Traditional-Crafts-of-India-Bamboo-Handicrafts-Image-1.jpg" 
                alt="Bulk Order" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Bulk Orders</h3>
              <p className="text-gray-700 mb-4">
                Need a large quantity of handcrafted items for events, employee appreciation, or client gifts? Our bulk ordering service offers competitive pricing without compromising on quality.
              </p>
              <Link 
                to="/corporate-gifting/bulk-order"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded transition-colors duration-300"
              >
                Place Bulk Order
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 text-white rounded-lg shadow-md p-8 mt-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl font-serif mb-4">Ready to create memorable corporate gifts?</h3>
              <p className="text-gray-300">
                Contact our corporate team today to discuss your requirements and discover how traditional Indian crafts can elevate your corporate gifting experience.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link 
                to="/corporate-gifting/inquiry"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateGifting;