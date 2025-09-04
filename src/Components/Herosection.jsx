import React from 'react';
import Hero from '../assets/hero.jpg';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {/* Background Image from assets folder */}
         <img 
          src={Hero} 
          alt="Wedding background" 
          className="w-full h-full object-cover"
        />
        
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-start pt-32 md:pt-40 h-full">
        <div className="pl-6 md:pl-12 lg:pl-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-2 leading-tight">
            The Grand Wedding Of
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            Reainy & Jinto
          </h2>
          <p className="text-xl md:text-2xl text-white font-light">
            14 Sept, 2025 Sunday
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;