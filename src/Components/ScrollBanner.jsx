import React from 'react';
import { RiGeminiFill } from "react-icons/ri";

const ScrollingBanner = () => {
  return (
    <div className="py-4 overflow-hidden relative" style={{ backgroundColor: "#DD4A4C" }}>
      {/* Scrolling Content */}
      <div className="animate-scroll whitespace-nowrap">
        <div className="inline-flex items-center space-x-16 text-white font-semibold text-lg">
          <span className="flex items-center gap-1"><RiGeminiFill/>14th Sept. 2025 • Sunday</span>
          <span className="flex items-center gap-1"><RiGeminiFill/>11.30 AM</span>
          <span className="flex items-center gap-1"><RiGeminiFill/>St.Sebastian's Church,Ambunadu</span>
          
          
          {/* Duplicate content for seamless loop */}
          <span className="flex items-center gap-1"><RiGeminiFill/>14th Sept. 2025 • Sunday</span>
          <span className="flex items-center gap-1"><RiGeminiFill/>11.30 AM</span>
          <span className="flex items-center gap-1"><RiGeminiFill/>St.Sebastian's Church,Ambunadu</span>
          
          {/* Another duplicate for continuous scroll */}
          <span className="flex items-center gap-1"><RiGeminiFill/>14th Sept. 2025 • Sunday</span>
          <span className="flex items-center gap-1"><RiGeminiFill/>11.30 AM</span>
          <span className="flex items-center gap-1"><RiGeminiFill/>St.Sebastian's Church,Ambunadu</span>
        </div>
      </div>
      
      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 8s linear infinite;
        }
        
        
       
      `}</style>
    </div>
  );
};

export default ScrollingBanner;