import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

const products: Product[] = [
  {
    id: 1,
    name: 'Nova Wireless ANC Headphones',
    category: 'Electronics',
    price: 299.00,
    image: 'https://picsum.photos/500/500?random=10',
    isNew: true
  },
  {
    id: 2,
    name: 'Merino Wool Urban Jacket',
    category: 'Fashion',
    price: 185.00,
    image: 'https://picsum.photos/500/500?random=11',
    isNew: true
  },
  {
    id: 3,
    name: 'Smart Air Purifier Pro',
    category: 'Home Essentials',
    price: 450.00,
    image: 'https://picsum.photos/500/500?random=12',
    isNew: false
  },
  {
    id: 4,
    name: 'Ceramic Pour-Over Set',
    category: 'Home Essentials',
    price: 45.00,
    image: 'https://picsum.photos/500/500?random=13',
    isNew: true
  }
];

const ProductGrid: React.FC = () => {
  return (
    <section id="shop" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">New Arrivals</h2>
            <p className="text-slate-600 max-w-md">Discover our latest additions, curated for functionality, aesthetics, and performance.</p>
          </div>
          <button className="px-6 py-3 border border-slate-300 rounded-lg text-slate-900 font-medium hover:bg-slate-900 hover:text-white transition-all">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    New
                  </span>
                )}
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white text-slate-900 rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                  <Plus size={20} />
                </button>
              </div>
              <div className="p-5">
                <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">{product.category}</span>
                <h3 className="font-bold text-slate-900 text-lg mt-1 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-slate-900 font-medium">${product.price.toFixed(2)}</span>
                  <span className="text-xs text-slate-400">In Stock</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;