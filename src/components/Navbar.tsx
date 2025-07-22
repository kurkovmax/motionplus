import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';
import logo from '/images/logo2.png'; // путь к логотипу

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 🔻 Логотип */}
          <button onClick={() => handleNavClick('hero')} className="cursor-pointer hover:opacity-80 transition">
            <img src={logo} alt="Motion+" className="h-25 w-20" />
          </button>

          {/* Навигация (десктоп) */}
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

          {/* Кнопка скачать */}
          <a
            href="/images/presentation.pdf"
            download
            className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-sm hover:bg-red-700 transition-all duration-300 font-semibold"
          >
            Скачать презентацию
          </a>

          {/* Бургер меню */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-red-500 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Навигация (мобильная) */}
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
              <a
                href="/images/presentation.pdf"
                download
                className="block w-full text-left px-3 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors duration-300 rounded-sm mt-4 font-semibold"
              >
                Скачать презентацию
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
