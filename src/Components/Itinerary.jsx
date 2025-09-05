import React from 'react';
import { CgRing } from "react-icons/cg";
import { TbGlass } from "react-icons/tb";
import { LuFlower } from "react-icons/lu";

const WeddingEvents = () => {
  return (
    <div id="itinerary" className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-normal text-center text-black mb-20" style={{ fontFamily: 'Playfair Display, serif' }}>
          When & Where
        </h1>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Engagement Card */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center min-h-72 flex flex-col justify-between">
            {/* Icon in gray box */}
            <div className="w-12 h-12 mx-auto mb-6 bg-white-100 rounded flex items-center justify-center">
              <CgRing className="w-8 h-7 text-red-500" />
            </div>
            
            {/* Title */}
            <div className="mb-6">
              <h3 className="text-xl font-normal text-black" style={{ fontFamily: 'Playfair Display, serif' }}>Engagement</h3>
            </div>
            
            {/* Event Details */}
            <div className="flex-1 mb-6">
              <p className="text-red-500 font-semibold text-sm mb-3">10 Sept, 2025 04:00 PM</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Martha mariam church,<br />
                Cheppumpara
              </p>
            </div>
            
            {/* Location Button */}
            <a
              href="https://maps.app.goo.gl/5udddydDoUPTeU5p9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-6 py-4 sm:py-3 md:py-2 lg:py-2 xl:py-2 rounded-full text-xs font-bold tracking-wider hover:bg-red-600 transition-colors"
            >
                LOCATION
            </a>

          </div>

          {/* Pre Wedding Party Card */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center min-h-72 flex flex-col justify-between">
            {/* Icon in gray box */}
            <div className="w-12 h-12 mx-auto mb-6 bg-white-800 rounded flex items-center justify-center">
              <TbGlass className="w-8 h-8 text-red-500" />
            </div>
            
            {/* Title */}
            <div className="mb-6">
              <h3 className="text-xl font-normal text-black" style={{ fontFamily: 'Playfair Display, serif' }}>Pre Wedding Party</h3>
            </div>
            
            {/* Event Details */}
            <div className="flex-1 mb-6">
              <p className="text-red-500 font-semibold text-sm mb-3">12 Sept, 2025 06:00 PM</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Home
              </p>
            </div>
            
             {/* Location Button */}
            <a
              href="https://www.google.com/maps?q=9.6297411,76.6242894"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-6 py-4 sm:py-3 md:py-2 lg:py-2 xl:py-2 rounded-full text-xs font-bold tracking-wider hover:bg-red-600 transition-colors"
            >
                LOCATION
            </a>
          </div>

          {/* Wedding Card */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center min-h-72 flex flex-col justify-between">
            {/* Icon in gray box */}
            <div className="w-12 h-12 mx-auto mb-6 bg-white-100 rounded flex items-center justify-center">
              <LuFlower className="w-8 h-7 text-red-500" />
            </div>
            
            {/* Title */}
            <div className="mb-6">
              <h3 className="text-xl font-normal text-black" style={{ fontFamily: 'Playfair Display, serif' }}>Wedding</h3>
            </div>
            
            {/* Event Details */}
            <div className="flex-1 mb-6">
              <p className="text-red-500 font-semibold text-sm mb-3">14 Sept, 2025 11:30 AM</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                St. Sebastian's church,<br />
                Ambunadu
              </p>
            </div>
              
            {/* Location Button */}
            <a
              href="https://maps.app.goo.gl/RK4M6w9hwSvpnedw9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-6 py-4 sm:py-3 md:py-2 lg:py-2 xl:py-2 rounded-full text-xs font-bold tracking-wider hover:bg-red-600 transition-colors"
            >
              LOCATION
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default WeddingEvents;
