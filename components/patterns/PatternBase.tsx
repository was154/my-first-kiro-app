'use client';

/**
 * 日本伝統パターンの基底コンポーネント
 * Base component for Japanese traditional patterns
 */

import React from 'react';
import { useTheme } from '@/components/ThemeProvider';

// パターンの基本プロップス / Base Pattern Props
export interface PatternBaseProps {
  /** パターンの幅 / Pattern width */
  width?: number | string;
  /** パターンの高さ / Pattern height */
  height?: number | string;
  /** パターンの色 / Pattern color */
  color?: string;
  /** パターンの不透明度 / Pattern opacity */
  opacity?: number;
  /** パターンのサイズ / Pattern size */
  size?: 'small' | 'medium' | 'large';
  /** アニメーション有効化 / Enable animation */
  animated?: boolean;
  /** カスタムクラス名 / Custom class name */
  className?: string;
  /** パターンID（重複回避用） / Pattern ID (for avoiding duplicates) */
  patternId?: string;
  /** 背景として使用するか / Use as background */
  asBackground?: boolean;
  /** レスポンシブ対応 / Responsive behavior */
  responsive?: boolean;
}

// パターンサイズの定義 / Pattern size definitions
export const PATTERN_SIZES = {
  small: { scale: 0.5, strokeWidth: 0.25 },
  medium: { scale: 1, strokeWidth: 0.5 },
  large: { scale: 1.5, strokeWidth: 0.75 },
} as const;

// パターンベースコンポーネント / Pattern Base Component
export const PatternBase: React.FC<PatternBaseProps & { children: React.ReactNode }> = ({
  width = '100%',
  height = '100%',
  color,
  opacity = 0.3,
  size = 'medium',
  animated = false,
  className = '',
  patternId = 'pattern',
  asBackground = false,
  responsive = true,
  children,
}) => {
  const { tokens } = useTheme();
  
  // デフォルト色の設定 / Set default color
  const patternColor = color || tokens.colors.traditional.indigo[500];
  
  // パターンサイズの取得 / Get pattern size
  const sizeConfig = PATTERN_SIZES[size];
  
  // レスポンシブクラスの生成 / Generate responsive classes
  const responsiveClasses = responsive 
    ? 'w-full h-full min-w-0 min-h-0' 
    : '';
  
  // アニメーションクラスの生成 / Generate animation classes
  const animationClasses = animated 
    ? 'animate-pulse' 
    : '';
  
  // 背景用のクラス / Background classes
  const backgroundClasses = asBackground 
    ? 'absolute inset-0 pointer-events-none' 
    : '';
  
  const combinedClasses = [
    className,
    responsiveClasses,
    animationClasses,
    backgroundClasses,
  ].filter(Boolean).join(' ');

  return (
    <svg
      width={width}
      height={height}
      className={combinedClasses}
      style={{
        color: patternColor,
        opacity,
      }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Japanese traditional pattern"
    >
      <defs>
        {/* パターン定義をここに挿入 / Pattern definitions inserted here */}
        {React.cloneElement(children as React.ReactElement, {
          patternId,
          sizeConfig,
          color: patternColor,
          animated,
        })}
      </defs>
      <rect 
        width="100%" 
        height="100%" 
        fill={`url(#${patternId})`}
      />
    </svg>
  );
};

// パターンコンテナコンポーネント / Pattern Container Component
export const PatternContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default PatternBase;