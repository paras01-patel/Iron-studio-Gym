import React from 'react';
import { ShieldCheck, Zap, Award, Target, MapPin, Users, Dumbbell } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#020617] text-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 fill-cyan-400" />
            <span>About Iron Studio Gym</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            Forging Strength In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Bhopal</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Located in the heart of Bagmugaliya, Iron Studio Gym is more than just a fitness center—it’s a brotherhood of discipline, heavy lifting, and authentic transformation.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-6">
            <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-2xl flex items-center justify-center">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase">Our Mission</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              To provide uncompromised fitness equipment, expert-backed training regimens, and 100% genuine supplements under one roof. We empower every individual to push their limits safely and effectively.
            </p>
            <ul className="space-y-3 text-xs font-semibold text-slate-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Lab-tested 100% authentic supplements store
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Tailored fat loss and muscle hypertrophy programs
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-[#0b1329] border border-slate-800 p-8 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center justify-center">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase">The Iron Standard</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We maintain industrial-grade plate-loaded machines, specialized power racks, and a pristine environment. From beginners taking their first step to competitive bodybuilders, everyone finds their arena here.
            </p>
            <div className="pt-2 flex items-center gap-6">
              <div>
                <span className="text-2xl font-black text-white block">500+</span>
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Active Lifters</span>
              </div>
              <div className="border-l border-slate-800 pl-6">
                <span className="text-2xl font-black text-cyan-400 block">100%</span>
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Authentic Supps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Location Highlight Banner */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Visit Our Center</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">Train With Us In Bhopal</h2>
            <p className="text-slate-400 text-xs sm:text-sm flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Sangam Colony, Bagmugaliya, Bhopal, Madhya Pradesh 462043</span>
            </p>
          </div>
          <a 
            href="https://wa.me/916263442343?text=Hello%20Iron%20Studio%20Gym,%20I%20want%20to%20visit%20the%20gym." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase text-xs tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition active:scale-95 shrink-0"
          >
            Get Directions & Visit
          </a>
        </div>

      </div>
    </div>
  );
}