import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const AnnouncementSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Main Announcement */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              We are thrilled to announce that we are tying the knot!
            </h2>
          </div>
          
          {/* Right Column - Description */}
          <div className="flex items-center">
            <p className="text-1xl sm:text-lg md:text-xl text-gray-700 leading-relaxed ">
              With the blessings of our families, we, Reainy & Jinto, are 
              delighted to begin our journey together. Join us as we celebrate 
              the sacred bond of marriage and the start of a beautiful new 
              chapter in our lives.
            </p>
          </div>
        </div>
        
        {/* Three Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Photo 1 */}
          <div className="aspect-square bg-gray-200  overflow-hidden">
            <img 
              src={img1} 
              alt="Wedding photo 1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Photo 2 */}
          <div className="aspect-square bg-gray-200  overflow-hidden">
            <img 
              src={img2}
              alt="Wedding photo 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Photo 3 */}
          <div className="aspect-square bg-gray-200 overflow-hidden">
            <img 
              src={img3} 
              alt="Wedding photo 3" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
