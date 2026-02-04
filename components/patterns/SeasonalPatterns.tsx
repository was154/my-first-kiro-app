'use client';

/**
 * 季節バリエーションパターンシステム
 * Seasonal Variation Pattern System
 * 
 * 春桜、秋紅葉、冬雪パターンの実装
 * Implementation of spring sakura, autumn maple, and winter snow patterns
 */

import React, { useState, useEffect } from 'react';
import { PatternBase, PatternBaseProps, PATTERN_SIZES } from './PatternBase';
import { useTheme } from '@/components/ThemeProvider';
import { SeasonalVariant } from '@/types/theme';

// 季節パターンの特有プロップス / Seasonal pattern specific props
export interface SeasonalPatternProps extends PatternBaseProps {
  /** 季節バリエーション / Seasonal variation */
  season: SeasonalVariant;
  /** パターンの密度 / Pattern density */
  density?: 'sparse' | 'medium' | 'dense';
  /** アニメーション効果 / Animation effects */
  animationEffect?: 'falling' | 'floating' | 'swaying' | 'none';
  /** 風の効果 / Wind effect */
  windEffect?: boolean;
  /** グラデーション使用 / Use gradient */
  useGradient?: boolean;
}

// 春桜パターン定義 / Spring Sakura Pattern Definition
const SpringSakuraPatternDef: React.FC<{
  patternId: string;
  sizeConfig: { scale: number; strokeWidth: number };
  color: string;
  animated: boolean;
  density: 'sparse' | 'medium' | 'dense';
  animationEffect: 'falling' | 'floating' | 'swaying' | 'none';
  windEffect: boolean;
  useGradient: boolean;
}> = ({
  patternId,
  sizeConfig,
  color,
  animated,
  density,
  animationEffect,
  windEffect,
  useGradient,
}) => {
  const { tokens } = useTheme();
  
  const patternSize = 100 * sizeConfig.scale;
  const petalSize = 6 * sizeConfig.scale;
  
  // 密度設定 / Density configuration
  const densityConfig = {
    sparse: { petals: 8, branches: 2 },
    medium: { petals: 15, branches: 3 },
    dense: { petals: 25, branches: 4 },
  };
  
  const { petals: petalCount, branches: branchCount } = densityConfig[density];
  
  // 桜の花びらパス / Sakura petal path
  const generatePetalPath = (x: number, y: number, rotation: number, size: number) => {
    const path = `M${x},${y - size} 
                  Q${x - size * 0.6},${y - size * 0.3} 
                  ${x - size * 0.3},${y} 
                  Q${x},${y + size * 0.2} 
                  ${x + size * 0.3},${y} 
                  Q${x + size * 0.6},${y - size * 0.3} 
                  ${x},${y - size}Z`;
    
    return { path, transform: `rotate(${rotation} ${x} ${y})` };
  };
  
  // 桜の枝パス / Sakura branch path
  const generateBranchPath = (startX: number, startY: number, endX: number, endY: number) => {
    const midX = (startX + endX) / 2 + (Math.random() - 0.5) * 20;
    const midY = (startY + endY) / 2 + (Math.random() - 0.5) * 20;
    
    return `M${startX},${startY} Q${midX},${midY} ${endX},${endY}`;
  };
  
  // 春桜パターンの生成 / Generate spring sakura pattern
  const generateSpringPattern = () => {
    const elements = [];
    
    // 桜の枝 / Sakura branches
    for (let i = 0; i < branchCount; i++) {
      const startX = Math.random() * patternSize;
      const startY = Math.random() * patternSize;
      const endX = Math.random() * patternSize;
      const endY = Math.random() * patternSize;
      
      elements.push(
        <path
          key={`branch-${i}`}
          d={generateBranchPath(startX, startY, endX, endY)}
          stroke={tokens.colors.traditional.bamboo[600]}
          strokeWidth={sizeConfig.strokeWidth * 0.8}
          fill="none"
          opacity={0.6}
        />
      );
    }
    
    // 桜の花びら / Sakura petals
    for (let i = 0; i < petalCount; i++) {
      const x = Math.random() * patternSize;
      const y = Math.random() * patternSize;
      const rotation = Math.random() * 360;
      const size = petalSize * (0.7 + Math.random() * 0.6);
      
      const petal = generatePetalPath(x, y, rotation, size);
      
      elements.push(
        <path
          key={`petal-${i}`}
          d={petal.path}
          transform={petal.transform}
          fill={useGradient ? `url(#spring-gradient)` : tokens.colors.traditional.sakura[300]}
          stroke={tokens.colors.traditional.sakura[500]}
          strokeWidth={sizeConfig.strokeWidth * 0.3}
          opacity={0.8}
        >
          {animated && animationEffect === 'falling' && (
            <animateTransform
              attributeName="transform"
              type="translate"
              values={`0,0; ${windEffect ? Math.random() * 30 - 15 : 0},${patternSize}; 0,${patternSize * 1.5}`}
              dur={`${4 + Math.random() * 3}s`}
              repeatCount="indefinite"
              begin={`${Math.random() * 2}s`}
            />
          )}
          {animated && animationEffect === 'swaying' && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              values={`${rotation} ${x} ${y}; ${rotation + 10} ${x} ${y}; ${rotation} ${x} ${y}; ${rotation - 10} ${x} ${y}; ${rotation} ${x} ${y}`}
              dur={`${3 + Math.random() * 2}s`}
              repeatCount="indefinite"
            />
          )}
        </path>
      );
    }
    
    return elements;
  };

  return (
    <>
      {/* グラデーション定義 / Gradient definition */}
      {useGradient && (
        <radialGradient id="spring-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={tokens.colors.traditional.sakura[100]} stopOpacity="0.9" />
          <stop offset="50%" stopColor={tokens.colors.traditional.sakura[300]} stopOpacity="0.7" />
          <stop offset="100%" stopColor={tokens.colors.traditional.sakura[500]} stopOpacity="0.5" />
        </radialGradient>
      )}
      
      {/* パターン定義 / Pattern definition */}
      <pattern
        id={patternId}
        x="0"
        y="0"
        width={patternSize}
        height={patternSize}
        patternUnits="userSpaceOnUse"
      >
        <rect width={patternSize} height={patternSize} fill="transparent" />
        {generateSpringPattern()}
      </pattern>
    </>
  );
};

