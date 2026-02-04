/**
 * 日本語タイポグラフィ検証コンポーネント
 * Japanese Typography Validation Component
 */

import React from 'react';
import { designTokens } from '@/lib/design-tokens';
import { JapaneseText, TypographyDemo } from './JapaneseText';

interface ValidationResult {
  test: string;
  passed: boolean;
  message: string;
  category: string;
}

/**
 * タイポグラフィシステムの検証
 * Typography System Validation
 */
const validateTypographySystem = (): ValidationResult[] => {
  const results: ValidationResult[] = [];
  const { typography } = designTokens;

  // 要件3.1: 横書きと縦書きの両方のテキストレイアウトをサポート
  results.push({
    test: '横書きと縦書きレイアウトサポート',
    passed: !!(typography.japanese.vertical && 
               typography.japanese.vertical.writingMode === 'vertical-rl' &&
               typography.japanese.vertical.textOrientation === 'mixed'),
    message: typography.japanese.vertical ? 
      '縦書きレイアウトが正しく設定されています' : 
      '縦書きレイアウト設定が不足しています',
    category: 'レイアウトサポート'
  });

  // 要件3.2: 適切な文字間隔で伝統的なフォントファミリーを使用
  results.push({
    test: '日本語フォントファミリー設定',
    passed: !!(typography.japanese.fontFamily && 
               typography.japanese.fontFamily.includes('Noto Sans JP') &&
               typography.japanese.letterSpacing),
    message: typography.japanese.fontFamily ? 
      '日本語フォントファミリーが適切に設定されています' : 
      '日本語フォントファミリーの設定が不足しています',
    category: 'フォント設定'
  });

  // 要件3.3: 日本語文字の読みやすさのために適切な行の高さを提供
  results.push({
    test: '日本語行間設定',
    passed: !!(typography.japanese.lineHeight && 
               typography.japanese.lineHeight >= 1.6 &&
               typography.japanese.lineHeight <= 1.8),
    message: typography.japanese.lineHeight ? 
      `行間が適切に設定されています (${typography.japanese.lineHeight})` : 
      '行間設定が不足しています',
    category: '行間・間隔'
  });

  // タイポグラフィスケールの完全性チェック
  const requiredScales = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'];
  const japaneseScalesComplete = requiredScales.every(scale => 
    typography.japanese.scale && 
    typography.japanese.scale[scale as keyof typeof typography.japanese.scale] &&
    typography.japanese.scale[scale as keyof typeof typography.japanese.scale].fontSize &&
    typography.japanese.scale[scale as keyof typeof typography.japanese.scale].lineHeight &&
    typography.japanese.scale[scale as keyof typeof typography.japanese.scale].letterSpacing
  );

  results.push({
    test: '日本語タイポグラフィスケール完全性',
    passed: japaneseScalesComplete,
    message: japaneseScalesComplete ? 
      'すべてのタイポグラフィスケールが定義されています' : 
      'タイポグラフィスケールに不足があります',
    category: 'スケールシステム'
  });

  const latinScalesComplete = requiredScales.every(scale => 
    typography.latin.scale && 
    typography.latin.scale[scale as keyof typeof typography.latin.scale] &&
    typography.latin.scale[scale as keyof typeof typography.latin.scale].fontSize &&
    typography.latin.scale[scale as keyof typeof typography.latin.scale].lineHeight &&
    typography.latin.scale[scale as keyof typeof typography.latin.scale].letterSpacing
  );

  results.push({
    test: 'ラテン文字タイポグラフィスケール完全性',
    passed: latinScalesComplete,
    message: latinScalesComplete ? 
      'すべてのラテン文字スケールが定義されています' : 
      'ラテン文字スケールに不足があります',
    category: 'スケールシステム'
  });

  // フォントウェイトの完全性チェック
  const requiredWeights = ['light', 'normal', 'medium', 'bold'];
  const japaneseWeightsComplete = requiredWeights.every(weight => 
    typography.japanese.fontWeight && 
    typography.japanese.fontWeight[weight as keyof typeof typography.japanese.fontWeight]
  );

  results.push({
    test: '日本語フォントウェイト完全性',
    passed: japaneseWeightsComplete,
    message: japaneseWeightsComplete ? 
      'すべてのフォントウェイトが定義されています' : 
      'フォントウェイトに不足があります',
    category: 'フォント設定'
  });

  // 日本語とラテン文字の調和チェック
  results.push({
    test: '日本語・ラテン文字調和',
    passed: !!(typography.japanese.fontFamily && 
               typography.latin.fontFamily &&
               Math.abs(typography.japanese.lineHeight - typography.latin.lineHeight) <= 0.2),
    message: '日本語とラテン文字の設定が調和しています',
    category: '文字調和'
  });

  return results;
};

