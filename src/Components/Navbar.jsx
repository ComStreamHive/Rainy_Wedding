import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-red-500 text-2xl font-serif font-bold">
          R&J
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <a 
            href="#" 
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Our Story
          </a>
          <a 
            href="#" 
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Itinerary
          </a>
          <a 
            href="#" 
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors duration-200"
          >
            LOCATION
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;