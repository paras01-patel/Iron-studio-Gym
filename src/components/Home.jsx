import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Users, 
  Trophy, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Sparkles,
  Award,
  Flame
} from 'lucide-react';

export default function Home() {
  const whatsappUrl = `https://wa.me/916263442343?text=${encodeURIComponent(
    "Hello Iron Studio Gym, I am interested in joining Bhopal's premier fitness center."
  )}`;

  const facilities = [
    {
      title: "Commercial Plate-Loaded Zone",
      desc: "Industrial-grade ISO-Lateral leverage machines, heavy power cages, and deadlift platforms designed for maximum power.",
      icon: <Dumbbell className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "High-Performance Cardio Deck",
      desc: "Commercial treadmills, ellipticals, spin bikes, and stairmasters with real-time bio-metric tracking.",
      icon: <Flame className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "100% Authentic Supplement Hub",
      desc: "In-house verified store stocked with imported Whey Isolates, Creatine, Pre-Workouts, and EAAs.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Certified Master Coaches",
      desc: "Personalized biomechanics, progressive overload programming, and customized diet coaching.",
      icon: <Award className="w-6 h-6 text-cyan-400" />
    }
  ];

  const trainers = [
    {
      name: "Vikram Sharma",
      role: "Head Strength & Conditioning Coach",
      exp: "8+ Years Exp",
      spec: "Hypertrophy & Powerlifting Specialist"
    },
    {
      name: "Ananya Roy",
      role: "Senior Fitness & Fat Loss Coach",
      exp: "6+ Years Exp",
      spec: "HIIT, Cardio & Female Fitness Expert"
    },
    {
      name: "Rahul Verma",
      role: "Sports Nutritionist & Trainer",
      exp: "5+ Years Exp",
      spec: "Contest Prep & Customized Diet Charting"
    }
  ];

  return (
    <div className="bg-[#020617] text-slate-100 overflow-hidden font-sans">
      
      {/* 1. GRAND HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-slate-800/80">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4 fill-cyan-400" />
              <span>Bhopal's Largest 10,000+ Sq. Ft. Premium Fitness Center</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white">
              BUILD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300">LEGACY</span> AT IRON STUDIO
            </h1>

            <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience Bhopal's ultimate training ground. World-class heavy duty machinery, dedicated cardio floor, certified master coaches, and an authentic supplement station under one roof.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link 
                to="/plans" 
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-wider shadow-xl shadow-cyan-500/25 transition-all text-center flex items-center justify-center gap-2 active:scale-95"
              >
                <span>View Gym Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link 
                to="/store" 
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-cyan-500/40 px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-wider transition-all text-center flex items-center justify-center gap-2 active:scale-95"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Supplement Store</span>
              </Link>
            </div>

            {/* Key Live Metrics */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
              <div>
                <h4 className="text-white font-black text-2xl sm:text-3xl">10k+ <span className="text-cyan-400 text-lg">Sq.Ft</span></h4>
                <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider mt-1">Gym Floor Space</p>
              </div>
              <div>
                <h4 className="text-white font-black text-2xl sm:text-3xl">800+</h4>
                <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider mt-1">Active Members</p>
              </div>
              <div>
                <h4 className="text-white font-black text-2xl sm:text-3xl">100+</h4>
                <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider mt-1">Heavy Machines</p>
              </div>
            </div>
          </div>

          {/* Special Hero Offer Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-br from-slate-900 to-[#0c1735] border border-cyan-500/30 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest shadow-md">
                VIP MEMBERSHIP DEAL
              </div>

              <div className="space-y-4 pt-2">
                <span className="text-cyan-400 text-xs font-black uppercase tracking-widest block">Bagmugaliya, Bhopal</span>
                <h3 className="text-2xl font-black text-white uppercase leading-snug">
                  All-Access Pass + Free Personal Training Trial
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Join Iron Studio today and get access to the Strength Zone, Cardio Floor, Sauna & Locker Facilities plus a free Body Composition Analysis.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Free Locker & Steam Bath Access</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Personalized Diet & Workout Chart</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>15% Flat Discount On In-House Supplements</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block font-bold">Starts From</span>
                    <span className="text-2xl font-black text-white">₹1,299 <span className="text-xs text-slate-400 font-normal">/ mo</span></span>
                  </div>

                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold uppercase px-6 py-3.5 rounded-xl transition shadow-lg shadow-cyan-500/20 active:scale-95"
                  >
                    Claim VIP Pass
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. LIVE GYM FLOOR VISUALS */}
      <section className="py-16 bg-[#04091a] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4" /> World Class Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
              Explore Our Training Zones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 overflow-hidden group hover:border-cyan-500/50 transition">
              <div className="overflow-hidden rounded-2xl mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80" 
                  alt="Heavy Strength Floor" 
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 space-y-2">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Heavy Duty Zone</span>
                <h3 className="text-xl font-extrabold text-white uppercase">Commercial Strength & Plate-Loaded Floor</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Equipped with heavy dumbbells up to 60kg, power racks, Olympic lifting platforms, and dedicated leg isolation units.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 overflow-hidden group hover:border-cyan-500/50 transition">
              <div className="overflow-hidden rounded-2xl mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Cardio Deck" 
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 space-y-2">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Endurance Zone</span>
                <h3 className="text-xl font-extrabold text-white uppercase">Advanced Cardio & Fat Loss Arena</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dedicated high-volume cardio floor with smart treadmills, spin bikes, rowers, and ellipticals to accelerate calorie burn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE IRON STUDIO GRID */}
      <section className="py-20 bg-[#020617] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Built For Real Results</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
              Why Iron Studio Stands Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((fac, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4 hover:border-cyan-500/40 transition group"
              >
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                  {fac.icon}
                </div>
                <h3 className="text-white font-bold text-lg uppercase tracking-wide">{fac.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MASTER COACHES & TRAINERS */}
      <section className="py-20 bg-[#04091a] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Expert Guidance</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
              Train With Certified Coaches
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Our team of experienced trainers ensures proper technique, progressive overload, and safe transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((t, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center space-y-4 hover:border-cyan-500/40 transition">
                <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/10 border-2 border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-2xl uppercase">
                  {t.name.split(' ')[0][0]}{t.name.split(' ')[1][0]}
                </div>
                <div>
                  <h3 className="text-white font-extrabold text-lg uppercase">{t.name}</h3>
                  <span className="text-cyan-400 text-xs font-semibold block mt-0.5">{t.role}</span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-3 py-1 rounded-full uppercase inline-block mt-2 font-bold">{t.exp}</span>
                </div>
                <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">{t.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIRECT PAGE NAVIGATION BANNER */}
      <section className="py-20 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-gradient-to-br from-slate-900 to-[#0c1630] border border-slate-800 p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div>
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Membership Plans</span>
                <h3 className="text-2xl font-black text-white uppercase mt-1">Standard Strength & Cardio Combo Packages</h3>
                <p className="text-slate-400 text-xs mt-2">Check out flexible Monthly, Quarterly, and Yearly Passes for Bhopal members.</p>
              </div>
              <Link 
                to="/plans" 
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider"
              >
                <span>View All Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-[#0c1630] border border-slate-800 p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div>
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Supplement Store</span>
                <h3 className="text-2xl font-black text-white uppercase mt-1">100% Genuine Fitness Supplements</h3>
                <p className="text-slate-400 text-xs mt-2">Buy Whey Proteins, Creatine Monohydrate, and Pre-workouts directly in-store or online.</p>
              </div>
              <Link 
                to="/store" 
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 uppercase tracking-wider"
              >
                <span>Visit Supplement Store</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}