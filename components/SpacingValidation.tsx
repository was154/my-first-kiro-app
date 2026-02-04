/**
 * 日本伝統デザインシステムの間隔システム検証コンポーネント
 * Japanese Traditional Design System Spacing Validation Component
 */

import React from 'react';
import { designTokens } from '@/lib/design-tokens';
import spacingUtils from '@/lib/spacing-utils';

interface SpacingValidationProps {
  className?: string;
}

const SpacingValidation: React.FC<SpacingValidationProps> = ({ className = '' }) => {
  return (
    <div className={`w-full max-w-6xl mx-auto p-6 space-y-8 ${className}`}>
      {/* ヘッダー / Header */}
      <div className="text-center space-y-4">
        <h1 className="text-jp-3xl font-bold text-sumi-800">
          日本伝統間隔システム検証
        </h1>
        <p className="text-jp-base text-sumi-600">
          Japanese Traditional Spacing System Validation
        </p>
      </div>

      {/* 基本単位の表示 / Basic Units Display */}
      <section className="space-y-6">
        <h2 className="text-jp-2xl font-medium text-sumi-700 border-b border-sumi-200 pb-2">
          基本単位 / Basic Units
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 畳比例 / Tatami Proportion */}
          <div className="bg-washi-100 p-4 rounded-lg border border-sumi-200">
            <h3 className="text-jp-lg font-medium text-sumi-800 mb-3">
              畳比例 (黄金比)
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-jp-sm text-sumi-600">値:</span>
                <code className="text-jp-sm bg-sumi-100 px-2 py-1 rounded">
                  {designTokens.spacing.tatami}
                </code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-jp-sm text-sumi-600">比率:</span>
                <code className="text-jp-sm bg-sumi-100 px-2 py-1 rounded">
                  φ = {spacingUtils.GOLDEN_RATIO}
                </code>
              </div>
              <div 
                className="bg-sakura-200 h-4 rounded"
                style={{ width: designTokens.spacing.tatami }}
              />
            </div>
          </div>

          {/* 尺単位 / Shaku Unit */}
          <div className="bg-washi-100 p-4 rounded-lg border border-sumi-200">
            <h3 className="text-jp-lg font-medium text-sumi-800 mb-3">
              尺単位
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-jp-sm text-sumi-600">値:</span>
                <code className="text-jp-sm bg-sumi-100 px-2 py-1 rounded">
                  {designTokens.spacing.shaku}
                </code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-jp-sm text-sumi-600">実寸:</span>
                <span className="text-jp-sm text-sumi-600">約30.3cm</span>
              </div>
              <div 
                className="bg-bamboo-200 h-4 rounded"
                style={{ width: designTokens.spacing.shaku }}
              />
            </div>
          </div>

          {/* 寸単位 / Sun Unit */}
          <div className="bg-washi-100 p-4 rounded-lg border border-sumi-200">
            <h3 className="text-jp-lg font-medium text-sumi-800 mb-3">
              寸単位
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-jp-sm text-sumi-600">値:</span>
                <code className="text-jp-sm bg-sumi-100 px-2 py-1 rounded">
                  {designTokens.spacing.sun}
                </code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-jp-sm text-sumi-600">実寸:</span>
                <span className="text-jp-sm text-sumi-600">約3.03cm</span>
              </div>
              <div 
                className="bg-sunset-200 h-4 rounded"
                style={{ width: designTokens.spacing.sun }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 畳比例スケール / Tatami Proportion Scale */}
      <section className="space-y-6">
        <h2 className="text-jp-2xl font-medium text-sumi-700 border-b border-sumi-200 pb-2">
          畳比例スケール / Tatami Proportion Scale
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(designTokens.spacing.tatamiScale).map(([key, value]) => (
            <div key={key} className="bg-washi-50 p-3 rounded border border-sumi-100">
              <div className="text-jp-sm font-medium text-sumi-700 mb-2">
                tatami-{key}
              </div>
              <code className="text-jp-xs text-sumi-600 block mb-2">
                {value}
              </code>
              <div 
                className="bg-sakura-300 h-2 rounded"
                style={{ width: value }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 尺・寸スケール / Shaku-Sun Scale */}
      <section className="space-y-6">
        <h2 className="text-jp-2xl font-medium text-sumi-700 border-b border-sumi-200 pb-2">
          尺・寸スケール / Shaku-Sun Scale
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {Object.entries(designTokens.spacing.shakuScale).map(([key, value]) => (
            <div key={key} className="bg-washi-50 p-2 rounded border border-sumi-100">
              <div className="text-jp-xs font-medium text-sumi-700 mb-1">
                shaku-{key}
              </div>
              <code className="text-jp-xs text-sumi-600 block mb-1">
                {value}
              </code>
              <div 
                className="bg-bamboo-300 h-1 rounded"
                style={{ width: value }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* レスポンシブ間隔 / Responsive Spacing */}
      <section className="space-y-6">
        <h2 className="text-jp-2xl font-medium text-sumi-700 border-b border-sumi-200 pb-2">
          レスポンシブ間隔 / Responsive Spacing
        </h2>
        
        {Object.entries(designTokens.spacing.responsive).map(([breakpoint, sizes]) => (
          <div key={breakpoint} className="space-y-3">
            <h3 className="text-jp-lg font-medium text-sumi-600 capitalize">
              {breakpoint}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(sizes).map(([size, value]) => (
                <div key={size} className="bg-washi-50 p-2 rounded border border-sumi-100">
                  <div className="text-jp-xs font-medium text-sumi-700 mb-1">
                    {size}
                  </div>
                  <code className="text-jp-xs text-sumi-600 block mb-1">
                    {value}
                  </code>
                  <div 
                    className="bg-indigo-300 h-1 rounded"
                    style={{ width: value }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* コンポーネント間隔 / Component Spacing */}
      <section className="space-y-6">
        <h2 className="text-jp-2xl font-medium text-sumi-700 border-b border-sumi-200 pb-2">
          コンポーネント間隔 / Component Spacing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(designTokens.spacing.component).map(([key, value]) => (
            <div key={key} className="bg-washi-50 p-3 rounded border border-sumi-100">
              <div className="text-jp-sm font-medium text-sumi-700 mb-2">
                {key.replace(/([A-Z])/g, '-$1').toLowerCase()}
              </div>
              <code className="text-jp-xs text-sumi-600 block mb-2">
                {value}
              </code>
              <div 
                className="bg-gold-300 h-2 rounded"
                style={{ width: value }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 実際の使用例 / Practical Usage Examples */}
      <section className="space-y-6">
        <h2 className="text-jp-2xl font-medium text-sumi-700 border-b border-sumi-200 pb-2">
          実際の使用例 / Practical Usage Examples
        </h2>
        
        {/* カードレイアウト例 / Card Layout Example */}
        <div className="space-y-4">
          <h3 className="text-jp-lg font-medium text-sumi-600">
            カードレイアウト / Card Layout
          </h3>
          <div className="flex flex-wrap gap-card-gap">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="bg-washi-100 border border-sumi-200 rounded-lg p-card-padding flex-1 min-w-48"
                style={{ margin: designTokens.spacing.component.cardMargin }}
              >
                <h4 className="text-jp-base font-medium text-sumi-800 mb-2">
                  カード {i}
                </h4>
                <p className="text-jp-sm text-sumi-600">
                  畳比例を使用した間隔でレイアウトされています。
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* グリッドレイアウト例 / Grid Layout Example */}
        <div className="space-y-4">
          <h3 className="text-jp-lg font-medium text-sumi-600">
            グリッドレイアウト / Grid Layout
          </h3>
          <div 
            className="grid grid-cols-2 md:grid-cols-4 p-grid-padding bg-washi-50 rounded-lg border border-sumi-200"
            style={{ gap: designTokens.spacing.component.gridGap }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i}
                className="bg-sakura-100 p-3 rounded text-center text-jp-sm text-sumi-700"
              >
                アイテム {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailwindクラス使用例 / Tailwind Class Usage Examples */}
      <section className="space-y-6">
        <h2 className="text-jp-2xl font-medium text-sumi-700 border-b border-sumi-200 pb-2">
          Tailwindクラス使用例 / Tailwind Class Usage Examples
        </h2>
        
        <div className="space-y-4">
          <div className="bg-washi-50 p-4 rounded-lg border border-sumi-200">
            <h3 className="text-jp-lg font-medium text-sumi-700 mb-3">
              畳比例クラス / Tatami Proportion Classes
            </h3>
            <div className="space-y-2">
              <div className="p-tatami-0.5 bg-sakura-100 rounded">p-tatami-0.5</div>
              <div className="p-tatami-1 bg-sakura-200 rounded">p-tatami-1</div>
              <div className="p-tatami-1.5 bg-sakura-300 rounded">p-tatami-1.5</div>
            </div>
          </div>

          <div className="bg-washi-50 p-4 rounded-lg border border-sumi-200">
            <h3 className="text-jp-lg font-medium text-sumi-700 mb-3">
              尺・寸クラス / Shaku-Sun Classes
            </h3>
            <div className="space-y-2">
              <div className="p-shaku-0.5 bg-bamboo-100 rounded">p-shaku-0.5</div>
              <div className="p-shaku-1 bg-bamboo-200 rounded">p-shaku-1</div>
              <div className="p-shaku-2 bg-bamboo-300 rounded">p-shaku-2</div>
            </div>
          </div>

          <div className="bg-washi-50 p-4 rounded-lg border border-sumi-200">
            <h3 className="text-jp-lg font-medium text-sumi-700 mb-3">
              コンポーネント間隔クラス / Component Spacing Classes
            </h3>
            <div className="space-y-2">
              <div className="p-card-padding bg-gold-100 rounded">p-card-padding</div>
              <div className="p-header-padding bg-gold-200 rounded">p-header-padding</div>
              <div className="p-section-padding bg-gold-300 rounded">p-section-padding</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpacingValidation;