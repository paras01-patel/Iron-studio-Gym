import React from 'react';
import ParasPhoto from '../assets/formalll.jpeg'; // Imported Image Asset
import { 
  ShieldCheck, 
  Award, 
  Dumbbell, 
  MessageSquare, 
  Star, 
  CheckCircle,
  Clock
} from 'lucide-react';

export default function TrainersPage() {
  const trainers = [
    {
      id: 1,
      name: "Paras Patel", 
      role: "Certified Fitness & Strength Trainer",
      experience: "1 Year Professional Experience",
      specialty: "Strength Training, Muscle Building & Fat Loss",
      bio: "Dedicated fitness professional at Iron Studio Gym, Bhopal, helping members build strength, correct form, and achieve sustainable physique transformations.",
      // Yahan import kiya hua variable ParasPhoto use kiya hai
      image: ParasPhoto, 
      rating: "5.0",
      badge: "Lead Trainer"
    },
    {
      id: 2,
      name: "Vikram Singh",
      role: "Head Strength & Conditioning Coach",
      experience: "6+ Years Experience",
      specialty: "Powerlifting, Hypertrophy & Athletic Conditioning",
      bio: "Specialized in advanced lifting mechanics, progressive overload principles, and customized diet scheduling for serious athletes.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
      rating: "4.9",
      badge: "Master Coach"
    },
    {
      id: 3,
      name: "Sameer Khan",
      role: "Cardio & Fat Loss Specialist",
      experience: "4+ Years Experience",
      specialty: "HIIT, Functional Training & Core Conditioning",
      bio: "Expert in endurance building, high-intensity interval training, and fat loss programs tailored for beginners and intermediates.",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
      rating: "4.8",
      badge: "Fitness Expert"
    }
  ];

  return (
    <div className="bg-[#020617] text-slate-100 min-h-screen py-16 lg:py-24 font-sans selection:bg-cyan-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Expert Guidance & Mentorship
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Iron Studio <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Certified Trainers</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Train under certified professionals at Bagmugaliya, Bhopal who push your limits, monitor your posture, and engineer your transformation.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div 
              key={trainer.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Trainer Photo & Badge */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-950">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      // Agar local asset path galat ho toh default image dikhegi
                      e.target.src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90"></div>
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30 text-[10px] px-3 py-1 rounded-full uppercase font-black tracking-widest shadow-lg">
                    {trainer.badge}
                  </span>

                  {/* Rating */}
                  <span className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/30 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-lg">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> {trainer.rating}
                  </span>

                  {/* Experience Tag over Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                    <span className="bg-cyan-500/20 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-bold px-3 py-1 rounded-xl flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {trainer.experience}
                    </span>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-black text-white uppercase tracking-wide">{trainer.name}</h3>
                    <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider mt-0.5">{trainer.role}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {trainer.bio}
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block tracking-wider">Specialization:</span>
                    <span className="inline-block bg-slate-950 border border-slate-800 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-xl">
                      {trainer.specialty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Consult on WhatsApp Button */}
              <div className="p-6 pt-0">
                <a 
                  href={`https://wa.me/916263442343?text=${encodeURIComponent(`Hello Iron Studio Gym, I want to train under ${trainer.name} for personal fitness guidance.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-800 hover:bg-cyan-500 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-500 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                  <span>Train With {trainer.name.split(' ')[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0c1836] to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
          <div className="space-y-2">
            <h4 className="text-white font-black text-xl uppercase tracking-tight flex items-center justify-center md:justify-start gap-2">
              <Award className="w-6 h-6 text-cyan-400" /> Want Personal 1-on-1 Training?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Get customized workout routines, diet charts, and personal supervision from our expert coaches at our Bagmugaliya, Bhopal center.
            </p>
          </div>

          <a 
            href="https://wa.me/916263442343?text=Hello%20Iron%20Studio%20Gym,%20I%20want%20to%20book%20a%20Personal%20Trainer." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/20 shrink-0 transition"
          >
            Book Personal Training
          </a>
        </div>

      </div>
    </div>
  );
}