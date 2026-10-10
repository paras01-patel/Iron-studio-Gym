import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, User, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    usernameOrName: '',
    phoneOrPassword: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const inputOne = formData.usernameOrName.trim();
    const inputTwo = formData.phoneOrPassword.trim();

    if (!inputOne || !inputTwo) {
      setErrorMsg('Kripya dono fields zaroor bharein!');
      return;
    }

    // -------------------------------------------------------------
    // 1. HARDCODED ADMIN CHECK (Username: admin, Password: admin123)
    // -------------------------------------------------------------
    if (inputOne.toLowerCase() === 'admin' && inputTwo === 'admin123') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      localStorage.setItem('isUserLoggedIn', 'false');
      localStorage.setItem('loggedInUserName', 'Admin');
      navigate('/admin');
      return;
    }

    // -------------------------------------------------------------
    // 2. REGULAR USER / MEMBER LOGIN (Name & Mobile Number)
    // -------------------------------------------------------------
    localStorage.setItem('isUserLoggedIn', 'true');
    localStorage.setItem('isAdminLoggedIn', 'false');
    localStorage.setItem('loggedInUserName', inputOne);
    localStorage.setItem('loggedInUserPhone', inputTwo);

    // Redirect to Home Page
    navigate('/');
  };

  return (
    <div className="bg-[#020617] text-slate-100 min-h-screen py-16 flex items-center justify-center font-sans selection:bg-cyan-500 selection:text-white px-4">
      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6 relative">
        
        {/* Header Icon & Title */}
        <div className="text-center space-y-3">
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg shadow-cyan-500/20">
            <Dumbbell className="w-7 h-7" />
          </div>
          <div>
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Iron Studio Gym Bhopal
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
              Account Login
            </h1>
            <p className="text-slate-400 text-xs mt-1">
              Members use Name & Phone • Admin use Admin ID
            </p>
          </div>
        </div>

        {/* Error Alert Box */}
        {errorMsg && (
          <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-3.5 rounded-xl text-xs font-semibold">
            {errorMsg}
          </div>
        )}

        {/* COMBINED SINGLE LOGIN FORM */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-300 uppercase block mb-1">
              Full Name / Admin Username *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="e.g. Rahul Sharma or 'admin'"
                value={formData.usernameOrName}
                onChange={(e) => setFormData({ ...formData, usernameOrName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3.5 text-xs text-white focus:border-cyan-500 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 uppercase block mb-1">
              Mobile Number / Password *
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="Mobile No. or Admin Password"
                value={formData.phoneOrPassword}
                onChange={(e) => setFormData({ ...formData, phoneOrPassword: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3.5 text-xs text-white focus:border-cyan-500 outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold uppercase text-xs tracking-wider py-4 rounded-xl transition shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer pt-3.5"
          >
            <span>Proceed & Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-2 border-t border-slate-800/80">
          <span className="text-[11px] text-slate-400 block">
            Bagmugaliya, Bhopal • Sangam Colony
          </span>
        </div>

      </div>
    </div>
  );
}