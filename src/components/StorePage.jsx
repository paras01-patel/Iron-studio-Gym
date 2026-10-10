import React, { useState, useEffect } from 'react';
import { ShoppingBag, Star, ShieldCheck, Search, Filter, Zap } from 'lucide-react';

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Initial Backup Products (Jab tak Admin ne custom updates na kiye hon)
  const defaultProducts = [
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
    },
    { 
      id: 4, 
      name: "Micronized Creatine Monohydrate 100g", 
      category: "Creatine", 
      price: "499", 
      rating: "4.7", 
      tag: "Budget Pack", 
      weight: "100g (33 Servings)",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 5, 
      name: "High-Calorie Mass Gainer 3kg", 
      category: "Mass Gainers", 
      price: "2,899", 
      rating: "4.8", 
      tag: "Bulking", 
      weight: "3 Kg Heavy Tub",
      image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 6, 
      name: "Clean Lean Mass Gainer 1kg", 
      category: "Mass Gainers", 
      price: "1,299", 
      rating: "4.6", 
      tag: "Lean Mass", 
      weight: "1 Kg Pack",
      image: "https://images.unsplash.com/photo-1579722820308-d7ccf7e14d3f?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 7, 
      name: "Nitro Explosive Pre-Workout Energy", 
      category: "Pre-Workout", 
      price: "1,499", 
      rating: "4.8", 
      tag: "High Caffeine", 
      weight: "300g (30 Servings)",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 8, 
      name: "Instant BCAA + Electrolytes Recovery", 
      category: "Pre-Workout", 
      price: "1,199", 
      rating: "4.7", 
      tag: "Recovery", 
      weight: "250g",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 9, 
      name: "Natural Chocolate Peanut Butter (100% Roasted)", 
      category: "Fitness Foods", 
      price: "399", 
      rating: "4.9", 
      tag: "High Protein", 
      weight: "1 Kg Tub",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 10, 
      name: "Instant Rolled Whole Oats (High Fiber)", 
      category: "Fitness Foods", 
      price: "249", 
      rating: "4.8", 
      tag: "Clean Carbs", 
      weight: "1 Kg Pack",
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 11, 
      name: "High Protein Snack Bars (Pack of 6)", 
      category: "Fitness Foods", 
      price: "499", 
      rating: "4.7", 
      tag: "Snack", 
      weight: "6 x 60g Bars",
      image: "https://images.unsplash.com/photo-1622484210800-478051756a19?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 12, 
      name: "Iron Studio Metallic Shaker Bottle 700ml", 
      category: "Accessories", 
      price: "349", 
      rating: "4.9", 
      tag: "Official Merch", 
      weight: "Leak Proof",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 13, 
      name: "Heavy Duty Padded Weightlifting Wrist Straps", 
      category: "Accessories", 
      price: "299", 
      rating: "4.8", 
      tag: "Gear", 
      weight: "Pair",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // 1. Convert products array to a React state
  const [products, setProducts] = useState([]);

  // 2. Sync with Admin LocalStorage on initial load
  useEffect(() => {
    const savedProducts = localStorage.getItem('gym_store_products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(defaultProducts);
      localStorage.setItem('gym_store_products', JSON.stringify(defaultProducts));
    }
  }, []);

  // Categories list
  const categories = [
    'All',
    'Proteins',
    'Creatine',
    'Mass Gainers',
    'Pre-Workout',
    'Fitness Foods',
    'Accessories'
  ];

  // Filtering Logic based on Category & Search Query
  const filteredProducts = products.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const buyOnWhatsapp = (productName, price) => {
    const message = encodeURIComponent(`Hello Iron Studio Gym Bhopal, I want to purchase: ${productName} (₹${price}).`);
    window.open(`https://wa.me/916263442343?text=${message}`, '_blank');
  };

  return (
    <div className="py-16 lg:py-24 bg-[#020617] text-slate-100 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Store Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Authentic In-Store & Online Supply
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Iron Studio <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Supplement Hub</span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-2">
              Genuine Proteins, Creatine, Mass Gainers, Pre-Workouts, Peanut Butter & Oats directly at Bagmugaliya, Bhopal center.
            </p>
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search protein, oats, creatine..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-100 placeholder-slate-500 outline-none transition"
            />
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>Filter By Category:</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 active:scale-95'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <div 
                key={item.id} 
                className="bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all group"
              >
                <div>
                  {/* Product Image Box with Error Fallback */}
                  <div className="relative h-48 rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 mb-4 group-hover:border-cyan-500/40 transition">
                    <img 
                      src={item.image && item.image.startsWith('http') ? item.image : "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                    <span className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30 text-[10px] px-2.5 py-1 rounded-md uppercase font-black">
                      {item.tag || item.category}
                    </span>
                  </div>

                  {/* Rating & Weight/Category */}
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-cyan-400 font-bold uppercase text-[10px] tracking-wider">{item.category}</span>
                    <span className="flex items-center gap-1 text-amber-400 font-bold text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {item.rating || '4.8'}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-sm leading-snug line-clamp-2">{item.name}</h3>
                  <span className="text-[10px] text-slate-400 mt-1 block font-semibold">{item.weight}</span>
                </div>

                {/* Price & Buy Action */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block font-semibold">Store Price</span>
                    <span className="text-lg font-black text-white">₹{item.price}</span>
                  </div>

                  <button 
                    onClick={() => buyOnWhatsapp(item.name, item.price)}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-1.5 shadow-md shadow-cyan-500/20 active:scale-95 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-3xl space-y-3">
            <Zap className="w-8 h-8 text-slate-500 mx-auto" />
            <h3 className="text-white font-bold text-lg">No Supplements Found</h3>
            <p className="text-xs text-slate-400">Try changing your search term or select another category filter.</p>
          </div>
        )}

        {/* Authenticity Guarantee Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0c1836] to-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-white font-extrabold text-base uppercase flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" /> 100% Genuine Direct Gym Purchase
            </h4>
            <p className="text-xs text-slate-400">
              Pick up directly at Iron Studio Gym (Bagmugaliya, Bhopal) or request same-day local home delivery.
            </p>
          </div>

          <a 
            href="https://wa.me/916263442343?text=Hello%20Iron%20Studio%20Gym,%20I%20want%20to%20inquire%20about%20supplement%20availability." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0"
          >
            Ask On WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}