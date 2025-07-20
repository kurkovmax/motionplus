import React, { useState } from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';

const Contacts: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="contacts" className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Motion<span className="text-red-300">+</span>
          </h2>
          <p className="text-xl text-red-100 mb-8">Давайте работать вместе долгие годы!</p>
          <div className="max-w-2xl mx-auto">
            <p className="text-red-200 leading-relaxed">
              <strong>Motion</strong> — производственная компания полного цикла: от концепций до крупных мероприятий. 
              Видео, которое работает на ваш бренд.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 p-3 rounded-lg">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <p className="text-red-200 text-sm">Phone</p>
                <a href="tel:+77780017696" className="text-white text-xl font-semibold hover:text-red-300 transition-colors duration-300">
                  +7 778 001 7696
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-red-600 p-3 rounded-lg">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <p className="text-red-200 text-sm">Email</p>
                <a href="mailto:teammotionplus@gmail.com" className="text-white text-xl font-semibold hover:text-red-300 transition-colors duration-300">
                  teammotionplus@gmail.com
                </a>
              </div>
            </div>

            <button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center space-x-3 bg-white text-red-800 px-8 py-4 rounded-sm hover:bg-red-50 transition-all duration-300 font-semibold text-lg group"
            >
              <MessageSquare size={24} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Оставить заявку</span>
            </button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-red-600/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-red-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                    <MessageSquare size={32} className="text-white" />
                  </div>
                </div>
                <p className="text-red-200 text-lg">Готовы начать свой проект?</p>
                <p className="text-white text-2xl font-bold">Давайте творить вместе</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default Contacts;