// 秋紅葉パターン定義 / Autumn Maple Pattern Definition
const AutumnMaplePatternDef: React.FC<{
  patternId: string;
  sizeConfig: { scale: number; strokeWidth: number };
  color: string;
  animated: boolean;
  density: 'sparse' | 'medium' | 'dense';
  animationEffect: 'falling' | 'floating' | 'swaying' | 'none';
  windEffect: boolean;
  useGradient: boolean;
}> = ({
  patternId,
  sizeConfig,
  color,
  animated,
  density,
  animationEffect,
  windEffect,
  useGradient,
}) => {
  const { tokens } = useTheme();
  
  const patternSize = 120 * sizeConfig.scale;
  const leafSize = 12 * sizeConfig.scale;
  
  // 密度設定 / Density configuration
  const densityConfig = {
    sparse: { leaves: 6 },
    medium: { leaves: 12 },
    dense: { leaves: 20 },
  };
  
  const { leaves: leafCount } = densityConfig[density];
  
  // 紅葉の葉パス / Maple leaf path
  const generateMapleLeafPath = (x: number, y: number, size: number) => {
    const path = `M${x},${y - size} 
                  L${x - size * 0.3},${y - size * 0.7} 
                  L${x - size * 0.8},${y - size * 0.3} 
                  L${x - size * 0.5},${y} 
                  L${x - size * 0.8},${y + size * 0.3} 
                  L${x - size * 0.2},${y + size * 0.6} 
                  L${x},${y + size * 0.8} 
                  L${x + size * 0.2},${y + size * 0.6} 
                  L${x + size * 0.8},${y + size * 0.3} 
                  L${x + size * 0.5},${y} 
                  L${x + size * 0.8},${y - size * 0.3} 
                  L${x + size * 0.3},${y - size * 0.7} 
                  Z`;
    
    return path;
  };
  
  // 秋紅葉パターンの生成 / Generate autumn maple pattern
  const generateAutumnPattern = () => {
    const elements = [];
    const colors = [
      tokens.colors.traditional.sunset[400],
      tokens.colors.traditional.sunset[500],
      tokens.colors.traditional.sunset[600],
      '#dc2626', // 赤
      '#ea580c', // オレンジ
      '#ca8a04', // 黄色
    ];
    
    for (let i = 0; i < leafCount; i++) {
      const x = Math.random() * patternSize;
      const y = Math.random() * patternSize;
      const size = leafSize * (0.6 + Math.random() * 0.8);
      const rotation = Math.random() * 360;
      const leafColor = colors[Math.floor(Math.random() * colors.length)];
      
      elements.push(
        <path
          key={`leaf-${i}`}
          d={generateMapleLeafPath(x, y, size)}
          fill={useGradient ? `url(#autumn-gradient-${i % 3})` : leafColor}
          stroke={tokens.colors.traditional.sumi[600]}
          strokeWidth={sizeConfig.strokeWidth * 0.2}
          opacity={0.8}
          transform={`rotate(${rotation} ${x} ${y})`}
        >
          {animated && animationEffect === 'falling' && (
            <animateTransform
              attributeName="transform"
              type="translate"
              values={`0,0; ${windEffect ? Math.random() * 40 - 20 : 0},${patternSize}; ${windEffect ? Math.random() * 20 - 10 : 0},${patternSize * 1.2}`}
              dur={`${5 + Math.random() * 4}s`}
              repeatCount="indefinite"
              begin={`${Math.random() * 3}s`}
            />
          )}
          {animated && animationEffect === 'swaying' && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              values={`${rotation} ${x} ${y}; ${rotation + 15} ${x} ${y}; ${rotation} ${x} ${y}; ${rotation - 15} ${x} ${y}; ${rotation} ${x} ${y}`}
              dur={`${4 + Math.random() * 2}s`}
              repeatCount="indefinite"
            />
          )}
        </path>
      );
    }
    
    return elements;
  };

  return (
    <>
      {/* グラデーション定義 / Gradient definitions */}
      {useGradient && (
        <>
          <radialGradient id="autumn-gradient-0" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.7" />
          </radialGradient>
          <radialGradient id="autumn-gradient-1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.7" />
          </radialGradient>
          <radialGradient id="autumn-gradient-2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7c2d12" stopOpacity="0.7" />
          </radialGradient>
        </>
      )}
      
      {/* パターン定義 / Pattern definition */}
      <pattern
        id={patternId}
        x="0"
        y="0"
        width={patternSize}
        height={patternSize}
        patternUnits="userSpaceOnUse"
      >
        <rect width={patternSize} height={patternSize} fill="transparent" />
        {generateAutumnPattern()}
      </pattern>
    </>
  );
};

