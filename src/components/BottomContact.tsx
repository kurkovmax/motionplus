import React, { useState } from 'react';
import { Send, Phone, Mail, Instagram } from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { ContactForm as ContactFormType } from '../types';

const BottomContact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const BOT_TOKEN = '8037079570:AAFTtiS4LPHUvwiTx2uXLEWTsSYOh-XLR-U';
  const CHAT_ID = '1267889361';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, phone } = formData;

    const message = `
📩 <b>Новая заявка с сайта Motion+</b>

👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      });

      if (!response.ok) throw new Error('Ошибка при отправке в Telegram');

      toast.success('Поздравляем, ваша заявка оставлена');
      setFormData({ name: '', phone: '' });
    } catch (error) {
      console.error(error);
      toast.error('Ошибка при отправке. Попробуйте позже.');
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden" id="contacts">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3062623/pexels-photo-3062623.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Левая часть — форма */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Введите свои<br />контактные данные,<br />и мы перезвоним
            </h2>

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
                * Нажимая на кнопку «Отправить», вы подтверждаете свое согласие на обработку персональных данных
              </p>
            </form>
          </div>

          {/* Правая часть — информация с иконками */}
          <div className="text-white space-y-4">
  <a
    href="tel:+77780017696"
    className="flex items-center space-x-3 hover:text-red-500 transition-colors duration-300"
  >
    <Phone size={18} className="text-red-500" />
    <p className="text-lg">+7 778 001 7696</p>
  </a>

  <a
    href="https://t.me/kurkovmax"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 hover:text-red-500 transition-colors duration-300"
  >
    <FaTelegramPlane size={18} className="text-red-500" />
    <p className="text-lg">@kurkovmax</p>
  </a>

  <a
    href="mailto:teammotionplus@gmail.com"
    className="flex items-center space-x-3 hover:text-red-500 transition-colors duration-300"
  >
    <Mail size={18} className="text-red-500" />
    <p className="text-lg">teammotionplus@gmail.com</p>
  </a>

  <a
    href="https://www.instagram.com/motionplusprod"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 hover:text-red-500 transition-colors duration-300"
  >
    <Instagram size={18} className="text-red-500" />
    <p className="text-lg">@motionplusprod</p>
  </a>

  <p className="text-sm text-gray-300 pt-4">
    <strong className="text-white">Motion+</strong> — продакшн полного цикла: от соцсетей до крупных событий.<br />
    Видео, которое работает на ваш бренд.
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default BottomContact;
