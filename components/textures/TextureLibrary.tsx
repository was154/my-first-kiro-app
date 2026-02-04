'use client';

/**
 * テクスチャライブラリ
 * Texture Library
 * 
 * すべての和紙テクスチャを統一されたインターフェースで提供する
 * Provides all washi textures through a unified interface
 */

import React from 'react';
import { WashiTexture, WashiTextureType, WashiTextureProps } from './WashiTexture';
import { WashiBackground, WashiCard, WashiSection, WashiHeader } from './WashiBackground';
import { useTheme } from '@/components/ThemeProvider';

// テクスチャプリセット / Texture presets
export interface TexturePreset {
  name: string;
  displayName: string;
  description: string;
  textureType: WashiTextureType;
  intensity: 'subtle' | 'normal' | 'strong';
  baseColor?: string;
  opacity?: number;
  blendMode?: 'normal' | 'multiply' | 'overlay' | 'soft-light' | 'hard-light';
}

// 定義済みテクスチャプリセット / Predefined texture presets
export const TEXTURE_PRESETS: Record<string, TexturePreset> = {
  // 高級和紙プリセット / Premium washi presets
  premiumSmooth: {
    name: 'premium-smooth',
    displayName: '高級滑らか和紙',
    description: '最高級の滑らかな和紙テクスチャ',
    textureType: 'smooth',
    intensity: 'subtle',
    opacity: 0.8,
    blendMode: 'soft-light',
  },
  
  premiumRough: {
    name: 'premium-rough',
    displayName: '高級粗目和紙',
    description: '高級な粗目の和紙テクスチャ',
    textureType: 'rough',
    intensity: 'normal',
    opacity: 0.9,
    blendMode: 'multiply',
  },
  
  // 伝統和紙プリセット / Traditional washi presets
  traditionalHandmade: {
    name: 'traditional-handmade',
    displayName: '伝統手漉き和紙',
    description: '伝統的な手漉き和紙の質感',
    textureType: 'handmade',
    intensity: 'normal',
    opacity: 0.85,
    blendMode: 'overlay',
  },
  
  traditionalMulberry: {
    name: 'traditional-mulberry',
    displayName: '伝統楮紙',
    description: '楮を使った伝統的な和紙',
    textureType: 'mulberry',
    intensity: 'normal',
    opacity: 0.9,
    blendMode: 'normal',
  },
  
  // 古典和紙プリセット / Classical washi presets
  classicalAged: {
    name: 'classical-aged',
    displayName: '古典古紙',
    description: '経年変化した古典的な和紙',
    textureType: 'aged',
    intensity: 'strong',
    opacity: 0.95,
    blendMode: 'multiply',
  },
  
  classicalFibrous: {
    name: 'classical-fibrous',
    displayName: '古典繊維和紙',
    description: '繊維が見える古典的な和紙',
    textureType: 'fibrous',
    intensity: 'normal',
    opacity: 0.8,
    blendMode: 'overlay',
  },
  
  // 現代和紙プリセット / Modern washi presets
  modernMinimal: {
    name: 'modern-minimal',
    displayName: '現代ミニマル和紙',
    description: 'ミニマルデザイン向けの和紙',
    textureType: 'smooth',
    intensity: 'subtle',
    opacity: 0.6,
    blendMode: 'soft-light',
  },
  
  modernTextured: {
    name: 'modern-textured',
    displayName: '現代テクスチャ和紙',
    description: '現代的なテクスチャの和紙',
    textureType: 'rough',
    intensity: 'strong',
    opacity: 0.7,
    blendMode: 'hard-light',
  },
};

// テクスチャライブラリのプロップス / Texture library props
export interface TextureLibraryProps {
  /** プリセット名 / Preset name */
  preset?: keyof typeof TEXTURE_PRESETS;
  /** カスタムテクスチャ設定 / Custom texture configuration */
  customTexture?: Partial<WashiTextureProps>;
  /** 子要素 / Children */
  children?: React.ReactNode;
  /** カスタムクラス名 / Custom class name */
  className?: string;
}

// テクスチャライブラリコンポーネント / Texture Library Component
export const TextureLibrary: React.FC<TextureLibraryProps> = ({
  preset = 'premiumSmooth',
  customTexture = {},
  children,
  className = '',
}) => {
  const { tokens } = useTheme();
  
  // プリセット設定の取得 / Get preset configuration
  const presetConfig = TEXTURE_PRESETS[preset];
  
  if (!presetConfig) {
    console.warn(`Unknown texture preset: ${preset}`);
    return null;
  }
  
  // 最終的なテクスチャプロップスの生成 / Generate final texture props
  const textureProps: WashiTextureProps = {
    type: presetConfig.textureType,
    intensity: presetConfig.intensity,
    baseColor: presetConfig.baseColor || tokens.colors.traditional.washi[50],
    opacity: presetConfig.opacity || 1,
    ...customTexture,
  };

  return (
    <WashiBackground
      textureType={textureProps.type}
      intensity={textureProps.intensity}
      blendMode={presetConfig.blendMode}
      className={className}
      textureProps={textureProps}
    >
      {children}
    </WashiBackground>
  );
};

