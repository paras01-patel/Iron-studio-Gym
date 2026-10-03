import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#020617] min-h-screen flex flex-col justify-between">
      <Navbar />
      
      {/* Website Body Content (Hero, Store, Plans) yahan aayenge */}
      <div className="flex-1">
        {/* Components go here */}
      </div>

      <Footer />
    </div>
  );
}