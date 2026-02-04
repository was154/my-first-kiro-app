/**
 * 日本伝統デザインシステムのテーマ型定義
 * Japanese Traditional Design System Theme Type Definitions
 */

// 基本テーマタイプ / Base Theme Types
export type ThemeMode = 'light' | 'dark' | 'seasonal';
export type SeasonalVariant = 'spring' | 'summer' | 'autumn' | 'winter';

// 色スケール定義 / Color Scale Definition
export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  [key: string]: string; // Add index signature for Tailwind compatibility
}

// セマンティックカラー / Semantic Colors
export interface SemanticColors {
  success: string;
  warning: string;
  error: string;
  info: string;
}

// 日本伝統色パレット / Japanese Traditional Color Palette
export interface TraditionalColors {
  sumi: ColorScale;        // 墨黒 - Ink Black
  washi: ColorScale;       // 和紙白 - Washi White
  sakura: ColorScale;      // 桜ピンク - Cherry Blossom Pink
  bamboo: ColorScale;      // 竹緑 - Bamboo Green
  sunset: ColorScale;      // 夕焼けオレンジ - Sunset Orange
  indigo: ColorScale;      // 藍 - Indigo
  gold: ColorScale;        // 金 - Gold
}

// カラーパレット / Color Palette
export interface ColorPalette {
  primary: ColorScale;
  secondary: ColorScale;
  accent: ColorScale;
  neutral: ColorScale;
  semantic: SemanticColors;
  traditional: TraditionalColors;
}

// タイポグラフィスケール / Typography Scale
export interface TypographyScale {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}

// タイポグラフィ設定 / Typography Configuration
export interface TypographyConfig {
  japanese: {
    fontFamily: string;
    lineHeight: number;
    letterSpacing: string;
    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      bold: number;
    };
    scale: {
      xs: TypographyScale;
      sm: TypographyScale;
      base: TypographyScale;
      lg: TypographyScale;
      xl: TypographyScale;
      '2xl': TypographyScale;
      '3xl': TypographyScale;
      '4xl': TypographyScale;
      '5xl': TypographyScale;
      '6xl': TypographyScale;
    };
    vertical: {
      lineHeight: number;
      letterSpacing: string;
      writingMode: string;
      textOrientation: string;
    };
  };
  latin: {
    fontFamily: string;
    lineHeight: number;
    letterSpacing: string;
    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      bold: number;
    };
    scale: {
      xs: TypographyScale;
      sm: TypographyScale;
      base: TypographyScale;
      lg: TypographyScale;
      xl: TypographyScale;
      '2xl': TypographyScale;
      '3xl': TypographyScale;
      '4xl': TypographyScale;
      '5xl': TypographyScale;
      '6xl': TypographyScale;
    };
  };
}

// 間隔システム / Spacing System
export interface SpacingConfig {
  // 基本単位 / Base Units
  tatami: string;          // 畳比例ベース - Tatami proportion base (Golden ratio)
  shaku: string;           // 尺単位 - Shaku unit
  sun: string;             // 寸単位 - Sun unit
  
  // 畳比例システム / Tatami Proportion System
  tatamiScale: {
    '0.5': string;
    '1': string;
    '1.5': string;
    '2': string;
    '2.5': string;
    '3': string;
    '4': string;
    '5': string;
  };
  
  // 尺・寸システム / Shaku-Sun System
  shakuScale: {
    '0.1': string;
    '0.2': string;
    '0.3': string;
    '0.5': string;
    '0.8': string;
    '1': string;
    '1.2': string;
    '1.5': string;
    '2': string;
    '2.5': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
    '8': string;
    '10': string;
  };
  
  // レスポンシブ間隔システム / Responsive Spacing System
  responsive: {
    mobile: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    tablet: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    desktop: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
  };
  
  // 伝統的コンポーネント間隔 / Traditional Component Spacing
  component: {
    cardGap: string;
    cardPadding: string;
    cardMargin: string;
    headerHeight: string;
    headerPadding: string;
    navItemGap: string;
    navPadding: string;
    sectionGap: string;
    sectionPadding: string;
    gridGap: string;
    gridPadding: string;
  };
  
  // 標準スケール / Standard Scale
  scale: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
}

// パターン設定 / Pattern Configuration
export interface PatternConfig {
  seigaiha: {
    svg: string;
    viewBox: string;
    colors: string[];
  };
  asanoha: {
    svg: string;
    viewBox: string;
    colors: string[];
  };
  sakura: {
    svg: string;
    viewBox: string;
    colors: string[];
    animated: boolean;
  };
  bamboo: {
    svg: string;
    viewBox: string;
    colors: string[];
  };
}

// アニメーション設定 / Animation Configuration
export interface AnimationConfig {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  easing: {
    inkSpread: string;
    paperFold: string;
    brushStroke: string;
  };
  respectReducedMotion: boolean;
}

// デザイントークン / Design Tokens
export interface DesignTokens {
  colors: ColorPalette;
  typography: TypographyConfig;
  spacing: SpacingConfig;
  patterns: PatternConfig;
  animations: AnimationConfig;
}

// テーマ設定 / Theme Configuration
export interface ThemeConfig {
  id: string;
  name: string;
  displayName: string;
  mode: ThemeMode;
  seasonalVariant?: SeasonalVariant;
  tokens: DesignTokens;
}

// テーマプロバイダープロップス / Theme Provider Props
export interface ThemeProviderProps {
  theme: ThemeMode;
  children: React.ReactNode;
  seasonalVariant?: SeasonalVariant;
  className?: string;
}

// テーマコンテキスト / Theme Context
export interface ThemeContextValue {
  currentTheme: ThemeConfig;
  setTheme: (theme: ThemeMode) => void;
  setSeasonalVariant: (variant: SeasonalVariant) => void;
  tokens: DesignTokens;
}

// コンポーネント状態 / Component State
export interface ComponentState {
  theme: string;
  pattern: string;
  isAnimated: boolean;
  reducedMotion: boolean;
  seasonalVariant?: string;
}