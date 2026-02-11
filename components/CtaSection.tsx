import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative min-h-[500px] flex items-center bg-slate-900">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/1600/900?random=20" 
            alt="Custom Solutions" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 p-8 md:p-16 max-w-3xl">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            Custom Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Brands that thrive invest in future-proof technology. Let us help bring your vision to life.
          </h2>
          <div className="flex flex-wrap gap-4">
             <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30">
               Get Started
             </button>
             <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm">
               Contact Sales
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;