// テクスチャプレビューコンポーネント / Texture Preview Component
export const TexturePreview: React.FC<{
  /** プレビューするプリセット / Presets to preview */
  presets?: Array<keyof typeof TEXTURE_PRESETS>;
  /** プレビューサイズ / Preview size */
  size?: 'sm' | 'md' | 'lg';
  /** グリッドレイアウト / Grid layout */
  columns?: number;
  /** カスタムクラス名 / Custom class name */
  className?: string;
}> = ({
  presets = Object.keys(TEXTURE_PRESETS) as Array<keyof typeof TEXTURE_PRESETS>,
  size = 'md',
  columns = 3,
  className = '',
}) => {
  // プレビューサイズの設定 / Preview size settings
  const sizeClasses = {
    sm: 'h-24',
    md: 'h-32',
    lg: 'h-48',
  };
  
  // グリッドカラムの設定 / Grid column settings
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-4 ${gridClasses[columns as keyof typeof gridClasses]} ${className}`}>
      {presets.map((presetKey) => {
        const preset = TEXTURE_PRESETS[presetKey];
        return (
          <div key={presetKey} className="space-y-2">
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-gray-900">
                {preset.displayName}
              </h3>
              <p className="text-xs text-gray-600">
                {preset.description}
              </p>
            </div>
            <div className={`${sizeClasses[size]} border rounded-lg overflow-hidden bg-white`}>
              <TextureLibrary preset={presetKey}>
                <div className="h-full flex items-center justify-center">
                  <span className="text-sm text-gray-700 font-medium">
                    サンプルテキスト
                  </span>
                </div>
              </TextureLibrary>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// テクスチャ情報取得ユーティリティ / Texture info utility
export const getTextureInfo = (preset: keyof typeof TEXTURE_PRESETS) => {
  return TEXTURE_PRESETS[preset];
};

// テクスチャタイプ別の情報 / Texture type information
export const getTextureTypeInfo = (type: WashiTextureType) => {
  const typeInfo = {
    smooth: {
      name: '滑らか和紙',
      nameEn: 'Smooth Washi',
      description: '高級な滑らかな和紙。上品で洗練された質感',
      descriptionEn: 'Premium smooth washi with elegant and refined texture',
      usage: 'フォーマルなデザイン、高級感を演出したい場面',
      characteristics: ['滑らかな表面', '上品な質感', '微細な繊維'],
    },
    rough: {
      name: '粗目和紙',
      nameEn: 'Rough Washi',
      description: '手作り感のある粗い質感の和紙。自然な風合い',
      descriptionEn: 'Handcrafted rough texture washi with natural feel',
      usage: 'カジュアルなデザイン、自然な印象を与えたい場面',
      characteristics: ['粗い表面', '手作り感', '明確な繊維'],
    },
    handmade: {
      name: '手漉き和紙',
      nameEn: 'Handmade Washi',
      description: '伝統的な手漉き技法による和紙。独特の不規則性',
      descriptionEn: 'Traditional handmade washi with unique irregularities',
      usage: '伝統的なデザイン、職人技を表現したい場面',
      characteristics: ['不規則なパターン', '伝統技法', '独特の質感'],
    },
    aged: {
      name: '古紙',
      nameEn: 'Aged Washi',
      description: '経年変化した和紙。歴史と時間の重みを表現',
      descriptionEn: 'Aged washi expressing history and the weight of time',
      usage: 'ヴィンテージデザイン、歴史的な雰囲気を演出したい場面',
      characteristics: ['黄ばみ', '汚れ', '経年変化'],
    },
    fibrous: {
      name: '繊維和紙',
      nameEn: 'Fibrous Washi',
      description: '繊維が明確に見える和紙。自然素材の美しさ',
      descriptionEn: 'Washi with visible fibers showing natural material beauty',
      usage: 'ナチュラルデザイン、素材感を強調したい場面',
      characteristics: ['明確な繊維', '自然素材', '立体感'],
    },
    mulberry: {
      name: '楮紙',
      nameEn: 'Mulberry Washi',
      description: '楮を原料とした伝統的な和紙。強靭で美しい',
      descriptionEn: 'Traditional washi made from mulberry, strong and beautiful',
      usage: '伝統工芸デザイン、和の心を表現したい場面',
      characteristics: ['楮繊維', '伝統素材', '強靭性'],
    },
  };
  
  return typeInfo[type];
};

// エクスポート / Exports
export {
  WashiTexture,
  WashiBackground,
  WashiCard,
  WashiSection,
  WashiHeader,
};

export default TextureLibrary;