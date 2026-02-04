'use client';

/**
 * 季節テーマ切り替えコンポーネント
 * Seasonal Theme Switcher Component
 * 
 * 季節に応じたテーマの切り替え機能を提供
 * Provides seasonal theme switching functionality
 */

import React, { useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { SeasonalVariant } from '@/types/theme';

// 季節テーマ切り替えのプロップス / Seasonal Theme Switcher Props
export interface SeasonalThemeSwitcherProps {
  /** 表示スタイル / Display style */
  variant?: 'buttons' | 'dropdown' | 'tabs';
  /** サイズ / Size */
  size?: 'sm' | 'md' | 'lg';
  /** 方向 / Direction */
  orientation?: 'horizontal' | 'vertical';
  /** ラベル表示 / Show labels */
  showLabels?: boolean;
  /** アイコン表示 / Show icons */
  showIcons?: boolean;
  /** クラス名 / Class name */
  className?: string;
}

// 季節情報 / Seasonal information
const SEASONAL_INFO = {
  spring: {
    name: '春',
    nameEn: 'Spring',
    icon: '🌸',
    description: '桜の季節',
    descriptionEn: 'Cherry blossom season',
    colors: ['#fecaca', '#fbb6ce', '#f9a8d4'],
  },
  summer: {
    name: '夏',
    nameEn: 'Summer',
    icon: '🌿',
    description: '緑豊かな季節',
    descriptionEn: 'Lush green season',
    colors: ['#bbf7d0', '#86efac', '#4ade80'],
  },
  autumn: {
    name: '秋',
    nameEn: 'Autumn',
    icon: '🍁',
    description: '紅葉の季節',
    descriptionEn: 'Maple leaf season',
    colors: ['#fed7aa', '#fdba74', '#fb923c'],
  },
  winter: {
    name: '冬',
    nameEn: 'Winter',
    icon: '❄️',
    description: '雪の季節',
    descriptionEn: 'Snow season',
    colors: ['#e2e8f0', '#cbd5e1', '#94a3b8'],
  },
} as const;

// ボタンスタイルバリアント / Button style variant
const SeasonalButtons: React.FC<{
  currentSeason: SeasonalVariant;
  onSeasonChange: (season: SeasonalVariant) => void;
  size: 'sm' | 'md' | 'lg';
  orientation: 'horizontal' | 'vertical';
  showLabels: boolean;
  showIcons: boolean;
  className: string;
}> = ({
  currentSeason,
  onSeasonChange,
  size,
  orientation,
  showLabels,
  showIcons,
  className,
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };
  
  const containerClasses = orientation === 'horizontal' 
    ? 'flex flex-row space-x-2' 
    : 'flex flex-col space-y-2';

  return (
    <div className={`${containerClasses} ${className}`}>
      {(Object.keys(SEASONAL_INFO) as SeasonalVariant[]).map((season) => {
        const info = SEASONAL_INFO[season];
        const isActive = currentSeason === season;
        
        return (
          <button
            key={season}
            onClick={() => onSeasonChange(season)}
            className={`
              ${sizeClasses[size]}
              rounded-lg border-2 transition-all duration-300
              flex items-center justify-center gap-2
              ${isActive 
                ? 'border-current bg-gradient-to-r shadow-lg transform scale-105' 
                : 'border-gray-300 bg-white hover:border-gray-400 hover:shadow-md'
              }
            `}
            style={{
              background: isActive 
                ? `linear-gradient(135deg, ${info.colors[0]}, ${info.colors[1]}, ${info.colors[2]})` 
                : undefined,
              color: isActive ? '#374151' : '#6b7280',
            }}
            title={`${info.name} (${info.nameEn}) - ${info.description}`}
          >
            {showIcons && (
              <span className="text-lg" role="img" aria-label={info.nameEn}>
                {info.icon}
              </span>
            )}
            {showLabels && (
              <span className="font-medium">
                {info.name}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

// ドロップダウンスタイルバリアント / Dropdown style variant
const SeasonalDropdown: React.FC<{
  currentSeason: SeasonalVariant;
  onSeasonChange: (season: SeasonalVariant) => void;
  size: 'sm' | 'md' | 'lg';
  showLabels: boolean;
  showIcons: boolean;
  className: string;
}> = ({
  currentSeason,
  onSeasonChange,
  size,
  showLabels,
  showIcons,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentInfo = SEASONAL_INFO[currentSeason];
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          ${sizeClasses[size]}
          w-full rounded-lg border-2 border-gray-300 bg-white
          flex items-center justify-between gap-2
          hover:border-gray-400 hover:shadow-md
          transition-all duration-200
        `}
      >
        <div className="flex items-center gap-2">
          {showIcons && (
            <span className="text-lg" role="img" aria-label={currentInfo.nameEn}>
              {currentInfo.icon}
            </span>
          )}
          {showLabels && (
            <span className="font-medium">
              {currentInfo.name}
            </span>
          )}
        </div>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-50">
          {(Object.keys(SEASONAL_INFO) as SeasonalVariant[]).map((season) => {
            const info = SEASONAL_INFO[season];
            const isActive = currentSeason === season;
            
            return (
              <button
                key={season}
                onClick={() => {
                  onSeasonChange(season);
                  setIsOpen(false);
                }}
                className={`
                  w-full ${sizeClasses[size]}
                  flex items-center gap-2
                  hover:bg-gray-50 transition-colors duration-200
                  first:rounded-t-md last:rounded-b-md
                  ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700'}
                `}
              >
                {showIcons && (
                  <span className="text-lg" role="img" aria-label={info.nameEn}>
                    {info.icon}
                  </span>
                )}
                {showLabels && (
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{info.name}</span>
                    <span className="text-xs opacity-70">{info.description}</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

// タブスタイルバリアント / Tab style variant
const SeasonalTabs: React.FC<{
  currentSeason: SeasonalVariant;
  onSeasonChange: (season: SeasonalVariant) => void;
  size: 'sm' | 'md' | 'lg';
  showLabels: boolean;
  showIcons: boolean;
  className: string;
}> = ({
  currentSeason,
  onSeasonChange,
  size,
  showLabels,
  showIcons,
  className,
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };

  return (
    <div className={`flex bg-gray-100 rounded-lg p-1 ${className}`}>
      {(Object.keys(SEASONAL_INFO) as SeasonalVariant[]).map((season) => {
        const info = SEASONAL_INFO[season];
        const isActive = currentSeason === season;
        
        return (
          <button
            key={season}
            onClick={() => onSeasonChange(season)}
            className={`
              ${sizeClasses[size]}
              flex-1 rounded-md transition-all duration-200
              flex items-center justify-center gap-2
              ${isActive 
                ? 'bg-white shadow-sm text-gray-900' 
                : 'text-gray-600 hover:text-gray-900'
              }
            `}
            title={`${info.name} (${info.nameEn}) - ${info.description}`}
          >
            {showIcons && (
              <span className="text-lg" role="img" aria-label={info.nameEn}>
                {info.icon}
              </span>
            )}
            {showLabels && (
              <span className="font-medium">
                {info.name}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

// メイン季節テーマ切り替えコンポーネント / Main Seasonal Theme Switcher Component
export const SeasonalThemeSwitcher: React.FC<SeasonalThemeSwitcherProps> = ({
  variant = 'buttons',
  size = 'md',
  orientation = 'horizontal',
  showLabels = true,
  showIcons = true,
  className = '',
}) => {
  const { currentTheme, setSeasonalVariant } = useTheme();
  const currentSeason = currentTheme.seasonalVariant || 'spring';
  
  const handleSeasonChange = (season: SeasonalVariant) => {
    setSeasonalVariant(season);
  };
  
  const commonProps = {
    currentSeason,
    onSeasonChange: handleSeasonChange,
    size,
    showLabels,
    showIcons,
    className,
  };

  switch (variant) {
    case 'dropdown':
      return <SeasonalDropdown {...commonProps} />;
    case 'tabs':
      return <SeasonalTabs {...commonProps} />;
    case 'buttons':
    default:
      return <SeasonalButtons {...commonProps} orientation={orientation} />;
  }
};

// 季節情報取得ユーティリティ / Seasonal information utility
export const getSeasonalInfo = (season: SeasonalVariant) => {
  return SEASONAL_INFO[season];
};

// 現在の季節を自動検出 / Auto-detect current season
export const getCurrentSeason = (): SeasonalVariant => {
  const now = new Date();
  const month = now.getMonth() + 1; // 1-12
  
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
  return 'winter';
};

export default SeasonalThemeSwitcher;