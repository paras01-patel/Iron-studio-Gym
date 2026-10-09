import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Dumbbell, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  UserCheck
} from 'lucide-react';

export default function LoginPage() {
  const [role, setRole] = useState('member'); // 'member' or 'admin'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Kripya email aur password dono enter karein!");
      return;
    }

    if (role === 'admin') {
      alert("Admin Access Granted!");
      navigate('/admin'); // Redirects to Admin Dashboard
    } else {
      alert("Welcome back to Iron Studio Gym!");
      navigate('/'); // Redirects to Home Page
    }
  };

  return (
    <div className="bg-[#020617] text-slate-100 min-h-screen py-16 flex items-center justify-center font-sans relative overflow-hidden">
      
      {/* Glow Effects Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-md w-full mx-auto px-6 relative z-10">
        
        {/* Brand Header */}
        <div className="text-center space-y-3 mb-8">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-all">
              <Dumbbell className="w-8 h-8 text-white" />
            </div>
          </Link>
          <h1 className="text-3xl font-black text-white uppercase tracking-wider">
            IRON STUDIO <span className="text-cyan-400">GYM</span>
          </h1>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
            Sangam Colony, Bagmugaliya, Bhopal
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur-md space-y-6">
          
          {/* Role Selection Switcher */}
          <div className="flex bg-slate-950 border border-slate-800 p-1 rounded-2xl">
            <button
              type="button"
              onClick={() => setRole('member')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                role === 'member'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Member Login</span>
            </button>

            <button
              type="button"
              onClick={() => setRole('admin')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                role === 'admin'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Admin Portal</span>
            </button>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-bold text-white uppercase">
              {role === 'admin' ? 'Admin Security Sign-In' : 'Welcome Back, Lifter'}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {role === 'admin' ? 'Access gym metrics & inventory management.' : 'Enter your registered credentials to continue.'}
            </p>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase block mb-1.5">Email Address / Phone</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder={role === 'admin' ? 'admin@ironstudio.com' : 'Enter registered email or phone'} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3.5 text-xs text-white focus:border-cyan-500 outline-none transition"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase">Password</label>
                <a href="#forgot" className="text-[10px] text-cyan-400 font-semibold hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-10 py-3.5 text-xs text-white focus:border-cyan-500 outline-none transition"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold uppercase text-xs tracking-wider py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/25 active:scale-95 flex items-center justify-center gap-2 pt-3.5"
            >
              <span>{role === 'admin' ? 'Access Admin Console' : 'Sign In To Account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Registration Footer */}
          <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-400">
            <span>New to Iron Studio Gym? </span>
            <a 
              href={`https://wa.me/916263442343?text=${encodeURIComponent("Hello Iron Studio Gym, I want to create a new membership account.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-bold hover:underline"
            >
              Register Via WhatsApp
            </a>
          </div>

        </div>

        {/* Back To Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-xs text-slate-400 hover:text-white font-semibold">
            ← Back To Main Website
          </Link>
        </div>

      </div>
    </div>
  );
}