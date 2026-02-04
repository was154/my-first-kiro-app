# 日本伝統間隔システム / Japanese Traditional Spacing System

## 概要 / Overview

日本伝統デザインシステムの間隔システムは、畳比例（黄金比）、尺・寸単位、レスポンシブ対応を組み合わせた包括的なスペーシングソリューションです。

The Japanese Traditional Design System spacing system is a comprehensive spacing solution that combines tatami proportions (golden ratio), shaku-sun units, and responsive design.

## 基本単位 / Basic Units

### 畳比例 (Tatami Proportion)
- **値**: `1.618rem` (黄金比 φ)
- **用途**: 主要なレイアウト間隔、カード間隔
- **クラス**: `tatami`, `p-tatami`, `m-tatami`

### 尺単位 (Shaku Unit)
- **値**: `1rem` (約30.3cm相当)
- **用途**: コンポーネント内パディング、基本間隔
- **クラス**: `shaku`, `p-shaku`, `m-shaku`

### 寸単位 (Sun Unit)
- **値**: `0.1rem` (約3.03cm相当)
- **用途**: 細かい調整、ボーダー間隔
- **クラス**: `sun`, `p-sun`, `m-sun`

## 使用可能なクラス / Available Classes

### 畳比例クラス / Tatami Proportion Classes
```css
.p-tatami-0.5  /* 0.809rem */
.p-tatami-1    /* 1.618rem */
.p-tatami-1.5  /* 2.427rem */
.p-tatami-2    /* 3.236rem */
.p-tatami-2.5  /* 4.045rem */
.p-tatami-3    /* 4.854rem */
.p-tatami-4    /* 6.472rem */
.p-tatami-5    /* 8.09rem */
```

### 尺・寸クラス / Shaku-Sun Classes
```css
.p-shaku-0.1   /* 0.1rem */
.p-shaku-0.2   /* 0.2rem */
.p-shaku-0.5   /* 0.5rem */
.p-shaku-1     /* 1rem */
.p-shaku-2     /* 2rem */
.p-shaku-5     /* 5rem */
.p-shaku-10    /* 10rem */
```

### コンポーネント間隔クラス / Component Spacing Classes
```css
.p-card-padding      /* 1rem */
.gap-card-gap        /* 1.618rem */
.p-header-padding    /* 1rem */
.gap-section-gap     /* 3.236rem */
.gap-grid-gap        /* 1.618rem */
```

## 使用例 / Usage Examples

### カードレイアウト / Card Layout
```tsx
<div className="flex gap-card-gap">
  <div className="p-card-padding bg-washi-100 rounded-lg">
    カード内容
  </div>
</div>
```

### セクション間隔 / Section Spacing
```tsx
<section className="space-y-section-gap p-section-padding">
  <h2>セクションタイトル</h2>
  <p>セクション内容</p>
</section>
```

### グリッドレイアウト / Grid Layout
```tsx
<div className="grid grid-cols-3 gap-grid-gap p-grid-padding">
  <div>アイテム1</div>
  <div>アイテム2</div>
  <div>アイテム3</div>
</div>
```

## レスポンシブ対応 / Responsive Design

間隔システムは自動的にレスポンシブ対応されており、画面サイズに応じて適切にスケールされます：

- **モバイル**: 75%スケール
- **タブレット**: 87.5%スケール  
- **デスクトップ**: 100%スケール

## ユーティリティ関数 / Utility Functions

### spacingUtils
```typescript
import spacingUtils from '@/lib/spacing-utils';

// 畳比例計算
const tatamiSpacing = spacingUtils.tatamiScale(2); // "3.236rem"

// 尺・寸変換
const shakuSpacing = spacingUtils.shakuToRem(1.5); // "1.5rem"
const sunSpacing = spacingUtils.sunToRem(5); // "0.5rem"

// レスポンシブ間隔取得
const mobileSpacing = spacingUtils.getResponsiveSpacing('lg', 'mobile');

// 自動調整
const adjustedSpacing = spacingUtils.autoAdjustSpacing('2rem', 'mobile');
```

## CSS変数 / CSS Variables

システムは以下のCSS変数を生成します：

```css
:root {
  --spacing-tatami: 1.618rem;
  --spacing-shaku: 1rem;
  --spacing-sun: 0.1rem;
  --spacing-tatami-1: 1.618rem;
  --spacing-shaku-2: 2rem;
  --spacing-card-gap: 1.618rem;
  /* ... その他の変数 */
}
```

## ベストプラクティス / Best Practices

1. **畳比例を主要レイアウトに使用** - カード間隔、セクション間隔
2. **尺単位をコンポーネント内で使用** - パディング、マージン
3. **寸単位を細かい調整に使用** - ボーダー、小さな間隔
4. **コンポーネント間隔クラスを優先** - 一貫性のため
5. **レスポンシブ動作をテスト** - 異なる画面サイズで確認

## デモページ / Demo Page

完全な実装例とビジュアルデモは以下で確認できます：
[http://localhost:3000/spacing-demo](http://localhost:3000/spacing-demo)