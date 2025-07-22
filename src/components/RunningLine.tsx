import React from 'react';

const RunningLine: React.FC = () => {
  const companies = [
    'Miller', 'СБЕРБАНК', 'PONTYX', 'QAZAQSTAN', 'Beeline', 'OPPO', 'JAMESON', 'BI GROUP',
    'Amway', 'JUSAN', 'ORIFLAME', 'RAMS', 'LEXUS', 'KIA', 'TOYOTA', 'JTI'
  ];

  return (
    <section className="py-12 bg-black overflow-hidden">
      <div className="text-center mb-8">
        
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of companies */}
          <div className="flex items-center space-x-12 whitespace-nowrap">
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="text-white text-xl md:text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              >
                {company}
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-12 whitespace-nowrap ml-12">
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="text-white text-xl md:text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningLine;
