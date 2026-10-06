import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Award, 
  Target, 
  MapPin, 
  Dumbbell, 
  Users, 
  Flame, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/916263442343?text=${encodeURIComponent(
    "Hello Iron Studio Gym, I want to visit the facility and learn more about memberships."
  )}`;

  return (
    <div className="bg-[#020617] text-slate-100 py-16 lg:py-24 font-sans selection:bg-cyan-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* 1. HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 fill-cyan-400" />
            <span>About Iron Studio Gym, Bhopal</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-none">
            FORGING THE ULTIMATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">FITNESS LEGACY</span>
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Spanning over 10,000+ square feet in Bagmugaliya, Iron Studio Gym is Bhopal’s benchmark fitness institution—built for serious lifters, transformation seekers, and athletes.
          </p>
        </div>

        {/* 2. THE IRON PHILOSOPHY (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-slate-900/80 border border-slate-800 p-8 sm:p-10 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none"></div>
            
            <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-2xl flex items-center justify-center">
              <Target className="w-7 h-7" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">Our Core Mission</h3>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We believe true fitness is built on uncompromised heavy-duty equipment, precise biomechanics coaching, discipline, and 100% genuine supplements. Our goal is to push every individual past their perceived physical limits.
            </p>
            
            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-300 pt-2">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Lab-tested 100% authentic supplement store in-house
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Tailored hypertrophy, powerlifting & fat loss roadmaps
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Hygienic locker rooms, shower & steam facilities
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-[#0b1329] border border-slate-800 p-8 sm:p-10 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center justify-center">
              <Award className="w-7 h-7" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">The Iron Standard</h3>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From competitive bodybuilders to first-time gym goers, our ecosystem welcomes everyone. We maintain imported commercial plate-loaded machines, Olympic lifting platforms, and dedicated high-end cardio zones.
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-slate-800/80">
              <div>
                <span className="text-3xl font-black text-white block">800+</span>
                <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider mt-1">Active Lifters</span>
              </div>
              <div className="border-l border-slate-800 pl-6">
                <span className="text-3xl font-black text-cyan-400 block">100%</span>
                <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider mt-1">Authentic Gear</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. FACILITY HIGHLIGHTS BANNER */}
        <div className="bg-[#04091a] border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Mega Infrastructure</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase">What Makes Us Bhopal's Finest</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-xl flex items-center justify-center">
                <Dumbbell className="w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-base uppercase">Heavy Plate-Loaded Floor</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Commercial strength units and dumbbells up to heavy caliber weight increments.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-xl flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-base uppercase">Cardio & Conditioning</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                State-of-the-art treadmills, ellipticals, and spin bikes for maximum fat shredding.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-base uppercase">In-House Supplement Bar</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Guaranteed genuine Whey Proteins and Creatine with zero middleman markup.
              </p>
            </div>
          </div>
        </div>

        {/* 4. LOCATION & VISIT US BOX */}
        <div className="bg-gradient-to-br from-slate-900 to-[#0c1630] border border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Come Train With Us</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">Visit Our Center In Bhopal</h2>
            <p className="text-slate-400 text-xs sm:text-sm flex items-center justify-center md:justify-start gap-2 pt-1">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Sangam Colony, Bagmugaliya, Bhopal, Madhya Pradesh 462043</span>
            </p>
            <p className="text-xs text-slate-400">Timing: Monday - Saturday (5:00 AM - 10:00 PM)</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase text-xs tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition text-center active:scale-95"
            >
              Get Directions / WhatsApp
            </a>
            <Link 
              to="/plans" 
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold uppercase text-xs tracking-wider px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2"
            >
              <span>Explore Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}