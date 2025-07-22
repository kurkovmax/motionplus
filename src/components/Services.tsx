import React from 'react';
import { Camera, Layers, Package } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Съемка + монтаж",
      description: "",
      features: [
        "Видеоотчёты событий",
        "Промо ролики",
        "Интервью",
        "Подкасты",
        "Образовательный контент"
      ],
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "2d/3d графика",
      description: "",
      features: [
        "2D-анимация (логотипы, текст, инфографика)",
        "VFX и CGI (трендовые Reels, переходы, инфостиль)",
        "3D-анимация"
      ],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Контент-пакеты",
      description: "",
      features: [
        "Прозрачная цена и чёткий объём",
        "Контент на месяц вперёд",
        "Упаковка под Instagram, TikTok, YouTube"
      ],
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Camera size={48} className="text-white" />;
      case 1: return <Layers size={48} className="text-white" />;
      case 2: return <Package size={48} className="text-white" />;
      default: return <Camera size={48} className="text-white" />;
    }
  };

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
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Image with Icon Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {getIcon(index)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-start">
                      <span className="text-red-500 mr-2 mt-1">-</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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