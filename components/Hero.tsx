'use client';

import { MapPin } from 'lucide-react';
import { StatItem } from '@/types/course';

const Hero = () => {
  const stats: StatItem[] = [
    { number: '23', label: 'コース' },
    { number: '270', label: 'km' },
    { number: '謎解き', label: '付き' }
  ];

  const scrollToCourses = () => {
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="gradient-bg text-white pt-20 md:pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              歴史と文化の散歩道
            </h2>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              全23コース詳細マップ | 東京散歩地図
            </p>
            <p className="text-lg md:text-xl mb-10 opacity-95 leading-relaxed">
              東京都内に残されている歴史的・文化的資源を系統的に結ぶ散歩道。<br className="hidden md:block" />
              謎解きを楽しみながら、東京の歴史と文化を発見しよう。
            </p>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 md:gap-12 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base opacity-90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToCourses}
              className="btn-primary gradient-secondary shadow-lg hover:shadow-xl"
            >
              <MapPin size={20} />
              コースを探す
            </button>
          </div>

          {/* Hero Image/Map Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 md:w-96 md:h-96 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center">
              <MapPin size={80} className="text-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;