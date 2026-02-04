/**
 * 季節バリエーションデモページ
 * Seasonal Variation Demo Page
 */

import React from 'react';
import { PatternLibrary, PatternBackground } from '@/components/patterns';
import { SeasonalThemeSwitcher } from '@/components/SeasonalThemeSwitcher';
import { WashiBackground } from '@/components/textures';

export default function SeasonalDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* ヘッダー / Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                季節バリエーションシステム
              </h1>
              <p className="text-gray-600 mt-1">
                Seasonal Variation System Demo
              </p>
            </div>
            <SeasonalThemeSwitcher
              variant="tabs"
              size="md"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 季節パターンデモ / Seasonal Pattern Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            季節パターン / Seasonal Patterns
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 春桜パターン / Spring Sakura Pattern */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <PatternBackground
                  pattern="seasonal-spring"
                  preset="normal"
                  washiTexture={true}
                  washiTextureType="smooth"
                  animated={true}
                  overlay={true}
                  overlayOpacity={0.1}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        春桜 🌸
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Spring Sakura
                      </p>
                    </div>
                  </div>
                </PatternBackground>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-sm">
                  桜の花びらが舞い散る美しい春のパターン。新生と希望を象徴します。
                </p>
              </div>
            </div>

            {/* 秋紅葉パターン / Autumn Maple Pattern */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <PatternBackground
                  pattern="seasonal-autumn"
                  preset="normal"
                  washiTexture={true}
                  washiTextureType="rough"
                  animated={true}
                  overlay={true}
                  overlayOpacity={0.1}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        秋紅葉 🍁
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Autumn Maple
                      </p>
                    </div>
                  </div>
                </PatternBackground>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-sm">
                  紅葉が舞い散る情緒豊かな秋のパターン。変化と成熟を表現します。
                </p>
              </div>
            </div>

            {/* 冬雪パターン / Winter Snow Pattern */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <PatternBackground
                  pattern="seasonal-winter"
                  preset="normal"
                  washiTexture={true}
                  washiTextureType="aged"
                  animated={true}
                  overlay={true}
                  overlayOpacity={0.1}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        冬雪 ❄️
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Winter Snow
                      </p>
                    </div>
                  </div>
                </PatternBackground>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-sm">
                  雪の結晶が舞う静寂で美しい冬のパターン。純粋と清浄を象徴します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* アニメーション効果デモ / Animation Effects Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            アニメーション効果 / Animation Effects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 落下アニメーション / Falling Animation */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <PatternLibrary
                  pattern="seasonal-spring"
                  preset="prominent"
                  animated={true}
                  patternConfig={{
                    animationEffect: 'falling',
                    windEffect: true,
                    density: 'medium',
                  }}
                  width="100%"
                  height="100%"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-bold mb-2">
                      落下アニメーション
                    </h3>
                    <p className="text-sm">
                      Falling Animation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 揺れアニメーション / Swaying Animation */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <PatternLibrary
                  pattern="seasonal-autumn"
                  preset="prominent"
                  animated={true}
                  patternConfig={{
                    animationEffect: 'swaying',
                    density: 'dense',
                  }}
                  width="100%"
                  height="100%"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-bold mb-2">
                      揺れアニメーション
                    </h3>
                    <p className="text-sm">
                      Swaying Animation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 密度バリエーション / Density Variations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            密度バリエーション / Density Variations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['sparse', 'medium', 'dense'].map((density) => (
              <div key={density} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <PatternLibrary
                    pattern="seasonal-winter"
                    preset="normal"
                    animated={true}
                    patternConfig={{
                      density: density as 'sparse' | 'medium' | 'dense',
                      animationEffect: 'floating',
                    }}
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {density === 'sparse' ? '疎' : density === 'medium' ? '中' : '密'}
                      </h3>
                      <p className="text-sm text-gray-600 capitalize">
                        {density}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 和紙テクスチャとの組み合わせ / Combination with Washi Texture */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            和紙テクスチャとの組み合わせ / Combination with Washi Texture
          </h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 relative">
              <WashiBackground
                textureType="handmade"
                intensity="normal"
                className="w-full h-full"
              >
                <PatternBackground
                  pattern="seasonal-spring"
                  preset="subtle"
                  animated={true}
                  washiTexture={false} // 既に和紙背景があるので重複を避ける
                  overlay={false}
                  patternConfig={{
                    animationEffect: 'swaying',
                    density: 'medium',
                    useGradient: true,
                  }}
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center max-w-md mx-auto p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        伝統的な美の融合
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        和紙の質感と季節のパターンが調和し、
                        日本の伝統的な美意識を現代のデジタル体験に表現します。
                      </p>
                      <p className="text-gray-600 text-sm mt-4">
                        Traditional beauty fusion combining washi texture 
                        with seasonal patterns for modern digital experiences.
                      </p>
                    </div>
                  </div>
                </PatternBackground>
              </WashiBackground>
            </div>
          </div>
        </section>

        {/* 使用方法 / Usage Instructions */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            使用方法 / Usage Instructions
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold mb-4">基本的な使用方法</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { PatternLibrary, SeasonalThemeSwitcher } from '@/components';

// 季節パターンの使用
<PatternLibrary
  pattern="seasonal-spring"
  preset="normal"
  animated={true}
  patternConfig={{
    density: 'medium',
    animationEffect: 'falling',
    windEffect: true,
  }}
/>

// 季節テーマ切り替え
<SeasonalThemeSwitcher
  variant="tabs"
  size="md"
  showLabels={true}
  showIcons={true}
/>`}
              </pre>
              
              <h3 className="text-lg font-semibold mb-4 mt-6">利用可能なパターン</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><code>seasonal-spring</code> - 春桜パターン（桜の花びらが舞い散る）</li>
                <li><code>seasonal-autumn</code> - 秋紅葉パターン（紅葉が舞い散る）</li>
                <li><code>seasonal-winter</code> - 冬雪パターン（雪の結晶が舞う）</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-4 mt-6">アニメーション効果</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><code>falling</code> - 落下アニメーション</li>
                <li><code>floating</code> - 浮遊アニメーション</li>
                <li><code>swaying</code> - 揺れアニメーション</li>
                <li><code>none</code> - アニメーションなし</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}