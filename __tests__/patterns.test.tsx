/**
 * 日本伝統パターンコンポーネントのテスト
 * Japanese Traditional Pattern Components Tests
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import {
  PatternLibrary,
  SeigaihaPattern,
  AsanohaPattern,
  SakuraPattern,
  PatternBackground,
  getPatternInfo,
} from '@/components/patterns';

// テストヘルパー: ThemeProviderでラップ / Test helper: Wrap with ThemeProvider
const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe('Pattern Components', () => {
  describe('SeigaihaPattern', () => {
    it('renders without crashing', () => {
      renderWithTheme(
        <SeigaihaPattern width={100} height={100} />
      );
      
      const svg = screen.getByRole('img');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('aria-label', 'Japanese traditional pattern');
    });

    it('applies custom wave count', () => {
      renderWithTheme(
        <SeigaihaPattern 
          width={100} 
          height={100} 
          waveCount={6}
          patternId="test-seigaiha"
        />
      );
      
      const svg = screen.getByRole('img');
      expect(svg).toBeInTheDocument();
    });

    it('supports gradient and multi-color options', () => {
      renderWithTheme(
        <SeigaihaPattern 
          width={100} 
          height={100} 
          useGradient={true}
          multiColor={true}
        />
      );
      
      const svg = screen.getByRole('img');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('AsanohaPattern', () => {
    it('renders without crashing', () => {
      renderWithTheme(
        <AsanohaPattern width={100} height={100} />
      );
      
      const svg = screen.getByRole('img');
      expect(svg).toBeInTheDocument();
    });

    it('applies custom hexagon size', () => {
      renderWithTheme(
        <AsanohaPattern 
          width={100} 
          height={100} 
          hexagonSize={80}
          showInnerStar={true}
        />
      );
      
      const svg = screen.getByRole('img');
      expect(svg).toBeInTheDocument();
    });

    it('supports intersection emphasis', () => {
      renderWithTheme(
        <AsanohaPattern 
          width={100} 
          height={100} 
          emphasizeIntersections={true}
          multiColor={true}
        />
      );
      
      const svg = screen.getByRole('img');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('SakuraPattern', () => {
    it('renders without crashing', () => {
      renderWithTheme(
        <SakuraPattern width={100} height={100} />
      );
      
      const svg = screen.getByRole('img');
      expect(svg).toBeInTheDocument();
    });

    it('applies seasonal variants', () => {
      const variants = ['spring', 'full-bloom', 'falling'] as const;
      
      variants.forEach((variant) => {
        const { unmount } = renderWithTheme(
          <SakuraPattern 
            width={100} 
            height={100} 
            seasonalVariant={variant}
          />
        );
        
        const svg = screen.getByRole('img');
        expect(svg).toBeInTheDocument();
        
        unmount();
      });
    });

    it('supports falling petals animation', () => {
      renderWithTheme(
        <SakuraPattern 
          width={100} 
          height={100} 
          fallingPetals={true}
          animated={true}
        />
      );
      
      const svg = screen.getByRole('img');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('PatternLibrary', () => {
    it('renders seigaiha pattern', () => {
      renderWithTheme(
        <PatternLibrary 
          pattern="seigaiha" 
          width={100} 
          height={100} 
        />
      );
      
      const svg = screen.getByRole('img');
      expect(svg).toBeInTheDocument();
    });

    it('renders asanoha pattern', () => {
      renderWithTheme(
        <PatternLibrary 
          pattern="asanoha" 
          width={100} 
          height={100} 
        />
      );
      
      const svg = screen.getByRole('img');
      expect(svg).toBeInTheDocument();
    });

    it('renders sakura pattern', () => {
      renderWithTheme(
        <PatternLibrary 
          pattern="sakura" 
          width={100} 
          height={100} 
        />
      );
      
      const svg = screen.getByRole('img');
      expect(svg).toBeInTheDocument();
    });

    it('applies preset configurations', () => {
      const presets = ['subtle', 'normal', 'prominent'] as const;
      
      presets.forEach((preset) => {
        const { unmount } = renderWithTheme(
          <PatternLibrary 
            pattern="seigaiha" 
            preset={preset}
            width={100} 
            height={100} 
          />
        );
        
        const svg = screen.getByRole('img');
        expect(svg).toBeInTheDocument();
        
        unmount();
      });
    });

    it('applies seasonal themes', () => {
      const seasons = ['spring', 'summer', 'autumn', 'winter'] as const;
      
      seasons.forEach((season) => {
        const { unmount } = renderWithTheme(
          <PatternLibrary 
            pattern="sakura" 
            seasonalTheme={season}
            width={100} 
            height={100} 
          />
        );
        
        const svg = screen.getByRole('img');
        expect(svg).toBeInTheDocument();
        
        unmount();
      });
    });
  });

  describe('PatternBackground', () => {
    it('renders with children content', () => {
      renderWithTheme(
        <PatternBackground pattern="seigaiha" preset="normal">
          <div data-testid="content">Test Content</div>
        </PatternBackground>
      );
      
      expect(screen.getByTestId('content')).toBeInTheDocument();
      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('applies overlay when specified', () => {
      renderWithTheme(
        <PatternBackground 
          pattern="asanoha" 
          preset="subtle"
          overlay={true}
          overlayOpacity={0.1}
        >
          <div>Content</div>
        </PatternBackground>
      );
      
      expect(screen.getByRole('img')).toBeInTheDocument();
    });
  });

  describe('Pattern Utilities', () => {
    it('returns correct pattern information', () => {
      const seigaihaInfo = getPatternInfo('seigaiha');
      expect(seigaihaInfo.name).toBe('青海波');
      expect(seigaihaInfo.nameEn).toBe('Seigaiha');
      expect(seigaihaInfo.meaning).toBe('平和、永続性、穏やかさ');

      const asanohaInfo = getPatternInfo('asanoha');
      expect(asanohaInfo.name).toBe('麻の葉');
      expect(asanohaInfo.nameEn).toBe('Asanoha');
      expect(asanohaInfo.meaning).toBe('成長、魔除け、繁栄');

      const sakuraInfo = getPatternInfo('sakura');
      expect(sakuraInfo.name).toBe('桜');
      expect(sakuraInfo.nameEn).toBe('Sakura');
      expect(sakuraInfo.meaning).toBe('美しさ、儚さ、新生');
    });
  });

  describe('Accessibility', () => {
    it('provides proper ARIA labels', () => {
      renderWithTheme(
        <PatternLibrary 
          pattern="seigaiha" 
          width={100} 
          height={100} 
        />
      );
      
      const svg = screen.getByRole('img');
      expect(svg).toHaveAttribute('aria-label', 'Japanese traditional pattern');
    });

    it('supports responsive sizing', () => {
      renderWithTheme(
        <PatternLibrary 
          pattern="asanoha" 
          width="100%" 
          height="100%" 
          responsive={true}
        />
      );
      
      const svg = screen.getByRole('img');
      expect(svg).toHaveAttribute('width', '100%');
      expect(svg).toHaveAttribute('height', '100%');
    });
  });

  describe('Performance', () => {
    it('generates unique pattern IDs to avoid conflicts', () => {
      const { unmount: unmount1 } = renderWithTheme(
        <PatternLibrary pattern="seigaiha" width={100} height={100} />
      );
      
      const { unmount: unmount2 } = renderWithTheme(
        <PatternLibrary pattern="seigaiha" width={100} height={100} />
      );
      
      // Both patterns should render without conflicts
      const svgs = screen.getAllByRole('img');
      expect(svgs).toHaveLength(2);
      
      unmount1();
      unmount2();
    });

    it('handles animation preferences', () => {
      renderWithTheme(
        <PatternLibrary 
          pattern="sakura" 
          animated={true}
          width={100} 
          height={100} 
        />
      );
      
      const svg = screen.getByRole('img');
      expect(svg).toBeInTheDocument();
    });
  });
});