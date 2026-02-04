/**
 * 日本語テキストコンポーネント
 * Japanese Text Component
 * 
 * 日本語タイポグラフィシステムの実装
 * Implementation of Japanese Typography System
 */

import React from 'react';
import { cn } from '@/lib/utils';

// 日本語テキストのバリアント / Japanese Text Variants
export type JapaneseTextVariant = 
  | 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4' | 'heading-5' | 'heading-6'
  | 'body-large' | 'body' | 'body-small'
  | 'caption' | 'overline';

// テキスト方向 / Text Direction
export type TextDirection = 'horizontal' | 'vertical';

// 強調スタイル / Emphasis Style
export type EmphasisStyle = 'normal' | 'medium' | 'bold' | 'light';

// JapaneseTextコンポーネントのプロップス / JapaneseText Component Props
export interface JapaneseTextProps {
  children: React.ReactNode;
  variant?: JapaneseTextVariant;
  direction?: TextDirection;
  emphasis?: EmphasisStyle;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

// バリアント別のスタイルマッピング / Style mapping by variant
const getVariantStyles = (variant: JapaneseTextVariant, direction: TextDirection): string => {
  const baseStyles = direction === 'vertical' 
    ? 'font-japanese [writing-mode:vertical-rl] [text-orientation:mixed]' 
    : 'font-japanese';

  const variantMap: Record<JapaneseTextVariant, string> = {
    'heading-1': `${baseStyles} text-jp-6xl font-bold`,
    'heading-2': `${baseStyles} text-jp-5xl font-bold`,
    'heading-3': `${baseStyles} text-jp-4xl font-bold`,
    'heading-4': `${baseStyles} text-jp-3xl font-medium`,
    'heading-5': `${baseStyles} text-jp-2xl font-medium`,
    'heading-6': `${baseStyles} text-jp-xl font-medium`,
    'body-large': `${baseStyles} text-jp-lg font-normal`,
    'body': `${baseStyles} text-jp-base font-normal`,
    'body-small': `${baseStyles} text-jp-sm font-normal`,
    'caption': `${baseStyles} text-jp-xs font-normal`,
    'overline': `${baseStyles} text-jp-xs font-medium uppercase tracking-wider`,
  };

  return variantMap[variant];
};

// 強調スタイルのマッピング / Emphasis style mapping
const getEmphasisStyles = (emphasis: EmphasisStyle): string => {
  const emphasisMap: Record<EmphasisStyle, string> = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };

  return emphasisMap[emphasis];
};

// デフォルトのHTML要素マッピング / Default HTML element mapping
const getDefaultElement = (variant: JapaneseTextVariant): keyof JSX.IntrinsicElements => {
  if (variant.startsWith('heading-')) {
    const level = variant.split('-')[1];
    return `h${level}` as keyof JSX.IntrinsicElements;
  }
  
  if (variant === 'overline') return 'span';
  if (variant === 'caption') return 'small';
  
  return 'p';
};

/**
 * JapaneseTextコンポーネント
 * 
 * 日本語テキストの表示に最適化されたタイポグラフィコンポーネント
 * Typography component optimized for Japanese text display
 * 
 * @param children - 表示するテキストコンテンツ
 * @param variant - テキストのバリアント（見出し、本文など）
 * @param direction - テキストの方向（横書き・縦書き）
 * @param emphasis - 強調レベル
 * @param className - 追加のCSSクラス
 * @param as - レンダリングするHTML要素
 */
export const JapaneseText: React.FC<JapaneseTextProps> = ({
  children,
  variant = 'body',
  direction = 'horizontal',
  emphasis = 'normal',
  className,
  as,
}) => {
  const Element = as || getDefaultElement(variant);
  
  const variantStyles = getVariantStyles(variant, direction);
  const emphasisStyles = getEmphasisStyles(emphasis);
  
  const combinedClassName = cn(
    variantStyles,
    emphasisStyles,
    direction === 'vertical' && 'h-full',
    className
  );

  return (
    <Element className={combinedClassName}>
      {children}
    </Element>
  );
};

