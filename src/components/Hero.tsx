import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black text-white font-gilroy"
    >
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

      {/* ✏️ Заголовок */}
      <div className="absolute z-10 top-[28%] left-[8%] max-w-[90%] sm:max-w-[600px]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Мы креативное <br /> агентство <br /> медиапроизводства
        </h1>
      </div>

      {/* ✏️ Подзаголовок */}
      <div className="absolute z-10 bottom-[18%] right-[8%] max-w-xs text-right">
        <p className="text-base sm:text-lg md:text-xl font-normal">
          Решаем ваши <br />
          бизнес-задачи с помощью видео
        </p>
      </div>
    </section>
  );
};

export default Hero;
