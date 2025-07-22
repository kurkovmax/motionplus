import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 bg-black overflow-hidden">
      {/* Фоновое видео */}
        {/* 🎬 Фоновое видео */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/bg_video.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>
      {/* Контент */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* ... (оставь 3 блока карточек как есть) */}
          {/* Вырезал ради компактности — они остаются без изменений */}
        </div>

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
