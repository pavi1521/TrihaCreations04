import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  
  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    updateQuantity(itemId, newQuantity);
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="h-8 w-8 text-gray-400" />
            </div>
            <h1 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link 
              to="/crafts-by-region"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded transition-colors duration-300"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-serif font-medium text-gray-900 mb-8">Your Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="grid grid-cols-12 text-sm font-medium text-gray-500 uppercase">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-1 text-right">Remove</div>
                </div>
              </div>
              
              {cartItems.map(item => (
                <div key={item.id} className="p-6 border-b border-gray-200">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-6">
                      <div className="flex items-center">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">By {item.artisan}</div>
                          <div className="mt-1 text-xs text-gray-500">Region: {
                            {
                              'tamilnadu': 'Tamil Nadu',
                              'rajasthan': 'Rajasthan',
                              'kerala': 'Kerala',
                              'gujarat': 'Gujarat',
                              'odisha': 'Odisha',
                              'andhrapradesh': 'Andhra Pradesh',
                              'northeast': 'Northeast India'
                            }[item.region] || item.region
                          }</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-2 text-center">
                      <div className="text-sm font-medium text-gray-900">₹{item.price.toLocaleString()}</div>
                    </div>
                    
                    <div className="col-span-3">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-amber-600 focus:outline-none"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                          className="mx-2 w-12 text-center border border-gray-300 rounded-md"
                        />
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-amber-600 focus:outline-none"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="col-span-1 text-right">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 focus:outline-none"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Link 
                to="/crafts-by-region"
                className="text-amber-600 hover:text-amber-700 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Continue Shopping
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="text-gray-600">Subtotal</div>
                  <div className="text-gray-900 font-medium">₹{cartTotal.toLocaleString()}</div>
                </div>
                
                <div className="flex justify-between">
                  <div className="text-gray-600">Shipping</div>
                  <div className="text-gray-900 font-medium">₹{(cartTotal > 5000 ? 0 : 250).toLocaleString()}</div>
                </div>
                
                <div className="flex justify-between">
                  <div className="text-gray-600">Tax</div>
                  <div className="text-gray-900 font-medium">₹{Math.round(cartTotal * 0.18).toLocaleString()}</div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <div className="text-base font-medium text-gray-900">Total</div>
                  <div className="text-xl font-bold text-amber-700">₹{(cartTotal + (cartTotal > 5000 ? 0 : 250) + Math.round(cartTotal * 0.18)).toLocaleString()}</div>
                </div>
                
                <div className="mt-2 text-xs text-gray-500">
                  {cartTotal > 5000 ? (
                    <p>Free shipping on orders over ₹5,000</p>
                  ) : (
                    <p>Free shipping on orders over ₹5,000. You're ₹{(5000 - cartTotal).toLocaleString()} away from free shipping.</p>
                  )}
                </div>
                
                {/* <button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md text-lg font-medium transition-colors duration-300 mt-4"
                >
                  Proceed to Checkout
                </button> */}
                <Link
  to="/checkout"
  className="block w-full mt-6 text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-md transition"
>
  Proceed to Pay
</Link>

                <div className="mt-4 bg-amber-50 rounded-md p-3 border border-amber-100">
                  <h3 className="text-sm font-medium text-amber-800 mb-2">Our Promise</h3>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-amber-500 mr-1.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Authentic handcrafted products
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-amber-500 mr-1.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Fair trade practices supporting artisans
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-amber-500 mr-1.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Secure packaging for safe delivery
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-amber-500 mr-1.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      7-day return policy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;