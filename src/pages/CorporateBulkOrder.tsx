import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CorporateBulkOrder: React.FC = () => {
  const [formData, setFormData] = useState({
    productCategory: '',
    units: '',
    customizationDetails: '',
    deliveryDeadline: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };
  
  if (isSubmitted) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Bulk Order Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your bulk order request. Our team will review the details and provide you with a quote within 1-2 business days.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/corporate-gifting"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded transition-colors duration-300"
              >
                Back to Corporate Gifting
              </Link>
              <Link 
                to="/"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded transition-colors duration-300"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/corporate-gifting" className="text-amber-600 hover:text-amber-700 flex items-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Corporate Gifting
          </Link>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-serif font-medium text-gray-900 mb-6">Bulk Order Request</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-1">
                  Product Category *
                </label>
                <select
                  id="productCategory"
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="textiles">Textiles</option>
                  <option value="pottery">Pottery & Sculptures</option>
                  <option value="bags">Bags & Accessories</option>
                  <option value="wall_hangings">Wall Hangings</option>
                  <option value="mixed">Mixed Items</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Units *
                </label>
                <input
                  type="number"
                  id="units"
                  name="units"
                  min="10"
                  value={formData.units}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Minimum 10 units for bulk orders</p>
              </div>
              
              <div>
                <label htmlFor="customizationDetails" className="block text-sm font-medium text-gray-700 mb-1">
                  Customization Details
                </label>
                <textarea
                  id="customizationDetails"
                  name="customizationDetails"
                  rows={3}
                  value={formData.customizationDetails}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Describe any customization requirements such as colors, designs, logos, etc."
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="deliveryDeadline" className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Deadline *
                </label>
                <input
                  type="date"
                  id="deliveryDeadline"
                  name="deliveryDeadline"
                  value={formData.deliveryDeadline}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md text-lg font-medium transition-colors duration-300"
              >
                Submit Bulk Order Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateBulkOrder;