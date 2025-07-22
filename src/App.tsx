import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import RunningLine from './components/RunningLine';
// import Workflow from './components/Workflow';
import Services from './components/Services';
import BottomContact from './components/BottomContact';
// import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Подождать, пока блоки точно отрисуются
    }
  }, []);

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
