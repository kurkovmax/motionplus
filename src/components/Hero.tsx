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

  {/* Контейнер с отступами как в Navbar */}
  <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Заголовок */}
    <div className="absolute top-[28%] max-w-[90%] sm:max-w-[600px]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Мы креативное <br /> агентство <br /> медиапроизводства
      </h1>
    </div>

    {/* Подзаголовок */}
    {/* Подзаголовок */}
<div className="absolute bottom-[12%] right-0 max-w-sm text-right">
  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
    Решаем ваши <br />
    бизнес-задачи с помощью видео
  </p>
</div>

  </div>
</section>

  );
};

export default Hero;
