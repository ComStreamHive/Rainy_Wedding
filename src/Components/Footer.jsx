import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-12" style={{ fontFamily: 'Playfair Display', color: '#DD4A4C' }}>
          Reainy & Jinto
        </h1>
        
        {/* Copyright text */}
        <p className="text-gray-600 text-sm ">
          © Copyright 2025 | 
          <span className="mx-1">
            <a
              className="hover:opacity-80 transition-opacity duration-200"
              style={{ color: '#DD4A4C', fontFamily: 'Playfair Display' }}
            >
              R&J
            </a>
          </span>
          | All right reserved
        </p>
        
      </div>
      
    </footer>
  );
};

export default Footer;