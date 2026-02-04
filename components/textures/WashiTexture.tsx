'use client';

/**
 * 和紙テクスチャコンポーネント
 * Washi (Japanese Paper) Texture Component
 * 
 * 和紙の自然な質感を再現するSVG/CSSベースのテクスチャシステム
 * SVG/CSS-based texture system that recreates the natural texture of Japanese paper
 */

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';

// 和紙テクスチャの種類 / Washi texture types
export type WashiTextureType = 
  | 'smooth'      // 滑らか - 高級和紙
  | 'rough'       // 粗い - 手漉き和紙
  | 'handmade'    // 手作り - 伝統的手漉き
  | 'aged'        // 古紙 - 経年変化した和紙
  | 'fibrous'     // 繊維質 - 繊維が見える和紙
  | 'mulberry';   // 楮紙 - 楮を使った和紙

// 和紙テクスチャのプロップス / Washi texture props
export interface WashiTextureProps {
  /** テクスチャの種類 / Texture type */
  type?: WashiTextureType;
  /** テクスチャの強度 / Texture intensity */
  intensity?: 'subtle' | 'normal' | 'strong';
  /** ベース色 / Base color */
  baseColor?: string;
  /** テクスチャの不透明度 / Texture opacity */
  opacity?: number;
  /** テクスチャのサイズ / Texture size */
  size?: 'small' | 'medium' | 'large';
  /** パターンID（重複回避用） / Pattern ID (for avoiding duplicates) */
  patternId?: string;
  /** 幅 / Width */
  width?: number | string;
  /** 高さ / Height */
  height?: number | string;
  /** カスタムクラス名 / Custom class name */
  className?: string;
  /** 背景として使用するか / Use as background */
  asBackground?: boolean;
  /** アニメーション効果 / Animation effects */
  animated?: boolean;
}

// テクスチャ強度の設定 / Texture intensity settings
const TEXTURE_INTENSITY = {
  subtle: { opacity: 0.15, scale: 0.8, density: 0.4 },
  normal: { opacity: 0.3, scale: 1.0, density: 0.6 },
  strong: { opacity: 0.5, scale: 1.2, density: 0.8 },
} as const;

// テクスチャサイズの設定 / Texture size settings
const TEXTURE_SIZES = {
  small: { patternSize: 50, noiseScale: 0.5 },
  medium: { patternSize: 100, noiseScale: 1.0 },
  large: { patternSize: 200, noiseScale: 1.5 },
} as const;

