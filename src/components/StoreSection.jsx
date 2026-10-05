import { ShoppingBag, Star } from 'lucide-react';

export default function StoreSection() {
  const products = [
    { id: 1, name: "Whey Protein Isolate 100%", category: "Protein", price: "₹4,999", rating: "4.9", tag: "Best Seller" },
    { id: 2, name: "Pure Creatine Monohydrate 250g", category: "Strength", price: "₹1,299", rating: "4.8", tag: "Popular" },
    { id: 3, name: "Nitro Pre-Workout Energy Blast", category: "Energy", price: "₹1,899", rating: "4.7", tag: "New" },
    { id: 4, name: "BCAA Recovery & Intra-Workout", category: "Recovery", price: "₹1,499", rating: "4.9", tag: "Essential" },
  ];

  const buyOnWhatsapp = (productName) => {
    const message = encodeURIComponent(`Hello Iron Studio Gym, I want to purchase: ${productName}`);
    window.open(`https://wa.me/916263442343?text=${message}`, '_blank');
  };

  return (
    <section id="store" className="py-20 bg-[#060a17]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Fuel Your Performance</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
              Supplements & Gym Gear
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mt-2 md:mt-0">
            Original, lab-tested supplements directly at Iron Studio Gym, Bhopal or delivered locally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all group">
              <div>
                <div className="relative h-44 rounded-xl bg-slate-800/60 border border-slate-700/40 flex flex-col items-center justify-center text-slate-300 font-bold text-sm mb-4 group-hover:scale-[1.02] transition-transform">
                  <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] px-2.5 py-0.5 rounded-md uppercase font-black mb-2">
                    {item.tag}
                  </span>
                  <span>{item.name.split(' ')[0]} {item.name.split(' ')[1]}</span>
                </div>

                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-cyan-400 font-bold uppercase text-[11px]">{item.category}</span>
                  <span className="flex items-center gap-1 text-amber-400 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> {item.rating}
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm leading-snug">{item.name}</h3>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Price</span>
                  <span className="text-lg font-black text-white">{item.price}</span>
                </div>
                <button 
                  onClick={() => buyOnWhatsapp(item.name)}
                  className="bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white border border-cyan-500/30 px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5  h-3.5" />
                  <span>Buy</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}