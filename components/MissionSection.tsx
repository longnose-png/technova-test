import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Heading & CTA */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-8">
            Innovating Commerce across <span className="text-blue-600">Southeast Asia.</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Remarkable quality is our promise to you. What doesn't meet TechNova standards is refined until it does. We are building the bridge between global innovation and local lifestyle needs.
          </p>
          <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Read Our Story
          </a>
        </div>

        {/* Right Column: Cards */}
        <div className="flex flex-col gap-8">
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-1 bg-blue-600 mb-6"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              We provide world-class, compliant products from trusted global partners to fashion, tech, and home sectors across the region. We aim to democratize access to high-quality lifestyle goods.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-1 bg-slate-900 mb-6"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the trusted, industry-leading platform known for ethical practices, reliable supply chains, and a dedication to sustainable innovation in every product category we touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;