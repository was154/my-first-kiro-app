/**
 * 日本伝統デザインシステムのデザイントークン
 * Japanese Traditional Design System Design Tokens
 */

import { DesignTokens, ColorScale, TraditionalColors, ColorPalette, TypographyScale } from '@/types/theme';

// 日本伝統色の定義 / Japanese Traditional Color Definitions
const createTraditionalColors = (): TraditionalColors => ({
  // 墨黒 - Sumi (Ink Black) - 深い黒から薄いグレーまでの墨の濃淡
  sumi: {
    50: '#f8f9fa',   // 極薄墨 - Very light ink wash
    100: '#e9ecef',  // 薄墨 - Light ink wash
    200: '#dee2e6',  // 淡墨 - Pale ink
    300: '#ced4da',  // 中墨 - Medium ink
    400: '#6c757d',  // 濃墨 - Dark ink
    500: '#495057',  // 墨 - Standard ink
    600: '#343a40',  // 濃墨 - Concentrated ink
    700: '#212529',  // 重墨 - Heavy ink
    800: '#1a1d20',  // 焦墨 - Burnt ink
    900: '#0d0f11',  // 漆黒 - Lacquer black
  },
  
  // 和紙白 - Washi (Japanese Paper White) - 和紙の自然な白から温かみのあるクリーム色
  washi: {
    50: '#fefefe',   // 純白 - Pure white
    100: '#fdfdfd',  // 雪白 - Snow white
    200: '#fbfbfb',  // 和紙白 - Washi white
    300: '#f8f8f8',  // 生成り - Natural white
    400: '#f5f5f5',  // 象牙色 - Ivory
    500: '#f2f2f2',  // 胡粉色 - Gofun white
    600: '#e8e8e8',  // 薄鼠 - Light gray
    700: '#d4d4d4',  // 白鼠 - White gray
    800: '#a3a3a3',  // 鼠色 - Mouse gray
    900: '#737373',  // 濃鼠 - Dark gray
  },
  
  // 桜ピンク - Sakura (Cherry Blossom Pink) - 桜の花びらの繊細なピンク
  sakura: {
    50: '#fef7f7',   // 桜霞 - Cherry mist
    100: '#fdedef',  // 薄桜 - Light cherry
    200: '#fbd9dc',  // 桜色 - Cherry color
    300: '#f7b8c0',  // 桃色 - Peach color
    400: '#f18ba0',  // 薄紅 - Light crimson
    500: '#e85d7a',  // 桜鼠 - Cherry gray
    600: '#d63c5e',  // 紅色 - Crimson
    700: '#b82a47',  // 深紅 - Deep crimson
    800: '#9a253e',  // 臙脂 - Dark red
    900: '#822339',  // 暗紅 - Dark crimson
  },
  
  // 竹緑 - Bamboo (Bamboo Green) - 竹の新緑から深い緑まで
  bamboo: {
    50: '#f0f9f0',   // 若竹色 - Young bamboo
    100: '#dcf2dc',  // 薄緑 - Light green
    200: '#bce5bc',  // 若草色 - Young grass
    300: '#8fd18f',  // 萌黄色 - Sprout yellow-green
    400: '#5cb85c',  // 緑色 - Green
    500: '#3a9b3a',  // 竹色 - Bamboo color
    600: '#2d7d2d',  // 深緑 - Deep green
    700: '#256325',  // 濃緑 - Dark green
    800: '#1f4f1f',  // 常磐色 - Evergreen
    900: '#1a421a',  // 深山緑 - Deep mountain green
  },
  
  // 夕焼けオレンジ - Sunset (Sunset Orange) - 夕焼けの温かい橙色
  sunset: {
    50: '#fff7ed',   // 薄橙 - Light orange
    100: '#ffedd5',  // 橙色 - Orange
    200: '#fed7aa',  // 蜜柑色 - Mandarin orange
    300: '#fdba74',  // 柿色 - Persimmon
    400: '#fb923c',  // 黄丹 - Red lead
    500: '#f97316',  // 朱色 - Vermillion
    600: '#ea580c',  // 赤橙 - Red orange
    700: '#c2410c',  // 紅橙 - Crimson orange
    800: '#9a3412',  // 褐色 - Brown
    900: '#7c2d12',  // 茶色 - Tea brown
  },
  
  // 藍 - Indigo (Traditional Indigo) - 日本の伝統的な藍染めの色
  indigo: {
    50: '#eef2ff',   // 薄藍 - Light indigo
    100: '#e0e7ff',  // 水色 - Water blue
    200: '#c7d2fe',  // 空色 - Sky blue
    300: '#a5b4fc',  // 浅葱色 - Light blue-green
    400: '#818cf8',  // 縹色 - Hanada blue
    500: '#6366f1',  // 藍色 - Indigo
    600: '#4f46e5',  // 濃藍 - Dark indigo
    700: '#4338ca',  // 紺色 - Navy blue
    800: '#3730a3',  // 濃紺 - Dark navy
    900: '#312e81',  // 留紺 - Deep navy
  },
  
  // 金 - Gold (Traditional Gold) - 金箔や金泥の輝き
  gold: {
    50: '#fffbeb',   // 薄金 - Light gold
    100: '#fef3c7',  // 金色 - Gold
    200: '#fde68a',  // 山吹色 - Yamabuki yellow
    300: '#fcd34d',  // 黄金色 - Golden yellow
    400: '#fbbf24',  // 金茶 - Gold brown
    500: '#f59e0b',  // 黄土色 - Ocher
    600: '#d97706',  // 琥珀色 - Amber
    700: '#b45309',  // 褐色 - Brown
    800: '#92400e',  // 茶褐色 - Tea brown
    900: '#78350f',  // 焦茶 - Burnt brown
  },
});

