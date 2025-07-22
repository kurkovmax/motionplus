import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { VideoItem } from '../types';
import superpositionThumbnail from '../images/superposition.jpg';
import baggitourThumbnail from '../images/baggitour.png';
import kaizen from '../images/kaizen.png';
import kaizenclubThumbnail from "../images/kaizenclub.png";
import romaThumbnail from "../images/roma.png";
import besedaThumbnail from "../images/beseda.png";
import dostykThumbnail from "../images/dostykplaza.png";
import dimashThumbnail from "../images/dimash.png";
import dnkThumbnail from "../images/dnkprodazh.png";
const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const portfolioItems: VideoItem[] = [
  {
    id: 1,
    title: "Суперпозиция — Маргулан Сейсембай",
    thumbnail: superpositionThumbnail,
    videoUrl: "https://youtu.be/zGipJrZiziQ",
    category: "Обучающий ролик"
  },
  {
    id: 2,
    title: "Тайны Устюрта — Багги тур TravelMind",
    thumbnail: baggitourThumbnail,
    videoUrl: "https://www.youtube.com/watch?v=xqNvbsbMkD0",
    category: "Рекламный ролик"
  },
  {
    id: 3,
    title: "КайдзенСлет — Платформа Маргулана",
    thumbnail: kaizen,
    videoUrl: "https://youtu.be/sYulR003hgY",
    category: "Рекламный ролик"
  },
  {
    id: 4,
    title: "ГрандОткрытие КайдзенКлуба",
    thumbnail: kaizenclubThumbnail,
    videoUrl: "https://youtu.be/w1YjO3Omy1g",
    category: "Видеоотчеты с мероприятий"
  },
  {
    id: 5,
    title: "Zinkin Roman — ShowReel",
    thumbnail: romaThumbnail,
    videoUrl: "https://youtu.be/8yyQ2rcXHdM",
    category: "Имиджевый ролик"
  },
  {
    id: 6,
    title: "Беседы с Маргуланом",
    thumbnail: besedaThumbnail,
    videoUrl: "https://youtu.be/71nZBcJgxw8",
    category: "Имиджевый ролик"
  },
  {
    id: 7,
    title: "Restaurant Gallery — Dostyk Plaza",
    thumbnail: dostykThumbnail,
    videoUrl: "https://youtu.be/xPnAICW3ZQs",
    category: "Промо ролики"
  },
  {
    id: 8,
    title: "ДимашКудайберген — Arnau Tour",
    thumbnail: dimashThumbnail,
    videoUrl: "https://youtu.be/AxnTNd1__UU",
    category: "Видеоотчеты с мероприятий"
  },
  {
    id: 9,
    title: "ДНК Продаж — Зарина Кенесканова",
    thumbnail: dnkThumbnail,
    videoUrl: "https://youtu.be/RaSJdZOrWic",
    category: "Видеоотчеты с мероприятий"
  }
];

  const openVideo = (video: VideoItem) => setSelectedVideo(video);
  const closeVideo = () => setSelectedVideo(null);

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-gilroy">
            Наши <span className="text-red-500">работы</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ознакомьтесь с нашим портфолио кинематографических постановок, которые определяют бренды и приносят результаты.
          </p>
        </div>

        {/* Grid без отступов (в стык) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer"
              onClick={() => openVideo(item)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Hover-описание + затемнение */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-white text-lg font-bold font-gilroy">{item.title}</h3>
                  <p className="text-white text-sm mt-1">{item.category}</p>
                </div>

                {/* Иконка Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play
                    size={48}
                    className="text-white opacity-70 group-hover:text-red-500 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Видео-модалка */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full mx-4">
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-300"
              >
                <X size={32} />
              </button>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={selectedVideo.videoUrl.replace("watch?v=", "embed/")}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-white text-xl font-semibold mt-4 font-gilroy">{selectedVideo.title}</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