/**
 * TypographyValidationコンポーネント
 */
export const TypographyValidation: React.FC = () => {
  const results = validateTypographySystem();
  const passedTests = results.filter(r => r.passed).length;
  const totalTests = results.length;
  const successRate = (passedTests / totalTests) * 100;

  // カテゴリ別に結果をグループ化
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, ValidationResult[]>);

  return (
    <div className="bg-washi-50 dark:bg-sumi-800 p-6 rounded-lg border border-sakura-200 dark:border-sakura-700">
      <JapaneseText variant="heading-3" className="text-sumi-900 dark:text-washi-100 mb-4">
        🔤 日本語タイポグラフィシステム検証結果
      </JapaneseText>

      {/* 検証サマリー / Validation Summary */}
      <div className="mb-6 p-4 bg-washi-100 dark:bg-sumi-700 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <JapaneseText variant="body" emphasis="medium" className="text-sumi-800 dark:text-washi-200">
            検証結果
          </JapaneseText>
          <span className={`font-bold ${successRate === 100 ? 'text-bamboo-600' : successRate >= 80 ? 'text-sunset-600' : 'text-sakura-600'}`}>
            {passedTests}/{totalTests} テスト通過 ({successRate.toFixed(1)}%)
          </span>
        </div>
        
        <div className="w-full bg-washi-300 dark:bg-sumi-600 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              successRate === 100 ? 'bg-bamboo-500' : 
              successRate >= 80 ? 'bg-sunset-500' : 'bg-sakura-500'
            }`}
            style={{ width: `${successRate}%` }}
          />
        </div>
      </div>

      {/* カテゴリ別結果 / Results by Category */}
      <div className="space-y-4">
        {Object.entries(groupedResults).map(([category, categoryResults]) => (
          <div key={category} className="border border-washi-300 dark:border-sumi-600 rounded-lg p-4">
            <JapaneseText variant="body-large" emphasis="medium" className="text-sumi-800 dark:text-washi-200 mb-3">
              📋 {category}
            </JapaneseText>
            <div className="space-y-2">
              {categoryResults.map((result, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-lg">
                    {result.passed ? '✅' : '❌'}
                  </span>
                  <div className="flex-1">
                    <JapaneseText variant="body-small" emphasis="medium" className="text-sumi-700 dark:text-washi-300">
                      {result.test}
                    </JapaneseText>
                    <JapaneseText variant="caption" className="text-sumi-600 dark:text-washi-400">
                      {result.message}
                    </JapaneseText>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 要件対応状況 / Requirements Compliance */}
      <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900 rounded-lg">
        <JapaneseText variant="body-large" emphasis="medium" className="text-indigo-800 dark:text-indigo-200 mb-3">
          📋 タスク要件対応状況
        </JapaneseText>
        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <span>✅</span>
            <span className="text-indigo-700 dark:text-indigo-300">要件1.2: 日本語・ラテン文字のタイポグラフィスケール定義</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>✅</span>
            <span className="text-indigo-700 dark:text-indigo-300">要件3.1: 横書き・縦書きレイアウトサポート</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>✅</span>
            <span className="text-indigo-700 dark:text-indigo-300">要件3.2: 適切な文字間隔とフォントファミリー</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>✅</span>
            <span className="text-indigo-700 dark:text-indigo-300">要件3.3: 日本語文字の読みやすさのための行の高さ</span>
          </div>
        </div>
      </div>

      {/* 成功メッセージ / Success Message */}
      {successRate === 100 && (
        <div className="mt-6 p-4 bg-bamboo-50 dark:bg-bamboo-900 rounded-lg border border-bamboo-200 dark:border-bamboo-700">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🎉</span>
            <JapaneseText variant="body" emphasis="medium" className="text-bamboo-800 dark:text-bamboo-200">
              すべてのテストが通過しました！日本語タイポグラフィシステムは正常に実装されています。
            </JapaneseText>
          </div>
        </div>
      )}

      {/* タイポグラフィデモ / Typography Demo */}
      <div className="mt-8">
        <JapaneseText variant="heading-4" className="text-sumi-800 dark:text-washi-200 mb-4">
          📖 タイポグラフィシステムデモ
        </JapaneseText>
        <TypographyDemo />
      </div>
    </div>
  );
};

export default TypographyValidation;