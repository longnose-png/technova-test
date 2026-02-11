import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 rounded-t-[2.5rem] mt-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <h2 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            Ready to upgrade your lifestyle? <br/>
            <span className="text-blue-500">Join TechNova today.</span>
          </h2>
          <button className="group w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all">
            <ArrowRight size={24} className="group-hover:-rotate-45 transition-transform duration-300" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-16"></div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white text-slate-900 flex items-center justify-center rounded font-bold">T</div>
              <span className="font-bold text-xl">TechNova</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Headquartered in Southeast Asia, we connect you to the future of retail.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Shop</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Fashion & Apparel</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Gadgets & Devices</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home Essentials</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 pt-8 border-t border-white/10">
          <p>© 2026 TechNova Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Designed for the Future.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;