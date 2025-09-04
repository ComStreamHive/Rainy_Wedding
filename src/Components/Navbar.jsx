import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // simple icons for hamburger

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-red-500 text-2xl font-serif font-bold">
          R&J
        </div>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (desktop) */}
        <div className="hidden md:flex items-center space-x-8">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a
            href="#"
            className="block text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Our Story
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Itinerary
          </a>
          <a
            href="#"
            className="block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors duration-200 text-center"
          >
            LOCATION
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
