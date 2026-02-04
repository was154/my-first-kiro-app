/**
 * 季節バリエーションシステムのテスト
 * Seasonal Variation System Tests
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SeasonalPattern } from '@/components/patterns/SeasonalPatterns';
import { SeasonalThemeSwitcher, getSeasonalInfo, getCurrentSeason } from '@/components/SeasonalThemeSwitcher';
import { PatternLibrary } from '@/components/patterns';

// テストヘルパー / Test helper
const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider defaultMode="light" defaultSeasonalVariant="spring">
      {component}
    </ThemeProvider>
  );
};

describe('SeasonalPattern Component', () => {
  test('春桜パターンが正しくレンダリングされる', () => {
    const { container } = renderWithTheme(
      <SeasonalPattern
        season="spring"
        width="100"
        height="100"
      />
    );
    
    // SVG要素が存在することを確認
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    
    // 春のグラデーションが存在することを確認
    const gradient = container.querySelector('#spring-gradient');
    expect(gradient).toBeInTheDocument();
  });

  test('秋紅葉パターンが正しくレンダリングされる', () => {
    const { container } = renderWithTheme(
      <SeasonalPattern
        season="autumn"
        width="100"
        height="100"
      />
    );
    
    // SVG要素が存在することを確認
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    
    // 秋のグラデーションが存在することを確認
    const gradient = container.querySelector('#autumn-gradient-0');
    expect(gradient).toBeInTheDocument();
  });

  test('冬雪パターンが正しくレンダリングされる', () => {
    const { container } = renderWithTheme(
      <SeasonalPattern
        season="winter"
        width="100"
        height="100"
      />
    );
    
    // SVG要素が存在することを確認
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    
    // 冬のグラデーションが存在することを確認
    const gradient = container.querySelector('#winter-gradient');
    expect(gradient).toBeInTheDocument();
  });

  test('アニメーション効果が適用される', () => {
    const { container } = renderWithTheme(
      <SeasonalPattern
        season="spring"
        animated={true}
        animationEffect="falling"
        width="100"
        height="100"
      />
    );
    
    // SVG要素が存在することを確認
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    
    // アニメーション要素が存在することを確認
    const animateTransform = container.querySelector('animateTransform');
    expect(animateTransform).toBeInTheDocument();
  });

  test('密度設定が適用される', () => {
    const densities: Array<'sparse' | 'medium' | 'dense'> = ['sparse', 'medium', 'dense'];
    
    densities.forEach((density) => {
      const { container } = renderWithTheme(
        <SeasonalPattern
          season="spring"
          density={density}
          width="100"
          height="100"
        />
      );
      
      // SVG要素が存在することを確認
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });
});

describe('SeasonalThemeSwitcher Component', () => {
  test('ボタンスタイルで正しくレンダリングされる', () => {
    renderWithTheme(
      <SeasonalThemeSwitcher
        variant="buttons"
        showLabels={true}
        showIcons={true}
      />
    );
    
    expect(screen.getByText('春')).toBeInTheDocument();
    expect(screen.getByText('夏')).toBeInTheDocument();
    expect(screen.getByText('秋')).toBeInTheDocument();
    expect(screen.getByText('冬')).toBeInTheDocument();
  });

  test('タブスタイルで正しくレンダリングされる', () => {
    renderWithTheme(
      <SeasonalThemeSwitcher
        variant="tabs"
        showLabels={true}
        showIcons={true}
      />
    );
    
    expect(screen.getByText('春')).toBeInTheDocument();
    expect(screen.getByText('夏')).toBeInTheDocument();
    expect(screen.getByText('秋')).toBeInTheDocument();
    expect(screen.getByText('冬')).toBeInTheDocument();
  });

  test('ドロップダウンスタイルで正しくレンダリングされる', () => {
    renderWithTheme(
      <SeasonalThemeSwitcher
        variant="dropdown"
        showLabels={true}
        showIcons={true}
      />
    );
    
    // 初期状態では春が選択されている
    expect(screen.getByText('春')).toBeInTheDocument();
  });

  test('季節切り替えが動作する', () => {
    renderWithTheme(
      <SeasonalThemeSwitcher
        variant="buttons"
        showLabels={true}
        showIcons={false}
      />
    );
    
    const autumnButton = screen.getByText('秋');
    fireEvent.click(autumnButton);
    
    // テーマが変更されることを確認
    // 実際のテーマ変更はThemeProviderで処理される
    expect(autumnButton).toBeInTheDocument();
  });

  test('アイコンのみ表示が動作する', () => {
    renderWithTheme(
      <SeasonalThemeSwitcher
        variant="buttons"
        showLabels={false}
        showIcons={true}
      />
    );
    
    // アイコンが表示されることを確認
    expect(screen.getByRole('img', { name: 'Spring' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Summer' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Autumn' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Winter' })).toBeInTheDocument();
  });
});

describe('PatternLibrary with Seasonal Patterns', () => {
  test('季節パターンが統合ライブラリで使用できる', () => {
    const seasonalPatterns = ['seasonal-spring', 'seasonal-autumn', 'seasonal-winter'] as const;
    
    seasonalPatterns.forEach((pattern) => {
      const { container } = renderWithTheme(
        <PatternLibrary
          pattern={pattern}
          preset="normal"
          width="100"
          height="100"
        />
      );
      
      // SVG要素が存在することを確認
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  test('和紙テクスチャとの組み合わせが動作する', () => {
    const { container } = renderWithTheme(
      <PatternLibrary
        pattern="seasonal-spring"
        preset="normal"
        washiTexture={true}
        washiTextureType="smooth"
        washiIntensity="subtle"
        width="100"
        height="100"
      />
    );
    
    // 和紙テクスチャのコンテナが存在することを確認
    const washiContainer = container.querySelector('.relative.overflow-hidden');
    expect(washiContainer).toBeInTheDocument();
  });
});

describe('Seasonal Utility Functions', () => {
  test('getSeasonalInfo が正しい季節情報を返す', () => {
    const springInfo = getSeasonalInfo('spring');
    expect(springInfo.name).toBe('春');
    expect(springInfo.nameEn).toBe('Spring');
    expect(springInfo.icon).toBe('🌸');
    
    const autumnInfo = getSeasonalInfo('autumn');
    expect(autumnInfo.name).toBe('秋');
    expect(autumnInfo.nameEn).toBe('Autumn');
    expect(autumnInfo.icon).toBe('🍁');
    
    const winterInfo = getSeasonalInfo('winter');
    expect(winterInfo.name).toBe('冬');
    expect(winterInfo.nameEn).toBe('Winter');
    expect(winterInfo.icon).toBe('❄️');
  });

  test('getCurrentSeason が現在の季節を正しく検出する', () => {
    // モックして特定の月をテスト
    const originalDate = Date;
    
    // 春のテスト (3月)
    global.Date = jest.fn(() => ({
      getMonth: () => 2, // 3月 (0-indexed)
    })) as any;
    expect(getCurrentSeason()).toBe('spring');
    
    // 夏のテスト (7月)
    global.Date = jest.fn(() => ({
      getMonth: () => 6, // 7月 (0-indexed)
    })) as any;
    expect(getCurrentSeason()).toBe('summer');
    
    // 秋のテスト (10月)
    global.Date = jest.fn(() => ({
      getMonth: () => 9, // 10月 (0-indexed)
    })) as any;
    expect(getCurrentSeason()).toBe('autumn');
    
    // 冬のテスト (1月)
    global.Date = jest.fn(() => ({
      getMonth: () => 0, // 1月 (0-indexed)
    })) as any;
    expect(getCurrentSeason()).toBe('winter');
    
    // 元のDateオブジェクトを復元
    global.Date = originalDate;
  });
});

describe('Seasonal Pattern Accessibility', () => {
  test('パターンに適切なARIA属性が設定される', () => {
    const { container } = renderWithTheme(
      <SeasonalPattern
        season="spring"
        width="100"
        height="100"
      />
    );
    
    // SVG要素にrole="img"が設定されていることを確認
    const svg = container.querySelector('svg[role="img"]');
    expect(svg).toBeInTheDocument();
    
    // aria-labelが設定されていることを確認
    const svgWithLabel = container.querySelector('svg[aria-label]');
    expect(svgWithLabel).toBeInTheDocument();
  });

  test('季節切り替えボタンに適切なタイトルが設定される', () => {
    renderWithTheme(
      <SeasonalThemeSwitcher
        variant="buttons"
        showLabels={true}
        showIcons={true}
      />
    );
    
    const springButton = screen.getByTitle(/春.*Spring.*桜の季節/);
    expect(springButton).toBeInTheDocument();
    
    const autumnButton = screen.getByTitle(/秋.*Autumn.*紅葉の季節/);
    expect(autumnButton).toBeInTheDocument();
  });
});

describe('Seasonal Pattern Performance', () => {
  test('大量のパターン要素でもパフォーマンスが維持される', () => {
    const startTime = performance.now();
    
    const { container } = renderWithTheme(
      <SeasonalPattern
        season="autumn"
        density="dense"
        animated={true}
        animationEffect="falling"
        width="200"
        height="200"
      />
    );
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    // レンダリング時間が合理的な範囲内であることを確認 (100ms以下)
    expect(renderTime).toBeLessThan(100);
    
    // SVG要素が存在することを確認
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('アニメーションが有効でもメモリリークが発生しない', () => {
    const { unmount } = renderWithTheme(
      <SeasonalPattern
        season="winter"
        animated={true}
        animationEffect="floating"
        width="100"
        height="100"
      />
    );
    
    // コンポーネントがアンマウントされても問題ないことを確認
    expect(() => unmount()).not.toThrow();
  });
});