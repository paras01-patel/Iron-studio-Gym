import React from 'react';
import { Dumbbell, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  // WhatsApp Message Text
  const whatsappMessage = encodeURIComponent("Hello Iron Studio Gym, I want to know more about membership and supplements.");
  const whatsappUrl = `https://wa.me/916263442343?text=${whatsappMessage}`;

  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-slate-800/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg shadow-cyan-500/20">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-white tracking-wider uppercase">
              IRON STUDIO <span className="text-cyan-400">GYM</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Transform your body and mind at Iron Studio Gym. High-tech equipment, certified trainers, and premium fitness supplements all in one place.
          </p>

          {/* Social & Chat Icons */}
          <div className="flex gap-3 pt-2">
            {/* Facebook */}
            <a 
              href="#facebook" 
              className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              title="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/ironstudiogymbhopal?srtk=MTc0aXp5dnVhMDh1Zw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* WhatsApp (Direct Chat Link) */}
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition"
              title="Chat on WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.689-.834-1.951-.929-.262-.095-.453-.143-.644.143-.191.286-.74.929-.907 1.12-.167.19-.334.214-.619.071-.285-.143-1.204-.444-2.293-1.415-.848-.756-1.42-1.689-1.587-1.975-.167-.286-.018-.44.125-.583.129-.129.286-.334.429-.501.143-.167.19-.286.286-.477.095-.191.048-.358-.024-.501-.071-.143-.644-1.551-.882-2.122-.232-.557-.468-.482-.644-.491-.167-.008-.358-.008-.549-.008-.191 0-.501.071-.763.358-.262.286-1.001.978-1.001 2.385 0 1.407 1.025 2.766 1.168 2.957.143.191 2.018 3.081 4.889 4.32.683.295 1.217.471 1.633.603.686.218 1.31.187 1.803.114.549-.082 1.689-.691 1.927-1.36.238-.668.238-1.24.167-1.36-.071-.12-.262-.191-.547-.334z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-bold uppercase text-xs tracking-widest border-b border-slate-800 pb-2 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-xs font-medium">
            <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">About Us</a></li>
            <li><a href="#plans" className="hover:text-cyan-400 transition">Membership Plans</a></li>
            <li><a href="#trainers" className="hover:text-cyan-400 transition">Expert Trainers</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Store & Supplements */}
        <div>
          <h3 className="text-white font-bold uppercase text-xs tracking-widest border-b border-slate-800 pb-2 mb-4 flex items-center justify-between">
            <span>Supplement Store</span>
            <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">SHOP</span>
          </h3>
          <ul className="space-y-2.5 text-xs font-medium">
            <li><a href="#store" className="hover:text-cyan-400 transition">Whey Protein & Isolate</a></li>
            <li><a href="#store" className="hover:text-cyan-400 transition">Creatine Monohydrate</a></li>
            <li><a href="#store" className="hover:text-cyan-400 transition">Pre-Workout Boosters</a></li>
            <li><a href="#store" className="hover:text-cyan-400 transition">BCAA & Recovery</a></li>
            <li><a href="#store" className="hover:text-cyan-400 transition">Gym Gear & Accessories</a></li>
          </ul>
        </div>

        {/* Column 4: Contact & Timing */}
        <div>
          <h3 className="text-white font-bold uppercase text-xs tracking-widest border-b border-slate-800 pb-2 mb-4">
            Gym Info
          </h3>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Sangam Colony, Bagmugaliya, Bhopal, Madhya Pradesh 462043
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href="tel:+916263442343" className="hover:text-cyan-400 transition">
                +91 6263442343
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>info@ironstudiogym.com</span>
            </li>
            <li className="flex items-center gap-3 pt-1 text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Mon - Sat: 5:00 AM - 10:00 PM</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500">
        <p>© {new Date().getFullYear()} Iron Studio Gym. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for Fitness & Performance</p>
      </div>
    </footer>
  );
}