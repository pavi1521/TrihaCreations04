import React, { useState } from 'react';
import { workshops } from '../data/workshops';
import WorkshopCalendar from '../components/WorkshopCalendar';
import { Workshop } from '../types';

const Workshops: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestedCraft: '',
    workshopMode: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };
  
  const getWorkshopsForSelectedDate = (): Workshop[] => {
    if (!selectedDate) return [];
    
    const dateStr = selectedDate.toISOString().split('T')[0];
    return workshops.filter(workshop => workshop.date === dateStr);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
  
  const selectedWorkshops = getWorkshopsForSelectedDate();
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-80 overflow-hidden">
        <img 
          src="https://images.stockcake.com/public/3/a/3/3a3ddf58-683e-4d6c-adc6-02c95c20eb33_large/sunlit-craft-workshop-stockcake.jpg" 
          alt="Craft Workshops"
          className="w-full h-full object-cover object-center"

        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-serif font-medium text-white">Traditional Craft Workshops</h1>
            <p className="mt-2 text-lg text-gray-200 max-w-2xl">
              Learn ancient techniques from master artisans and create your own handcrafted treasures
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Workshop Calendar</h2>
              <p className="text-gray-600 mb-4">
                Select a date to see available workshops. Dates with icons have scheduled workshops.
              </p>
              <WorkshopCalendar workshops={workshops} onDateSelect={handleDateSelect} />
            </div>
            
            {!isSubmitted ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-medium text-gray-900 mb-4">Express Interest</h2>
                <p className="text-gray-600 mb-4">
                  Don't see a workshop that fits your schedule? Let us know what you're interested in!
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interestedCraft" className="block text-sm font-medium text-gray-700 mb-1">
                      Interested Craft *
                    </label>
                    <select
                      id="interestedCraft"
                      name="interestedCraft"
                      value={formData.interestedCraft}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    >
                      <option value="">Select a craft</option>
                      <option value="pottery">Pottery</option>
                      <option value="weaving">Weaving</option>
                      <option value="blockprinting">Block Printing</option>
                      <option value="painting">Painting</option>
                      <option value="embroidery">Embroidery</option>
                      <option value="woodworking">Woodworking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="workshopMode" className="block text-sm font-medium text-gray-700 mb-1">
                      Mode of Workshop *
                    </label>
                    <select
                      id="workshopMode"
                      name="workshopMode"
                      value={formData.workshopMode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    >
                      <option value="">Select mode</option>
                      <option value="virtual">Virtual</option>
                      <option value="on-location">On-location</option>
                      <option value="either">Either</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md font-medium transition-colors duration-300"
                  >
                    Submit Interest
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We've received your interest. We'll notify you when relevant workshops become available.
                </p>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-2">
            {selectedDate ? (
              <>
                <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">
                  Workshops on {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </h2>
                
                {selectedWorkshops.length > 0 ? (
                  <div className="space-y-6">
                    {selectedWorkshops.map(workshop => (
                      <div key={workshop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <img 
                              src={workshop.image} 
                              alt={workshop.title} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="p-6 md:w-2/3">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-medium text-gray-900 mb-1">{workshop.title}</h3>
                                <p className="text-amber-600 mb-3">
                                  {workshop.date} | {workshop.time} | {workshop.mode}
                                </p>
                              </div>
                              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                                ₹{workshop.price}
                              </span>
                            </div>
                            
                            <p className="text-gray-600 mb-4">{workshop.description}</p>
                            
                            <div className="flex flex-wrap items-center justify-between">
                              <div className="mb-2 md:mb-0">
                                <p className="text-sm text-gray-500">
                                  <span className="font-medium">Instructor:</span> {workshop.instructor}
                                </p>
                                <p className="text-sm text-gray-500">
                                  <span className="font-medium">Capacity:</span> {workshop.capacity} seats
                                </p>
                              </div>
                              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded transition-colors duration-300">
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <p className="text-gray-600">No workshops scheduled for this date.</p>
                    <p className="text-gray-600 mt-2">
                      Please select another date or fill out the interest form to be notified of upcoming workshops.
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="space-y-8">
                <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">
                  Upcoming Featured Workshops
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {workshops.slice(0, 4).map(workshop => (
                    <div key={workshop.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={workshop.image} 
                          alt={workshop.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-medium text-gray-900">{workshop.title}</h3>
                          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">
                            ₹{workshop.price}
                          </span>
                        </div>
                        <p className="text-amber-600 text-sm mb-2">
                          {new Date(workshop.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} | {workshop.time}
                        </p>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{workshop.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            {workshop.mode}
                          </span>
                          <button className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center">
                            View details
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                  <h3 className="text-xl font-medium text-amber-800 mb-3">Why Join Our Workshops?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <h4 className="text-base font-medium text-gray-900 mb-1">Learn Ancient Techniques</h4>
                      <p className="text-sm text-gray-600">Master traditional skills passed down through generations</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="text-base font-medium text-gray-900 mb-1">Expert Artisan Instructors</h4>
                      <p className="text-sm text-gray-600">Learn directly from skilled craftspeople with years of experience</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h4 className="text-base font-medium text-gray-900 mb-1">Create Your Own Treasures</h4>
                      <p className="text-sm text-gray-600">Take home your handcrafted creations and newfound skills</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;