// 和紙テクスチャ定義コンポーネント / Washi Texture Definition Component
const WashiTextureDef: React.FC<{
  patternId: string;
  type: WashiTextureType;
  intensity: 'subtle' | 'normal' | 'strong';
  baseColor: string;
  size: 'small' | 'medium' | 'large';
  animated: boolean;
}> = ({ patternId, type, intensity, baseColor, size, animated }) => {
  const { tokens } = useTheme();
  
  const intensityConfig = TEXTURE_INTENSITY[intensity];
  const sizeConfig = TEXTURE_SIZES[size];
  
  // 和紙の繊維パターン生成 / Generate washi fiber patterns
  const generateFiberPattern = () => {
    const fibers = [];
    const fiberCount = Math.floor(intensityConfig.density * 50);
    
    // 固定シードを使用してランダム性を制御 / Use fixed seed to control randomness
    const seed = 12345;
    let random = seed;
    const pseudoRandom = () => {
      random = (random * 9301 + 49297) % 233280;
      return random / 233280;
    };
    
    for (let i = 0; i < fiberCount; i++) {
      const x1 = pseudoRandom() * sizeConfig.patternSize;
      const y1 = pseudoRandom() * sizeConfig.patternSize;
      const length = 5 + pseudoRandom() * 15;
      const angle = pseudoRandom() * Math.PI * 2;
      const x2 = x1 + Math.cos(angle) * length;
      const y2 = y1 + Math.sin(angle) * length;
      
      fibers.push(
        <line
          key={`fiber-${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#4b5563"
          strokeWidth={0.3 + pseudoRandom() * 0.5}
          opacity={0.4 + pseudoRandom() * 0.3}
        />
      );
    }
    
    return fibers;
  };
  
  // 和紙の質感ノイズ生成 / Generate washi texture noise
  const generateTextureNoise = () => {
    const noisePoints = [];
    const pointCount = Math.floor(intensityConfig.density * 100);
    
    // 固定シードを使用してランダム性を制御 / Use fixed seed to control randomness
    const seed = 54321;
    let random = seed;
    const pseudoRandom = () => {
      random = (random * 9301 + 49297) % 233280;
      return random / 233280;
    };
    
    for (let i = 0; i < pointCount; i++) {
      const x = pseudoRandom() * sizeConfig.patternSize;
      const y = pseudoRandom() * sizeConfig.patternSize;
      const radius = 0.5 + pseudoRandom() * 1.5;
      
      noisePoints.push(
        <circle
          key={`noise-${i}`}
          cx={x}
          cy={y}
          r={radius}
          fill="#6b7280"
          opacity={0.15 + pseudoRandom() * 0.25}
        />
      );
    }
    
    return noisePoints;
  };
  
  // 和紙の厚みムラ生成 / Generate washi thickness variations
  const generateThicknessVariations = () => {
    const variations = [];
    const variationCount = Math.floor(intensityConfig.density * 20);
    
    // 固定シードを使用してランダム性を制御 / Use fixed seed to control randomness
    const seed = 98765;
    let random = seed;
    const pseudoRandom = () => {
      random = (random * 9301 + 49297) % 233280;
      return random / 233280;
    };
    
    for (let i = 0; i < variationCount; i++) {
      const x = pseudoRandom() * sizeConfig.patternSize;
      const y = pseudoRandom() * sizeConfig.patternSize;
      const width = 10 + pseudoRandom() * 30;
      const height = 10 + pseudoRandom() * 30;
      
      variations.push(
        <ellipse
          key={`variation-${i}`}
          cx={x}
          cy={y}
          rx={width}
          ry={height}
          fill="#d1d5db"
          opacity={0.15 + pseudoRandom() * 0.2}
        />
      );
    }
    
    return variations;
  };
  
  // テクスチャタイプ別の特殊効果 / Type-specific texture effects
  const generateTypeSpecificEffects = () => {
    switch (type) {
      case 'smooth':
        // 滑らかな和紙 - 微細な繊維のみ
        return (
          <g opacity={intensityConfig.opacity * 0.5}>
            {generateTextureNoise()}
          </g>
        );
        
      case 'rough':
        // 粗い和紙 - 明確な繊維と厚みムラ
        return (
          <g opacity={intensityConfig.opacity}>
            {generateFiberPattern()}
            {generateThicknessVariations()}
            {generateTextureNoise()}
          </g>
        );
        
      case 'handmade':
        // 手作り和紙 - 不規則な繊維パターン
        const handmadeFibers = [];
        // 固定シードを使用してランダム性を制御 / Use fixed seed to control randomness
        const handmadeSeed = 11111;
        let handmadeRandom = handmadeSeed;
        const handmadePseudoRandom = () => {
          handmadeRandom = (handmadeRandom * 9301 + 49297) % 233280;
          return handmadeRandom / 233280;
        };
        
        for (let i = 0; i < 30; i++) {
          const path = `M${handmadePseudoRandom() * sizeConfig.patternSize},${handmadePseudoRandom() * sizeConfig.patternSize} 
                       Q${handmadePseudoRandom() * sizeConfig.patternSize},${handmadePseudoRandom() * sizeConfig.patternSize} 
                       ${handmadePseudoRandom() * sizeConfig.patternSize},${handmadePseudoRandom() * sizeConfig.patternSize}`;
          
          handmadeFibers.push(
            <path
              key={`handmade-${i}`}
              d={path}
              stroke="#374151"
              strokeWidth={0.4}
              fill="none"
              opacity={0.2}
            />
          );
        }
        
        return (
          <g opacity={intensityConfig.opacity}>
            {handmadeFibers}
            {generateThicknessVariations()}
          </g>
        );
        
      case 'aged':
        // 古紙 - 黄ばみと汚れ
        const ageSpots = [];
        // 固定シードを使用してランダム性を制御 / Use fixed seed to control randomness
        const agedSeed = 22222;
        let agedRandom = agedSeed;
        const agedPseudoRandom = () => {
          agedRandom = (agedRandom * 9301 + 49297) % 233280;
          return agedRandom / 233280;
        };
        
        for (let i = 0; i < 15; i++) {
          const x = agedPseudoRandom() * sizeConfig.patternSize;
          const y = agedPseudoRandom() * sizeConfig.patternSize;
          const radius = 5 + agedPseudoRandom() * 20;
          
          ageSpots.push(
            <circle
              key={`age-${i}`}
              cx={x}
              cy={y}
              r={radius}
              fill="#d97706"
              opacity={0.08 + agedPseudoRandom() * 0.12}
            />
          );
        }
        
        return (
          <g opacity={intensityConfig.opacity}>
            {ageSpots}
            {generateFiberPattern()}
            {generateTextureNoise()}
          </g>
        );
        
      case 'fibrous':
        // 繊維質和紙 - 明確な繊維構造
        const longFibers = [];
        // 固定シードを使用してランダム性を制御 / Use fixed seed to control randomness
        const fibrousSeed = 33333;
        let fibrousRandom = fibrousSeed;
        const fibrousPseudoRandom = () => {
          fibrousRandom = (fibrousRandom * 9301 + 49297) % 233280;
          return fibrousRandom / 233280;
        };
        
        for (let i = 0; i < 20; i++) {
          const x1 = fibrousPseudoRandom() * sizeConfig.patternSize;
          const y1 = fibrousPseudoRandom() * sizeConfig.patternSize;
          const length = 20 + fibrousPseudoRandom() * 40;
          const angle = fibrousPseudoRandom() * Math.PI * 2;
          const x2 = x1 + Math.cos(angle) * length;
          const y2 = y1 + Math.sin(angle) * length;
          
          longFibers.push(
            <line
              key={`long-fiber-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#059669"
              strokeWidth={0.6}
              opacity={0.25}
            />
          );
        }
        
        return (
          <g opacity={intensityConfig.opacity}>
            {longFibers}
            {generateFiberPattern()}
          </g>
        );
        
      case 'mulberry':
        // 楮紙 - 楮の繊維特有のパターン
        const mulberryFibers = [];
        // 固定シードを使用してランダム性を制御 / Use fixed seed to control randomness
        const mulberrySeed = 44444;
        let mulberryRandom = mulberrySeed;
        const mulberryPseudoRandom = () => {
          mulberryRandom = (mulberryRandom * 9301 + 49297) % 233280;
          return mulberryRandom / 233280;
        };
        
        for (let i = 0; i < 25; i++) {
          const centerX = mulberryPseudoRandom() * sizeConfig.patternSize;
          const centerY = mulberryPseudoRandom() * sizeConfig.patternSize;
          const branches = 3 + Math.floor(mulberryPseudoRandom() * 4);
          
          for (let j = 0; j < branches; j++) {
            const angle = (Math.PI * 2 * j) / branches + mulberryPseudoRandom() * 0.5;
            const length = 8 + mulberryPseudoRandom() * 15;
            const endX = centerX + Math.cos(angle) * length;
            const endY = centerY + Math.sin(angle) * length;
            
            mulberryFibers.push(
              <line
                key={`mulberry-${i}-${j}`}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke="#7c2d12"
                strokeWidth={0.4}
                opacity={0.2}
              />
            );
          }
        }
        
        return (
          <g opacity={intensityConfig.opacity}>
            {mulberryFibers}
            {generateTextureNoise()}
          </g>
        );
        
      default:
        return generateTextureNoise();
    }
  };

  return (
    <pattern
      id={patternId}
      x="0"
      y="0"
      width={sizeConfig.patternSize}
      height={sizeConfig.patternSize}
      patternUnits="userSpaceOnUse"
    >
      {/* 和紙のベース色 / Washi base color */}
      <rect
        width={sizeConfig.patternSize}
        height={sizeConfig.patternSize}
        fill={baseColor}
      />
      
      {/* テクスチャ効果 / Texture effects */}
      {generateTypeSpecificEffects()}
      
      {/* アニメーション効果 / Animation effects */}
      {animated && (
        <animateTransform
          attributeName="patternTransform"
          type="translate"
          values="0,0; 1,1; 0,0"
          dur="10s"
          repeatCount="indefinite"
        />
      )}
    </pattern>
  );
};

