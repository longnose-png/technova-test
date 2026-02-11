import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=1" 
          alt="TechNova Lifestyle" 
          className="w-full h-full object-cover"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-600/90 text-white text-xs font-semibold tracking-wider mb-6 backdrop-blur-sm">
            NEW COLLECTION 2025
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Future-Ready <br />
            <span className="text-blue-400">Lifestyle.</span> <br />
            Delivered Today.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-lg">
            TechNova brings you the finest fashion, cutting-edge electronics, and premium home essentials across Southeast Asia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
              Our Vision
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;