// TypographyDemoコンポーネント - タイポグラフィシステムのデモンストレーション
export const TypographyDemo: React.FC = () => {
  const sampleText = {
    japanese: '美しい日本語タイポグラフィ',
    mixed: '日本語とLatinの混在テキスト Typography',
    long: 'これは日本語の長いテキストサンプルです。適切な行間と文字間隔により、読みやすさが向上します。伝統的な美学と現代的な機能性を両立させています。',
  };

  return (
    <div className="space-y-12 p-8 bg-washi-50 dark:bg-sumi-900">
      {/* 見出しレベルのデモ / Heading Levels Demo */}
      <section>
        <h2 className="text-latin-2xl font-bold text-sumi-800 dark:text-washi-200 mb-6">
          見出しレベル / Heading Levels
        </h2>
        <div className="space-y-4">
          <JapaneseText variant="heading-1" className="text-sumi-900 dark:text-washi-100">
            見出し1 - {sampleText.japanese}
          </JapaneseText>
          <JapaneseText variant="heading-2" className="text-sumi-800 dark:text-washi-200">
            見出し2 - {sampleText.japanese}
          </JapaneseText>
          <JapaneseText variant="heading-3" className="text-sumi-700 dark:text-washi-300">
            見出し3 - {sampleText.japanese}
          </JapaneseText>
          <JapaneseText variant="heading-4" className="text-sumi-600 dark:text-washi-400">
            見出し4 - {sampleText.japanese}
          </JapaneseText>
          <JapaneseText variant="heading-5" className="text-sumi-500 dark:text-washi-500">
            見出し5 - {sampleText.japanese}
          </JapaneseText>
          <JapaneseText variant="heading-6" className="text-sumi-400 dark:text-washi-600">
            見出し6 - {sampleText.japanese}
          </JapaneseText>
        </div>
      </section>

      {/* 本文テキストのデモ / Body Text Demo */}
      <section>
        <h2 className="text-latin-2xl font-bold text-sumi-800 dark:text-washi-200 mb-6">
          本文テキスト / Body Text
        </h2>
        <div className="space-y-4">
          <JapaneseText variant="body-large" className="text-sumi-700 dark:text-washi-300">
            大きな本文 - {sampleText.mixed}
          </JapaneseText>
          <JapaneseText variant="body" className="text-sumi-600 dark:text-washi-400">
            標準本文 - {sampleText.long}
          </JapaneseText>
          <JapaneseText variant="body-small" className="text-sumi-500 dark:text-washi-500">
            小さな本文 - {sampleText.mixed}
          </JapaneseText>
          <JapaneseText variant="caption" className="text-sumi-400 dark:text-washi-600">
            キャプション - {sampleText.japanese}
          </JapaneseText>
        </div>
      </section>

      {/* 強調レベルのデモ / Emphasis Levels Demo */}
      <section>
        <h2 className="text-latin-2xl font-bold text-sumi-800 dark:text-washi-200 mb-6">
          強調レベル / Emphasis Levels
        </h2>
        <div className="space-y-4">
          <JapaneseText variant="body" emphasis="light" className="text-sumi-600 dark:text-washi-400">
            軽い強調 - {sampleText.japanese}
          </JapaneseText>
          <JapaneseText variant="body" emphasis="normal" className="text-sumi-600 dark:text-washi-400">
            標準 - {sampleText.japanese}
          </JapaneseText>
          <JapaneseText variant="body" emphasis="medium" className="text-sumi-600 dark:text-washi-400">
            中程度の強調 - {sampleText.japanese}
          </JapaneseText>
          <JapaneseText variant="body" emphasis="bold" className="text-sumi-600 dark:text-washi-400">
            太字強調 - {sampleText.japanese}
          </JapaneseText>
        </div>
      </section>

      {/* 縦書きテキストのデモ / Vertical Text Demo */}
      <section>
        <h2 className="text-latin-2xl font-bold text-sumi-800 dark:text-washi-200 mb-6">
          縦書きテキスト / Vertical Text
        </h2>
        <div className="flex space-x-8 h-64">
          <div className="flex-1">
            <JapaneseText 
              variant="heading-3" 
              direction="vertical" 
              className="text-sumi-700 dark:text-washi-300 h-full"
            >
              縦書き見出し
            </JapaneseText>
          </div>
          <div className="flex-1">
            <JapaneseText 
              variant="body" 
              direction="vertical" 
              className="text-sumi-600 dark:text-washi-400 h-full"
            >
              縦書きの本文テキストです。日本の伝統的な文書レイアウトを再現します。
            </JapaneseText>
          </div>
        </div>
      </section>

      {/* カラーバリエーション / Color Variations */}
      <section>
        <h2 className="text-latin-2xl font-bold text-sumi-800 dark:text-washi-200 mb-6">
          カラーバリエーション / Color Variations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-sakura-50 dark:bg-sakura-900 p-4 rounded-lg">
            <JapaneseText variant="heading-4" className="text-sakura-700 dark:text-sakura-200 mb-2">
              桜色のテキスト
            </JapaneseText>
            <JapaneseText variant="body" className="text-sakura-600 dark:text-sakura-300">
              桜の花びらのような優雅な色合いです。
            </JapaneseText>
          </div>
          
          <div className="bg-bamboo-50 dark:bg-bamboo-900 p-4 rounded-lg">
            <JapaneseText variant="heading-4" className="text-bamboo-700 dark:text-bamboo-200 mb-2">
              竹色のテキスト
            </JapaneseText>
            <JapaneseText variant="body" className="text-bamboo-600 dark:text-bamboo-300">
              竹の新緑のような清々しい色合いです。
            </JapaneseText>
          </div>
          
          <div className="bg-gold-50 dark:bg-gold-900 p-4 rounded-lg">
            <JapaneseText variant="heading-4" className="text-gold-700 dark:text-gold-200 mb-2">
              金色のテキスト
            </JapaneseText>
            <JapaneseText variant="body" className="text-gold-600 dark:text-gold-300">
              金箔のような華やかな色合いです。
            </JapaneseText>
          </div>
          
          <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
            <JapaneseText variant="heading-4" className="text-indigo-700 dark:text-indigo-200 mb-2">
              藍色のテキスト
            </JapaneseText>
            <JapaneseText variant="body" className="text-indigo-600 dark:text-indigo-300">
              藍染めのような深い色合いです。
            </JapaneseText>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JapaneseText;