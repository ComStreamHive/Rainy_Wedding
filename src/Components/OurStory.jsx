import React from 'react';
import story1 from '../assets/story1.jpg';
import story2 from '../assets/story2.jpg';
import story3 from '../assets/story3.jpg';

const OurStory = () => {
  return (
    <div className="w-full py-16 px-4" style={{ backgroundColor: '#F5E6E8' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section with Hearts */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-red-500 text-2xl">❤</span>
            <h1 className="text-4xl lg:text-5xl font-serif text-gray-800">Our Story</h1>
            <span className="text-red-500 text-2xl">❤</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif text-black">Reainy & Jinto</h2>
        </div>
        
        {/* Three Tall Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 items-start">
          {/* Chapter 1 */}
          <div className="relative" style={{ marginTop: '50px' }}> {/* Added 5px margin */}
            <img
              src={story1}
              alt="Our Story - Chapter 1"
              className="w-full h-[450px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
          
          {/* Chapter 2 (Middle Image, Taller, No Shadow) */}
          <div className="relative" > {/* Added 5px margin */}
            <img
              src={story2}
              alt="Our Story - Chapter 2"
              className="w-full h-[550px] object-cover rounded-lg"  // Taller middle image with no shadow
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
          
          {/* Chapter 3 */}
          <div className="relative" style={{ marginTop: '50px' }}> 
            <img
              src={story3}
              alt="Our Story - Chapter 3"
              className="w-full h-[450px] object-cover rounded-lg"  // Same height as Chapter 1
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
        
        {/* Story Text Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-serif text-gray-800 mb-6">
            Story to tell for the rest of the world
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed text-left">
            Unlike many love stories, this is a journey shaped by families and traditions.
             Reainy & Jinto were introduced through their families, who saw in them the perfect partners for one another.
              What started as an arranged match soon blossomed into mutual respect, understanding, and the promise of a lifelong partnership. 
              Their story is one of trust, family blessings, and the beginning of a future filled with shared dreams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
