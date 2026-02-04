'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PaginationProps } from '@/types/course';

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-6 mt-12">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 ${
          currentPage === 1
            ? 'border-gray-300 text-gray-400 cursor-not-allowed opacity-50'
            : 'border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white hover:transform hover:-translate-y-1'
        }`}
      >
        <ChevronLeft size={18} />
        前へ
      </button>

      {/* Page Info */}
      <div className="flex items-center gap-2 text-gray-600 font-medium">
        <span className="text-primary-600 font-bold text-lg">{currentPage}</span>
        <span>/</span>
        <span>{totalPages}</span>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 ${
          currentPage === totalPages
            ? 'border-gray-300 text-gray-400 cursor-not-allowed opacity-50'
            : 'border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white hover:transform hover:-translate-y-1'
        }`}
      >
        次へ
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;