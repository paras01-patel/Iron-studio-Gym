import React, { useState } from 'react';
import { Check, Zap, Dumbbell, Flame, UserCheck, X, QrCode, CreditCard, ShieldCheck, Award } from 'lucide-react';

export default function PlansPage() {
  const [activeTab, setActiveTab] = useState('strength'); // 'strength', 'combo', 'pt'
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    paymentMethod: 'online_upi'
  });

  // 1. WITHOUT CARDIO PLANS (Standard Strength)
  const strengthPlans = [
    {
      title: "Monthly Pass",
      price: "800",
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
      price: "1800",
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
      price: "1000",
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
      price: "2400",
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

  // 3. PERSONAL TRAINING (PT) PLANS
  const ptPlans = [
    {
      title: "1 Month PT Program",
      price: "2500",
      period: "for 1 month",
      popular: false,
      tag: "Personal Training",
      features: [
        "1-on-1 Dedicated Personal Trainer",
        "Customized Daily Workout Routine",
        "Strict Diet & Nutrition Charting",
        "Form Correction & Injury Prevention",
        "Full Gym + Cardio Access Included"
      ]
    },
    {
      title: "3 Months PT Transformation",
      price: "6000",
      period: "for 3 months",
      popular: true,
      tag: "Ultimate Transformation (Save ₹1,500)",
      features: [
        "Dedicated 1-on-1 Expert Coach (90 Days)",
        "Advanced Muscle Building / Fat Loss Protocol",
        "Weekly Body Composition Tracking",
        "Customized Meal & Supplement Guidance",
        "Free Iron Studio Shaker + Priority Access"
      ]
    }
  ];

  const currentPlans = activeTab === 'strength' ? strengthPlans : activeTab === 'combo' ? comboPlans : ptPlans;

  const handleOpenForm = (plan) => {
    const categoryName = activeTab === 'strength' ? 'Without Cardio' : activeTab === 'combo' ? 'With Cardio' : 'Personal Training';
    setSelectedPlan({
      ...plan,
      category: categoryName
    });
    setIsFormOpen(true);
    setIsSuccess(false);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Kripya apna Name aur Phone Number zaroor bharein!");
      return;
    }

    const newMemberRecord = {
      id: `IS-${Math.floor(100 + Math.random() * 900)}`,
      name: formData.name,
      plan: `${selectedPlan.title} (${selectedPlan.category})`,
      amount: `₹${selectedPlan.price}`,
      joined: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: "Active"
    };

    const existingMembers = JSON.parse(localStorage.getItem('gym_members_list')) || [
      { id: "IS-101", name: "Rohan Patel", plan: "Cardio + Strength (3 Months)", amount: "₹2,400", joined: "12 Oct 2026", status: "Active" },
      { id: "IS-102", name: "Aman Sharma", plan: "Standard Strength (Monthly)", amount: "₹800", joined: "08 Oct 2026", status: "Active" }
    ];

    const updatedList = [newMemberRecord, ...existingMembers];
    localStorage.setItem('gym_members_list', JSON.stringify(updatedList));

    setIsSuccess(true);
  };

  return (
    <div className="py-16 lg:py-24 bg-[#020617] text-slate-100 min-h-screen font-sans relative">
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
            Choose between standard strength, cardio combo, or dedicated personal training programs.
          </p>

          {/* 3 Tabs Toggle */}
          <div className="flex justify-center pt-4">
            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-2xl flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveTab('strength')}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all cursor-pointer ${
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
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all cursor-pointer ${
                  activeTab === 'combo'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Flame className="w-4 h-4 text-amber-400" />
                <span>With Cardio</span>
              </button>

              <button
                onClick={() => setActiveTab('pt')}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all cursor-pointer ${
                  activeTab === 'pt'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Personal Training</span>
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
                  <span className="text-5xl font-black text-white">₹{plan.price}</span>
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

              <button 
                onClick={() => handleOpenForm(plan)}
                className={`mt-8 w-full py-4 rounded-xl font-bold uppercase text-xs tracking-wider transition-all text-center block cursor-pointer ${
                  plan.popular 
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/25 active:scale-95' 
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 active:scale-95'
                }`}
              >
                Join Now & Register
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* ------------------------------------------------------------------ */}
      {/* MEMBERSHIP REGISTRATION & PHONEPE PAYMENT MODAL */}
      {/* ------------------------------------------------------------------ */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button 
              onClick={() => setIsFormOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full bg-slate-950 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <>
                <div>
                  <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 mb-1">
                    <UserCheck className="w-4 h-4" /> Gym Membership Enrollment
                  </span>
                  <h2 className="text-2xl font-black text-white uppercase">Complete Registration</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Selected Plan: <strong className="text-white">{selectedPlan?.title} ({selectedPlan?.category})</strong> • <span className="text-cyan-400 font-bold">₹{selectedPlan?.price}</span>
                  </p>
                </div>

                <form onSubmit={handleSubmitForm} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase block mb-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-cyan-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase block mb-1">Mobile / WhatsApp Number</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. 98260XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-cyan-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase block mb-1">Select Payment Method</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: 'online_upi' })}
                        className={`p-3 rounded-xl border text-left flex flex-col justify-between transition cursor-pointer ${
                          formData.paymentMethod === 'online_upi' 
                            ? 'bg-cyan-500/10 border-cyan-500 text-white' 
                            : 'bg-slate-950 border-slate-800 text-slate-400'
                        }`}
                      >
                        <QrCode className="w-5 h-5 text-cyan-400 mb-2" />
                        <span className="text-xs font-bold uppercase">PhonePe QR Code</span>
                        <span className="text-[10px] text-slate-400">Scan & Pay via PhonePe</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: 'gym_counter' })}
                        className={`p-3 rounded-xl border text-left flex flex-col justify-between transition cursor-pointer ${
                          formData.paymentMethod === 'gym_counter' 
                            ? 'bg-cyan-500/10 border-cyan-500 text-white' 
                            : 'bg-slate-950 border-slate-800 text-slate-400'
                        }`}
                      >
                        <CreditCard className="w-5 h-5 text-amber-400 mb-2" />
                        <span className="text-xs font-bold uppercase">Pay At Gym Counter</span>
                        <span className="text-[10px] text-slate-400">Cash / Machine</span>
                      </button>
                    </div>
                  </div>

                  {/* PhonePe QR Code Container */}
                  {formData.paymentMethod === 'online_upi' && (
                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-center space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-400 uppercase">Scan & Pay Amount:</span>
                        <span className="text-sm font-black text-white bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-lg">₹{selectedPlan?.price}</span>
                      </div>

                      {/* PhonePe QR Image Box */}
                      <div className="w-48 bg-black p-2 mx-auto rounded-2xl border border-slate-800 shadow-xl">
                        <img 
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(`upi://pay?pa=paraschandrawanshi@phonepe&pn=PARAS%20CHANDRAWANSHI&am=${selectedPlan?.price}&cu=INR`)}`}
                          alt="PhonePe QR - Paras Chandrawanshi" 
                          className="w-full h-auto rounded-xl object-contain bg-white p-1"
                        />
                      </div>

                      <div className="space-y-0.5">
                        <span className="text-xs font-extrabold text-white block uppercase">PARAS CHANDRAWANSHI</span>
                        <span className="text-[10px] text-slate-400 block">PhonePe UPI Accepted Here</span>
                      </div>
                    </div>
                  )}

                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold uppercase text-xs tracking-wider py-4 rounded-xl transition shadow-lg shadow-cyan-500/25 cursor-pointer"
                  >
                    Confirm Registration & Submit
                  </button>
                </form>
              </>
            ) : (
              /* Success Confirmation Box */
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase">Registration Successful!</h3>
                <p className="text-xs text-slate-300">
                  Congratulations <strong className="text-cyan-400">{formData.name}</strong>, aapka membership register ho gaya hai aur record Admin Dashboard par update ho chuka hai!
                </p>
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold uppercase text-xs px-6 py-3 rounded-xl cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}