// タイポグラフィスケールの作成 / Create Typography Scales
const createJapaneseTypographyScale = () => ({
  xs: {
    fontSize: '0.75rem',    // 12px
    lineHeight: '1.8',      // 日本語に適した行間
    letterSpacing: '0.08em' // 日本語文字間隔
  },
  sm: {
    fontSize: '0.875rem',   // 14px
    lineHeight: '1.75',
    letterSpacing: '0.06em'
  },
  base: {
    fontSize: '1rem',       // 16px
    lineHeight: '1.7',      // デフォルト日本語行間
    letterSpacing: '0.05em' // デフォルト日本語文字間隔
  },
  lg: {
    fontSize: '1.125rem',   // 18px
    lineHeight: '1.65',
    letterSpacing: '0.04em'
  },
  xl: {
    fontSize: '1.25rem',    // 20px
    lineHeight: '1.6',
    letterSpacing: '0.03em'
  },
  '2xl': {
    fontSize: '1.5rem',     // 24px
    lineHeight: '1.55',
    letterSpacing: '0.025em'
  },
  '3xl': {
    fontSize: '1.875rem',   // 30px
    lineHeight: '1.5',
    letterSpacing: '0.02em'
  },
  '4xl': {
    fontSize: '2.25rem',    // 36px
    lineHeight: '1.45',
    letterSpacing: '0.015em'
  },
  '5xl': {
    fontSize: '3rem',       // 48px
    lineHeight: '1.4',
    letterSpacing: '0.01em'
  },
  '6xl': {
    fontSize: '3.75rem',    // 60px
    lineHeight: '1.35',
    letterSpacing: '0.005em'
  }
});

