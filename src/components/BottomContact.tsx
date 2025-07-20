import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { ContactForm as ContactFormType } from '../types';
import toast from 'react-hot-toast';

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

  const BOT_TOKEN = '8037079570:AAFTtiS4LPHUvwiTx2uXLEWTsSYOh-XLR-U'; // вставь сюда токен от BotFather
  const CHAT_ID = '535944534'; // вставь сюда chat_id

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, phone, email, comment } = formData;

    const message = `
📩 <b>Новая заявка с сайта Motion+</b>

👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}
📧 <b>Email:</b> ${email || '-'}
📝 <b>Комментарий:</b> ${comment || '-'}
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

      toast.success('Заявка отправлена! Мы скоро с вами свяжемся.');

      // Очистка формы
      setFormData({
        name: '',
        phone: '',
        email: '',
        comment: ''
      });
    } catch (error) {
      console.error(error);
      toast.error('Ошибка при отправке. Попробуйте позже.');
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
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
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Введите свои<br />
              контактные данные,<br />
              и мы перезвоним
            </h2>

            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
                  alt="Курков Макс"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold">Курков Макс</p>
                <p className="text-gray-400 text-sm">Коммерческий продюсер</p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Наш менеджер просчитает<br />
              детали и свяжется с вами<br />
              в ближайшее время
            </p>
          </div>

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

              <div>
                <label className="block text-gray-400 text-sm mb-2">Введите email (необязательно)</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-sm text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Комментарий (необязательно)</label>
                <input
                  type="text"
                  name="comment"
                  placeholder="Комментарий"
                  value={formData.comment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-sm text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                />
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
