import React from 'react';
import bride from '../assets/bride.jpg';
import groom from '../assets/groom.jpg';
import bride1 from '../assets/bride1.jpg';
import bride2 from '../assets/bride2.jpg';
import groom1 from '../assets/groom1.jpg';
import groom2 from '../assets/groom2.jpg';

const AboutSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* First Section - Photo Left, Text Right */}
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        {/* Photo */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <img
              src={bride}
              alt="Reainy"
              className="w-full h-auto sm:h-[500px] lg:h-[600px] object-cover  shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between h-auto sm:h-[500px] lg:h-[600px]">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>Reainy</h2>
              <span className="text-red-400 text-3xl">♡</span>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mt-4">
              Reainy embodies warmth and grace, with a gentle spirit and strong 
              sense of tradition. As she prepares for her wedding day, she embraces 
              this union with joy and gratitude, ready to begin a meaningful journey 
              alongside her partner, with the blessings of her family.
            </p>
          </div>
          
          {/* Small Images at Bottom Level - Right Side */}
          <div className="flex flex-wrap justify-end gap-3 mt-6 lg:flex lg:gap-3 lg:mt-6 hidden lg:flex">
            <img
              src={bride1}
              alt="Reainy Detail 1"
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover  shadow-md"
            />
            <img
              src={bride2}
              alt="Reainy Detail 2"
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Second Section - Photo Right, Text Left */}
      <div className="flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-12">
        {/* Photo */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <img
              src={groom}
              alt="Michael"
              className="w-full h-auto sm:h-[500px] lg:h-[600px] object-cover  shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between h-auto sm:h-[500px] lg:h-[600px]">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>Jinto</h2>
              <span className="text-red-400 text-3xl">♡</span>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mt-4">
             Jinto is a kind-hearted and thoughtful individual, deeply rooted in family values.
              As he steps into this new chapter of life, he looks forward to building a bond of companionship 
              and trust with his bride, guided by respect and family blessings.
            </p>
          </div>
          
          {/* Small Images at Bottom Level - Left Side */}
          <div className="flex flex-wrap justify-start gap-3 mt-6 lg:flex lg:gap-3 lg:mt-6 hidden lg:flex">
            <img
              src={groom1}
              alt="Michael Detail 1"
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover  shadow-md"
            />
            <img
              src={groom2}
              alt="Michael Detail 2"
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover  shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
