import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cartItems, cartTotal } = useCart();
  const [showModal, setShowModal] = useState(false);

  const shipping = cartTotal > 5000 ? 0 : 250;
  const tax = Math.round(cartTotal * 0.18);
  const grandTotal = cartTotal + shipping + tax;

  const handleCODConfirm = () => {
    setShowModal(true);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded shadow">
          <h1 className="text-xl font-medium mb-4 text-gray-800">Your cart is empty</h1>
          <Link to="/crafts-by-region" className="text-amber-600 hover:underline">Go back to products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Checkout</h2>

        {/* Shipping Address */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Shipping Address</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="N"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                placeholder="123, Example Street"
                rows={2}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                placeholder="Chennai"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                placeholder="Tamil Nadu"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Pincode</label>
              <input
                type="text"
                placeholder="600001"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="9876543210"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </form>
        </div>

        {/* Payment and Summary */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Payment Methods */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Methods</h3>

            <div className="space-y-4">
              <div className="border p-4 rounded-md hover:shadow transition">
                <h4 className="font-semibold text-gray-700 mb-2">Google Pay</h4>
                <img
                  src="/dist/scan.jpeg"
                  alt="Google Pay QR Code"
                  className="h-48 mx-auto rounded border"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">Scan to pay with Google Pay</p>
              </div>

              <div className="border p-4 rounded-md hover:shadow transition">
                <h4 className="font-semibold text-gray-700 mb-3">UPI / Wallet Options</h4>
                <div className="flex justify-center gap-4 items-center">
                  <img src="https://media.tradly.app/images/marketplace/34521/razor_pay_icon-ICtywSbN.png" alt="Razorpay" className="h-10" />
                  <img src="https://eu-images.contentstack.com/v3/assets/blt7dacf616844cf077/blt85b08b4917701bc0/67997d68d8a86f00203713cc/phonepe-logo-icon.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale" alt="PhonePe" className="h-8" />
                  <img src="https://play-lh.googleusercontent.com/IWU8HM1uQuW8wVrp6XpyOOJXvb_1tDPUDAOfkrl83RZPG9Ww3dCY9X1AV6T1atSvgXc" alt="Paytm" className="h-8" />
                </div>
                <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition">
                  Pay with UPI
                </button>
              </div>

              <div className="border p-4 rounded-md hover:shadow transition">
                <h4 className="font-semibold text-gray-700 mb-2">Cash on Delivery</h4>
                <button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
                  onClick={handleCODConfirm}
                >
                  Confirm Cash on Delivery
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 border p-6 rounded-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
            <div className="space-y-3 text-gray-700 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (18%)</span>
                <span>₹{tax.toLocaleString()}</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-lg font-semibold text-gray-900">
                <span>Total</span>
                <span className="text-amber-700">₹{grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <Link to="/cart" className="text-amber-600 hover:underline">← Back to Cart</Link>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-sm w-full text-center border border-amber-500">
            <h2 className="text-xl font-semibold text-amber-600 mb-2">Thank You!</h2>
            <p className="text-gray-700">Thanks for shopping at Triha Creations. Your order has been received successfully.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
