'use client';

/**
 * 和紙背景適用システム
 * Washi Background Application System
 * 
 * 和紙テクスチャを背景として適用するためのシステム
 * System for applying washi textures as backgrounds
 */

import React from 'react';
import { WashiTexture, WashiTextureType, WashiTextureProps } from './WashiTexture';
import { useTheme } from '@/components/ThemeProvider';

// 和紙背景のプロップス / Washi background props
export interface WashiBackgroundProps {
  /** 子要素 / Children */
  children?: React.ReactNode;
  /** テクスチャの種類 / Texture type */
  textureType?: WashiTextureType;
  /** テクスチャの強度 / Texture intensity */
  intensity?: 'subtle' | 'normal' | 'strong';
  /** オーバーレイの有無 / Overlay presence */
  overlay?: boolean;
  /** オーバーレイの不透明度 / Overlay opacity */
  overlayOpacity?: number;
  /** オーバーレイの色 / Overlay color */
  overlayColor?: string;
  /** カスタムクラス名 / Custom class name */
  className?: string;
  /** 背景のブレンドモード / Background blend mode */
  blendMode?: 'normal' | 'multiply' | 'overlay' | 'soft-light' | 'hard-light';
  /** レスポンシブ対応 / Responsive behavior */
  responsive?: boolean;
  /** アニメーション効果 / Animation effects */
  animated?: boolean;
  /** 和紙テクスチャの追加プロップス / Additional washi texture props */
  textureProps?: Partial<WashiTextureProps>;
}

// 和紙背景コンテナコンポーネント / Washi Background Container Component
export const WashiBackground: React.FC<WashiBackgroundProps> = ({
  children,
  textureType = 'smooth',
  intensity = 'subtle',
  overlay = false,
  overlayOpacity = 0.05,
  overlayColor,
  className = '',
  blendMode = 'normal',
  responsive = true,
  animated = false,
  textureProps = {},
}) => {
  const { tokens } = useTheme();
  
  // デフォルトオーバーレイ色の設定 / Set default overlay color
  const defaultOverlayColor = overlayColor || tokens.colors.traditional.washi[100];
  
  // レスポンシブクラスの生成 / Generate responsive classes
  const responsiveClasses = responsive 
    ? 'w-full h-full min-w-0 min-h-0' 
    : '';
  
  // ブレンドモードのスタイル / Blend mode styles
  const blendModeStyle = {
    mixBlendMode: blendMode as any,
  };
  
  const combinedClasses = [
    'relative',
    'overflow-hidden',
    responsiveClasses,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={combinedClasses}>
      {/* 和紙テクスチャ背景 / Washi texture background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={blendModeStyle}
      >
        <WashiTexture
          type={textureType}
          intensity={intensity}
          asBackground={true}
          animated={animated}
          width="100%"
          height="100%"
          {...textureProps}
        />
      </div>
      
      {/* オーバーレイ / Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            backgroundColor: defaultOverlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}
      
      {/* コンテンツ / Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

// 和紙カードコンポーネント / Washi Card Component
export const WashiCard: React.FC<WashiBackgroundProps & {
  /** カードの影 / Card shadow */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** カードの角の丸み / Card border radius */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** カードのパディング / Card padding */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** カードの境界線 / Card border */
  border?: boolean;
  /** ホバー効果 / Hover effects */
  hoverable?: boolean;
}> = ({
  children,
  shadow = 'md',
  rounded = 'lg',
  padding = 'md',
  border = false,
  hoverable = false,
  className = '',
  ...washiProps
}) => {
  // 影のクラス / Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };
  
  // 角の丸みのクラス / Border radius classes
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  };
  
  // パディングのクラス / Padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  };
  
  // ホバー効果のクラス / Hover effect classes
  const hoverClasses = hoverable 
    ? 'transition-all duration-300 hover:shadow-lg hover:scale-[1.02]' 
    : '';
  
  // 境界線のクラス / Border classes
  const borderClasses = border 
    ? 'border border-gray-200' 
    : '';
  
  const cardClasses = [
    shadowClasses[shadow],
    roundedClasses[rounded],
    paddingClasses[padding],
    hoverClasses,
    borderClasses,
    className,
  ].filter(Boolean).join(' ');

  return (
    <WashiBackground
      {...washiProps}
      className={cardClasses}
    >
      {children}
    </WashiBackground>
  );
};

// 和紙セクションコンポーネント / Washi Section Component
export const WashiSection: React.FC<WashiBackgroundProps & {
  /** セクションのパディング / Section padding */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** セクションのマージン / Section margin */
  margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** 全幅表示 / Full width display */
  fullWidth?: boolean;
}> = ({
  children,
  padding = 'lg',
  margin = 'md',
  fullWidth = false,
  className = '',
  ...washiProps
}) => {
  // パディングのクラス / Padding classes
  const paddingClasses = {
    none: '',
    sm: 'py-4 px-2',
    md: 'py-6 px-4',
    lg: 'py-8 px-6',
    xl: 'py-12 px-8',
    '2xl': 'py-16 px-12',
  };
  
  // マージンのクラス / Margin classes
  const marginClasses = {
    none: '',
    sm: 'my-2',
    md: 'my-4',
    lg: 'my-6',
    xl: 'my-8',
    '2xl': 'my-12',
  };
  
  // 幅のクラス / Width classes
  const widthClasses = fullWidth 
    ? 'w-full' 
    : 'max-w-7xl mx-auto';
  
  const sectionClasses = [
    paddingClasses[padding],
    marginClasses[margin],
    widthClasses,
    className,
  ].filter(Boolean).join(' ');

  return (
    <WashiBackground
      {...washiProps}
      className={sectionClasses}
    >
      {children}
    </WashiBackground>
  );
};

// 和紙ヘッダーコンポーネント / Washi Header Component
export const WashiHeader: React.FC<WashiBackgroundProps & {
  /** ヘッダーの高さ / Header height */
  height?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** 固定ヘッダー / Fixed header */
  fixed?: boolean;
  /** 透明度 / Transparency */
  transparent?: boolean;
}> = ({
  children,
  height = 'md',
  fixed = false,
  transparent = false,
  className = '',
  ...washiProps
}) => {
  // 高さのクラス / Height classes
  const heightClasses = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-20',
    xl: 'h-24',
    '2xl': 'h-32',
  };
  
  // 固定ヘッダーのクラス / Fixed header classes
  const fixedClasses = fixed 
    ? 'fixed top-0 left-0 right-0 z-50' 
    : '';
  
  // 透明度のクラス / Transparency classes
  const transparentClasses = transparent 
    ? 'bg-opacity-80 backdrop-blur-sm' 
    : '';
  
  const headerClasses = [
    heightClasses[height],
    fixedClasses,
    transparentClasses,
    'flex items-center',
    className,
  ].filter(Boolean).join(' ');

  return (
    <WashiBackground
      {...washiProps}
      className={headerClasses}
      intensity={transparent ? 'subtle' : washiProps.intensity}
    >
      {children}
    </WashiBackground>
  );
};

export default WashiBackground;