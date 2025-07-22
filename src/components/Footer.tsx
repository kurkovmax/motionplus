import React from 'react';
import { smoothScrollTo } from '../utils/smoothScroll';
import logo from '../images/favicon.png'; // путь к лого

const Footer: React.FC = () => {
  const handleNavClick = (id: string) => {
    smoothScrollTo(id);
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <button onClick={() => handleNavClick('hero')} className="hover:opacity-80 transition">
            <img src={logo} alt="Motion+" className="h-10 w-auto" />
          </button>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            © 2025 Креативное видеопродакшн-агентство Motion+
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
