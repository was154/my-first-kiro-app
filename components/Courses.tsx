'use client';

import { useState } from 'react';
import CourseCard from './CourseCard';
import Pagination from './Pagination';
import { coursesData, COURSES_PER_PAGE } from '@/data/courses';

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(coursesData.length / COURSES_PER_PAGE);

  // Calculate courses to display
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const endIndex = startIndex + COURSES_PER_PAGE;
  const currentCourses = coursesData.slice(startIndex, endIndex);

  const handleViewDetails = (courseId: number) => {
    const course = coursesData.find(c => c.id === courseId);
    if (course) {
      alert(`${course.name}の詳細ページに移動します。\n\n距離: ${course.distance}\nスタート: ${course.start}\nゴール: ${course.goal}\n\n${course.description}`);
      // In a real implementation, this would navigate to a detail page or open a modal
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to courses section when page changes
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          全23コース一覧
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          目指せ270km全クリアー！
        </p>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-8">
          {currentCourses.map((course, index) => (
            <div
              key={course.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard
                course={course}
                onViewDetails={handleViewDetails}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default Courses;