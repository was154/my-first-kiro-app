'use client';

/**
 * 青海波パターンコンポーネント
 * Seigaiha (Blue Ocean Waves) Pattern Component
 * 
 * 青海波は日本の伝統的な波模様で、平安時代から使われている。
 * 穏やかな波を表現し、平和と永続性を象徴する。
 */

import React from 'react';
import { PatternBase, PatternBaseProps, PATTERN_SIZES } from './PatternBase';
import { useTheme } from '@/components/ThemeProvider';

// 青海波パターンの特有プロップス / Seigaiha-specific props
export interface SeigaihaPatternProps extends PatternBaseProps {
  /** 波の数 / Number of waves */
  waveCount?: number;
  /** 波の高さ / Wave height */
  waveHeight?: number;
  /** 波の間隔 / Wave spacing */
  waveSpacing?: number;
  /** グラデーション使用 / Use gradient */
  useGradient?: boolean;
  /** 複数色使用 / Use multiple colors */
  multiColor?: boolean;
}

// 青海波パターン定義コンポーネント / Seigaiha Pattern Definition Component
const SeigaihaPatternDef: React.FC<{
  patternId: string;
  sizeConfig: { scale: number; strokeWidth: number };
  color: string;
  animated: boolean;
  waveCount: number;
  waveHeight: number;
  waveSpacing: number;
  useGradient: boolean;
  multiColor: boolean;
}> = ({
  patternId,
  sizeConfig,
  color,
  animated,
  waveCount,
  waveHeight,
  waveSpacing,
  useGradient,
  multiColor,
}) => {
  const { tokens } = useTheme();
  
  // パターンサイズの計算 / Calculate pattern size
  const patternWidth = 100 * sizeConfig.scale;
  const patternHeight = 50 * sizeConfig.scale;
  const strokeWidth = sizeConfig.strokeWidth;
  
  // 波の生成 / Generate waves
  const generateWaves = () => {
    const waves = [];
    const waveWidth = patternWidth / waveCount;
    
    for (let i = 0; i < waveCount; i++) {
      const x = i * waveWidth;
      const nextX = (i + 1) * waveWidth;
      
      // 波のパス生成 / Generate wave path
      const wavePath = `M${x} ${patternHeight} 
                       Q${x + waveWidth * 0.25} ${patternHeight - waveHeight} 
                       ${x + waveWidth * 0.5} ${patternHeight} 
                       Q${x + waveWidth * 0.75} ${patternHeight - waveHeight} 
                       ${nextX} ${patternHeight}`;
      
      // 色の決定 / Determine color
      let waveColor = color;
      if (multiColor) {
        const colors = [
          tokens.colors.traditional.indigo[400],
          tokens.colors.traditional.indigo[500],
          tokens.colors.traditional.indigo[600],
        ];
        waveColor = colors[i % colors.length];
      }
      
      waves.push(
        <g key={`wave-${i}`}>
          {/* 波の塗りつぶし / Wave fill */}
          <path
            d={`${wavePath} L${nextX} ${patternHeight + 10} L${x} ${patternHeight + 10} Z`}
            fill={useGradient ? `url(#seigaiha-gradient-${i})` : waveColor}
            opacity={0.1}
          />
          {/* 波の輪郭 / Wave outline */}
          <path
            d={wavePath}
            fill="none"
            stroke={waveColor}
            strokeWidth={strokeWidth}
            opacity={0.6}
          />
        </g>
      );
    }
    
    return waves;
  };
  
  // グラデーション定義 / Gradient definitions
  const generateGradients = () => {
    if (!useGradient) return null;
    
    const gradients = [];
    for (let i = 0; i < waveCount; i++) {
      const baseColor = multiColor 
        ? [
            tokens.colors.traditional.indigo[400],
            tokens.colors.traditional.indigo[500],
            tokens.colors.traditional.indigo[600],
          ][i % 3]
        : color;
      
      gradients.push(
        <linearGradient
          key={`gradient-${i}`}
          id={`seigaiha-gradient-${i}`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor={baseColor} stopOpacity="0.3" />
          <stop offset="50%" stopColor={baseColor} stopOpacity="0.2" />
          <stop offset="100%" stopColor={baseColor} stopOpacity="0.1" />
        </linearGradient>
      );
    }
    
    return gradients;
  };

  return (
    <>
      {/* グラデーション定義 / Gradient definitions */}
      {generateGradients()}
      
      {/* パターン定義 / Pattern definition */}
      <pattern
        id={patternId}
        x="0"
        y="0"
        width={patternWidth}
        height={patternHeight}
        patternUnits="userSpaceOnUse"
      >
        {/* アニメーション定義 / Animation definition */}
        {animated && (
          <animateTransform
            attributeName="patternTransform"
            type="translate"
            values={`0,0; ${patternWidth},0; 0,0`}
            dur="8s"
            repeatCount="indefinite"
          />
        )}
        
        {/* 波の描画 / Wave rendering */}
        {generateWaves()}
      </pattern>
    </>
  );
};

// 青海波パターンコンポーネント / Seigaiha Pattern Component
export const SeigaihaPattern: React.FC<SeigaihaPatternProps> = ({
  waveCount = 4,
  waveHeight = 15,
  waveSpacing = 25,
  useGradient = true,
  multiColor = false,
  patternId = 'seigaiha-pattern',
  ...baseProps
}) => {
  const { tokens } = useTheme();
  
  // デフォルト色の設定 / Set default color
  const defaultColor = baseProps.color || tokens.colors.traditional.indigo[500];

  return (
    <PatternBase
      {...baseProps}
      patternId={patternId}
      color={defaultColor}
    >
      <SeigaihaPatternDef
        patternId={patternId}
        sizeConfig={PATTERN_SIZES[baseProps.size || 'medium']}
        color={defaultColor}
        animated={baseProps.animated || false}
        waveCount={waveCount}
        waveHeight={waveHeight}
        waveSpacing={waveSpacing}
        useGradient={useGradient}
        multiColor={multiColor}
      />
    </PatternBase>
  );
};

export default SeigaihaPattern;