'use client';

import { Play, Flag, MapPin, Search, Info } from 'lucide-react';
import { CourseCardProps } from '@/types/course';

const CourseCard = ({ course, onViewDetails }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover animate-fade-in-up">
      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
          {course.id}
        </div>
        <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
          {course.distance}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-4 text-gray-800 leading-tight">
        {course.name}
      </h3>

      {/* Course Info */}
      <div className="grid grid-cols-1 gap-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Play size={16} className="text-primary-500 flex-shrink-0" />
          <span className="truncate">{course.start}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Flag size={16} className="text-primary-500 flex-shrink-0" />
          <span className="truncate">{course.goal}</span>
        </div>
      </div>

      {/* Location */}
      <div className="bg-gray-50 p-3 rounded-lg mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <MapPin size={16} className="text-primary-500 flex-shrink-0" />
          <span>{course.location}</span>
        </div>
      </div>

      {/* Mysteries */}
      <div className="flex items-center gap-2 text-secondary-600 font-medium mb-4">
        <Search size={18} />
        <span>{course.mysteries}個の謎解きあり</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {course.description}
      </p>

      {/* Button */}
      <button
        onClick={() => onViewDetails(course.id)}
        className="w-full gradient-primary text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
      >
        <Info size={18} />
        詳細を見る
      </button>
    </div>
  );
};

export default CourseCard;