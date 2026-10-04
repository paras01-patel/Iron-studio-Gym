import React from 'react';
import StoreSection from './StoreSection';
import { Zap, ShieldCheck, ArrowRight, ShoppingBag, Check, Trophy, Users, Dumbbell } from 'lucide-react';

export default function Home() {
  const whatsappUrl = `https://wa.me/916263442343?text=${encodeURIComponent(
    "Hello Iron Studio Gym, I want to inquire about membership and supplements."
  )}`;

  const membershipPlans = [
    {
      title: "Monthly Pass",
      price: "₹1,299",
      period: "per month",
      popular: false,
      features: [
        "Full Access to Gym Equipment",
        "Locker & Shower Facility",
        "General Trainer Guidance",
        "Free Diet Plan Chart",
      ]
    },
    {
      title: "Quarterly Pack",
      price: "₹3,499",
      period: "for 3 months",
      popular: true,
      features: [
        "Full Access to Gym Equipment",
        "Locker & Shower Facility",
        "Customized Diet & Nutrition Plan",
        "10% Discount on All Supplements",
        "Personal Trainer Consultation",
      ]
    },
    {
      title: "Yearly Elite Pass",
      price: "₹9,999",
      period: "for 1 year",
      popular: false,
      features: [
        "Unlimited Gym Access (365 Days)",
        "Personalized Diet & Workout Chart",
        "15% Discount on All Supplements",
        "Free Iron Studio Shaker Bottle",
        "Priority Personal Training Support",
      ]
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* HERO SECTION */}
      <section id="home" className="relative overflow-hidden bg-[#020617] py-16 lg:py-24 border-b border-slate-800/80">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4 fill-cyan-400" />
              <span>Sangam Colony, Bagmugaliya, Bhopal • 5 AM - 10 PM</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
              Forge Your Body At <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Iron Studio</span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transform your physique with heavy duty machines, certified personal trainers, and 100% authentic fitness supplements directly at our Bhopal gym center.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#plans" 
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider shadow-lg shadow-cyan-500/25 transition-all text-center flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Explore Membership</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="#store" 
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-cyan-500/40 px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all text-center flex items-center justify-center gap-2 active:scale-95"
              >
                <ShoppingBag className="w-4 h-4 text-cyan-400" />
                <span>Supplement Store</span>
              </a>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <h4 className="text-white font-extrabold text-xl">500+</h4>
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Active Members</p>
              </div>
              <div>
                <h4 className="text-white font-extrabold text-xl flex items-center gap-1">
                  100% <ShieldCheck className="w-4 h-4 text-emerald-400 inline" />
                </h4>
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Genuine Supps</p>
              </div>
              <div>
                <h4 className="text-white font-extrabold text-xl">Certified</h4>
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Trainers</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-br from-slate-900 to-[#0b1329] border border-slate-800 p-6 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                BHOPAL SPECIAL DEAL
              </div>
              
              <div className="h-60 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col items-center justify-center p-6 text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-2xl">
                  IS
                </div>
                <h3 className="text-white font-bold text-lg">Gym Pass + Creatine Combo</h3>
                <p className="text-xs text-slate-400">Get 1-Month Gym Membership paired with 100% Pure Creatine Monohydrate at special rates.</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Starting From</span>
                  <span className="text-xl font-black text-white">₹1,299 <span className="text-xs text-slate-400 font-normal">/ mo</span></span>
                </div>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold uppercase px-5 py-3 rounded-xl transition shadow-lg shadow-cyan-500/20 active:scale-95"
                >
                  Chat On WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="about" className="py-20 bg-[#04091a] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
              Built For Real Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-xl flex items-center justify-center">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg">Heavy Duty Equipment</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fully equipped with commercial plate-loaded machines, power racks, dumbells up to heavy weights, and cardio zone.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg">Certified Personal Trainers</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Get dedicated guidance on form, progressive overload, fat loss, muscle building, and injury prevention.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg">Authentic Supplements</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No middleman. Buy 100% genuine Whey Protein, Creatine, and Pre-workouts right inside the gym or order online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPLEMENT STORE SECTION */}
      <StoreSection />

      {/* MEMBERSHIP PLANS SECTION */}
      <section id="plans" className="py-20 bg-[#020617] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Affordable Rates</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
              Gym Membership Plans
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Flexible plans designed for your fitness budget in Bagmugaliya, Bhopal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-3xl p-8 flex flex-col justify-between border relative transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-slate-900 to-[#0c1630] border-cyan-500 shadow-xl shadow-cyan-500/10 scale-105' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-white font-extrabold text-xl uppercase tracking-wide">{plan.title}</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-xs text-slate-400 ml-2 font-medium">{plan.period}</span>
                  </div>

                  <ul className="space-y-3.5 text-xs text-slate-300">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <div className="p-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`https://wa.me/916263442343?text=${encodeURIComponent(`Hello Iron Studio Gym, I want to join the ${plan.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all text-center block ${
                    plan.popular 
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/25' 
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                  }`}
                >
                  Join Plan Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}