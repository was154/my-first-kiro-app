import type { Config } from 'tailwindcss'
import { designTokens } from './lib/design-tokens'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['Noto Sans JP', 'sans-serif'],
        'japanese': designTokens.typography.japanese.fontFamily.split(',').map(f => f.trim().replace(/"/g, '')),
        'latin': designTokens.typography.latin.fontFamily.split(',').map(f => f.trim().replace(/"/g, '')),
      },
      fontSize: {
        // 日本語タイポグラフィスケール / Japanese Typography Scale
        'jp-xs': [designTokens.typography.japanese.scale.xs.fontSize, {
          lineHeight: designTokens.typography.japanese.scale.xs.lineHeight,
          letterSpacing: designTokens.typography.japanese.scale.xs.letterSpacing,
        }],
        'jp-sm': [designTokens.typography.japanese.scale.sm.fontSize, {
          lineHeight: designTokens.typography.japanese.scale.sm.lineHeight,
          letterSpacing: designTokens.typography.japanese.scale.sm.letterSpacing,
        }],
        'jp-base': [designTokens.typography.japanese.scale.base.fontSize, {
          lineHeight: designTokens.typography.japanese.scale.base.lineHeight,
          letterSpacing: designTokens.typography.japanese.scale.base.letterSpacing,
        }],
        'jp-lg': [designTokens.typography.japanese.scale.lg.fontSize, {
          lineHeight: designTokens.typography.japanese.scale.lg.lineHeight,
          letterSpacing: designTokens.typography.japanese.scale.lg.letterSpacing,
        }],
        'jp-xl': [designTokens.typography.japanese.scale.xl.fontSize, {
          lineHeight: designTokens.typography.japanese.scale.xl.lineHeight,
          letterSpacing: designTokens.typography.japanese.scale.xl.letterSpacing,
        }],
        'jp-2xl': [designTokens.typography.japanese.scale['2xl'].fontSize, {
          lineHeight: designTokens.typography.japanese.scale['2xl'].lineHeight,
          letterSpacing: designTokens.typography.japanese.scale['2xl'].letterSpacing,
        }],
        'jp-3xl': [designTokens.typography.japanese.scale['3xl'].fontSize, {
          lineHeight: designTokens.typography.japanese.scale['3xl'].lineHeight,
          letterSpacing: designTokens.typography.japanese.scale['3xl'].letterSpacing,
        }],
        'jp-4xl': [designTokens.typography.japanese.scale['4xl'].fontSize, {
          lineHeight: designTokens.typography.japanese.scale['4xl'].lineHeight,
          letterSpacing: designTokens.typography.japanese.scale['4xl'].letterSpacing,
        }],
        'jp-5xl': [designTokens.typography.japanese.scale['5xl'].fontSize, {
          lineHeight: designTokens.typography.japanese.scale['5xl'].lineHeight,
          letterSpacing: designTokens.typography.japanese.scale['5xl'].letterSpacing,
        }],
        'jp-6xl': [designTokens.typography.japanese.scale['6xl'].fontSize, {
          lineHeight: designTokens.typography.japanese.scale['6xl'].lineHeight,
          letterSpacing: designTokens.typography.japanese.scale['6xl'].letterSpacing,
        }],
        // ラテン文字タイポグラフィスケール / Latin Typography Scale
        'latin-xs': [designTokens.typography.latin.scale.xs.fontSize, {
          lineHeight: designTokens.typography.latin.scale.xs.lineHeight,
          letterSpacing: designTokens.typography.latin.scale.xs.letterSpacing,
        }],
        'latin-sm': [designTokens.typography.latin.scale.sm.fontSize, {
          lineHeight: designTokens.typography.latin.scale.sm.lineHeight,
          letterSpacing: designTokens.typography.latin.scale.sm.letterSpacing,
        }],
        'latin-base': [designTokens.typography.latin.scale.base.fontSize, {
          lineHeight: designTokens.typography.latin.scale.base.lineHeight,
          letterSpacing: designTokens.typography.latin.scale.base.letterSpacing,
        }],
        'latin-lg': [designTokens.typography.latin.scale.lg.fontSize, {
          lineHeight: designTokens.typography.latin.scale.lg.lineHeight,
          letterSpacing: designTokens.typography.latin.scale.lg.letterSpacing,
        }],
        'latin-xl': [designTokens.typography.latin.scale.xl.fontSize, {
          lineHeight: designTokens.typography.latin.scale.xl.lineHeight,
          letterSpacing: designTokens.typography.latin.scale.xl.letterSpacing,
        }],
        'latin-2xl': [designTokens.typography.latin.scale['2xl'].fontSize, {
          lineHeight: designTokens.typography.latin.scale['2xl'].lineHeight,
          letterSpacing: designTokens.typography.latin.scale['2xl'].letterSpacing,
        }],
        'latin-3xl': [designTokens.typography.latin.scale['3xl'].fontSize, {
          lineHeight: designTokens.typography.latin.scale['3xl'].lineHeight,
          letterSpacing: designTokens.typography.latin.scale['3xl'].letterSpacing,
        }],
        'latin-4xl': [designTokens.typography.latin.scale['4xl'].fontSize, {
          lineHeight: designTokens.typography.latin.scale['4xl'].lineHeight,
          letterSpacing: designTokens.typography.latin.scale['4xl'].letterSpacing,
        }],
        'latin-5xl': [designTokens.typography.latin.scale['5xl'].fontSize, {
          lineHeight: designTokens.typography.latin.scale['5xl'].lineHeight,
          letterSpacing: designTokens.typography.latin.scale['5xl'].letterSpacing,
        }],
        'latin-6xl': [designTokens.typography.latin.scale['6xl'].fontSize, {
          lineHeight: designTokens.typography.latin.scale['6xl'].lineHeight,
          letterSpacing: designTokens.typography.latin.scale['6xl'].letterSpacing,
        }],
      },
      colors: {
        // 既存の色を保持 / Keep existing colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#fef3c7',
          100: '#fde68a',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // 日本伝統色の追加 / Add Japanese traditional colors
        sumi: designTokens.colors.traditional.sumi,
        washi: designTokens.colors.traditional.washi,
        sakura: designTokens.colors.traditional.sakura,
        bamboo: designTokens.colors.traditional.bamboo,
        sunset: designTokens.colors.traditional.sunset,
        indigo: designTokens.colors.traditional.indigo,
        gold: designTokens.colors.traditional.gold,
      },
      spacing: {
        // 日本の伝統的な間隔システム / Japanese traditional spacing system
        
        // 基本単位 / Base Units
        'tatami': designTokens.spacing.tatami,
        'shaku': designTokens.spacing.shaku,
        'sun': designTokens.spacing.sun,
        
        // 畳比例システム / Tatami Proportion System
        'tatami-0.5': designTokens.spacing.tatamiScale['0.5'],
        'tatami-1': designTokens.spacing.tatamiScale['1'],
        'tatami-1.5': designTokens.spacing.tatamiScale['1.5'],
        'tatami-2': designTokens.spacing.tatamiScale['2'],
        'tatami-2.5': designTokens.spacing.tatamiScale['2.5'],
        'tatami-3': designTokens.spacing.tatamiScale['3'],
        'tatami-4': designTokens.spacing.tatamiScale['4'],
        'tatami-5': designTokens.spacing.tatamiScale['5'],
        
        // 尺・寸システム / Shaku-Sun System
        'shaku-0.1': designTokens.spacing.shakuScale['0.1'],
        'shaku-0.2': designTokens.spacing.shakuScale['0.2'],
        'shaku-0.3': designTokens.spacing.shakuScale['0.3'],
        'shaku-0.5': designTokens.spacing.shakuScale['0.5'],
        'shaku-0.8': designTokens.spacing.shakuScale['0.8'],
        'shaku-1': designTokens.spacing.shakuScale['1'],
        'shaku-1.2': designTokens.spacing.shakuScale['1.2'],
        'shaku-1.5': designTokens.spacing.shakuScale['1.5'],
        'shaku-2': designTokens.spacing.shakuScale['2'],
        'shaku-2.5': designTokens.spacing.shakuScale['2.5'],
        'shaku-3': designTokens.spacing.shakuScale['3'],
        'shaku-4': designTokens.spacing.shakuScale['4'],
        'shaku-5': designTokens.spacing.shakuScale['5'],
        'shaku-6': designTokens.spacing.shakuScale['6'],
        'shaku-8': designTokens.spacing.shakuScale['8'],
        'shaku-10': designTokens.spacing.shakuScale['10'],
        
        // 伝統的コンポーネント間隔 / Traditional Component Spacing
        'card-gap': designTokens.spacing.component.cardGap,
        'card-padding': designTokens.spacing.component.cardPadding,
        'card-margin': designTokens.spacing.component.cardMargin,
        'header-height': designTokens.spacing.component.headerHeight,
        'header-padding': designTokens.spacing.component.headerPadding,
        'nav-item-gap': designTokens.spacing.component.navItemGap,
        'nav-padding': designTokens.spacing.component.navPadding,
        'section-gap': designTokens.spacing.component.sectionGap,
        'section-padding': designTokens.spacing.component.sectionPadding,
        'grid-gap': designTokens.spacing.component.gridGap,
        'grid-padding': designTokens.spacing.component.gridPadding,
      },
      letterSpacing: {
        'japanese': designTokens.typography.japanese.letterSpacing,
        'latin': designTokens.typography.latin.letterSpacing,
        'japanese-vertical': designTokens.typography.japanese.vertical.letterSpacing,
      },
      lineHeight: {
        'japanese': designTokens.typography.japanese.lineHeight.toString(),
        'latin': designTokens.typography.latin.lineHeight.toString(),
        'japanese-vertical': designTokens.typography.japanese.vertical.lineHeight.toString(),
      },
      writingMode: {
        'horizontal-tb': 'horizontal-tb',
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr',
      },
      textOrientation: {
        'mixed': 'mixed',
        'upright': 'upright',
        'sideways': 'sideways',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        // 日本伝統アニメーション / Japanese traditional animations
        'ink-spread': 'inkSpread 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'paper-fold': 'paperFold 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'brush-stroke': 'brushStroke 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'sakura-float': 'sakuraFloat 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        // 日本伝統アニメーション / Japanese traditional animations
        inkSpread: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)',
            filter: 'blur(2px)',
          },
          '50%': {
            opacity: '0.7',
            filter: 'blur(1px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
            filter: 'blur(0px)',
          },
        },
        paperFold: {
          '0%': {
            opacity: '0',
            transform: 'rotateY(-90deg) scale(0.8)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'rotateY(-45deg) scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'rotateY(0deg) scale(1)',
          },
        },
        brushStroke: {
          '0%': {
            opacity: '0',
            transform: 'scaleX(0)',
            transformOrigin: 'left center',
          },
          '70%': {
            opacity: '0.8',
            transform: 'scaleX(1.05)',
          },
          '100%': {
            opacity: '1',
            transform: 'scaleX(1)',
          },
        },
        sakuraFloat: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '33%': {
            transform: 'translateY(-10px) rotate(2deg)',
          },
          '66%': {
            transform: 'translateY(5px) rotate(-1deg)',
          },
        },
      },
      backgroundImage: {
        'washi-texture': 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)',
        'ink-gradient': 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
      },
    },
  },
  plugins: [],
}
export default config