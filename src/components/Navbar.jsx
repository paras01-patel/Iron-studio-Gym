import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, ShoppingBag, Zap, User, LogOut, ChevronDown, UserCircle } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function Navbar({ cartCount = 2 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Check login status whenever route changes
  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    const savedName = localStorage.getItem('loggedInUserName') || 'Member';

    if (userLoggedIn || adminLoggedIn) {
      setIsLoggedIn(true);
      setUserName(adminLoggedIn ? 'Admin' : savedName);
    } else {
      setIsLoggedIn(false);
      setUserName('');
    }
  }, [location]);

  // Handle Login Click
  const handleLoginRedirect = () => {
    setIsOpen(false);
    navigate('/login');
  };

  // Handle Profile Click
  const handleProfileRedirect = () => {
    setShowDropdown(false);
    setIsOpen(false);
    navigate('/profile');
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('loggedInUserName');
    setIsLoggedIn(false);
    setShowDropdown(false);
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <nav className="bg-[#020617]/90 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-50 transition-all font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="relative p-2.5 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-all">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white tracking-wider uppercase leading-none">
              IRON STUDIO <span className="text-cyan-400">GYM</span>
            </span>
            <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-0.5">
              Fitness & Supplements
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300 font-semibold text-xs uppercase tracking-widest">
          <li>
            <Link to="/" className="hover:text-cyan-400 transition-colors duration-200">Home</Link>
          </li>
          <li>
            <Link to="/aboutpage" className="hover:text-cyan-400 transition-colors duration-200">About Us</Link>
          </li>
          <li>
            <Link to="/planspage" className="hover:text-cyan-400 transition-colors duration-200">Membership</Link>
          </li>
          <li>
            <Link to="/store" className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5 group">
              <span>Store</span>
              <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-black px-1.5 py-0.5 rounded tracking-normal group-hover:bg-emerald-500 group-hover:text-white transition-all">
                SUPPS
              </span>
            </Link>
          </li>
          <li>
            <Link to="/trainers" className="hover:text-cyan-400 transition-colors duration-200">Trainers</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors duration-200">Contact</Link>
          </li>
        </ul>

        {/* Desktop Right Side Actions */}
        <div className="hidden md:flex items-center gap-5">
          {/* Cart Icon */}
          <button className="relative p-2.5 text-slate-300 hover:text-cyan-400 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-xl transition-all shadow-inner cursor-pointer">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-lg shadow-cyan-500/40 border border-[#020617]">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Name Badge OR Login Button */}
          {isLoggedIn ? (
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl transition cursor-pointer text-white"
              >
                <div className="w-7 h-7 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg flex items-center justify-center font-bold text-xs uppercase">
                  {userName.charAt(0)}
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wide text-cyan-400">
                  {userName}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* User Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 space-y-1">
                  <div className="px-3 py-2 border-b border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Logged in as</span>
                    <span className="text-xs font-black text-white truncate block">{userName}</span>
                  </div>

                  {/* Profile Page Redirect Button */}
                  <button
                    onClick={handleProfileRedirect}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-xl transition cursor-pointer"
                  >
                    <UserCircle className="w-4 h-4 text-cyan-400" />
                    <span>My Profile</span>
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase text-rose-400 hover:bg-rose-500/10 rounded-xl transition cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={handleLoginRedirect}
              className="relative group overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 fill-white" />
                Login 
              </span>
            </button>
          )}
        </div>

        {/* Mobile View Right Side Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button className="relative p-2 text-slate-300 hover:text-cyan-400 bg-slate-900 border border-slate-800 rounded-lg">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-slate-300 hover:text-cyan-400 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-slate-800 px-6 py-6 space-y-4 shadow-2xl">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest">Home</Link>
          <Link to="/aboutpage" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest">About Us</Link>
          <Link to="/planspage" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest">Membership Plans</Link>
          <Link to="/store" onClick={() => setIsOpen(false)} className="flex items-center justify-between text-slate-300 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest">
            <span>Store / Supplements</span>
            <span className="bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded">NEW</span>
          </Link>
          <Link to="/trainers" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest">Trainers</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest">Contact</Link>
          
          <div className="pt-2 border-t border-slate-800">
            {isLoggedIn ? (
              <div className="space-y-3">
                <div 
                  onClick={handleProfileRedirect}
                  className="flex items-center gap-2 bg-slate-900 p-3 rounded-xl border border-slate-800 cursor-pointer hover:border-cyan-500 transition"
                >
                  <UserCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-bold text-white uppercase">{userName} (View Profile)</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="w-full bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white py-3 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer border border-rose-500/30"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={handleLoginRedirect}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-bold uppercase text-xs tracking-wider shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-white" />
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}