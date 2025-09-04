import React from 'react';
import { RiGeminiFill } from "react-icons/ri";

const ScrollingBanner = () => {
  return (
    <div className="py-4 overflow-hidden relative" style={{ backgroundColor: "#DD4A4C", fontFamily: 'Playfair Display, serif' }}>
      {/* Scrolling Content */}
      <div className="overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <div className="inline-flex items-center space-x-10 sm:space-x-16 md:space-x-16 lg:space-x-16 xl:space-x-16 text-white font-semibold text-lg">
            {/* Original Content */}
            <span className="flex items-center gap-1"><RiGeminiFill />14th Sept. 2025 • Sunday</span>
            <span className="flex items-center gap-1"><RiGeminiFill />11.30 AM</span>
            <span className="flex items-center gap-1"><RiGeminiFill />St.Sebastian's Church, Ambunadu</span>

            {/* Duplicate content for seamless loop */}
            <span className="flex items-center gap-1"><RiGeminiFill />14th Sept. 2025 • Sunday</span>
            <span className="flex items-center gap-1"><RiGeminiFill />11.30 AM</span>
            <span className="flex items-center gap-1"><RiGeminiFill />St.Sebastian's Church, Ambunadu</span>

            {/* Another duplicate for continuous scroll */}
            <span className="flex items-center gap-1"><RiGeminiFill />14th Sept. 2025 • Sunday</span>
            <span className="flex items-center gap-1"><RiGeminiFill />11.30 AM</span>
            <span className="flex items-center gap-1"><RiGeminiFill />St.Sebastian's Church, Ambunadu</span>
          </div>
        </div>
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%); /* Scroll by 1/3 of the total width */
          }
        }

        .animate-scroll {
          display: inline-flex;
          animation: scroll 14s linear infinite;
        }

        /* Ensure the container is wide enough to accommodate the full scroll */
        .animate-scroll > div {
          min-width: 300%; /* This ensures the container is wide enough to hold 3 sets of content */
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;
