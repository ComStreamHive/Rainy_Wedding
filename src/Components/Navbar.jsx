import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // simple icons for hamburger
import { Link } from "react-scroll"; // import Link from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-red-500 text-2xl font-serif font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
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
          <Link
            to="home" // Scroll to section with id 'home'
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="our-story" // Scroll to section with id 'our-story'
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Our Story
          </Link>
          <Link
            to="itinerary" // Scroll to section with id 'itinerary'
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Itinerary
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="block text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="our-story"
            smooth={true}
            duration={500}
            className="block text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Our Story
          </Link>
          <Link
            to="itinerary"
            smooth={true}
            duration={500}
            className="block text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Itinerary
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
