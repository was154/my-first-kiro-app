export interface Course {
  id: number;
  name: string;
  distance: string;
  start: string;
  goal: string;
  location: string;
  mysteries: number;
  description: string;
}

export interface CourseCardProps {
  course: Course;
  onViewDetails: (courseId: number) => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  number: string;
  label: string;
}