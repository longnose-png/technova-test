import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "TechNova Direct", "Southeast Asia Shipping", "Premium Quality", "24/7 Support", "Innovation First",
    "Smart Living", "Sustainable Fashion", "Next-Gen Tech"
  ];

  return (
    <div className="bg-slate-900 text-white py-4 overflow-hidden border-y border-slate-800">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {items.map((item, index) => (
            <span key={index} className="mx-8 text-sm md:text-base font-medium tracking-widest uppercase flex items-center gap-8">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((item, index) => (
            <span key={`dup-${index}`} className="mx-8 text-sm md:text-base font-medium tracking-widest uppercase flex items-center gap-8">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
           {/* Second layer if needed for smoother animation logic, usually single layer with duplication is enough for CSS marquee */}
        </div>
      </div>
    </div>
  );
};

export default Marquee;