/**
 * 日本伝統デザインシステムの間隔ユーティリティ
 * Japanese Traditional Design System Spacing Utilities
 */

import { designTokens } from './design-tokens';

// 黄金比定数 / Golden Ratio Constant
export const GOLDEN_RATIO = 1.618;

// 尺・寸変換ユーティリティ / Shaku-Sun Conversion Utilities
export const shakuToRem = (shaku: number): string => `${shaku}rem`;
export const sunToRem = (sun: number): string => `${sun * 0.1}rem`;

// 畳比例計算ユーティリティ / Tatami Proportion Calculation Utilities
export const tatamiScale = (multiplier: number): string => `${GOLDEN_RATIO * multiplier}rem`;

// レスポンシブ間隔計算 / Responsive Spacing Calculation
export const getResponsiveSpacing = (
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl',
  breakpoint: 'mobile' | 'tablet' | 'desktop' = 'desktop'
): string => {
  return designTokens.spacing.responsive[breakpoint][size];
};

// 伝統的比例の維持 / Maintain Traditional Proportions
export const maintainTatamiProportion = (baseSize: number, screenWidth: number): string => {
  // 画面幅に基づいて畳比例を調整 / Adjust tatami proportion based on screen width
  const scaleFactor = Math.min(Math.max(screenWidth / 1024, 0.75), 1.25); // 75%-125%の範囲で調整
  return `${baseSize * GOLDEN_RATIO * scaleFactor}rem`;
};

// 間隔クラス生成ユーティリティ / Spacing Class Generation Utilities
export const generateSpacingClasses = () => {
  const classes: Record<string, string> = {};
  
  // 畳比例クラス / Tatami proportion classes
  Object.entries(designTokens.spacing.tatamiScale).forEach(([key, value]) => {
    classes[`tatami-${key}`] = value;
  });
  
  // 尺・寸クラス / Shaku-sun classes
  Object.entries(designTokens.spacing.shakuScale).forEach(([key, value]) => {
    classes[`shaku-${key}`] = value;
  });
  
  return classes;
};

// コンポーネント間隔ヘルパー / Component Spacing Helpers
export const componentSpacing = {
  // カードレイアウト / Card Layout
  card: {
    gap: designTokens.spacing.component.cardGap,
    padding: designTokens.spacing.component.cardPadding,
    margin: designTokens.spacing.component.cardMargin,
  },
  
  // ヘッダーレイアウト / Header Layout
  header: {
    height: designTokens.spacing.component.headerHeight,
    padding: designTokens.spacing.component.headerPadding,
  },
  
  // ナビゲーションレイアウト / Navigation Layout
  navigation: {
    itemGap: designTokens.spacing.component.navItemGap,
    padding: designTokens.spacing.component.navPadding,
  },
  
  // セクションレイアウト / Section Layout
  section: {
    gap: designTokens.spacing.component.sectionGap,
    padding: designTokens.spacing.component.sectionPadding,
  },
  
  // グリッドレイアウト / Grid Layout
  grid: {
    gap: designTokens.spacing.component.gridGap,
    padding: designTokens.spacing.component.gridPadding,
  },
};

// CSS変数生成 / CSS Variable Generation
export const generateSpacingCSSVariables = () => {
  const cssVars: Record<string, string> = {};
  
  // 基本単位 / Base units
  cssVars['--spacing-tatami'] = designTokens.spacing.tatami;
  cssVars['--spacing-shaku'] = designTokens.spacing.shaku;
  cssVars['--spacing-sun'] = designTokens.spacing.sun;
  
  // 畳比例 / Tatami proportions
  Object.entries(designTokens.spacing.tatamiScale).forEach(([key, value]) => {
    cssVars[`--spacing-tatami-${key}`] = value;
  });
  
  // 尺・寸 / Shaku-sun
  Object.entries(designTokens.spacing.shakuScale).forEach(([key, value]) => {
    cssVars[`--spacing-shaku-${key}`] = value;
  });
  
  // コンポーネント間隔 / Component spacing
  Object.entries(designTokens.spacing.component).forEach(([key, value]) => {
    cssVars[`--spacing-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`] = value;
  });
  
  return cssVars;
};

// レスポンシブ間隔クラス生成 / Responsive Spacing Class Generation
export const generateResponsiveSpacingClasses = () => {
  const classes: Record<string, Record<string, string>> = {
    mobile: {},
    tablet: {},
    desktop: {},
  };
  
  Object.entries(designTokens.spacing.responsive).forEach(([breakpoint, sizes]) => {
    Object.entries(sizes).forEach(([size, value]) => {
      classes[breakpoint as keyof typeof classes][`spacing-${size}`] = value;
    });
  });
  
  return classes;
};

// 間隔の妥当性検証 / Spacing Validation
export const validateSpacing = (value: string): boolean => {
  // rem単位の妥当性をチェック / Check rem unit validity
  const remPattern = /^[\d.]+rem$/;
  return remPattern.test(value);
};

// 伝統的比例の計算 / Traditional Proportion Calculation
export const calculateTraditionalProportion = (
  baseValue: number,
  proportionType: 'tatami' | 'shaku' | 'sun' = 'tatami'
): string => {
  switch (proportionType) {
    case 'tatami':
      return `${baseValue * GOLDEN_RATIO}rem`;
    case 'shaku':
      return `${baseValue}rem`;
    case 'sun':
      return `${baseValue * 0.1}rem`;
    default:
      return `${baseValue}rem`;
  }
};

// 間隔の自動調整 / Automatic Spacing Adjustment
export const autoAdjustSpacing = (
  originalValue: string,
  screenSize: 'mobile' | 'tablet' | 'desktop'
): string => {
  const numericValue = parseFloat(originalValue);
  
  switch (screenSize) {
    case 'mobile':
      return `${numericValue * 0.75}rem`; // 25%縮小
    case 'tablet':
      return `${numericValue * 0.875}rem`; // 12.5%縮小
    case 'desktop':
      return originalValue; // 元のサイズ
    default:
      return originalValue;
  }
};

export default {
  GOLDEN_RATIO,
  shakuToRem,
  sunToRem,
  tatamiScale,
  getResponsiveSpacing,
  maintainTatamiProportion,
  generateSpacingClasses,
  componentSpacing,
  generateSpacingCSSVariables,
  generateResponsiveSpacingClasses,
  validateSpacing,
  calculateTraditionalProportion,
  autoAdjustSpacing,
};