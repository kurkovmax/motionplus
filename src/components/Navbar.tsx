import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Главная', id: 'hero' },
    { label: 'Проекты', id: 'portfolio' },
    { label: 'Услуги', id: 'services' },
    { label: 'Контакты', id: 'contacts' },
  ];

  const handleNavClick = (id: string) => {
    smoothScrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <span className="text-2xl font-bold text-white">
            Motion<span className="text-red-500">+</span>
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-white hover:text-red-500 transition-colors duration-300 font-semibold"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleNavClick('contacts')}
            className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-sm hover:bg-red-700 transition-all duration-300 font-semibold"
          >
            Оставить заявку
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-red-500 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-red-500 transition-colors duration-300 font-semibold"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contacts')}
                className="block w-full text-left px-3 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors duration-300 rounded-sm mt-4 font-semibold"
              >
                Оставить заявку
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
