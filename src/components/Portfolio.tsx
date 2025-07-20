import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { VideoItem } from '../types';

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const portfolioItems: VideoItem[] = [
    {
      id: 1,
      title: "СУПЕРПОЗИЦИЯ",
      thumbnail: "/images/superposition.jpg",
      videoUrl: "https://www.youtube.com/watch?v=BZs-rdA8VZw",
      category: "Серия обучающих роликов"
    },
    {
      id: 2,
      title: "Commercial Advertisement",
      thumbnail: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-creative-photographer-taking-pictures-4612-large.mp4",
      category: "Commercial"
    },
    {
      id: 3,
      title: "Product Showcase",
      thumbnail: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-professional-filmmaker-recording-a-studio-setup-4611-large.mp4",
      category: "Product"
    },
    {
      id: 4,
      title: "Documentary Film",
      thumbnail: "https://images.pexels.com/photos/3062623/pexels-photo-3062623.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-businessman-working-on-laptop-in-office-4613-large.mp4",
      category: "Documentary"
    },
    {
      id: 5,
      title: "Event Coverage",
      thumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-creative-photographer-taking-pictures-4612-large.mp4",
      category: "Event"
    },
    {
      id: 6,
      title: "Interview Series",
      thumbnail: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-professional-filmmaker-recording-a-studio-setup-4611-large.mp4",
      category: "Interview"
    },
    {
      id: 7,
      title: "Music Video",
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-businessman-working-on-laptop-in-office-4613-large.mp4",
      category: "Music"
    },
    {
      id: 8,
      title: "Training Content",
      thumbnail: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-creative-photographer-taking-pictures-4612-large.mp4",
      category: "Educational"
    },
    {
      id: 9,
      title: "Social Media Content",
      thumbnail: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-professional-filmmaker-recording-a-studio-setup-4611-large.mp4",
      category: "Social"
    }
  ];

  const openVideo = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Наши <span className="text-red-500">работы</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ознакомьтесь с нашим портфолио кинематографических постановок, которые определяют бренды и приносят результаты.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => openVideo(item)}
            >
              <div className="aspect-video">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <Play
                    size={48}
                    className="text-white group-hover:text-red-500 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-sm text-sm font-medium">
                  {item.category}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

       {/* Video Modal */}
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
      <h3 className="text-white text-xl font-semibold mt-4">{selectedVideo.title}</h3>
    </div>
  </div>
)}
      </div>
    </section>
  );
};

export default Portfolio;