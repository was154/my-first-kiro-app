'use client';

/**
 * テーマセレクターコンポーネント
 * Theme Selector Component
 */

import React from 'react';
import { useTheme } from './ThemeProvider';
import { ThemeMode, SeasonalVariant } from '@/types/theme';

interface ThemeSelectorProps {
  className?: string;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ className = '' }) => {
  const { currentTheme, setTheme, setSeasonalVariant } = useTheme();

  return (
    <div className={`flex flex-col gap-4 p-4 bg-washi-100 rounded-lg border border-sumi-200 ${className}`}>
      <div>
        <label 
          htmlFor="theme-mode-select"
          className="block text-sm font-medium text-sumi-700 mb-2 font-japanese"
        >
          テーマモード
        </label>
        <select
          id="theme-mode-select"
          value={currentTheme.mode}
          onChange={(e) => setTheme(e.target.value as ThemeMode)}
          className="w-full p-2 border border-sumi-300 rounded-md bg-washi-50 text-sumi-900 font-japanese focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          aria-label="テーマモードを選択"
        >
          <option value="light">明るいテーマ</option>
          <option value="dark">暗いテーマ</option>
          <option value="seasonal">季節テーマ</option>
        </select>
      </div>

      {currentTheme.mode === 'seasonal' && (
        <div>
          <label 
            htmlFor="seasonal-variant-select"
            className="block text-sm font-medium text-sumi-700 mb-2 font-japanese"
          >
            季節
          </label>
          <select
            id="seasonal-variant-select"
            value={currentTheme.seasonalVariant || 'spring'}
            onChange={(e) => setSeasonalVariant(e.target.value as SeasonalVariant)}
            className="w-full p-2 border border-sumi-300 rounded-md bg-washi-50 text-sumi-900 font-japanese focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            aria-label="季節を選択"
          >
            <option value="spring">春 (桜)</option>
            <option value="summer">夏 (竹)</option>
            <option value="autumn">秋 (紅葉)</option>
            <option value="winter">冬 (雪)</option>
          </select>
        </div>
      )}

      <div className="text-xs text-sumi-600 font-japanese">
        現在のテーマ: {currentTheme.displayName}
      </div>
    </div>
  );
};

export default ThemeSelector;