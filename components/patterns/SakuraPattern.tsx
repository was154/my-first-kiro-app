'use client';

/**
 * 桜パターンコンポーネント
 * Sakura (Cherry Blossom) Pattern Component
 * 
 * 桜は日本の象徴的な花で、春の美しさと生命の儚さを表現する。
 * 花びらが舞い散る様子は日本の美意識の核心を表している。
 */

import React from 'react';
import { PatternBase, PatternBaseProps, PATTERN_SIZES } from './PatternBase';
import { useTheme } from '@/components/ThemeProvider';

// 桜パターンの特有プロップス / Sakura-specific props
export interface SakuraPatternProps extends PatternBaseProps {
  /** 花びらの数 / Number of petals */
  petalCount?: number;
  /** 花びらのサイズ / Petal size */
  petalSize?: number;
  /** 花の密度 / Flower density */
  flowerDensity?: 'sparse' | 'medium' | 'dense';
  /** 散り桜効果 / Falling petals effect */
  fallingPetals?: boolean;
  /** グラデーション使用 / Use gradient */
  useGradient?: boolean;
  /** 季節バリエーション / Seasonal variation */
  seasonalVariant?: 'spring' | 'full-bloom' | 'falling';
}

// 桜パターン定義コンポーネント / Sakura Pattern Definition Component
const SakuraPatternDef: React.FC<{
  patternId: string;
  sizeConfig: { scale: number; strokeWidth: number };
  color: string;
  animated: boolean;
  petalCount: number;
  petalSize: number;
  flowerDensity: 'sparse' | 'medium' | 'dense';
  fallingPetals: boolean;
  useGradient: boolean;
  seasonalVariant: 'spring' | 'full-bloom' | 'falling';
}> = ({
  patternId,
  sizeConfig,
  color,
  animated,
  petalCount,
  petalSize,
  flowerDensity,
  fallingPetals,
  useGradient,
  seasonalVariant,
}) => {
  const { tokens } = useTheme();
  
  // パターンサイズの計算 / Calculate pattern size
  const patternSize = 80 * sizeConfig.scale;
  const scaledPetalSize = petalSize * sizeConfig.scale;
  
  // 花の密度設定 / Flower density settings
  const densityConfig = {
    sparse: { flowers: 2, spacing: 1.5 },
    medium: { flowers: 3, spacing: 1.2 },
    dense: { flowers: 4, spacing: 1.0 },
  };
  
  const { flowers: flowerCount, spacing } = densityConfig[flowerDensity];
  
  // 桜の花びらパス生成 / Generate sakura petal path
  const generatePetalPath = (centerX: number, centerY: number, rotation: number = 0) => {
    const size = scaledPetalSize;
    const path = `M${centerX},${centerY - size * 0.8} 
                  Q${centerX - size * 0.4},${centerY - size * 0.4} 
                  ${centerX - size * 0.2},${centerY} 
                  Q${centerX - size * 0.1},${centerY + size * 0.2} 
                  ${centerX},${centerY + size * 0.1} 
                  Q${centerX + size * 0.1},${centerY + size * 0.2} 
                  ${centerX + size * 0.2},${centerY} 
                  Q${centerX + size * 0.4},${centerY - size * 0.4} 
                  ${centerX},${centerY - size * 0.8}Z`;
    
    return { path, transform: `rotate(${rotation} ${centerX} ${centerY})` };
  };
  
  // 桜の花生成 / Generate sakura flower
  const generateSakuraFlower = (centerX: number, centerY: number, flowerIndex: number) => {
    const petals = [];
    const flowerColors = [
      tokens.colors.traditional.sakura[300],
      tokens.colors.traditional.sakura[400],
      tokens.colors.traditional.sakura[500],
    ];
    
    // 季節による色調整 / Seasonal color adjustment
    let baseColor = color;
    switch (seasonalVariant) {
      case 'spring':
        baseColor = tokens.colors.traditional.sakura[200];
        break;
      case 'full-bloom':
        baseColor = tokens.colors.traditional.sakura[400];
        break;
      case 'falling':
        baseColor = tokens.colors.traditional.sakura[300];
        break;
    }
    
    // 花びらの生成 / Generate petals
    for (let i = 0; i < petalCount; i++) {
      const rotation = (360 / petalCount) * i;
      const petal = generatePetalPath(centerX, centerY, rotation);
      const petalColor = flowerColors[i % flowerColors.length] || baseColor;
      
      petals.push(
        <path
          key={`petal-${flowerIndex}-${i}`}
          d={petal.path}
          transform={petal.transform}
          fill={useGradient ? `url(#sakura-petal-gradient-${i})` : petalColor}
          stroke={tokens.colors.traditional.sakura[600]}
          strokeWidth={sizeConfig.strokeWidth * 0.3}
          opacity={seasonalVariant === 'falling' ? 0.7 : 0.9}
        />
      );
    }
    
    // 花の中心 / Flower center
    petals.push(
      <circle
        key={`center-${flowerIndex}`}
        cx={centerX}
        cy={centerY}
        r={scaledPetalSize * 0.15}
        fill={tokens.colors.traditional.gold[400]}
        opacity={0.8}
      />
    );
    
    return petals;
  };
  
  // 散り桜の生成 / Generate falling petals
  const generateFallingPetals = () => {
    if (!fallingPetals) return [];
    
    const fallingPetalElements = [];
    const petalCount = seasonalVariant === 'falling' ? 8 : 4;
    
    for (let i = 0; i < petalCount; i++) {
      const x = (Math.random() * patternSize);
      const y = (Math.random() * patternSize);
      const rotation = Math.random() * 360;
      const size = scaledPetalSize * (0.5 + Math.random() * 0.5);
      
      const petal = generatePetalPath(x, y, rotation);
      
      fallingPetalElements.push(
        <path
          key={`falling-petal-${i}`}
          d={petal.path}
          transform={petal.transform}
          fill={tokens.colors.traditional.sakura[200]}
          opacity={0.4 + Math.random() * 0.3}
        >
          {animated && (
            <animateTransform
              attributeName="transform"
              type="translate"
              values={`0,0; ${Math.random() * 20 - 10},${patternSize}; 0,${patternSize * 2}`}
              dur={`${3 + Math.random() * 4}s`}
              repeatCount="indefinite"
            />
          )}
        </path>
      );
    }
    
    return fallingPetalElements;
  };
  
  // グラデーション定義 / Gradient definitions
  const generateGradients = () => {
    if (!useGradient) return null;
    
    const gradients = [];
    for (let i = 0; i < petalCount; i++) {
      gradients.push(
        <radialGradient
          key={`petal-gradient-${i}`}
          id={`sakura-petal-gradient-${i}`}
          cx="50%"
          cy="30%"
          r="70%"
        >
          <stop offset="0%" stopColor={tokens.colors.traditional.sakura[100]} stopOpacity="0.9" />
          <stop offset="50%" stopColor={tokens.colors.traditional.sakura[300]} stopOpacity="0.8" />
          <stop offset="100%" stopColor={tokens.colors.traditional.sakura[500]} stopOpacity="0.6" />
        </radialGradient>
      );
    }
    
    return gradients;
  };
  
  // 桜パターンの生成 / Generate sakura pattern
  const generateSakuraPattern = () => {
    const elements = [];
    const gridSize = Math.ceil(Math.sqrt(flowerCount));
    const cellSize = patternSize / gridSize;
    
    let flowerIndex = 0;
    for (let row = 0; row < gridSize && flowerIndex < flowerCount; row++) {
      for (let col = 0; col < gridSize && flowerIndex < flowerCount; col++) {
        const baseX = (col + 0.5) * cellSize;
        const baseY = (row + 0.5) * cellSize;
        
        // ランダムなオフセットを追加 / Add random offset
        const offsetX = (Math.random() - 0.5) * cellSize * 0.3;
        const offsetY = (Math.random() - 0.5) * cellSize * 0.3;
        
        const flowerX = baseX + offsetX;
        const flowerY = baseY + offsetY;
        
        elements.push(
          <g key={`flower-${flowerIndex}`}>
            {generateSakuraFlower(flowerX, flowerY, flowerIndex)}
          </g>
        );
        
        flowerIndex++;
      }
    }
    
    return elements;
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
        width={patternSize}
        height={patternSize}
        patternUnits="userSpaceOnUse"
      >
        {/* 背景 / Background */}
        <rect
          width={patternSize}
          height={patternSize}
          fill="transparent"
        />
        
        {/* 桜の花 / Sakura flowers */}
        <g opacity={0.8}>
          {generateSakuraPattern()}
        </g>
        
        {/* 散り桜 / Falling petals */}
        {generateFallingPetals()}
        
        {/* アニメーション定義 / Animation definition */}
        {animated && seasonalVariant !== 'falling' && (
          <animateTransform
            attributeName="patternTransform"
            type="rotate"
            values="0 40 40; 5 40 40; 0 40 40; -5 40 40; 0 40 40"
            dur="6s"
            repeatCount="indefinite"
          />
        )}
      </pattern>
    </>
  );
};

// 桜パターンコンポーネント / Sakura Pattern Component
export const SakuraPattern: React.FC<SakuraPatternProps> = ({
  petalCount = 5,
  petalSize = 8,
  flowerDensity = 'medium',
  fallingPetals = false,
  useGradient = true,
  seasonalVariant = 'full-bloom',
  patternId = 'sakura-pattern',
  ...baseProps
}) => {
  const { tokens } = useTheme();
  
  // デフォルト色の設定 / Set default color
  const defaultColor = baseProps.color || tokens.colors.traditional.sakura[400];

  return (
    <PatternBase
      {...baseProps}
      patternId={patternId}
      color={defaultColor}
    >
      <SakuraPatternDef
        patternId={patternId}
        sizeConfig={PATTERN_SIZES[baseProps.size || 'medium']}
        color={defaultColor}
        animated={baseProps.animated || false}
        petalCount={petalCount}
        petalSize={petalSize}
        flowerDensity={flowerDensity}
        fallingPetals={fallingPetals}
        useGradient={useGradient}
        seasonalVariant={seasonalVariant}
      />
    </PatternBase>
  );
};

export default SakuraPattern;