import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Menu, X, Search, ChevronDown } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Shop', href: '#shop', hasDropdown: true },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Company', href: '#about' },
  { label: 'Resources', href: '#resources' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-lg group-hover:bg-blue-600 transition-colors">
              <span className="font-bold text-xl">T</span>
            </div>
            <span className={`font-bold text-2xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              TechNova
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="group relative flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-900 hover:text-blue-600 transition-colors relative">
              <ShoppingBag size={20} />
              <span className="hidden md:inline text-sm font-medium">Cart (0)</span>
            </button>
            <button className="hidden md:flex p-2 hover:bg-slate-100 rounded-full transition-colors">
              <User size={20} />
            </button>
            <button 
              className="md:hidden p-2 text-slate-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-white transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <span className="font-bold text-2xl text-slate-900">TechNova</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={28} className="text-slate-900" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-xl font-medium">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 hover:text-blue-600 border-b border-slate-100 pb-4"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4">
            <button className="w-full py-4 bg-slate-900 text-white font-medium rounded-lg">
              Sign In
            </button>
            <button className="w-full py-4 border border-slate-200 text-slate-900 font-medium rounded-lg">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;