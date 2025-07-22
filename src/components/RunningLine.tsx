import React from 'react';
import companyLogos from '/images/company.png'; // путь к картинке в public/images/

const RunningLine: React.FC = () => {
  return (
    <section className="py-2 bg-black overflow-hidden">
      <div className="relative w-full">
        <div className="flex animate-scrollFast">
          {/* Первая копия изображения */}
          <img
            src={companyLogos}
            alt="Компания"
            className="h-20 md:h-32 mr-12 flex-shrink-0"
          />

          {/* Вторая и третья копии */}
          <img
            src={companyLogos}
            alt="Компания"
            className="h-20 md:h-32 mr-12 flex-shrink-0"
          />
          <img
            src={companyLogos}
            alt="Компания"
            className="h-20 md:h-32 flex-shrink-0"
          />
        </div>
      </div>
    </section>
  );
};

export default RunningLine;
