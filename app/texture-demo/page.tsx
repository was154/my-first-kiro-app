'use client';

/**
 * 和紙テクスチャシステムデモページ
 * Washi Texture System Demo Page
 */

import React from 'react';
import { 
  TextureLibrary, 
  TexturePreview, 
  WashiCard, 
  WashiSection, 
  WashiHeader,
  TEXTURE_PRESETS,
  getTextureTypeInfo 
} from '@/components/textures';
import { WashiTexture } from '@/components/textures/WashiTexture';
import { PatternBackground } from '@/components/patterns/PatternLibrary';

export default function TextureDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー / Header */}
      <WashiHeader
        textureType="smooth"
        intensity="subtle"
        height="lg"
        className="border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">
            和紙テクスチャシステム デモ
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Washi Texture System Demo
          </p>
        </div>
      </WashiHeader>

      {/* メインコンテンツ / Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* 概要セクション / Overview section */}
        <WashiSection
          textureType="handmade"
          intensity="subtle"
          padding="lg"
          className="mb-8 rounded-lg"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              和紙テクスチャシステム
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              日本の伝統的な和紙の質感を再現するCSS/SVGベースのテクスチャシステムです。
              様々な種類の和紙テクスチャを背景として適用できます。
            </p>
          </div>
        </WashiSection>

        {/* テクスチャプリセット一覧 / Texture presets list */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            テクスチャプリセット
          </h3>
          
          {/* 簡単なテストケース / Simple test case */}
          <div className="mb-8 p-4 border rounded-lg">
            <h4 className="text-lg font-medium mb-4">テスト: 基本的な和紙テクスチャ</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="h-32 border rounded-lg overflow-hidden bg-white relative shadow-sm">
                <div className="absolute inset-0">
                  <WashiTexture
                    type="smooth"
                    intensity="normal"
                    width="100%"
                    height="100%"
                    patternId="test-smooth"
                  />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700 bg-white bg-opacity-90 px-3 py-1 rounded shadow-sm">
                    Smooth
                  </span>
                </div>
              </div>
              
              <div className="h-32 border rounded-lg overflow-hidden bg-white relative shadow-sm">
                <div className="absolute inset-0">
                  <WashiTexture
                    type="rough"
                    intensity="normal"
                    width="100%"
                    height="100%"
                    patternId="test-rough"
                  />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700 bg-white bg-opacity-90 px-3 py-1 rounded shadow-sm">
                    Rough
                  </span>
                </div>
              </div>
              
              <div className="h-32 border rounded-lg overflow-hidden bg-white relative shadow-sm">
                <div className="absolute inset-0">
                  <WashiTexture
                    type="handmade"
                    intensity="normal"
                    width="100%"
                    height="100%"
                    patternId="test-handmade"
                  />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700 bg-white bg-opacity-90 px-3 py-1 rounded shadow-sm">
                    Handmade
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <TexturePreview 
            columns={3}
            size="lg"
            className="mb-8"
          />
        </section>

        {/* テクスチャタイプ詳細 / Texture type details */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            テクスチャタイプ詳細
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(['smooth', 'rough', 'handmade', 'aged', 'fibrous', 'mulberry'] as const).map((type) => {
              const info = getTextureTypeInfo(type);
              return (
                <WashiCard
                  key={type}
                  textureType={type}
                  intensity="normal"
                  shadow="md"
                  rounded="lg"
                  padding="lg"
                  hoverable
                >
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {info.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {info.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-gray-700">
                        特徴:
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {info.characteristics.map((char, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-500">
                        {info.usage}
                      </p>
                    </div>
                  </div>
                </WashiCard>
              );
            })}
          </div>
        </section>

        {/* パターンとの組み合わせ / Pattern combinations */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            パターンとの組み合わせ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(['seigaiha', 'asanoha', 'sakura'] as const).map((pattern) => (
              <div key={pattern} className="space-y-4">
                <h4 className="text-lg font-medium text-gray-900 capitalize">
                  {pattern} パターン
                </h4>
                <div className="space-y-3">
                  {(['smooth', 'rough', 'handmade'] as const).map((textureType) => (
                    <div key={textureType} className="h-32 rounded-lg overflow-hidden border">
                      <PatternBackground
                        pattern={pattern}
                        preset="normal"
                        washiTexture={true}
                        washiTextureType={textureType}
                        washiIntensity="normal"
                      >
                        <div className="h-full flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-700 bg-white bg-opacity-80 px-3 py-1 rounded">
                            {pattern} + {textureType}
                          </span>
                        </div>
                      </PatternBackground>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 使用例 / Usage examples */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            使用例
          </h3>
          
          {/* カードレイアウト例 / Card layout example */}
          <div className="mb-8">
            <h4 className="text-lg font-medium text-gray-900 mb-4">
              カードレイアウト
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <WashiCard
                textureType="smooth"
                intensity="subtle"
                shadow="lg"
                rounded="xl"
                padding="lg"
                hoverable
              >
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📚</span>
                  </div>
                  <h5 className="font-semibold text-gray-900">高級コース</h5>
                  <p className="text-sm text-gray-600">
                    滑らかな和紙テクスチャで上品な印象を演出
                  </p>
                </div>
              </WashiCard>

              <WashiCard
                textureType="handmade"
                intensity="normal"
                shadow="lg"
                rounded="xl"
                padding="lg"
                hoverable
              >
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-green-600 text-xl">🎨</span>
                  </div>
                  <h5 className="font-semibold text-gray-900">伝統工芸</h5>
                  <p className="text-sm text-gray-600">
                    手漉き和紙で伝統的な雰囲気を表現
                  </p>
                </div>
              </WashiCard>

              <WashiCard
                textureType="aged"
                intensity="strong"
                shadow="lg"
                rounded="xl"
                padding="lg"
                hoverable
              >
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-amber-600 text-xl">📜</span>
                  </div>
                  <h5 className="font-semibold text-gray-900">歴史講座</h5>
                  <p className="text-sm text-gray-600">
                    古紙テクスチャで歴史的な重みを演出
                  </p>
                </div>
              </WashiCard>
            </div>
          </div>

          {/* セクションレイアウト例 / Section layout example */}
          <div className="mb-8">
            <h4 className="text-lg font-medium text-gray-900 mb-4">
              セクションレイアウト
            </h4>
            <WashiSection
              textureType="fibrous"
              intensity="subtle"
              padding="xl"
              className="rounded-lg border"
            >
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h5 className="text-2xl font-bold text-gray-900">
                  繊維和紙セクション
                </h5>
                <p className="text-lg text-gray-700">
                  繊維が見える和紙テクスチャを使用したセクションレイアウトです。
                  自然素材の美しさを表現し、コンテンツに温かみを与えます。
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    詳細を見る
                  </button>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    お問い合わせ
                  </button>
                </div>
              </div>
            </WashiSection>
          </div>
        </section>

        {/* 技術情報 / Technical information */}
        <WashiSection
          textureType="mulberry"
          intensity="subtle"
          padding="lg"
          className="rounded-lg border-2 border-dashed border-gray-300"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">
              技術情報
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">実装方式</h4>
                <ul className="space-y-1">
                  <li>• SVGベースのテクスチャ生成</li>
                  <li>• CSS パターンとブレンドモード</li>
                  <li>• レスポンシブ対応</li>
                  <li>• TypeScript完全対応</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">パフォーマンス</h4>
                <ul className="space-y-1">
                  <li>• 軽量なSVGパターン</li>
                  <li>• CSS最適化</li>
                  <li>• 遅延読み込み対応</li>
                  <li>• バンドルサイズ最小化</li>
                </ul>
              </div>
            </div>
          </div>
        </WashiSection>
      </main>
    </div>
  );
}