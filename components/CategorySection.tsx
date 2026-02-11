import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Category } from '../types';

const categories: Category[] = [
  {
    id: 'fashion',
    title: 'Fashion & Apparel',
    description: 'Trendsetting styles for the modern urbanite. Sustainable fabrics meet contemporary design.',
    image: 'https://picsum.photos/600/800?random=2',
    link: '#fashion'
  },
  {
    id: 'electronics',
    title: 'Gadgets & Devices',
    description: 'High-performance technology to power your work and play. From smart wearables to pro-audio.',
    image: 'https://picsum.photos/600/800?random=3',
    link: '#electronics'
  },
  {
    id: 'home',
    title: 'Home Essentials',
    description: 'Curated lifestyle products that transform houses into intelligent, comfortable homes.',
    image: 'https://picsum.photos/600/800?random=4',
    link: '#home'
  }
];

const CategorySection: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="group relative h-[600px] overflow-hidden rounded-xl cursor-pointer">
              {/* Background Image */}
              <img 
                src={category.image} 
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-3 transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
                  {category.title}
                </h3>
                <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mb-6 transition-all duration-500">
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {category.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between border-t border-white/20 pt-6 mt-2 group-hover:border-white/40">
                  <span className="text-white font-medium tracking-wide uppercase text-sm">Explore Collection</span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;