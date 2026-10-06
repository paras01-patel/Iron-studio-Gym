import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import PlansPage from './components/PlansPage';
import AboutPage from './components/AboutPage';

export default function App() {
  const [cartCount, setCartCount] = useState(2);

  return (
    <div className="bg-[#020617] min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-white flex flex-col justify-between">
      
      {/* Global Navbar */}
      <Navbar cartCount={cartCount} />

      {/* Main Content & Routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/planspage" element={<PlansPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
      
    </div>
  );
}