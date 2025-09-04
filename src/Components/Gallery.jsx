import React from 'react';

// Local images (replace with your actual file paths)
import image1 from '../assets/1.svg';
import image2 from '../assets/2.svg';
import image3 from '../assets/3.svg';
import image4 from '../assets/4.svg';
import image5 from '../assets/5.svg';
import image6 from '../assets/6.svg';


const Gallery = () => {
  // List of images to display
  const images = [image1, image2, image3, image4, image5, image6, ];

  return (
    <div className="py-8 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Gallery Title */}
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6">
          Photo Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {images.map((src, index) => (
            <div key={index} className="relative w-full">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
