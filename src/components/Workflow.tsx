import React, { useEffect, useRef, useState } from 'react';
import { ClipboardList, Lightbulb, Camera, Edit, Upload } from 'lucide-react';

interface WorkflowStep {
  id: number;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
}

const Workflow: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const steps: WorkflowStep[] = [
    {
      id: 1,
      title: "Понимаем",
      subtitle: "задачу",
      icon: <ClipboardList size={48} className="text-red-500" />
    },
    {
      id: 2,
      title: "Генерим",
      subtitle: "идею",
      icon: <Lightbulb size={48} className="text-red-500" />
    },
    {
      id: 3,
      title: "Снимаем",
      subtitle: "или анимируем",
      icon: <Camera size={48} className="text-red-500" />
    },
    {
      id: 4,
      title: "Монтаж,",
      subtitle: "цвет, звук",
      icon: <Edit size={48} className="text-red-500" />
    },
    {
      id: 5,
      title: "Готовим",
      subtitle: "к публикации",
      icon: <Upload size={48} className="text-red-500" />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps one by one with delay
            steps.forEach((step, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, step.id]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="workflow" ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-500 text-lg font-medium mb-4">Наш подход</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Workflow вашего видеопроекта
          </h2>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex flex-col items-center text-center transition-all duration-700 transform ${
                  visibleSteps.includes(step.id)
                    ? 'opacity-100 translate-x-0 scale-100'
                    : 'opacity-0 translate-x-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {step.id}
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-black border-2 border-gray-700 rounded-lg flex items-center justify-center mb-4 group-hover:border-red-500 transition-colors duration-300">
                    {step.icon}
                  </div>
                  {/* Connection dot for desktop */}
                  <div className="hidden lg:block absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-gray-900"></div>
                </div>

                {/* Text */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  {step.subtitle && (
                    <p className="text-gray-400 font-medium">{step.subtitle}</p>
                  )}
                </div>

                {/* Mobile connection line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 bg-gray-600 mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom description */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Каждый этап нашего процесса тщательно продуман для создания видеоконтента, 
            который не только впечатляет визуально, но и достигает ваших бизнес-целей
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workflow;