'use client';

/**
 * 日本伝統パターンライブラリ
 * Japanese Traditional Pattern Library
 * 
 * すべての伝統的パターンを統一されたインターフェースで提供する
 * Provides all traditional patterns through a unified interface
 */

import React, { useState, useEffect } from 'react';
import { SeigaihaPattern, SeigaihaPatternProps } from './SeigaihaPattern';
import { AsanohaPattern, AsanohaPatternProps } from './AsanohaPattern';
import { SakuraPattern, SakuraPatternProps } from './SakuraPattern';
import { SeasonalPattern, SeasonalPatternProps } from './SeasonalPatterns';
import { PatternBaseProps, PatternContainer } from './PatternBase';
import { useTheme } from '@/components/ThemeProvider';
import { WashiBackground, WashiTextureType } from '@/components/textures';

// パターンタイプの定義 / Pattern type definitions
export type PatternType = 'seigaiha' | 'asanoha' | 'sakura' | 'seasonal-spring' | 'seasonal-autumn' | 'seasonal-winter';

// 統一パターンプロップス / Unified pattern props
export interface PatternLibraryProps extends PatternBaseProps {
  /** パターンタイプ / Pattern type */
  pattern: PatternType;
  /** パターン固有の設定 / Pattern-specific configuration */
  patternConfig?: Partial<SeigaihaPatternProps & AsanohaPatternProps & SakuraPatternProps & SeasonalPatternProps>;
  /** プリセット設定 / Preset configuration */
  preset?: 'subtle' | 'normal' | 'prominent';
  /** 季節テーマ / Seasonal theme */
  seasonalTheme?: 'spring' | 'summer' | 'autumn' | 'winter';
  /** 和紙テクスチャの適用 / Apply washi texture */
  washiTexture?: boolean;
  /** 和紙テクスチャの種類 / Washi texture type */
  washiTextureType?: WashiTextureType;
  /** 和紙テクスチャの強度 / Washi texture intensity */
  washiIntensity?: 'subtle' | 'normal' | 'strong';
}

// プリセット設定 / Preset configurations
const PATTERN_PRESETS = {
  subtle: {
    opacity: 0.1,
    size: 'small' as const,
    animated: false,
  },
  normal: {
    opacity: 0.3,
    size: 'medium' as const,
    animated: false,
  },
  prominent: {
    opacity: 0.5,
    size: 'large' as const,
    animated: true,
  },
} as const;

// 季節テーマ設定 / Seasonal theme configurations
const SEASONAL_THEMES = {
  spring: {
    seigaiha: { color: '#6366f1', multiColor: true, useGradient: true },
    asanoha: { color: '#10b981', multiColor: true, showInnerStar: true },
    sakura: { seasonalVariant: 'spring' as const, fallingPetals: true, useGradient: true },
    'seasonal-spring': { density: 'medium' as const, animationEffect: 'falling' as const, windEffect: true },
    'seasonal-autumn': { density: 'sparse' as const, animationEffect: 'none' as const },
    'seasonal-winter': { density: 'sparse' as const, animationEffect: 'none' as const },
  },
  summer: {
    seigaiha: { color: '#3b82f6', waveCount: 6, useGradient: true },
    asanoha: { color: '#059669', emphasizeIntersections: true, multiColor: false },
    sakura: { seasonalVariant: 'full-bloom' as const, flowerDensity: 'dense' as const },
    'seasonal-spring': { density: 'sparse' as const, animationEffect: 'none' as const },
    'seasonal-autumn': { density: 'sparse' as const, animationEffect: 'none' as const },
    'seasonal-winter': { density: 'sparse' as const, animationEffect: 'none' as const },
  },
  autumn: {
    seigaiha: { color: '#f59e0b', multiColor: false, useGradient: false },
    asanoha: { color: '#dc2626', lineThickness: 1.5, showInnerStar: false },
    sakura: { seasonalVariant: 'falling' as const, fallingPetals: true, flowerDensity: 'sparse' as const },
    'seasonal-spring': { density: 'sparse' as const, animationEffect: 'none' as const },
    'seasonal-autumn': { density: 'dense' as const, animationEffect: 'falling' as const, windEffect: true },
    'seasonal-winter': { density: 'sparse' as const, animationEffect: 'none' as const },
  },
  winter: {
    seigaiha: { color: '#64748b', waveCount: 3, multiColor: false },
    asanoha: { color: '#475569', hexagonSize: 50, emphasizeIntersections: false },
    sakura: { color: '#e2e8f0', useGradient: false, flowerDensity: 'sparse' as const },
    'seasonal-spring': { density: 'sparse' as const, animationEffect: 'none' as const },
    'seasonal-autumn': { density: 'sparse' as const, animationEffect: 'none' as const },
    'seasonal-winter': { density: 'medium' as const, animationEffect: 'floating' as const },
  },
} as const;