// 冬雪パターン定義 / Winter Snow Pattern Definition
const WinterSnowPatternDef: React.FC<{
  patternId: string;
  sizeConfig: { scale: number; strokeWidth: number };
  color: string;
  animated: boolean;
  density: 'sparse' | 'medium' | 'dense';
  animationEffect: 'falling' | 'floating' | 'swaying' | 'none';
  windEffect: boolean;
  useGradient: boolean;
}> = ({
  patternId,
  sizeConfig,
  color,
  animated,
  density,
  animationEffect,
  windEffect,
  useGradient,
}) => {
  const { tokens } = useTheme();
  
  const patternSize = 80 * sizeConfig.scale;
  const snowflakeSize = 4 * sizeConfig.scale;
  
  // 密度設定 / Density configuration
  const densityConfig = {
    sparse: { snowflakes: 8 },
    medium: { snowflakes: 15 },
    dense: { snowflakes: 25 },
  };
  
  const { snowflakes: snowflakeCount } = densityConfig[density];
  
  // 雪の結晶パス / Snowflake path
  const generateSnowflakePath = (x: number, y: number, size: number) => {
    const paths = [];
    
    // 6つの軸を持つ雪の結晶 / 6-axis snowflake
    for (let i = 0; i < 6; i++) {
      const angle = (i * 60) * Math.PI / 180;
      const endX = x + Math.cos(angle) * size;
      const endY = y + Math.sin(angle) * size;
      
      // メインライン / Main line
      paths.push(`M${x},${y} L${endX},${endY}`);
      
      // 小さな枝 / Small branches
      const branchSize = size * 0.3;
      const branchX1 = x + Math.cos(angle) * size * 0.7 + Math.cos(angle + Math.PI/4) * branchSize;
      const branchY1 = y + Math.sin(angle) * size * 0.7 + Math.sin(angle + Math.PI/4) * branchSize;
      const branchX2 = x + Math.cos(angle) * size * 0.7 + Math.cos(angle - Math.PI/4) * branchSize;
      const branchY2 = y + Math.sin(angle) * size * 0.7 + Math.sin(angle - Math.PI/4) * branchSize;
      
      paths.push(`M${x + Math.cos(angle) * size * 0.7},${y + Math.sin(angle) * size * 0.7} L${branchX1},${branchY1}`);
      paths.push(`M${x + Math.cos(angle) * size * 0.7},${y + Math.sin(angle) * size * 0.7} L${branchX2},${branchY2}`);
    }
    
    return paths.join(' ');
  };
  
  // 冬雪パターンの生成 / Generate winter snow pattern
  const generateWinterPattern = () => {
    const elements = [];
    
    for (let i = 0; i < snowflakeCount; i++) {
      const x = Math.random() * patternSize;
      const y = Math.random() * patternSize;
      const size = snowflakeSize * (0.5 + Math.random() * 1.0);
      const rotation = Math.random() * 360;
      
      elements.push(
        <g key={`snowflake-${i}`}>
          <path
            d={generateSnowflakePath(x, y, size)}
            stroke={useGradient ? `url(#winter-gradient)` : tokens.colors.traditional.washi[200]}
            strokeWidth={sizeConfig.strokeWidth * 0.5}
            fill="none"
            opacity={0.7 + Math.random() * 0.3}
            transform={`rotate(${rotation} ${x} ${y})`}
          >
            {animated && animationEffect === 'falling' && (
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`0,0; ${windEffect ? Math.random() * 20 - 10 : 0},${patternSize}; 0,${patternSize * 1.3}`}
                dur={`${6 + Math.random() * 4}s`}
                repeatCount="indefinite"
                begin={`${Math.random() * 4}s`}
              />
            )}
            {animated && animationEffect === 'floating' && (
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`0,0; ${Math.random() * 10 - 5},${Math.random() * 10 - 5}; 0,0`}
                dur={`${8 + Math.random() * 4}s`}
                repeatCount="indefinite"
              />
            )}
          </path>
          
          {/* 雪の結晶の中心 / Snowflake center */}
          <circle
            cx={x}
            cy={y}
            r={size * 0.1}
            fill={tokens.colors.traditional.washi[100]}
            opacity={0.8}
          />
        </g>
      );
    }
    
    return elements;
  };

  return (
    <>
      {/* グラデーション定義 / Gradient definition */}
      {useGradient && (
        <radialGradient id="winter-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={tokens.colors.traditional.washi[50]} stopOpacity="1" />
          <stop offset="100%" stopColor={tokens.colors.traditional.indigo[200]} stopOpacity="0.6" />
        </radialGradient>
      )}
      
      {/* パターン定義 / Pattern definition */}
      <pattern
        id={patternId}
        x="0"
        y="0"
        width={patternSize}
        height={patternSize}
        patternUnits="userSpaceOnUse"
      >
        <rect width={patternSize} height={patternSize} fill="transparent" />
        {generateWinterPattern()}
      </pattern>
    </>
  );
};

