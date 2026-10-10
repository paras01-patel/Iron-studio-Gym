import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import PlansPage from './components/PlansPage';
import AboutPage from './components/AboutPage';
import StorePage from './components/StorePage';
import { Contact, Store } from 'lucide-react';
import AdminDashboard from './components/AdminDashboard';
import LoginPage from './components/LoginPage';
import Contactt from './components/Contactt';
import TrainersPage from './components/Trainers';

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
          <Route path="/store" element={<StorePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<Contactt />} />
          <Route path="/trainers" element={<TrainersPage />} />
          
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
      
    </div>
  );
}