const createLatinTypographyScale = () => ({
  xs: {
    fontSize: '0.75rem',    // 12px
    lineHeight: '1.5',      // ラテン文字標準行間
    letterSpacing: '0.05em' // ラテン文字間隔
  },
  sm: {
    fontSize: '0.875rem',   // 14px
    lineHeight: '1.5',
    letterSpacing: '0.04em'
  },
  base: {
    fontSize: '1rem',       // 16px
    lineHeight: '1.6',      // デフォルトラテン文字行間
    letterSpacing: '0.025em' // デフォルトラテン文字間隔
  },
  lg: {
    fontSize: '1.125rem',   // 18px
    lineHeight: '1.55',
    letterSpacing: '0.02em'
  },
  xl: {
    fontSize: '1.25rem',    // 20px
    lineHeight: '1.5',
    letterSpacing: '0.015em'
  },
  '2xl': {
    fontSize: '1.5rem',     // 24px
    lineHeight: '1.45',
    letterSpacing: '0.01em'
  },
  '3xl': {
    fontSize: '1.875rem',   // 30px
    lineHeight: '1.4',
    letterSpacing: '0.005em'
  },
  '4xl': {
    fontSize: '2.25rem',    // 36px
    lineHeight: '1.35',
    letterSpacing: '0em'
  },
  '5xl': {
    fontSize: '3rem',       // 48px
    lineHeight: '1.3',
    letterSpacing: '-0.005em'
  },
  '6xl': {
    fontSize: '3.75rem',    // 60px
    lineHeight: '1.25',
    letterSpacing: '-0.01em'
  }
});

// カラーパレットの作成 / Create Color Palette
const createColorPalette = (): ColorPalette => {
  const traditional = createTraditionalColors();
  
  return {
    primary: traditional.indigo,
    secondary: traditional.sakura,
    accent: traditional.gold,
    neutral: traditional.sumi,
    semantic: {
      success: traditional.bamboo[500],
      warning: traditional.sunset[500],
      error: traditional.sakura[600],
      info: traditional.indigo[500],
    },
    traditional,
  };
};

