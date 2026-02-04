'use client';

import { Footprints, Search, Landmark } from 'lucide-react';
import { FeatureItem } from '@/types/course';

const About = () => {
  const features: FeatureItem[] = [
    {
      icon: 'walking',
      title: '健康的な散歩',
      description: '頭と足を使いながら、健康になりながら楽しめます'
    },
    {
      icon: 'search',
      title: '謎解き要素',
      description: '各コースに謎解きポイントがあり、発見の楽しさを味わえます'
    },
    {
      icon: 'landmark',
      title: '歴史発見',
      description: '東京の隠れた歴史と文化を発見できます'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'walking':
        return <Footprints size={40} />;
      case 'search':
        return <Search size={40} />;
      case 'landmark':
        return <Landmark size={40} />;
      default:
        return <Footprints size={40} />;
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          『歴史と文化の散歩道』とは？
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              東京都生活文化局により、都内に残されている歴史的・文化的資源を系統的に結ぶ散歩道として、
              昭和58年から平成7年にかけて整備された道です。
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              整備終了から20年以上が経過し、標識等の劣化や周辺環境の変化により、
              東京都はこの事業を終了していますが、全23コースをすべて歩いてみて、
              改めてこのコースの秀逸さ、絶品さを感じずにはいられません。
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              歴史と文化の散歩道は、長い歴史が育んだ伝統と新しい東京の文化を訪ねる道です。
              私たちのふるさと東京を知る道しるべとしてください。
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl text-center card-hover border border-gray-100"
              >
                <div className="text-primary-500 mb-4 flex justify-center">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;