'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-800/95 backdrop-blur-md shadow-lg' 
          : 'gradient-dark'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-white">
              NAZOARUKI
            </h1>
            <span className="text-xs md:text-sm text-gray-300 opacity-90">
              歴史と文化の散歩道
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-primary-400 transition-colors duration-300 relative group"
            >
              散歩道について
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="text-white hover:text-primary-400 transition-colors duration-300 relative group"
            >
              コース一覧
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-primary-400 transition-colors duration-300 relative group"
            >
              特徴
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary-400 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-900/95 backdrop-blur-md border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-white hover:text-primary-400 hover:bg-dark-700/50 rounded-md transition-all duration-300"
              >
                散歩道について
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="block w-full text-left px-3 py-2 text-white hover:text-primary-400 hover:bg-dark-700/50 rounded-md transition-all duration-300"
              >
                コース一覧
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-white hover:text-primary-400 hover:bg-dark-700/50 rounded-md transition-all duration-300"
              >
                特徴
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;