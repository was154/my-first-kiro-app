'use client';

/**
 * 日本伝統デザインシステムのテーマプロバイダー
 * Japanese Traditional Design System Theme Provider
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeContextValue, ThemeMode, SeasonalVariant, ThemeConfig, ColorScale } from '@/types/theme';
import { getTheme, defaultTheme } from '@/lib/theme-configs';

// テーマコンテキストの作成 / Create Theme Context
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// テーマプロバイダーのプロップス / Theme Provider Props
interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeMode;
  defaultSeasonalVariant?: SeasonalVariant;
}

// テーマプロバイダーコンポーネント / Theme Provider Component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultMode = 'light',
  defaultSeasonalVariant = 'spring',
}) => {
  const [currentMode, setCurrentMode] = useState<ThemeMode>(defaultMode);
  const [seasonalVariant, setSeasonalVariant] = useState<SeasonalVariant>(defaultSeasonalVariant);
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(defaultTheme);

  // テーマの更新 / Update theme
  useEffect(() => {
    const theme = getTheme(currentMode, seasonalVariant);
    setCurrentTheme(theme);
    
    // CSS変数の更新 / Update CSS variables
    updateCSSVariables(theme);
    
    // ローカルストレージに保存 / Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-mode', currentMode);
      if (seasonalVariant) {
        localStorage.setItem('seasonal-variant', seasonalVariant);
      }
    }
  }, [currentMode, seasonalVariant]);

  // 初期化時にローカルストレージから読み込み / Load from localStorage on initialization
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('theme-mode') as ThemeMode;
      const savedVariant = localStorage.getItem('seasonal-variant') as SeasonalVariant;
      
      if (savedMode) {
        setCurrentMode(savedMode);
      }
      if (savedVariant) {
        setSeasonalVariant(savedVariant);
      }
    }
  }, []);

  // CSS変数の更新 / Update CSS variables
  const updateCSSVariables = (theme: ThemeConfig) => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    const { colors, typography, spacing, animations } = theme.tokens;

    // 色の設定 / Set colors
    Object.entries(colors.traditional).forEach(([colorName, colorScale]) => {
      Object.entries(colorScale as ColorScale).forEach(([shade, value]) => {
        root.style.setProperty(`--color-${colorName}-${shade}`, value as string);
      });
    });

    // タイポグラフィの設定 / Set typography
    root.style.setProperty('--font-japanese', typography.japanese.fontFamily);
    root.style.setProperty('--font-latin', typography.latin.fontFamily);
    root.style.setProperty('--line-height-japanese', typography.japanese.lineHeight.toString());
    root.style.setProperty('--line-height-latin', typography.latin.lineHeight.toString());
    root.style.setProperty('--letter-spacing-japanese', typography.japanese.letterSpacing);
    root.style.setProperty('--letter-spacing-latin', typography.latin.letterSpacing);

    // 間隔の設定 / Set spacing
    root.style.setProperty('--spacing-tatami', spacing.tatami);
    root.style.setProperty('--spacing-shaku', spacing.shaku);
    root.style.setProperty('--spacing-sun', spacing.sun);

    // アニメーションの設定 / Set animations
    root.style.setProperty('--duration-fast', animations.duration.fast);
    root.style.setProperty('--duration-normal', animations.duration.normal);
    root.style.setProperty('--duration-slow', animations.duration.slow);
  };

  // テーマ変更ハンドラー / Theme change handlers
  const setTheme = (mode: ThemeMode) => {
    setCurrentMode(mode);
  };

  const handleSeasonalVariant = (variant: SeasonalVariant) => {
    setSeasonalVariant(variant);
  };

  // コンテキスト値 / Context value
  const contextValue: ThemeContextValue = {
    currentTheme,
    setTheme,
    setSeasonalVariant: handleSeasonalVariant,
    tokens: currentTheme.tokens,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div 
        className={`theme-${currentTheme.mode} ${currentTheme.seasonalVariant ? `seasonal-${currentTheme.seasonalVariant}` : ''}`}
        data-theme={currentTheme.id}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// テーマフック / Theme hook
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;