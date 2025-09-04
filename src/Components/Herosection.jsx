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
          className="w-full h-full object-cover object-center sm:object-cover"
          style={{
            objectPosition: 'center center'
          }}
        />
        
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-start h-full" style={{ paddingTop: 'max(80px, 15vh)' }}>
        <div className="px-4 sm:px-6 md:pl-12 lg:pl-16 md:pr-6 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white mb-1 sm:mb-2 leading-tight max-w-full">
            The Grand Wedding Of
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white mb-4 sm:mb-6 leading-tight max-w-full">
            Reainy & Jinto
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white font-light">
            14 Sept, 2025 Sunday
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;