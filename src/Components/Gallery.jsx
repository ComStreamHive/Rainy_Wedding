import React from 'react';

// Local images (replace with your actual file paths)
import image1 from '../assets/1.webp';
import image2 from '../assets/2.webp';
import image3 from '../assets/3.webp';
import image4 from '../assets/4.webp';
import image5 from '../assets/5.webp';
import image6 from '../assets/6.webp';

const Gallery = () => {
  // List of images to display
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="py-8 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Gallery Title */}
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          Photo Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 justify-items-center">
          {images.map((src, index) => (
            <div key={index} className="relative w-full">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