// デザイントークンの定義 / Design Tokens Definition
export const designTokens: DesignTokens = {
  colors: createColorPalette(),
  
  typography: {
    japanese: {
      // 日本語フォントファミリー - より包括的なフォールバック
      fontFamily: '"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic Medium", "Meiryo", "MS PGothic", sans-serif',
      lineHeight: 1.7,        // 日本語に最適化された行間
      letterSpacing: '0.05em', // 日本語文字間隔
      fontWeight: {
        light: 300,   // 細字
        normal: 400,  // 標準
        medium: 500,  // 中字
        bold: 700,    // 太字
      },
      scale: createJapaneseTypographyScale(),
      // 縦書き対応 / Vertical writing support
      vertical: {
        lineHeight: 1.8,                    // 縦書き用行間
        letterSpacing: '0.1em',             // 縦書き用文字間隔
        writingMode: 'vertical-rl',         // 右から左の縦書き
        textOrientation: 'mixed',           // 混合文字方向
      },
    },
    latin: {
      // ラテン文字フォントファミリー - 日本語フォントとの調和を考慮
      fontFamily: '"Inter", "Helvetica Neue", "Arial", "Segoe UI", "Roboto", sans-serif',
      lineHeight: 1.6,         // ラテン文字標準行間
      letterSpacing: '0.025em', // ラテン文字間隔
      fontWeight: {
        light: 300,   // 細字
        normal: 400,  // 標準
        medium: 500,  // 中字
        bold: 600,    // 太字（日本語より軽め）
      },
      scale: createLatinTypographyScale(),
    },
  },
  
  spacing: {
    // 日本の伝統的な比例システム / Japanese Traditional Proportion System
    
    // 基本単位 / Base Units
    tatami: '1.618rem',      // 黄金比ベース (φ = 1.618) / Golden ratio base (φ = 1.618)
    shaku: '1rem',           // 尺単位 (約30.3cm) / Shaku unit (approx. 30.3cm)
    sun: '0.1rem',           // 寸単位 (約3.03cm) / Sun unit (approx. 3.03cm)
    
    // 畳比例システム (黄金比ベース) / Tatami Proportion System (Golden Ratio Based)
    tatamiScale: {
      '0.5': '0.809rem',     // φ/2 = 0.809
      '1': '1.618rem',       // φ = 1.618 (基本畳比例)
      '1.5': '2.427rem',     // φ * 1.5 = 2.427
      '2': '3.236rem',       // φ * 2 = 3.236
      '2.5': '4.045rem',     // φ * 2.5 = 4.045
      '3': '4.854rem',       // φ * 3 = 4.854
      '4': '6.472rem',       // φ * 4 = 6.472
      '5': '8.09rem',        // φ * 5 = 8.09
    },
    
    // 尺・寸システム / Shaku-Sun System
    shakuScale: {
      '0.1': '0.1rem',       // 1寸 / 1 sun
      '0.2': '0.2rem',       // 2寸 / 2 sun
      '0.3': '0.3rem',       // 3寸 / 3 sun
      '0.5': '0.5rem',       // 5寸 / 5 sun
      '0.8': '0.8rem',       // 8寸 / 8 sun
      '1': '1rem',           // 1尺 / 1 shaku
      '1.2': '1.2rem',       // 1尺2寸 / 1 shaku 2 sun
      '1.5': '1.5rem',       // 1尺5寸 / 1 shaku 5 sun
      '2': '2rem',           // 2尺 / 2 shaku
      '2.5': '2.5rem',       // 2尺5寸 / 2 shaku 5 sun
      '3': '3rem',           // 3尺 / 3 shaku
      '4': '4rem',           // 4尺 / 4 shaku
      '5': '5rem',           // 5尺 / 5 shaku
      '6': '6rem',           // 6尺 / 6 shaku
      '8': '8rem',           // 8尺 / 8 shaku
      '10': '10rem',         // 10尺 / 10 shaku
    },
    
    // レスポンシブ間隔システム / Responsive Spacing System
    responsive: {
      // モバイル (320px-768px) / Mobile
      mobile: {
        xs: '0.25rem',       // 4px
        sm: '0.5rem',        // 8px
        md: '0.75rem',       // 12px
        lg: '1rem',          // 16px
        xl: '1.25rem',       // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '2rem',       // 32px
        '4xl': '2.5rem',     // 40px
      },
      // タブレット (768px-1024px) / Tablet
      tablet: {
        xs: '0.375rem',      // 6px
        sm: '0.75rem',       // 12px
        md: '1rem',          // 16px
        lg: '1.5rem',        // 24px
        xl: '2rem',          // 32px
        '2xl': '2.5rem',     // 40px
        '3xl': '3rem',       // 48px
        '4xl': '4rem',       // 64px
      },
      // デスクトップ (1024px+) / Desktop
      desktop: {
        xs: '0.5rem',        // 8px
        sm: '1rem',          // 16px
        md: '1.5rem',        // 24px
        lg: '2rem',          // 32px
        xl: '3rem',          // 48px
        '2xl': '4rem',       // 64px
        '3xl': '6rem',       // 96px
        '4xl': '8rem',       // 128px
      },
    },
    
    // 伝統的コンポーネント間隔 / Traditional Component Spacing
    component: {
      // カード間隔 / Card spacing
      cardGap: '1.618rem',         // 畳比例
      cardPadding: '1rem',         // 1尺
      cardMargin: '0.809rem',      // φ/2
      
      // ヘッダー間隔 / Header spacing
      headerHeight: '4rem',        // 4尺
      headerPadding: '1rem',       // 1尺
      
      // ナビゲーション間隔 / Navigation spacing
      navItemGap: '0.5rem',        // 5寸
      navPadding: '0.8rem',        // 8寸
      
      // セクション間隔 / Section spacing
      sectionGap: '3.236rem',      // φ * 2
      sectionPadding: '2rem',      // 2尺
      
      // グリッド間隔 / Grid spacing
      gridGap: '1.618rem',         // 畳比例
      gridPadding: '1rem',         // 1尺
    },
    
    // 標準スケール (Tailwindとの互換性) / Standard Scale (Tailwind Compatibility)
    scale: {
      xs: '0.25rem',         // 4px
      sm: '0.5rem',          // 8px
      md: '1rem',            // 16px
      lg: '1.5rem',          // 24px
      xl: '2rem',            // 32px
      '2xl': '3rem',         // 48px
      '3xl': '4rem',         // 64px
      '4xl': '6rem',         // 96px
    },
  },
  
  patterns: {
    seigaiha: {
      svg: `<svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="seigaiha" x="0" y="0" width="50" height="25" patternUnits="userSpaceOnUse">
            <path d="M0 25c6.25-6.25 18.75-6.25 25 0s18.75 6.25 25 0v25H0V25z" fill="currentColor" opacity="0.1"/>
            <path d="M0 25c6.25-6.25 18.75-6.25 25 0s18.75 6.25 25 0" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seigaiha)"/>
      </svg>`,
      viewBox: '0 0 100 50',
      colors: ['currentColor'],
    },
    
    asanoha: {
      svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="asanoha" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <polygon points="30,0 45,25 30,50 15,25" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
            <polygon points="0,25 15,50 0,75 -15,50" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
            <polygon points="60,25 75,50 60,75 45,50" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#asanoha)"/>
      </svg>`,
      viewBox: '0 0 60 60',
      colors: ['currentColor'],
    },
    
    sakura: {
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sakura" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <g transform="translate(40,40)">
              <path d="M0,-15 Q-5,-10 -10,-5 Q-5,0 0,5 Q5,0 10,-5 Q5,-10 0,-15z" fill="currentColor" opacity="0.2"/>
              <circle cx="0" cy="0" r="2" fill="currentColor" opacity="0.4"/>
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sakura)"/>
      </svg>`,
      viewBox: '0 0 80 80',
      colors: ['currentColor'],
      animated: true,
    },
    
    bamboo: {
      svg: `<svg viewBox="0 0 40 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bamboo" x="0" y="0" width="40" height="100" patternUnits="userSpaceOnUse">
            <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" stroke-width="2" opacity="0.2"/>
            <line x1="0" y1="25" x2="40" y2="25" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
            <line x1="0" y1="50" x2="40" y2="50" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
            <line x1="0" y1="75" x2="40" y2="75" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bamboo)"/>
      </svg>`,
      viewBox: '0 0 40 100',
      colors: ['currentColor'],
    },
  },
  
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      inkSpread: 'cubic-bezier(0.4, 0, 0.2, 1)',
      paperFold: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      brushStroke: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    respectReducedMotion: true,
  },
};

