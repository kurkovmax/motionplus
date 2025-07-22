import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-500 text-lg font-medium mb-4">Что мы делаем?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Наши творческие направления
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              Гибкость под задачи бизнеса: от личных брендов до мероприятий.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-white font-semibold">Результат</span> — премиальная визуализация, которая выделяет ваш контент на фоне конкурентов.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Съемка + монтаж */}
          <div className="group relative overflow-hidden rounded-lg bg-gradient-to-t from-black to-gray-800 p-8">
            {/* Image */}
            <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Съемка + монтаж"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Съемка + монтаж
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">-</span>
                  <span>Видеоотчёты событий</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">-</span>
                  <span>Промо ролики</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">-</span>
                  <span>Интервью</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">-</span>
                  <span>Подкасты</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">-</span>
                  <span>Образовательный контент</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2d/3d графика */}
          <div className="group relative overflow-hidden rounded-lg bg-gradient-to-t from-black to-gray-800 p-8">
            {/* Image */}
            <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="2d/3d графика"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                2d/3d графика
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">-</span>
                  <span>2D-анимация (логотипы, текст, инфографика)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">-</span>
                  <span>VFX и CGI (трендовые Reels, переходы, инфостиль)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">-</span>
                  <span>3D-анимация</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Контент-пакеты */}
          <div className="group relative overflow-hidden rounded-lg bg-gradient-to-t from-black to-gray-800 p-8">
            {/* Image */}
            <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Контент-пакеты"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Контент-пакеты
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">-</span>
                  <span>Прозрачная цена и чёткий объём</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">-</span>
                  <span>Контент на месяц вперёд</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">-</span>
                  <span>Упаковка под Instagram, TikTok, YouTube</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed flex items-center justify-center">
            <span className="text-red-500 mr-2">🔥</span>
            Мы не просто снимаем — мы создаём контент, который цепляет, вовлекает и выделяется!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;