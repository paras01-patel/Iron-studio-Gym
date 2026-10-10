import React, { useState, useEffect } from 'react';
import { 
  PackagePlus, 
  Trash2, 
  ShieldCheck, 
  MessageSquare,
  Search,
  Dumbbell,
  LogOut,
  Image as ImageIcon,
  CheckCircle2,
  Plus,
  Users,
  Phone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'products', 'inquiries', 'members'
  const [searchQuery, setSearchQuery] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  
  // States
  const [products, setProducts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [members, setMembers] = useState([]);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/login');
  };

  // Initial Default Products
  const initialProducts = [
    { 
      id: 1, 
      name: "100% Whey Isolate Protein 2kg", 
      category: "Proteins", 
      price: "4,999", 
      rating: "4.9", 
      tag: "Best Seller", 
      weight: "2 Kg (66 Servings)",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 2, 
      name: "Whey Concentrate Performance 1kg", 
      category: "Proteins", 
      price: "2,499", 
      rating: "4.8", 
      tag: "Popular", 
      weight: "1 Kg (30 Servings)",
      image: "https://images.unsplash.com/photo-1579722820308-d7ccf7e14d3f?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 3, 
      name: "Pure Creatine Monohydrate Unflavored", 
      category: "Creatine", 
      price: "899", 
      rating: "4.9", 
      tag: "Must Have", 
      weight: "250g (83 Servings)",
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Load All Data from LocalStorage
  useEffect(() => {
    // 1. Load Products
    const savedProducts = localStorage.getItem('gym_store_products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem('gym_store_products', JSON.stringify(initialProducts));
    }

    // 2. Load Inquiries (From Contact Form)
    const savedInquiries = localStorage.getItem('gym_inquiries_list');
    if (savedInquiries) {
      setInquiries(JSON.parse(savedInquiries));
    }

    // 3. Load Registered Members
    const savedMembers = localStorage.getItem('gym_members_list');
    if (savedMembers) {
      setMembers(JSON.parse(savedMembers));
    } else {
      const defaultMembers = [
        { id: "IS-101", name: "Rohan Patel", plan: "Cardio + Strength (3 Months)", amount: "₹2,400", joined: "12 Oct 2026", status: "Active" },
        { id: "IS-102", name: "Aman Sharma", plan: "Standard Strength (Monthly)", amount: "₹800", joined: "08 Oct 2026", status: "Active" }
      ];
      setMembers(defaultMembers);
      localStorage.setItem('gym_members_list', JSON.stringify(defaultMembers));
    }
  }, []);

  // Form State for Adding Product
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Proteins',
    price: '',
    weight: '',
    image: '',
    tag: 'Best Seller'
  });

  // ADD PRODUCT FUNCTION
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) {
      alert("Kripya Product Title aur Price dono bharein!");
      return;
    }

    const itemToAdd = {
      id: Date.now(),
      name: newProduct.name,
      category: newProduct.category,
      price: newProduct.price.replace('₹', '').trim(),
      rating: "4.8",
      tag: newProduct.tag || 'Popular',
      weight: newProduct.weight || 'Standard Pack',
      image: newProduct.image.trim() || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'
    };

    const updatedList = [itemToAdd, ...products];
    setProducts(updatedList);
    localStorage.setItem('gym_store_products', JSON.stringify(updatedList));

    setNewProduct({ name: '', category: 'Proteins', price: '', weight: '', image: '', tag: 'Best Seller' });
    setSuccessMsg("Product live store page par add ho gaya!");
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  // DELETE PRODUCT FUNCTION
  const handleDeleteProduct = (id) => {
    if (window.confirm("Kya aap ise Store Page se PERMANENTLY delete karna chahte hain?")) {
      const filtered = products.filter(item => Number(item.id) !== Number(id));
      setProducts(filtered);
      localStorage.setItem('gym_store_products', JSON.stringify(filtered));
      setSuccessMsg("Product Store se successfully DELETE ho gaya!");
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  // DELETE INQUIRY FUNCTION
  const handleDeleteInquiry = (id) => {
    if (window.confirm("Kya aap is inquiry ko delete karna chahte hain?")) {
      const filtered = inquiries.filter(item => item.id !== id);
      setInquiries(filtered);
      localStorage.setItem('gym_inquiries_list', JSON.stringify(filtered));
      setSuccessMsg("Inquiry delete ho gayi!");
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredInquiries = inquiries.filter(inq => 
    inq.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    inq.phone.includes(searchQuery) ||
    inq.interest.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#020617] text-slate-100 min-h-screen py-8 sm:py-12 font-sans selection:bg-cyan-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        {/* TOP ADMIN HEADER & LOGOUT */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-cyan-500/20">
              <Dumbbell className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Authorized Admin Console
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-0.5">
                Iron Studio Control Center
              </h1>
              <p className="text-slate-400 text-xs mt-1">Bagmugaliya, Bhopal (MP 462043)</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap bg-slate-950 border border-slate-800 p-1.5 rounded-2xl gap-1">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'overview' ? 'bg-cyan-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'products' ? 'bg-cyan-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Inventory ({products.length})
              </button>
              <button
                onClick={() => setActiveTab('inquiries')}
                className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'inquiries' ? 'bg-cyan-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Inquiries ({inquiries.length})
              </button>
              <button
                onClick={() => setActiveTab('members')}
                className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'members' ? 'bg-cyan-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Members ({members.length})
              </button>
            </div>

            <button
              onClick={handleLogout}
              className="bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-500/30 px-4 py-3 rounded-2xl text-xs font-bold uppercase transition flex items-center gap-2 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Success Alert Banner */}
        {successMsg && (
          <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-2xl text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-3xl space-y-2">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Website Inquiries</span>
                <h3 className="text-3xl font-black text-cyan-400">{inquiries.length}</h3>
                <span className="text-[11px] text-slate-400">Total Leads Received</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-3xl space-y-2">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Registered Members</span>
                <h3 className="text-3xl font-black text-emerald-400">{members.length}</h3>
                <span className="text-[11px] text-slate-400">Active Membership Plans</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-3xl space-y-2">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Store Inventory</span>
                <h3 className="text-3xl font-black text-amber-400">{products.length}</h3>
                <span className="text-[11px] text-slate-400">Supplements Live on Store</span>
              </div>
            </div>

            {/* Recent Inquiries Feed */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" /> Recent Contact Form Inquiries
              </h3>

              <div className="space-y-3">
                {inquiries.length > 0 ? (
                  inquiries.slice(0, 5).map((inq) => (
                    <div key={inq.id} className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-white text-sm">{inq.name}</span>
                          <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[10px] px-2 py-0.5 rounded-md font-bold uppercase">{inq.interest}</span>
                        </div>
                        <p className="text-slate-300 text-xs mt-1">"{inq.message}"</p>
                        <span className="text-[10px] text-slate-500 mt-1 block">{inq.phone} • {inq.date}</span>
                      </div>
                      
                      <a 
                        href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${inq.name}, thanking you for contacting Iron Studio Gym regarding${inq.interest}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase flex items-center gap-1.5 shrink-0 self-start sm:self-center"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Chat WhatsApp</span>
                      </a>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-500 text-center py-6">Koi inquiries abhi nahi hain.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: STORE INVENTORY MANAGER */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* ADD PRODUCT FORM */}
            <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6 h-fit">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest pb-3 border-b border-slate-800">
                <PackagePlus className="w-4 h-4" />
                <span>Add Product to Store</span>
              </div>

              <form onSubmit={handleAddProduct} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-300 font-bold uppercase block mb-1">Product Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Whey Gold Protein 1kg"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-cyan-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 font-bold uppercase block mb-1">Category</label>
                    <select 
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-xs text-white focus:border-cyan-500 outline-none"
                    >
                      <option value="Proteins">Proteins</option>
                      <option value="Creatine">Creatine</option>
                      <option value="Mass Gainers">Mass Gainers</option>
                      <option value="Pre-Workout">Pre-Workout</option>
                      <option value="Fitness Foods">Fitness Foods</option>
                      <option value="Accessories">Accessories</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-bold uppercase block mb-1">Weight / Size</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 1 Kg"
                      value={newProduct.weight}
                      onChange={(e) => setNewProduct({...newProduct, weight: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-cyan-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 font-bold uppercase block mb-1">Price (₹)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 2,499"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-bold uppercase block mb-1">Badge Tag</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Best Seller"
                      value={newProduct.tag}
                      onChange={(e) => setNewProduct({...newProduct, tag: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-cyan-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-bold uppercase block mb-1 flex items-center gap-1">
                    <ImageIcon className="w-3.5 h-3.5 text-cyan-400" /> Image URL
                  </label>
                  <input 
                    type="url" 
                    placeholder="https://images.unsplash.com/..."
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-cyan-500 outline-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase text-xs tracking-wider py-4 rounded-xl transition shadow-lg shadow-cyan-500/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish Product</span>
                </button>
              </form>
            </div>

            {/* PRODUCT INVENTORY TABLE */}
            <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <h3 className="text-lg font-black text-white uppercase tracking-wider">Live Inventory ({filteredProducts.length})</h3>
                <div className="relative w-full sm:w-60">
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Search inventory..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:border-cyan-500 outline-none"
                  />
                </div>
              </div>

              <div className="overflow-x-auto max-h-[500px] overflow-y-auto pr-1">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase">
                      <th className="pb-3 font-bold">Photo</th>
                      <th className="pb-3 font-bold">Product Title</th>
                      <th className="pb-3 font-bold">Category</th>
                      <th className="pb-3 font-bold">Price</th>
                      <th className="pb-3 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-800/45 transition">
                          <td className="py-3">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-10 h-10 object-cover rounded-lg border border-slate-700 shrink-0" 
                              onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80";
                              }}
                            />
                          </td>
                          <td className="py-3 font-bold text-white">
                            {item.name}
                            <span className="text-[10px] text-slate-400 block">{item.weight}</span>
                          </td>
                          <td className="py-3 text-cyan-400 font-semibold">{item.category}</td>
                          <td className="py-3 font-black text-white">₹{item.price}</td>
                          <td className="py-3 text-right">
                            <button 
                              type="button"
                              onClick={() => handleDeleteProduct(item.id)}
                              className="p-2 bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white rounded-lg transition cursor-pointer"
                              title="Delete Product"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center py-12 text-slate-500 text-xs">
                          Koi products nahi hain.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CONTACT FORM INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" /> Website Inquiries ({filteredInquiries.length})
              </h3>
              
              <div className="relative w-full sm:w-60">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search inquiries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:border-cyan-500 outline-none"
                />
              </div>
            </div>

            <div className="space-y-3">
              {filteredInquiries.length > 0 ? (
                filteredInquiries.map((inq) => (
                  <div key={inq.id} className="p-5 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-extrabold text-white text-sm">{inq.name}</span>
                        <span className="text-slate-400 font-mono text-xs">({inq.phone})</span>
                        <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase">{inq.interest}</span>
                      </div>
                      <p className="text-slate-300 text-xs italic bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80 mt-2">"{inq.message}"</p>
                      <span className="text-[10px] text-slate-500 block pt-1">{inq.date} at {inq.time}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a 
                        href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${inq.name}, thanking you for contacting Iron Studio Gym.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase flex items-center gap-1.5 cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Chat WhatsApp</span>
                      </a>

                      <button 
                        onClick={() => handleDeleteInquiry(inq.id)}
                        className="p-2.5 bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white rounded-xl transition cursor-pointer"
                        title="Delete Inquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-500 text-center py-12">Koi inquiry nahi mili.</p>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: MEMBERS DIRECTORY */}
        {activeTab === 'members' && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" /> Registered Gym Members ({members.length})
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase">
                    <th className="pb-3 font-bold">Member ID</th>
                    <th className="pb-3 font-bold">Name</th>
                    <th className="pb-3 font-bold">Selected Plan</th>
                    <th className="pb-3 font-bold">Amount Paid</th>
                    <th className="pb-3 font-bold">Joined Date</th>
                    <th className="pb-3 font-bold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {members.map((m, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40">
                      <td className="py-3.5 font-mono text-cyan-400 font-bold">{m.id}</td>
                      <td className="py-3.5 font-bold text-white">{m.name}</td>
                      <td className="py-3.5 text-slate-300">{m.plan}</td>
                      <td className="py-3.5 font-black text-emerald-400">{m.amount}</td>
                      <td className="py-3.5 text-slate-400">{m.joined}</td>
                      <td className="py-3.5 text-right">
                        <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase">
                          {m.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}