import React from 'react';
import { smoothScrollTo } from '../utils/smoothScroll';

const Footer: React.FC = () => {
  const handleNavClick = (id: string) => {
    smoothScrollTo(id);
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-2xl font-bold text-white hover:text-red-500 transition-colors duration-300"
            >
              Motion<span className="text-red-500">+</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center space-x-8 text-sm">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Главная
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => handleNavClick('services')}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Услуги
            </button>
            <button
              onClick={() => handleNavClick('workflow')}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Наш подход
            </button>
            <button
              onClick={() => handleNavClick('portfolio')}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Портфолио
            </button>
            <button
              onClick={() => handleNavClick('contacts')}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Контакты
            </button>
          </div>

          {/* Copyright and Social */}
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Креативное видеопродакшн-агентство Motion+
              </p>
              <button
                onClick={() => handleNavClick('contacts')}
                className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-300 mt-1"
              >
                Политика конфиденциальности
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <span className="text-white text-xs font-bold">V</span>
              </a>
              <a
                href="https://t.me/kurkovmax"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
              >
                <span className="text-white text-xs font-bold">T</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;