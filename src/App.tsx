import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import RunningLine from './components/RunningLine';
//import Workflow from './components/Workflow';
import Services from './components/Services';
import BottomContact from './components/BottomContact';
//import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Portfolio />
      <RunningLine />
      <Services />
      <BottomContact />
      <Footer />
    </div>
  );
}

export default App;