// 和紙テクスチャコンポーネント / Washi Texture Component
export const WashiTexture: React.FC<WashiTextureProps> = ({
  type = 'smooth',
  intensity = 'normal',
  baseColor,
  opacity = 1,
  size = 'medium',
  patternId = 'washi-texture',
  width = '100%',
  height = '100%',
  className = '',
  asBackground = false,
  animated = false,
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
        className={`${className} bg-gray-200 flex items-center justify-center text-xs text-gray-500`}
        style={{ 
          width: typeof width === 'string' ? width : `${width}px`,
          height: typeof height === 'string' ? height : `${height}px`,
          opacity 
        }}
      >
        Loading texture...
      </div>
    );
  }
  
  // デフォルトベース色の設定 / Set default base color
  const defaultBaseColor = baseColor || '#f8f9fa';
  
  // 一意のパターンIDを生成 / Generate unique pattern ID
  const uniquePatternId = `${patternId}-${type}-${intensity}-${Date.now().toString(36).slice(-4)}`;
  
  // 背景用のクラス / Background classes
  const backgroundClasses = asBackground 
    ? 'absolute inset-0 pointer-events-none' 
    : '';
  
  const combinedClasses = [
    className,
    backgroundClasses,
  ].filter(Boolean).join(' ');

  return (
    <svg
      width={width}
      height={height}
      className={combinedClasses}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Washi texture - ${type}`}
    >
      <defs>
        <WashiTextureDef
          patternId={uniquePatternId}
          type={type}
          intensity={intensity}
          baseColor={defaultBaseColor}
          size={size}
          animated={animated}
        />
      </defs>
      <rect 
        width="100%" 
        height="100%" 
        fill={`url(#${uniquePatternId})`}
      />
    </svg>
  );
};

export default WashiTexture;