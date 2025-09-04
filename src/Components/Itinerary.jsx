import React from 'react';

const WeddingEvents = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-normal text-center text-black mb-20" style={{ fontFamily: 'serif' }}>
          When & Where
        </h1>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Engagement Card */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center min-h-72 flex flex-col justify-between">
            {/* Icon in gray box */}
            <div className="w-12 h-12 mx-auto mb-6 bg-gray-100 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
            </div>
            
            {/* Title */}
            <div className="mb-6">
              <h3 className="text-xl font-normal text-black">Engagement</h3>
            </div>
            
            {/* Event Details */}
            <div className="flex-1 mb-6">
              <p className="text-red-500 font-semibold text-sm mb-3">10 Sept, 2025 04:00 PM</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Martha marium church,<br />
                Cheppanamra
              </p>
            </div>
            
            {/* Location Button */}
            <button className="bg-red-500 text-white px-6 py-2 rounded-full text-xs font-bold tracking-wider hover:bg-red-600 transition-colors">
              LOCATION
            </button>
          </div>

          {/* Pre Wedding Party Card */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center min-h-72 flex flex-col justify-between">
            {/* Icon in gray box */}
            <div className="w-12 h-12 mx-auto mb-6 bg-gray-100 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12V7a7 7 0 1 1 14 0v5"/>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>
                <path d="M9 12h6"/>
              </svg>
            </div>
            
            {/* Title */}
            <div className="mb-6">
              <h3 className="text-xl font-normal text-black">Pre Wedding Party</h3>
            </div>
            
            {/* Event Details */}
            <div className="flex-1 mb-6">
              <p className="text-red-500 font-semibold text-sm mb-3">12 Sept, 2025 06:00 PM</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Home
              </p>
            </div>
            
            {/* Empty space for alignment */}
            <div className="h-10"></div>
          </div>

          {/* Wedding Card */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center min-h-72 flex flex-col justify-between">
            {/* Icon in gray box */}
            <div className="w-12 h-12 mx-auto mb-6 bg-gray-100 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
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
            <button className="bg-red-500 text-white px-6 py-2 rounded-full text-xs font-bold tracking-wider hover:bg-red-600 transition-colors">
              LOCATION
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WeddingEvents;