// パターンライブラリコンポーネント / Pattern Library Component
export const PatternLibrary: React.FC<PatternLibraryProps> = ({
  pattern,
  patternConfig = {},
  preset = 'normal',
  seasonalTheme,
  washiTexture = false,
  washiTextureType = 'smooth',
  washiIntensity = 'subtle',
  ...baseProps
}) => {
  const { tokens, currentTheme } = useTheme();
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
  
  // プリセット設定の適用 / Apply preset configuration
  const presetConfig = PATTERN_PRESETS[preset];
  
  // 季節テーマの適用 / Apply seasonal theme
  const currentSeasonalTheme = seasonalTheme || currentTheme.seasonalVariant || 'spring';
  const seasonalConfig = SEASONAL_THEMES[currentSeasonalTheme]?.[pattern] || {};
  
  // 最終的な設定をマージ / Merge final configuration
  const finalProps = {
    ...presetConfig,
    ...baseProps,
    ...seasonalConfig,
    ...patternConfig,
  };
  
  // パターンIDの生成 / Generate pattern ID
  const patternId = `${pattern}-${preset}-${currentSeasonalTheme}-${pattern.length * 7 + preset.length * 3}`;
  
  // パターンコンポーネントの選択 / Select pattern component
  const renderPattern = () => {
    const patternElement = (() => {
      switch (pattern) {
        case 'seigaiha':
          return (
            <SeigaihaPattern
              {...finalProps}
              patternId={patternId}
            />
          );
        
        case 'asanoha':
          return (
            <AsanohaPattern
              {...finalProps}
              patternId={patternId}
            />
          );
        
        case 'sakura':
          return (
            <SakuraPattern
              {...finalProps}
              patternId={patternId}
            />
          );
        
        case 'seasonal-spring':
          return (
            <SeasonalPattern
              {...finalProps}
              season="spring"
              patternId={patternId}
            />
          );
        
        case 'seasonal-autumn':
          return (
            <SeasonalPattern
              {...finalProps}
              season="autumn"
              patternId={patternId}
            />
          );
        
        case 'seasonal-winter':
          return (
            <SeasonalPattern
              {...finalProps}
              season="winter"
              patternId={patternId}
            />
          );
        
        default:
          console.warn(`Unknown pattern type: ${pattern}`);
          return (
            <SeigaihaPattern
              {...finalProps}
              patternId={patternId}
            />
          );
      }
    })();

    // 和紙テクスチャの適用 / Apply washi texture
    if (washiTexture) {
      return (
        <WashiBackground
          textureType={washiTextureType}
          intensity={washiIntensity}
          className="w-full h-full"
        >
          {patternElement}
        </WashiBackground>
      );
    }

    return patternElement;
  };

  return renderPattern();
};

