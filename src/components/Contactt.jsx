import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  MessageSquare, 
  ShieldCheck, 
  Dumbbell,
  CheckCircle2
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Kripya apna Naam aur Phone Number zaroor bharein!");
      return;
    }

    // Create New Inquiry Object for Admin Panel
    const newInquiry = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      interest: formData.interest,
      message: formData.message || "I want to visit or join the gym.",
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Save strictly to LocalStorage for Admin Dashboard
    const existingInquiries = JSON.parse(localStorage.getItem('gym_inquiries_list')) || [];
    const updatedInquiries = [newInquiry, ...existingInquiries];
    localStorage.setItem('gym_inquiries_list', JSON.stringify(updatedInquiries));

    // Show Success Alert on Screen
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', interest: 'General Inquiry', message: '' });
  };

  return (
    <div className="bg-[#020617] text-slate-100 min-h-screen py-16 lg:py-24 font-sans selection:bg-cyan-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Get In Touch With Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Iron Studio Gym</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Have questions about membership fees, personal training, or supplement availability? Visit our center in Bagmugaliya or drop a message.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: CONTACT INFO & DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location Card */}
            <div className="bg-slate-900/80 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-black text-base uppercase">Bhopal Center Location</h3>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    Sangam Colony, Bagmugaliya, Bhopal, Madhya Pradesh 462043
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">WhatsApp / Call Us</span>
                    <a href="tel:+916263442343" className="text-white font-bold text-sm hover:text-cyan-400 transition">
                      +91 62634-42343
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Working Hours</span>
                    <span className="text-white font-bold text-sm">Mon - Sat: 5:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a 
                href="https://wa.me/916263442343?text=Hello%20Iron%20Studio%20Gym,%20I%20want%20to%20inquire%20about%20gym%20membership."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase text-xs tracking-wider py-3.5 rounded-xl transition shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly On WhatsApp</span>
              </a>
            </div>

            {/* Quick Map Simulation Box */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl space-y-3 text-center">
              <Dumbbell className="w-8 h-8 text-cyan-400 mx-auto" />
              <h4 className="text-white font-bold text-sm uppercase">Easy Landmark Access</h4>
              <p className="text-slate-400 text-xs">
                Located right in the heart of Bagmugaliya near Sangam Colony with ample parking space for bikes and cars.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT / INQUIRY FORM */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6">
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Send Us An Inquiry</h3>
              <p className="text-slate-400 text-xs mt-1">Fill out the form below and our team will review it in the Admin Dashboard.</p>
            </div>

            {submitted && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-2xl text-xs font-semibold flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you! Your inquiry has been sent directly to the Admin Dashboard.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase block mb-1.5">Your Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white focus:border-cyan-500 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase block mb-1.5">Phone Number *</label>
                  <input 
                    type="tel" 
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white focus:border-cyan-500 outline-none transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 uppercase block mb-1.5">I am interested in</label>
                <select 
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white focus:border-cyan-500 outline-none transition"
                >
                  <option value="Standard Strength Membership">Standard Strength Membership (₹800/mo)</option>
                  <option value="Cardio + Strength Membership">Cardio + Strength Membership (₹1,000/mo)</option>
                  <option value="Personal Training Inquiry">Personal Training Inquiry (₹2,500/mo)</option>
                  <option value="Supplement Store Purchase">Supplement Store Purchase</option>
                  <option value="General Inquiry">General Inquiry / Gym Visit</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 uppercase block mb-1.5">Message / Questions (Optional)</label>
                <textarea 
                  rows="4"
                  placeholder="Ask about timings, trainers, or specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-white focus:border-cyan-500 outline-none transition resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold uppercase text-xs tracking-wider py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/25 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}