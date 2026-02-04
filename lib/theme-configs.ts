/**
 * 日本伝統デザインシステムのテーマ設定
 * Japanese Traditional Design System Theme Configurations
 */

import { ThemeConfig, SeasonalVariant } from '@/types/theme';
import { designTokens, lightThemeTokens, darkThemeTokens } from './design-tokens';

// ライトテーマ設定 / Light Theme Configuration
export const lightTheme: ThemeConfig = {
  id: 'light',
  name: 'light',
  displayName: '明るいテーマ',
  mode: 'light',
  tokens: lightThemeTokens,
};

// ダークテーマ設定 / Dark Theme Configuration
export const darkTheme: ThemeConfig = {
  id: 'dark',
  name: 'dark',
  displayName: '暗いテーマ',
  mode: 'dark',
  tokens: darkThemeTokens,
};

// 季節テーマの作成 / Create Seasonal Themes
const createSeasonalTheme = (variant: SeasonalVariant): ThemeConfig => {
  const baseTokens = { ...designTokens };
  
  // 季節ごとの色調整 / Seasonal color adjustments
  switch (variant) {
    case 'spring':
      // 春：桜を強調 / Spring: Emphasize sakura
      baseTokens.colors.primary = baseTokens.colors.traditional.sakura;
      baseTokens.colors.accent = baseTokens.colors.traditional.bamboo;
      break;
      
    case 'summer':
      // 夏：竹と藍を強調 / Summer: Emphasize bamboo and indigo
      baseTokens.colors.primary = baseTokens.colors.traditional.bamboo;
      baseTokens.colors.accent = baseTokens.colors.traditional.indigo;
      break;
      
    case 'autumn':
      // 秋：夕焼けと金を強調 / Autumn: Emphasize sunset and gold
      baseTokens.colors.primary = baseTokens.colors.traditional.sunset;
      baseTokens.colors.accent = baseTokens.colors.traditional.gold;
      break;
      
    case 'winter':
      // 冬：墨と和紙を強調 / Winter: Emphasize sumi and washi
      baseTokens.colors.primary = baseTokens.colors.traditional.sumi;
      baseTokens.colors.accent = baseTokens.colors.traditional.washi;
      break;
  }
  
  return {
    id: `seasonal-${variant}`,
    name: 'seasonal',
    displayName: getSeasonalDisplayName(variant),
    mode: 'seasonal',
    seasonalVariant: variant,
    tokens: baseTokens,
  };
};

// 季節の表示名を取得 / Get seasonal display name
const getSeasonalDisplayName = (variant: SeasonalVariant): string => {
  const names = {
    spring: '春のテーマ',
    summer: '夏のテーマ',
    autumn: '秋のテーマ',
    winter: '冬のテーマ',
  };
  return names[variant];
};

// 季節テーマ / Seasonal Themes
export const springTheme = createSeasonalTheme('spring');
export const summerTheme = createSeasonalTheme('summer');
export const autumnTheme = createSeasonalTheme('autumn');
export const winterTheme = createSeasonalTheme('winter');

// すべてのテーマ / All Themes
export const themes = {
  light: lightTheme,
  dark: darkTheme,
  'seasonal-spring': springTheme,
  'seasonal-summer': summerTheme,
  'seasonal-autumn': autumnTheme,
  'seasonal-winter': winterTheme,
};

// テーマ取得ヘルパー / Theme getter helper
export const getTheme = (mode: string, seasonalVariant?: SeasonalVariant): ThemeConfig => {
  if (mode === 'seasonal' && seasonalVariant) {
    return themes[`seasonal-${seasonalVariant}` as keyof typeof themes];
  }
  return themes[mode as keyof typeof themes] || lightTheme;
};

// デフォルトテーマ / Default Theme
export const defaultTheme = lightTheme;