// パターン背景コンポーネント / Pattern Background Component
export const PatternBackground: React.FC<PatternLibraryProps & {
  children?: React.ReactNode;
  overlay?: boolean;
  overlayOpacity?: number;
}> = ({
  children,
  overlay = false,
  overlayOpacity = 0.05,
  washiTexture = true,
  washiTextureType = 'smooth',
  washiIntensity = 'subtle',
  ...patternProps
}) => {
  const patternElement = (
    <PatternLibrary
      {...patternProps}
      asBackground={true}
      width="100%"
      height="100%"
      washiTexture={false} // パターン自体には和紙テクスチャを適用しない
    />
  );

  const backgroundContent = washiTexture ? (
    <WashiBackground
      textureType={washiTextureType}
      intensity={washiIntensity}
      className="w-full h-full"
    >
      {patternElement}
    </WashiBackground>
  ) : (
    patternElement
  );

  return (
    <PatternContainer className="relative">
      {/* パターン背景 / Pattern background */}
      <div className="absolute inset-0">
        {backgroundContent}
      </div>
      
      {/* オーバーレイ / Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-white"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      {/* コンテンツ / Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </PatternContainer>
  );
};

// パターンプレビューコンポーネント / Pattern Preview Component
export const PatternPreview: React.FC<{
  patterns?: PatternType[];
  presets?: Array<'subtle' | 'normal' | 'prominent'>;
  seasonalThemes?: Array<'spring' | 'summer' | 'autumn' | 'winter'>;
  className?: string;
}> = ({
  patterns = ['seigaiha', 'asanoha', 'sakura', 'seasonal-spring', 'seasonal-autumn', 'seasonal-winter'],
  presets = ['subtle', 'normal', 'prominent'],
  className = '',
}) => {
  return (
    <div className={`grid gap-4 ${className}`}>
      {patterns.map((pattern) => (
        <div key={pattern} className="space-y-2">
          <h3 className="text-lg font-medium capitalize">{pattern.replace('-', ' ')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {presets.map((preset) => (
              <div key={preset} className="space-y-1">
                <p className="text-sm text-gray-600 capitalize">{preset}</p>
                <div className="h-24 border rounded-lg overflow-hidden">
                  <PatternLibrary
                    pattern={pattern}
                    preset={preset}
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// パターンユーティリティ関数 / Pattern utility functions
export const getPatternInfo = (pattern: PatternType) => {
  const patternInfo = {
    seigaiha: {
      name: '青海波',
      nameEn: 'Seigaiha',
      description: '穏やかな波を表現し、平和と永続性を象徴する伝統的な波模様',
      descriptionEn: 'Traditional wave pattern representing calm waves, symbolizing peace and eternity',
      origin: '平安時代',
      meaning: '平和、永続性、穏やかさ',
    },
    asanoha: {
      name: '麻の葉',
      nameEn: 'Asanoha',
      description: '六角形を基調とした幾何学模様で、成長と魔除けの意味を持つ',
      descriptionEn: 'Geometric pattern based on hexagons, symbolizing growth and protection from evil',
      origin: '平安時代',
      meaning: '成長、魔除け、繁栄',
    },
    sakura: {
      name: '桜',
      nameEn: 'Sakura',
      description: '日本の象徴的な花で、春の美しさと生命の儚さを表現する',
      descriptionEn: 'Iconic Japanese flower representing spring beauty and the transience of life',
      origin: '古代',
      meaning: '美しさ、儚さ、新生',
    },
    'seasonal-spring': {
      name: '春桜',
      nameEn: 'Spring Sakura',
      description: '春の桜の花びらが舞い散る美しい季節パターン',
      descriptionEn: 'Beautiful seasonal pattern of spring cherry blossoms falling',
      origin: '古代',
      meaning: '新生、希望、美しさ',
    },
    'seasonal-autumn': {
      name: '秋紅葉',
      nameEn: 'Autumn Maple',
      description: '秋の紅葉が舞い散る情緒豊かな季節パターン',
      descriptionEn: 'Emotionally rich seasonal pattern of autumn maple leaves falling',
      origin: '古代',
      meaning: '変化、成熟、美しい終わり',
    },
    'seasonal-winter': {
      name: '冬雪',
      nameEn: 'Winter Snow',
      description: '冬の雪の結晶が舞う静寂で美しい季節パターン',
      descriptionEn: 'Serene and beautiful seasonal pattern of winter snowflakes dancing',
      origin: '古代',
      meaning: '純粋、静寂、清浄',
    },
  };
  
  return patternInfo[pattern];
};

export default PatternLibrary;