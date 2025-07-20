import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { ContactForm as ContactFormType } from '../types';

const BottomContact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    phone: '',
    email: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      comment: ''
    });
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3062623/pexels-photo-3062623.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Professional video equipment"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Введите свои<br />
              контактные данные,<br />
              и мы перезвоним
            </h2>

            {/* Manager Info */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
                  alt="Александр Кузин"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold">Александр Кузин</p>
                <p className="text-gray-400 text-sm">Коммерческий продюсер</p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Наш менеджер просчитает<br />
              детали и свяжется с вами<br />
              в ближайшее время
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Введите имя</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-sm text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Введите телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+7 ___ ___ __ __"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-sm text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white py-4 rounded-sm hover:bg-red-700 transition-colors duration-300 font-semibold text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <span>Отправить</span>
                    <Send size={20} />
                  </>
                )}
              </button>

              <p className="text-gray-500 text-xs leading-relaxed">
                Нажимая на кнопку «Отправить», вы подтверждаете свое согласие на обработку персональных данных и соглашаетесь с{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomContact;