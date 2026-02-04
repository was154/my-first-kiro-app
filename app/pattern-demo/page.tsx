'use client';

/**
 * 日本伝統パターンデモページ
 * Japanese Traditional Pattern Demo Page
 */

import React from 'react';
import { 
  PatternLibrary, 
  PatternBackground, 
  PatternPreview, 
  getPatternInfo,
  SeigaihaPattern,
  AsanohaPattern,
  SakuraPattern,
  type PatternType 
} from '@/components/patterns';

const PatternDemoPage = () => {
  const patterns: PatternType[] = ['seigaiha', 'asanoha', 'sakura'];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー / Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            日本伝統パターンライブラリ
          </h1>
          <p className="mt-2 text-gray-600">
            Japanese Traditional Pattern Library Demo
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* パターン背景デモ / Pattern Background Demo */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">パターン背景デモ / Pattern Background Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patterns.map((pattern) => {
              const info = getPatternInfo(pattern);
              return (
                <PatternBackground
                  key={pattern}
                  pattern={pattern}
                  preset="normal"
                  className="h-48 rounded-lg border"
                  overlay={true}
                  overlayOpacity={0.1}
                >
                  <div className="p-6 h-full flex flex-col justify-center items-center text-center">
                    <h3 className="text-xl font-semibold mb-2">{info.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{info.nameEn}</p>
                    <p className="text-xs text-gray-500">{info.meaning}</p>
                  </div>
                </PatternBackground>
              );
            })}
          </div>
        </section>

        {/* 個別パターンデモ / Individual Pattern Demo */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">個別パターンデモ / Individual Pattern Demo</h2>
          
          {/* 青海波 / Seigaiha */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">青海波 (Seigaiha) - 波模様</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">基本パターン / Basic</p>
                <div className="h-32 border rounded-lg overflow-hidden">
                  <SeigaihaPattern
                    width="100%"
                    height="100%"
                    waveCount={4}
                    useGradient={false}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">グラデーション / Gradient</p>
                <div className="h-32 border rounded-lg overflow-hidden">
                  <SeigaihaPattern
                    width="100%"
                    height="100%"
                    waveCount={5}
                    useGradient={true}
                    multiColor={true}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">アニメーション / Animated</p>
                <div className="h-32 border rounded-lg overflow-hidden">
                  <SeigaihaPattern
                    width="100%"
                    height="100%"
                    waveCount={6}
                    animated={true}
                    useGradient={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 麻の葉 / Asanoha */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">麻の葉 (Asanoha) - 幾何学模様</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">基本パターン / Basic</p>
                <div className="h-32 border rounded-lg overflow-hidden">
                  <AsanohaPattern
                    width="100%"
                    height="100%"
                    showInnerStar={false}
                    emphasizeIntersections={false}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">内部星形 / Inner Star</p>
                <div className="h-32 border rounded-lg overflow-hidden">
                  <AsanohaPattern
                    width="100%"
                    height="100%"
                    showInnerStar={true}
                    multiColor={true}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">交差点強調 / Emphasized Intersections</p>
                <div className="h-32 border rounded-lg overflow-hidden">
                  <AsanohaPattern
                    width="100%"
                    height="100%"
                    showInnerStar={true}
                    emphasizeIntersections={true}
                    animated={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 桜 / Sakura */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">桜 (Sakura) - 花模様</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">春 / Spring</p>
                <div className="h-32 border rounded-lg overflow-hidden">
                  <SakuraPattern
                    width="100%"
                    height="100%"
                    seasonalVariant="spring"
                    flowerDensity="medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">満開 / Full Bloom</p>
                <div className="h-32 border rounded-lg overflow-hidden">
                  <SakuraPattern
                    width="100%"
                    height="100%"
                    seasonalVariant="full-bloom"
                    flowerDensity="dense"
                    useGradient={true}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">散り桜 / Falling Petals</p>
                <div className="h-32 border rounded-lg overflow-hidden">
                  <SakuraPattern
                    width="100%"
                    height="100%"
                    seasonalVariant="falling"
                    fallingPetals={true}
                    animated={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* プリセットデモ / Preset Demo */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">プリセットデモ / Preset Demo</h2>
          <div className="space-y-6">
            {patterns.map((pattern) => {
              const info = getPatternInfo(pattern);
              return (
                <div key={pattern} className="space-y-3">
                  <h3 className="text-lg font-medium">{info.name} ({info.nameEn})</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {(['subtle', 'normal', 'prominent'] as const).map((preset) => (
                      <div key={preset} className="space-y-2">
                        <p className="text-sm font-medium capitalize">{preset}</p>
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
              );
            })}
          </div>
        </section>

        {/* 季節テーマデモ / Seasonal Theme Demo */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">季節テーマデモ / Seasonal Theme Demo</h2>
          <div className="space-y-6">
            {(['spring', 'summer', 'autumn', 'winter'] as const).map((season) => (
              <div key={season} className="space-y-3">
                <h3 className="text-lg font-medium capitalize">
                  {season === 'spring' && '春 (Spring)'}
                  {season === 'summer' && '夏 (Summer)'}
                  {season === 'autumn' && '秋 (Autumn)'}
                  {season === 'winter' && '冬 (Winter)'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {patterns.map((pattern) => (
                    <div key={pattern} className="space-y-2">
                      <p className="text-sm font-medium">{getPatternInfo(pattern).name}</p>
                      <div className="h-24 border rounded-lg overflow-hidden">
                        <PatternLibrary
                          pattern={pattern}
                          preset="normal"
                          seasonalTheme={season}
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
        </section>

        {/* パターン情報 / Pattern Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">パターン情報 / Pattern Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patterns.map((pattern) => {
              const info = getPatternInfo(pattern);
              return (
                <div key={pattern} className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold mb-2">{info.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{info.nameEn}</p>
                  <p className="text-sm mb-3">{info.description}</p>
                  <div className="space-y-1 text-xs text-gray-500">
                    <p><strong>起源:</strong> {info.origin}</p>
                    <p><strong>意味:</strong> {info.meaning}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
};

export default PatternDemoPage;