// 季節パターンコンポーネント / Seasonal Pattern Component
export const SeasonalPattern: React.FC<SeasonalPatternProps> = ({
  season,
  density = 'medium',
  animationEffect = 'none',
  windEffect = false,
  useGradient = true,
  patternId = `seasonal-${season}-pattern`,
  ...baseProps
}) => {
  const { tokens } = useTheme();
  const [isClient, setIsClient] = useState(false);
  
  // クライアントサイドでのみレンダリング / Render only on client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // サーバーサイドでは空のdivを返す / Return empty div on server side
  if (!isClient) {
    return (
      <div 
        className="w-full h-full min-w-0 min-h-0"
        style={{ 
          width: baseProps.width || '100%',
          height: baseProps.height || '100%',
          opacity: baseProps.opacity || 0.3
        }}
      />
    );
  }
  
  // 季節に応じたデフォルト色 / Season-appropriate default color
  const getSeasonalColor = () => {
    switch (season) {
      case 'spring':
        return tokens.colors.traditional.sakura[400];
      case 'summer':
        return tokens.colors.traditional.bamboo[500];
      case 'autumn':
        return tokens.colors.traditional.sunset[500];
      case 'winter':
        return tokens.colors.traditional.washi[200];
      default:
        return tokens.colors.traditional.sakura[400];
    }
  };
  
  const defaultColor = baseProps.color || getSeasonalColor();
  
  // 季節パターンの選択 / Select seasonal pattern
  const renderSeasonalPattern = () => {
    const commonProps = {
      patternId,
      sizeConfig: PATTERN_SIZES[baseProps.size || 'medium'],
      color: defaultColor,
      animated: baseProps.animated || false,
      density,
      animationEffect,
      windEffect,
      useGradient,
    };
    
    switch (season) {
      case 'spring':
        return <SpringSakuraPatternDef {...commonProps} />;
      case 'autumn':
        return <AutumnMaplePatternDef {...commonProps} />;
      case 'winter':
        return <WinterSnowPatternDef {...commonProps} />;
      case 'summer':
        // 夏は既存の竹パターンまたは青海波を使用 / Use existing bamboo or seigaiha for summer
        return <SpringSakuraPatternDef {...commonProps} />; // Placeholder
      default:
        return <SpringSakuraPatternDef {...commonProps} />;
    }
  };

  return (
    <PatternBase
      {...baseProps}
      patternId={patternId}
      color={defaultColor}
    >
      {renderSeasonalPattern()}
    </PatternBase>
  );
};

export default SeasonalPattern;