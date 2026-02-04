/**
 * 日本語タイポグラフィデモページ
 * Japanese Typography Demo Page
 */

import React from 'react';
import { TypographyValidation } from '@/components/TypographyValidation';
import { JapaneseText } from '@/components/JapaneseText';

export default function TypographyDemoPage() {
  return (
    <div className="min-h-screen bg-washi-100 dark:bg-sumi-900">
      <div className="container mx-auto px-4 py-8">
        {/* ページヘッダー / Page Header */}
        <div className="text-center mb-12">
          <JapaneseText variant="heading-1" className="text-sumi-900 dark:text-washi-100 mb-4">
            日本語タイポグラフィシステム
          </JapaneseText>
          <JapaneseText variant="body-large" className="text-sumi-600 dark:text-washi-400 max-w-3xl mx-auto">
            伝統的な日本の美学と現代的な機能性を融合した、包括的なタイポグラフィシステムのデモンストレーションです。
            横書き・縦書きレイアウト、適切な文字間隔、そして美しいフォントファミリーをご覧ください。
          </JapaneseText>
        </div>

        {/* タイポグラフィ検証 / Typography Validation */}
        <div className="mb-12">
          <TypographyValidation />
        </div>

        {/* 実装概要 / Implementation Overview */}
        <div className="bg-washi-50 dark:bg-sumi-800 p-8 rounded-lg border border-sakura-200 dark:border-sakura-700 mb-12">
          <JapaneseText variant="heading-3" className="text-sumi-900 dark:text-washi-100 mb-6">
            🔧 実装された機能
          </JapaneseText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <JapaneseText variant="heading-5" className="text-sakura-700 dark:text-sakura-300 mb-3">
                📝 タイポグラフィスケール
              </JapaneseText>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-bamboo-500">✓</span>
                  <JapaneseText variant="body-small" className="text-sumi-600 dark:text-washi-400">
                    10段階のサイズスケール (xs〜6xl)
                  </JapaneseText>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-bamboo-500">✓</span>
                  <JapaneseText variant="body-small" className="text-sumi-600 dark:text-washi-400">
                    日本語・ラテン文字別最適化
                  </JapaneseText>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-bamboo-500">✓</span>
                  <JapaneseText variant="body-small" className="text-sumi-600 dark:text-washi-400">
                    適切な行間・文字間隔設定
                  </JapaneseText>
                </li>
              </ul>
            </div>
            
            <div>
              <JapaneseText variant="heading-5" className="text-indigo-700 dark:text-indigo-300 mb-3">
                🎨 フォントシステム
              </JapaneseText>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-bamboo-500">✓</span>
                  <JapaneseText variant="body-small" className="text-sumi-600 dark:text-washi-400">
                    Noto Sans JP + フォールバック
                  </JapaneseText>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-bamboo-500">✓</span>
                  <JapaneseText variant="body-small" className="text-sumi-600 dark:text-washi-400">
                    4段階のフォントウェイト
                  </JapaneseText>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-bamboo-500">✓</span>
                  <JapaneseText variant="body-small" className="text-sumi-600 dark:text-washi-400">
                    縦書きレイアウト対応
                  </JapaneseText>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tailwind CSS統合 / Tailwind CSS Integration */}
        <div className="bg-indigo-50 dark:bg-indigo-900 p-8 rounded-lg border border-indigo-200 dark:border-indigo-700 mb-12">
          <JapaneseText variant="heading-3" className="text-indigo-800 dark:text-indigo-200 mb-6">
            ⚙️ Tailwind CSS統合
          </JapaneseText>
          
          <JapaneseText variant="body" className="text-indigo-700 dark:text-indigo-300 mb-4">
            新しいタイポグラフィシステムは、Tailwind CSSに完全統合されています：
          </JapaneseText>
          
          <div className="bg-indigo-100 dark:bg-indigo-800 p-4 rounded-lg font-mono text-sm">
            <div className="space-y-1">
              <div className="text-indigo-800 dark:text-indigo-200">
                {`<!-- 日本語タイポグラフィクラス -->`}
              </div>
              <div className="text-indigo-600 dark:text-indigo-400">
                {`<h1 className="text-jp-4xl font-japanese">見出し</h1>`}
              </div>
              <div className="text-indigo-600 dark:text-indigo-400">
                {`<p className="text-jp-base font-japanese">本文テキスト</p>`}
              </div>
              <div className="text-indigo-600 dark:text-indigo-400">
                {`<div className="[writing-mode:vertical-rl]">縦書き</div>`}
              </div>
            </div>
          </div>
        </div>

        {/* 要件対応状況 / Requirements Compliance */}
        <div className="bg-bamboo-50 dark:bg-bamboo-900 p-8 rounded-lg border border-bamboo-200 dark:border-bamboo-700">
          <JapaneseText variant="heading-3" className="text-bamboo-800 dark:text-bamboo-200 mb-6">
            📋 要件対応完了
          </JapaneseText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <JapaneseText variant="heading-6" className="text-bamboo-700 dark:text-bamboo-300 mb-3">
                要件1.2: タイポグラフィスケール定義
              </JapaneseText>
              <JapaneseText variant="body-small" className="text-bamboo-600 dark:text-bamboo-400">
                ✅ 日本語・ラテン文字の両方に対応した包括的なタイポグラフィスケールを実装
              </JapaneseText>
            </div>
            
            <div>
              <JapaneseText variant="heading-6" className="text-bamboo-700 dark:text-bamboo-300 mb-3">
                要件3.1: 横書き・縦書きサポート
              </JapaneseText>
              <JapaneseText variant="body-small" className="text-bamboo-600 dark:text-bamboo-400">
                ✅ 縦書きレイアウト用の専用設定とCSS統合を完了
              </JapaneseText>
            </div>
            
            <div>
              <JapaneseText variant="heading-6" className="text-bamboo-700 dark:text-bamboo-300 mb-3">
                要件3.2: フォントファミリー・文字間隔
              </JapaneseText>
              <JapaneseText variant="body-small" className="text-bamboo-600 dark:text-bamboo-400">
                ✅ 伝統的フォントファミリーと適切な文字間隔を設定
              </JapaneseText>
            </div>
            
            <div>
              <JapaneseText variant="heading-6" className="text-bamboo-700 dark:text-bamboo-300 mb-3">
                要件3.3: 読みやすさのための行の高さ
              </JapaneseText>
              <JapaneseText variant="body-small" className="text-bamboo-600 dark:text-bamboo-400">
                ✅ 日本語文字に最適化された行間設定を実装
              </JapaneseText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}