// テーマ別のトークン / Theme-specific tokens
export const lightThemeTokens: DesignTokens = {
  ...designTokens,
  colors: {
    ...designTokens.colors,
    // ライトテーマ用の調整 / Light theme adjustments
  },
};

export const darkThemeTokens: DesignTokens = {
  ...designTokens,
  colors: {
    ...designTokens.colors,
    // ダークテーマ用の調整 / Dark theme adjustments
    traditional: {
      // 墨黒 - ダークテーマでは明るい色調に / Sumi - Lighter tones for dark theme
      sumi: {
        50: '#0d0f11',   // 漆黒 -> 最も暗い背景
        100: '#1a1d20',  // 焦墨 -> 暗い背景
        200: '#212529',  // 重墨 -> 中間背景
        300: '#343a40',  // 濃墨 -> 薄い背景
        400: '#495057',  // 墨 -> テキスト色
        500: '#6c757d',  // 濃墨 -> 明るいテキスト
        600: '#ced4da',  // 中墨 -> より明るいテキスト
        700: '#dee2e6',  // 淡墨 -> 強調テキスト
        800: '#e9ecef',  // 薄墨 -> 最も明るいテキスト
        900: '#f8f9fa',  // 極薄墨 -> 白に近いテキスト
      },
      
      // 和紙白 - ダークテーマでは暗い色調に / Washi - Darker tones for dark theme
      washi: {
        50: '#0f172a',   // 深い藍黒 -> 最も暗い背景
        100: '#1e293b',  // 暗い藍灰 -> 暗い背景
        200: '#334155',  // 藍灰 -> 中間背景
        300: '#475569',  // 明るい藍灰 -> 薄い背景
        400: '#64748b',  // 青灰 -> テキスト色
        500: '#94a3b8',  // 明るい青灰 -> 明るいテキスト
        600: '#cbd5e1',  // 薄い青灰 -> より明るいテキスト
        700: '#e2e8f0',  // 極薄青灰 -> 強調テキスト
        800: '#f1f5f9',  // 白に近い青 -> 最も明るいテキスト
        900: '#f8fafc',  // ほぼ白 -> 純白テキスト
      },
      
      // 桜ピンク - ダークテーマでも美しさを保持 / Sakura - Maintain beauty in dark theme
      sakura: {
        50: '#2d1b1f',   // 暗い桜色背景
        100: '#3d252a',  // 深い桜色背景
        200: '#4d2f35',  // 中間桜色背景
        300: '#6b4c56',  // 薄い桜色背景
        400: '#8b6b78',  // 桜色テキスト
        500: '#b8879a',  // 明るい桜色テキスト
        600: '#d4a3bc',  // より明るい桜色
        700: '#e8c5d4',  // 薄い桜色
        800: '#f2dde6',  // 極薄桜色
        900: '#f8f0f4',  // 桜霞色
      },
      
      // 竹緑 - ダークテーマでも自然な緑を保持 / Bamboo - Natural green in dark theme
      bamboo: {
        50: '#0f1f0f',   // 深い緑黒背景
        100: '#1a2e1a',  // 暗い緑背景
        200: '#253d25',  // 中間緑背景
        300: '#355535',  // 薄い緑背景
        400: '#4a6e4a',  // 緑テキスト
        500: '#5f875f',  // 明るい緑テキスト
        600: '#7ba07b',  // より明るい緑
        700: '#9bb99b',  // 薄い緑
        800: '#bdd2bd',  // 極薄緑
        900: '#ddeadd',  // 若竹色
      },
      
      // 夕焼けオレンジ - ダークテーマでも温かみを保持 / Sunset - Warmth in dark theme
      sunset: {
        50: '#2d1a0f',   // 深い橙黒背景
        100: '#3d2415',  // 暗い橙背景
        200: '#4d2e1b',  // 中間橙背景
        300: '#6b4025',  // 薄い橙背景
        400: '#8b5530',  // 橙テキスト
        500: '#ab6a3b',  // 明るい橙テキスト
        600: '#cb8046',  // より明るい橙
        700: '#e59651',  // 薄い橙
        800: '#f0ac6c',  // 極薄橙
        900: '#f8c287',  // 蜜柑色
      },
      
      // 藍 - ダークテーマでも深い藍を保持 / Indigo - Deep indigo in dark theme
      indigo: {
        50: '#0f0f2d',   // 深い藍黒背景
        100: '#15153d',  // 暗い藍背景
        200: '#1b1b4d',  // 中間藍背景
        300: '#25256b',  // 薄い藍背景
        400: '#30308b',  // 藍テキスト
        500: '#3b3bab',  // 明るい藍テキスト
        600: '#4646cb',  // より明るい藍
        700: '#5151e5',  // 薄い藍
        800: '#6c6cf0',  // 極薄藍
        900: '#8787f8',  // 浅葱色
      },
      
      // 金 - ダークテーマでも輝きを保持 / Gold - Maintain brilliance in dark theme
      gold: {
        50: '#2d2209',   // 深い金黒背景
        100: '#3d2f0c',  // 暗い金背景
        200: '#4d3c0f',  // 中間金背景
        300: '#6b5315',  // 薄い金背景
        400: '#8b6a1b',  // 金テキスト
        500: '#ab8121',  // 明るい金テキスト
        600: '#cb9827',  // より明るい金
        700: '#e5af2d',  // 薄い金
        800: '#f0c633',  // 極薄金
        900: '#f8dd39',  // 山吹色
      },
    },
  },
};

export default designTokens;