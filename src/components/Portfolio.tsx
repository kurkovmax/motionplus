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
    title: "Суперпозиция. Маргулан Сейсембай",
    thumbnail: superpositionThumbnail,
    videoUrl: "https://www.youtube.com/watch?v=BZs-rdA8VZw",
    category: "Серия обучающих видеороликов"
  },
  {
    id: 2,
    title: "Тайны Устюрта. Багги тур",
    thumbnail: baggitourThumbnail,
    videoUrl: "https://www.youtube.com/watch?v=xqNvbsbMkD0",
    category: "Рекламный ролик"
  },
  {
    id: 3,
    title: "Слет Кайдзен клуба",
    thumbnail: kaizen,
    videoUrl: "https://www.youtube.com/watch?v=sYulR003hgY",
    category: "Рекламный ролик"
  },
  {
    id: 4,
    title: "Гранд Открытие Клуба",
    thumbnail: kaizenclubThumbnail,
    videoUrl: "https://www.youtube.com/watch?v=w1YjO3Omy1g",
    category: "Видеоотчет с мероприятия"
  },
  {
    id: 5,
    title: "Zhinkin Roman ShowReel",
    thumbnail: romaThumbnail,
    videoUrl: "https://www.youtube.com/watch?v=8yyQ2rcXHdM",
    category: "Имиджевое видео"
  },
  {
    id: 6,
    title: "Беседы с Маргуланом",
    thumbnail: besedaThumbnail,
    videoUrl: "https://www.youtube.com/watch?v=71nZBcJgxw8",
    category: "Подкаст"
  },
  {
    id: 7,
    title: "Dostyk Plaza. Restotaunt Gallery",
    thumbnail: dostykThumbnail,
    videoUrl: "https://www.youtube.com/watch?v=xPnAICW3ZQs",
    category: "Промо ролик"
  },
  {
    id: 8,
    title: "Arnau Tour. Димаш Кудайберген",
    thumbnail: dimashThumbnail,
    videoUrl: "https://www.youtube.com/watch?v=AxnTNd1__UU",
    category: "Видеоотчет с мероприятия"
  },
  {
    id: 9,
    title: "Форум ДНК Продаж",
    thumbnail: dnkThumbnail,
    videoUrl: "https://www.youtube.com/watch?v=RaSJdZOrWic",
    category: "Видеоотчет с мероприятия"
  }
];


  const openVideo = (video: VideoItem) => setSelectedVideo(video);
  const closeVideo = () => setSelectedVideo(null);

  return (
    <section id="portfolio" className="bg-black">
      <div className="w-screen max-w-none px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer h-[320px] sm:h-[400px] md:h-[360px] lg:h-[320px]"
              onClick={() => openVideo(item)}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Hover эффект с текстом */}
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
          ))}
        </div>
      </div>

      {/* Модальное окно */}
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
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
