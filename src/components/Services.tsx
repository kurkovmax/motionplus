import React from 'react';
import { Camera, Layers, Package } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Съемка + монтаж",
      description: "Видеоотчеты, рекламные ролики, интервью, подкасты, образовательный контент",
      features: [
        "Профессиональное видеопроизводство",
        "Многокамерные установки",
        "Расширенный постпродакшн",
        "Цветокоррекция и звуковой дизайн"
      ],
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "2D/3D графика",
      description: "Анимация, визуальные эффекты, инфографика, компьютерная графика и 3D",
      features: [
        "Дизайн анимационной графики",
        "Дизайн анимационной графики",
        "3D-моделирование и анимация",
        "Композитинг визуальных эффектов"
      ],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Интерактивная инфографика",
      description: "Контент на месяц, прозрачная цена, экономия времени и бюджета",
      features: [
        "Ежемесячное планирование контента",
        "Скидки при массовом производстве",
        "Последовательные сообщения бренда",
        "Гибкие графики доставки"
      ],
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Camera size={48} className="text-red-500" />;
      case 1: return <Layers size={48} className="text-red-500" />;
      case 2: return <Package size={48} className="text-red-500" />;
      default: return <Camera size={48} className="text-red-500" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Что мы <span className="text-red-500">делаем?</span>
          </h2>
          <h3 className="text-2xl md:text-3xl text-gray-300 mb-8">Our creative directions</h3>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Мы — компания, предоставляющая полный спектр услуг по видеопроизводству, которая превращает ваши идеи в захватывающие визуальные истории.
Наша команда сочетает технические знания и творческие инновации, чтобы создавать контент, который не только выглядит
исключительно, но и приносит реальные бизнес-результаты. От концепции до завершения мы занимаемся каждым этапом
производства, уделяя особое внимание деталям.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  {getIcon(index)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-500 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;