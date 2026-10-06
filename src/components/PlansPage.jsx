import React, { useState } from 'react';
import { Check, Zap, Dumbbell, Flame } from 'lucide-react';

export default function PlansPage() {
  const [activeTab, setActiveTab] = useState('strength'); // 'strength' (without cardio) or 'combo' (with cardio)

  // 1. WITHOUT CARDIO PLANS (Standard Strength)
  const strengthPlans = [
    {
      title: "Monthly Pass",
      price: "₹800",
      period: "per month",
      popular: false,
      tag: "Without Cardio",
      features: [
        "Full Access to Heavy Dumbbells & Barbells",
        "Commercial Plate-Loaded Machines Zone",
        "Locker & Changing Room Facility",
        "General Floor Trainer Guidance",
        "Free Basic Workout Routine"
      ]
    },
    {
      title: "3 Months Pack",
      price: "₹1,800",
      period: "for 3 months",
      popular: true,
      tag: "Best Value (Save ₹600)",
      features: [
        "Unlimited Strength Floor Access (90 Days)",
        "Commercial Plate-Loaded Machines Zone",
        "Locker & Shower Access",
        "Customized Strength & Diet Chart",
        "Free Iron Studio Shaker Bottle"
      ]
    }
  ];

  // 2. WITH CARDIO PLANS (Strength + Cardio Combo)
  const comboPlans = [
    {
      title: "Monthly Pass",
      price: "₹1,000",
      period: "per month",
      popular: false,
      tag: "With Cardio",
      features: [
        "Complete Access to Strength & Weight Zone",
        "Unlimited Treadmills, Cycles & Ellipticals",
        "Fat Loss & HIIT Routine Guidance",
        "Locker & Shower Facility",
        "Basic Diet Plan Chart"
      ]
    },
    {
      title: "3 Months Pack",
      price: "₹2,400",
      period: "for 3 months",
      popular: true,
      tag: "Most Popular (Save ₹600)",
      features: [
        "Complete Strength + Cardio Zone Access",
        "Dedicated Fat Loss & Muscle Building Plan",
        "10% Discount on In-House Supplements",
        "Free Iron Studio Shaker Bottle",
        "Personal Trainer Consultation"
      ]
    }
  ];

  const currentPlans = activeTab === 'strength' ? strengthPlans : comboPlans;

  return (
    <div className="py-16 lg:py-24 bg-[#020617] text-slate-100 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 fill-cyan-400" />
            <span>Bagmugaliya, Bhopal • Affordable Rates</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Gym Membership <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Plans</span>
          </h1>

          <p className="text-slate-400 text-sm leading-relaxed">
            Choose between standard heavy strength training or full access strength + cardio combo.
          </p>

          {/* Category Toggle Buttons */}
          <div className="flex justify-center pt-4">
            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-2xl flex gap-2">
              <button
                onClick={() => setActiveTab('strength')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all ${
                  activeTab === 'strength'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Dumbbell className="w-4 h-4" />
                <span>Without Cardio</span>
              </button>

              <button
                onClick={() => setActiveTab('combo')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all ${
                  activeTab === 'combo'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Flame className="w-4 h-4 text-amber-400" />
                <span>With Cardio</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {currentPlans.map((plan, idx) => (
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
                  {plan.tag}
                </span>
              )}

              <div>
                <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider block mb-1">
                  {plan.tag}
                </span>
                <h3 className="text-white font-extrabold text-2xl uppercase">{plan.title}</h3>
                
                <div className="mt-4 mb-6">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-xs text-slate-400 ml-2 font-medium">{plan.period}</span>
                </div>

                <ul className="space-y-3.5 text-xs text-slate-300 border-t border-slate-800/80 pt-6">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <div className="p-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={`https://wa.me/916263442343?text=${encodeURIComponent(`Hello Iron Studio Gym, I want to join the ${plan.title} (${activeTab === 'strength' ? 'Without Cardio' : 'With Cardio'}) at${plan.price}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 w-full py-4 rounded-xl font-bold uppercase text-xs tracking-wider transition-all text-center block ${
                  plan.popular 
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/25 active:scale-95' 
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 active:scale-95'
                }`}
              >
                Join Via WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Pricing Summary Quick Box */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-white font-bold text-sm uppercase">Custom Package or Yearly Membership?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Special rates available for long-term & personal training programs.</p>
          </div>
          <a 
            href="https://wa.me/916263442343?text=Hello%20Iron%20Studio%20Gym,%20I%20want%20to%20inquire%20about%20yearly%20or%20PT%20plans." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0"
          >
            Inquire Special Rates
          </a>
        </div>

      </div>
    </div>
  );
}