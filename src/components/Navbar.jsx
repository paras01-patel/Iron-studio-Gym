import React, { useState } from 'react';
import { Dumbbell, Menu, X, ShoppingBag, Zap } from 'lucide-react';

export default function Navbar({ cartCount = 2 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#020617]/90 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative p-2.5 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-all">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white tracking-wider uppercase leading-none">
              IRON STUDIO <span className="text-cyan-400">GYM</span>
            </span>
            <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-0.5">
              Fitness & Supplements
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300 font-semibold text-xs uppercase tracking-widest">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition-colors duration-200">Home</a>
          </li>
          <li>
            <a href="#aboutpage" className="hover:text-cyan-400 transition-colors duration-200">About Us</a>
          </li>
          <li>
            <a href="#plans" className="hover:text-cyan-400 transition-colors duration-200">Membership</a>
          </li>
          <li>
            <a href="#store" className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5 group">
              <span>Store</span>
              <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-black px-1.5 py-0.5 rounded tracking-normal group-hover:bg-emerald-500 group-hover:text-white transition-all">
                SUPPS
              </span>
            </a>
          </li>
          <li>
            <a href="#trainers" className="hover:text-cyan-400 transition-colors duration-200">Trainers</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition-colors duration-200">Contact</a>
          </li>
        </ul>

        {/* Desktop Right Side Actions */}
        <div className="hidden md:flex items-center gap-5">
          {/* Cart Icon */}
          <button className="relative p-2.5 text-slate-300 hover:text-cyan-400 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-xl transition-all shadow-inner">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-lg shadow-cyan-500/40 border border-[#020617]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Join CTA Button */}
          <button className="relative group overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/20 active:scale-95">
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 fill-white" />
              Join Now
            </span>
          </button>
        </div>

        {/* Mobile View Right Side Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button className="relative p-2 text-slate-300 hover:text-cyan-400 bg-slate-900 border border-slate-800 rounded-lg">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-slate-300 hover:text-cyan-400 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-slate-800 px-6 py-6 space-y-4 shadow-2xl">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest">About Us</a>
          <a href="#plans" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest">Membership Plans</a>
          <a href="#store" onClick={() => setIsOpen(false)} className="flex items-center justify-between text-slate-300 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest">
            <span>Store / Supplements</span>
            <span className="bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded">NEW</span>
          </a>
          <a href="#trainers" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest">Trainers</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest">Contact</a>
          
          <div className="pt-2">
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-bold uppercase text-xs tracking-wider shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 fill-white" />
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}