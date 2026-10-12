import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Phone, 
  ShieldCheck, 
  Dumbbell, 
  Calendar, 
  CreditCard, 
  LogOut, 
  MessageSquare, 
  CheckCircle2,
  Clock,
  Award,
  Zap,
  ShoppingBag,
  Package
} from 'lucide-react';

export default function ProfilePage() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    role: 'Member'
  });
  const [userMemberships, setUserMemberships] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
  const [userInquiries, setUserInquiries] = useState([]);
  const [activeTab, setActiveTab] = useState('memberships'); // 'memberships', 'orders', 'inquiries'

  const navigate = useNavigate();

  useEffect(() => {
    // 1. Check Login Status
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    const savedName = localStorage.getItem('loggedInUserName') || '';
    const savedPhone = localStorage.getItem('loggedInUserPhone') || '';

    if (!isUserLoggedIn && !isAdminLoggedIn) {
      navigate('/login');
      return;
    }

    setUserInfo({
      name: savedName || (isAdminLoggedIn ? 'Admin Console' : 'Valued Member'),
      phone: savedPhone || '+91 98260XXXXX',
      role: isAdminLoggedIn ? 'Administrator' : 'Gym Member'
    });

    const currentNameLower = savedName.trim().toLowerCase();
    const currentPhoneClean = savedPhone.replace(/[^0-9]/g, '');

    // 2. Load User-Specific Membership Plans
    const allMembers = JSON.parse(localStorage.getItem('gym_members_list')) || [];
    const myMemberships = allMembers.filter((m) => {
      const mName = (m.name || '').trim().toLowerCase();
      const mPhone = (m.phone || '').replace(/[^0-9]/g, '');
      return (currentNameLower && mName === currentNameLower) || (currentPhoneClean && mPhone === currentPhoneClean);
    });
    setUserMemberships(myMemberships);

    // 3. Load User-Specific Supplement Store Orders
    const allOrders = JSON.parse(localStorage.getItem('gym_store_orders')) || [];
    const myOrders = allOrders.filter((o) => {
      const oName = (o.userName || o.name || '').trim().toLowerCase();
      const oPhone = (o.userPhone || o.phone || '').replace(/[^0-9]/g, '');
      return (currentNameLower && oName === currentNameLower) || (currentPhoneClean && oPhone === currentPhoneClean);
    });
    setUserOrders(myOrders);

    // 4. Load User-Specific Inquiries
    const allInquiries = JSON.parse(localStorage.getItem('gym_inquiries_list')) || [];
    const myInquiries = allInquiries.filter((inq) => {
      const iName = (inq.name || '').trim().toLowerCase();
      const iPhone = (inq.phone || '').replace(/[^0-9]/g, '');
      return (currentNameLower && iName === currentNameLower) || (currentPhoneClean && iPhone === currentPhoneClean);
    });
    setUserInquiries(myInquiries);

  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('loggedInUserName');
    localStorage.removeItem('loggedInUserPhone');
    navigate('/login');
  };

  return (
    <div className="bg-[#020617] text-slate-100 min-h-screen py-12 lg:py-20 font-sans selection:bg-cyan-500 selection:text-white">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        
        {/* HEADER PROFILE USER CARD */}
        <div className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-center sm:text-left">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center font-black text-3xl text-white shadow-xl shadow-cyan-500/20 shrink-0">
              {userInfo.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> {userInfo.role}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
                {userInfo.name}
              </h1>
              <p className="text-slate-400 text-xs mt-1 flex items-center justify-center sm:justify-start gap-2 font-mono">
                <Phone className="w-3.5 h-3.5 text-slate-500" /> {userInfo.phone}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-500/30 px-5 py-3 rounded-2xl text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout Account</span>
          </button>
        </div>

        {/* TABS SWITCHER */}
        <div className="flex bg-slate-900 border border-slate-800 p-1.5 rounded-2xl max-w-md gap-2">
          <button
            onClick={() => setActiveTab('memberships')}
            className={`flex-1 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'memberships'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Dumbbell className="w-4 h-4" />
            <span>Memberships ({userMemberships.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'orders'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Orders ({userOrders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex-1 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'inquiries'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquiries ({userInquiries.length})</span>
          </button>
        </div>

        {/* TAB 1: USER MEMBERSHIPS */}
        {activeTab === 'memberships' && (
          <div className="space-y-6">
            {userMemberships.length > 0 ? (
              userMemberships.map((m, idx) => (
                <div key={idx} className="bg-gradient-to-b from-slate-900 to-[#0c1630] border border-cyan-500/40 p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <Zap className="w-4 h-4 fill-cyan-400" /> Member Pass ID: {m.id}
                    </span>
                    <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase px-3 py-1 rounded-full">
                      {m.status || 'Active'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white uppercase">{m.plan}</h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80 pt-6 mt-6">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Amount Paid</span>
                      <span className="text-sm font-black text-white">{m.amount}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Joined Date</span>
                      <span className="text-xs font-bold text-slate-300">{m.joined}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Location</span>
                      <span className="text-xs font-bold text-slate-300">Bagmugaliya Center</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center space-y-4">
                <Dumbbell className="w-12 h-12 text-slate-600 mx-auto" />
                <h4 className="text-white font-bold text-base uppercase">No Active Memberships Found</h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Aapne abhi tak koi gym plan purchase nahi kiya hai.
                </p>
                <button
                  onClick={() => navigate('/planspage')}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase text-xs px-6 py-3 rounded-xl transition cursor-pointer"
                >
                  Buy Membership Now
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: STORE ORDERS */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            {userOrders.length > 0 ? (
              userOrders.map((ord, idx) => (
                <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-2xl flex items-center justify-center shrink-0">
                      <Package className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-white text-base">{ord.productName || ord.item}</span>
                        <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[10px] px-2 py-0.5 rounded-md font-bold uppercase">{ord.category || 'Supplement'}</span>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 block mt-1">Total: ₹{ord.price || ord.amount}</span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">Ordered On: {ord.date || 'Recently'}</span>
                    </div>
                  </div>

                  <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    {ord.status || 'Confirmed'}
                  </span>
                </div>
              ))
            ) : (
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center space-y-4">
                <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
                <h4 className="text-white font-bold text-base uppercase">No Orders Placed Yet</h4>
                <p className="text-xs text-slate-400">Aapne store se koi supplements order nahi kiya hai.</p>
                <button
                  onClick={() => navigate('/store')}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase text-xs px-6 py-3 rounded-xl transition cursor-pointer"
                >
                  Visit Store Page
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: SUBMITTED INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            {userInquiries.length > 0 ? (
              userInquiries.map((inq, idx) => (
                <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-3xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase border border-cyan-500/30">
                      {inq.interest}
                    </span>
                    <span className="text-[10px] text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {inq.date} at {inq.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 italic bg-slate-950 p-3 rounded-xl border border-slate-800/80 mt-2">
                    "{inq.message}"
                  </p>
                </div>
              ))
            ) : (
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center space-y-4">
                <MessageSquare className="w-12 h-12 text-slate-600 mx-auto" />
                <h4 className="text-white font-bold text-base uppercase">No Inquiries Found</h4>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase text-xs px-6 py-3 rounded-xl transition cursor-pointer"
                >
                  Ask a Question
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}