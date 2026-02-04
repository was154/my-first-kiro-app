'use client';

import { Info, Navigation, MapPin, Route } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Info size={32} />,
      title: '案内板',
      description: '各ガイド区分に設置された大きめの案内板。歴史・文化資源の位置やコースの道順を地図で案内'
    },
    {
      icon: <Navigation size={32} />,
      title: '標識A（分岐柱）',
      description: 'ガイド区分の分岐点に設置し、コースの行先を案内'
    },
    {
      icon: <MapPin size={32} />,
      title: '標識B（地図入り石柱）',
      description: 'コース沿いの見どころの近くや道路の曲がり角などに設置。周辺の歴史・文化資源を小さな地図で案内'
    },
    {
      icon: <Route size={32} />,
      title: '標識C（かたつむりマーク）',
      description: '道路の曲がり角や狭い場所などに道路に埋め込んで設置。矢印で道順を案内'
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          コース上で発見できるもの
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;