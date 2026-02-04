'use client';

/**
 * 麻の葉パターンコンポーネント
 * Asanoha (Hemp Leaf) Pattern Component
 * 
 * 麻の葉は日本の伝統的な幾何学模様で、六角形を基調とした星形パターン。
 * 成長と魔除けの意味を持ち、着物や工芸品によく使われる。
 */

import React from 'react';
import { PatternBase, PatternBaseProps, PATTERN_SIZES } from './PatternBase';
import { useTheme } from '@/components/ThemeProvider';

// 麻の葉パターンの特有プロップス / Asanoha-specific props
export interface AsanohaPatternProps extends PatternBaseProps {
  /** 六角形のサイズ / Hexagon size */
  hexagonSize?: number;
  /** 線の太さ / Line thickness */
  lineThickness?: number;
  /** 内部の星形を表示するか / Show inner star */
  showInnerStar?: boolean;
  /** 交差点を強調するか / Emphasize intersections */
  emphasizeIntersections?: boolean;
  /** 複数色使用 / Use multiple colors */
  multiColor?: boolean;
}

// 麻の葉パターン定義コンポーネント / Asanoha Pattern Definition Component
const AsanohaPatternDef: React.FC<{
  patternId: string;
  sizeConfig: { scale: number; strokeWidth: number };
  color: string;
  animated: boolean;
  hexagonSize: number;
  lineThickness: number;
  showInnerStar: boolean;
  emphasizeIntersections: boolean;
  multiColor: boolean;
}> = ({
  patternId,
  sizeConfig,
  color,
  animated,
  hexagonSize,
  lineThickness,
  showInnerStar,
  emphasizeIntersections,
  multiColor,
}) => {
  const { tokens } = useTheme();
  
  // パターンサイズの計算 / Calculate pattern size
  const patternSize = hexagonSize * sizeConfig.scale;
  const strokeWidth = (lineThickness * sizeConfig.strokeWidth);
  
  // 六角形の頂点計算 / Calculate hexagon vertices
  const generateHexagonPoints = (centerX: number, centerY: number, radius: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };
  
  // 星形の生成 / Generate star shape
  const generateStar = (centerX: number, centerY: number, radius: number) => {
    const outerRadius = radius;
    const innerRadius = radius * 0.4;
    const points = [];
    
    for (let i = 0; i < 6; i++) {
      // 外側の点 / Outer point
      const outerAngle = (i * Math.PI) / 3;
      const outerX = centerX + outerRadius * Math.cos(outerAngle);
      const outerY = centerY + outerRadius * Math.sin(outerAngle);
      points.push(`${outerX},${outerY}`);
      
      // 内側の点 / Inner point
      const innerAngle = ((i + 0.5) * Math.PI) / 3;
      const innerX = centerX + innerRadius * Math.cos(innerAngle);
      const innerY = centerY + innerRadius * Math.sin(innerAngle);
      points.push(`${innerX},${innerY}`);
    }
    
    return points.join(' ');
  };
  
  // 麻の葉パターンの生成 / Generate asanoha pattern
  const generateAsanohaPattern = () => {
    const elements = [];
    const centerX = patternSize / 2;
    const centerY = patternSize / 2;
    const radius = patternSize * 0.35;
    
    // 色の配列 / Color array
    const colors = multiColor 
      ? [
          tokens.colors.traditional.bamboo[400],
          tokens.colors.traditional.bamboo[500],
          tokens.colors.traditional.bamboo[600],
        ]
      : [color];
    
    // メインの六角形 / Main hexagon
    const hexagonPoints = generateHexagonPoints(centerX, centerY, radius);
    
    elements.push(
      <polygon
        key="main-hexagon"
        points={hexagonPoints}
        fill="none"
        stroke={colors[0]}
        strokeWidth={strokeWidth}
        opacity={0.6}
      />
    );
    
    // 内部の星形 / Inner star
    if (showInnerStar) {
      const starPoints = generateStar(centerX, centerY, radius * 0.7);
      
      elements.push(
        <polygon
          key="inner-star"
          points={starPoints}
          fill={colors[1] || color}
          fillOpacity={0.1}
          stroke={colors[1] || color}
          strokeWidth={strokeWidth * 0.7}
          opacity={0.4}
        />
      );
    }
    
    // 六角形の中心から各頂点への線 / Lines from center to vertices
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      const endX = centerX + radius * Math.cos(angle);
      const endY = centerY + radius * Math.sin(angle);
      
      elements.push(
        <line
          key={`center-line-${i}`}
          x1={centerX}
          y1={centerY}
          x2={endX}
          y2={endY}
          stroke={colors[i % colors.length]}
          strokeWidth={strokeWidth * 0.8}
          opacity={0.5}
        />
      );
    }
    
    // 交差点の強調 / Emphasize intersections
    if (emphasizeIntersections) {
      elements.push(
        <circle
          key="center-point"
          cx={centerX}
          cy={centerY}
          r={strokeWidth * 2}
          fill={colors[2] || color}
          opacity={0.8}
        />
      );
      
      // 六角形の頂点 / Hexagon vertices
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        elements.push(
          <circle
            key={`vertex-point-${i}`}
            cx={x}
            cy={y}
            r={strokeWidth * 1.5}
            fill={colors[i % colors.length]}
            opacity={0.6}
          />
        );
      }
    }
    
    return elements;
  };

  return (
    <pattern
      id={patternId}
      x="0"
      y="0"
      width={patternSize}
      height={patternSize}
      patternUnits="userSpaceOnUse"
    >
      {/* アニメーション定義 / Animation definition */}
      {animated && (
        <animateTransform
          attributeName="patternTransform"
          type="rotate"
          values="0 50 50; 360 50 50; 0 50 50"
          dur="12s"
          repeatCount="indefinite"
        />
      )}
      
      {/* 麻の葉パターンの描画 / Asanoha pattern rendering */}
      <g>
        {generateAsanohaPattern()}
      </g>
      
      {/* 隣接するパターンとの接続 / Connection with adjacent patterns */}
      <g opacity={0.3}>
        {/* 上下左右の部分的なパターン / Partial patterns for seamless tiling */}
        <g transform={`translate(${-patternSize/2}, ${-patternSize/2})`}>
          {generateAsanohaPattern()}
        </g>
        <g transform={`translate(${patternSize/2}, ${-patternSize/2})`}>
          {generateAsanohaPattern()}
        </g>
        <g transform={`translate(${-patternSize/2}, ${patternSize/2})`}>
          {generateAsanohaPattern()}
        </g>
        <g transform={`translate(${patternSize/2}, ${patternSize/2})`}>
          {generateAsanohaPattern()}
        </g>
      </g>
    </pattern>
  );
};

// 麻の葉パターンコンポーネント / Asanoha Pattern Component
export const AsanohaPattern: React.FC<AsanohaPatternProps> = ({
  hexagonSize = 60,
  lineThickness = 1,
  showInnerStar = true,
  emphasizeIntersections = false,
  multiColor = false,
  patternId = 'asanoha-pattern',
  ...baseProps
}) => {
  const { tokens } = useTheme();
  
  // デフォルト色の設定 / Set default color
  const defaultColor = baseProps.color || tokens.colors.traditional.bamboo[500];

  return (
    <PatternBase
      {...baseProps}
      patternId={patternId}
      color={defaultColor}
    >
      <AsanohaPatternDef
        patternId={patternId}
        sizeConfig={PATTERN_SIZES[baseProps.size || 'medium']}
        color={defaultColor}
        animated={baseProps.animated || false}
        hexagonSize={hexagonSize}
        lineThickness={lineThickness}
        showInnerStar={showInnerStar}
        emphasizeIntersections={emphasizeIntersections}
        multiColor={multiColor}
      />
    </PatternBase>
  );
};

export default AsanohaPattern;