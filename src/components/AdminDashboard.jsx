import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  PackagePlus, 
  Users, 
  ShoppingBag, 
  TrendingUp, 
  Plus, 
  Trash2, 
  ShieldCheck, 
  Zap, 
  DollarSign, 
  Activity 
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' or 'products'

  // Initial Product List (Mock Database)
  const [products, setProducts] = useState([
    { id: 1, name: "100% Whey Isolate Protein 2kg", category: "Proteins", price: "₹4,999", stock: "In Stock" },
    { id: 2, name: "Pure Creatine Monohydrate 250g", category: "Creatine", price: "₹899", stock: "In Stock" },
    { id: 3, name: "Nitro Explosive Pre-Workout", category: "Pre-Workout", price: "₹1,499", stock: "Low Stock" },
    { id: 4, name: "Natural Chocolate Peanut Butter 1kg", category: "Fitness Foods", price: "₹399", stock: "In Stock" }
  ]);

  // Form State for Adding New Product
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Proteins',
    price: '',
    stock: 'In Stock'
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) {
      alert("Please enter product name and price!");
      return;
    }

    const itemToAdd = {
      id: products.length + 1,
      name: newProduct.name,
      category: newProduct.category,
      price: newProduct.price.startsWith('₹') ? newProduct.price : `₹${newProduct.price}`,
      stock: newProduct.stock
    };

    setProducts([itemToAdd, ...products]);
    setNewProduct({ name: '', category: 'Proteins', price: '', stock: 'In Stock' });
    alert("Product added successfully!");
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(item => item.id !== id));
  };

  return (
    <div className="bg-[#020617] text-slate-100 min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-3xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-2xl flex items-center justify-center font-black">
              IS
            </div>
            <div>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Authorized Administrator
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Iron Studio Admin Dashboard
              </h1>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex bg-slate-950 border border-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                activeTab === 'overview' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                activeTab === 'products' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Manage Products
            </button>
          </div>
        </div>

        {/* TAB 1: OVERVIEW & STATS */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-2">
                <div className="flex justify-between items-center text-slate-400">
                  <span className="text-xs uppercase font-bold tracking-wider">Active Members</span>
                  <Users className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-black text-white">528</h3>
                <span className="text-[11px] text-emerald-400 font-bold">+18% this month</span>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-2">
                <div className="flex justify-between items-center text-slate-400">
                  <span className="text-xs uppercase font-bold tracking-wider">Monthly Revenue</span>
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-black text-white">₹4,28,500</h3>
                <span className="text-[11px] text-emerald-400 font-bold">Gym + Store Sales</span>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-2">
                <div className="flex justify-between items-center text-slate-400">
                  <span className="text-xs uppercase font-bold tracking-wider">Store Products</span>
                  <ShoppingBag className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-black text-white">{products.length} Items</h3>
                <span className="text-[11px] text-slate-400 font-bold">Active in Catalog</span>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-2">
                <div className="flex justify-between items-center text-slate-400">
                  <span className="text-xs uppercase font-bold tracking-wider">Location</span>
                  <Activity className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase">Bagmugaliya, Bhopal</h3>
                <span className="text-[11px] text-slate-400 font-bold">5 AM - 10 PM Open</span>
              </div>
            </div>

            {/* Recent Membership Inquiries Section */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-black text-white uppercase tracking-wider">Recent WhatsApp Inquiries</h3>
                <span className="text-xs text-cyan-400 font-bold">Live Feed</span>
              </div>

              <div className="divide-y divide-slate-800 text-xs">
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-white block text-sm">Amit S. (Bagmugaliya)</span>
                    <span className="text-slate-400">Inquired about: Cardio + Strength (3 Months Pack)</span>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-bold">
                    WhatsApp Redirected
                  </span>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-white block text-sm">Rohit P. (Arera Colony)</span>
                    <span className="text-slate-400">Inquired about: 100% Whey Isolate Protein</span>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-bold">
                    WhatsApp Redirected
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MANAGE & ADD PRODUCTS */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Add Product Form */}
            <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 p-6 rounded-3xl space-y-6 h-fit">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest">
                <PackagePlus className="w-4 h-4" />
                <span>Add New Supplement / Gear</span>
              </div>

              <form onSubmit={handleAddProduct} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 font-bold uppercase block mb-1">Product Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Mass Gainer 3kg"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 font-bold uppercase block mb-1">Category</label>
                  <select 
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-cyan-500 outline-none"
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
                  <label className="text-xs text-slate-400 font-bold uppercase block mb-1">Price (₹)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 2499"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-cyan-500 outline-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase text-xs tracking-wider py-3.5 rounded-xl transition shadow-lg shadow-cyan-500/20 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish Product</span>
                </button>
              </form>
            </div>

            {/* Product List Table */}
            <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-black text-white uppercase tracking-wider">Current Store Inventory</h3>
                <span className="text-xs text-slate-400">{products.length} Total Items</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase">
                      <th className="pb-3 font-bold">Product Name</th>
                      <th className="pb-3 font-bold">Category</th>
                      <th className="pb-3 font-bold">Price</th>
                      <th className="pb-3 font-bold">Status</th>
                      <th className="pb-3 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {products.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-800/40 transition">
                        <td className="py-4 font-bold text-white">{item.name}</td>
                        <td className="py-4 text-cyan-400 font-semibold">{item.category}</td>
                        <td className="py-4 font-black text-white">{item.price}</td>
                        <td className="py-4">
                          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase">
                            {item.stock}
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <button 
                            onClick={() => handleDeleteProduct(item.id)}
                            className="p-2 bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white rounded-lg transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}