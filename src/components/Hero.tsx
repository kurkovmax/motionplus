import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-professional-filmmaker-recording-a-studio-setup-4611-large.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay with red tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-red-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          Motion<span className="text-red-500">+</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed opacity-90">
          Создаем стиль вашего бренда — заставляем его продавать
        </p>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full">
            <div className="w-1 h-3 bg-white/70 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;