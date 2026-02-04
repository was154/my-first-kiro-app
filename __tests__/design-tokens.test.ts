/**
 * 日本伝統色パレットのテスト
 * Japanese Traditional Color Palette Tests
 */

import { designTokens, lightThemeTokens, darkThemeTokens } from '@/lib/design-tokens';
import { TraditionalColors, ColorScale } from '@/types/theme';

describe('Japanese Traditional Color Palette', () => {
  // 色スケールの完全性をテスト / Test color scale completeness
  describe('Color Scale Completeness', () => {
    const requiredShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
    const traditionalColorNames = ['sumi', 'washi', 'sakura', 'bamboo', 'sunset', 'indigo', 'gold'];

    traditionalColorNames.forEach(colorName => {
      describe(`${colorName} color`, () => {
        const colorScale = designTokens.colors.traditional[colorName as keyof TraditionalColors] as ColorScale;

        requiredShades.forEach(shade => {
          it(`should have ${shade} shade defined`, () => {
            expect(colorScale[shade]).toBeDefined();
            expect(typeof colorScale[shade]).toBe('string');
            expect(colorScale[shade]).toMatch(/^#[0-9a-fA-F]{6}$/);
          });
        });

        it('should have proper color progression from light to dark', () => {
          // 色の明度が50から900に向かって暗くなることを確認
          const shades = requiredShades.map(shade => colorScale[shade]);
          
          // 簡単な明度チェック（RGBの合計値で近似）
          const getBrightness = (hex: string) => {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return r + g + b;
          };

          for (let i = 0; i < shades.length - 1; i++) {
            const currentBrightness = getBrightness(shades[i]);
            const nextBrightness = getBrightness(shades[i + 1]);
            expect(currentBrightness).toBeGreaterThanOrEqual(nextBrightness);
          }
        });
      });
    });
  });

  // ライトテーマとダークテーマの対応をテスト / Test light and dark theme correspondence
  describe('Light and Dark Theme Variants', () => {
    const traditionalColorNames = ['sumi', 'washi', 'sakura', 'bamboo', 'sunset', 'indigo', 'gold'];

    traditionalColorNames.forEach(colorName => {
      describe(`${colorName} theme variants`, () => {
        it('should exist in both light and dark themes', () => {
          const lightColor = lightThemeTokens.colors.traditional[colorName as keyof TraditionalColors];
          const darkColor = darkThemeTokens.colors.traditional[colorName as keyof TraditionalColors];
          
          expect(lightColor).toBeDefined();
          expect(darkColor).toBeDefined();
        });

        it('should have all required shades in both themes', () => {
          const lightColor = lightThemeTokens.colors.traditional[colorName as keyof TraditionalColors] as ColorScale;
          const darkColor = darkThemeTokens.colors.traditional[colorName as keyof TraditionalColors] as ColorScale;
          
          const requiredShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
          
          requiredShades.forEach(shade => {
            expect(lightColor[shade]).toBeDefined();
            expect(darkColor[shade]).toBeDefined();
            expect(typeof lightColor[shade]).toBe('string');
            expect(typeof darkColor[shade]).toBe('string');
          });
        });
      });
    });
  });

  // セマンティックカラーのテスト / Test semantic colors
  describe('Semantic Colors', () => {
    const semanticColors = ['success', 'warning', 'error', 'info'];

    semanticColors.forEach(semanticColor => {
      it(`should have ${semanticColor} color defined`, () => {
        const color = designTokens.colors.semantic[semanticColor as keyof typeof designTokens.colors.semantic];
        expect(color).toBeDefined();
        expect(typeof color).toBe('string');
        expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
      });
    });

    it('should use traditional colors for semantic meanings', () => {
      const { semantic, traditional } = designTokens.colors;
      
      // 成功色は竹緑を使用 / Success uses bamboo green
      expect(semantic.success).toBe(traditional.bamboo[500]);
      
      // 警告色は夕焼けオレンジを使用 / Warning uses sunset orange
      expect(semantic.warning).toBe(traditional.sunset[500]);
      
      // エラー色は桜ピンクを使用 / Error uses sakura pink
      expect(semantic.error).toBe(traditional.sakura[600]);
      
      // 情報色は藍を使用 / Info uses indigo
      expect(semantic.info).toBe(traditional.indigo[500]);
    });
  });

  // カラーパレット構造のテスト / Test color palette structure
  describe('Color Palette Structure', () => {
    it('should have all required palette categories', () => {
      const { colors } = designTokens;
      
      expect(colors.primary).toBeDefined();
      expect(colors.secondary).toBeDefined();
      expect(colors.accent).toBeDefined();
      expect(colors.neutral).toBeDefined();
      expect(colors.semantic).toBeDefined();
      expect(colors.traditional).toBeDefined();
    });

    it('should use traditional colors for primary palette', () => {
      const { colors } = designTokens;
      
      // プライマリは藍を使用 / Primary uses indigo
      expect(colors.primary).toBe(colors.traditional.indigo);
      
      // セカンダリは桜を使用 / Secondary uses sakura
      expect(colors.secondary).toBe(colors.traditional.sakura);
      
      // アクセントは金を使用 / Accent uses gold
      expect(colors.accent).toBe(colors.traditional.gold);
      
      // ニュートラルは墨を使用 / Neutral uses sumi
      expect(colors.neutral).toBe(colors.traditional.sumi);
    });
  });

  // アクセシビリティ要件のテスト / Test accessibility requirements
  describe('Accessibility Requirements', () => {
    // コントラスト比の簡易チェック / Simple contrast ratio check
    const getContrastRatio = (color1: string, color2: string): number => {
      // 簡易的なコントラスト比計算（実際のWCAGアルゴリズムの簡略版）
      const getLuminance = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        return 0.299 * r + 0.587 * g + 0.114 * b;
      };

      const lum1 = getLuminance(color1);
      const lum2 = getLuminance(color2);
      const brightest = Math.max(lum1, lum2);
      const darkest = Math.min(lum1, lum2);
      
      return (brightest + 0.05) / (darkest + 0.05);
    };

    it('should provide sufficient contrast for text readability', () => {
      const { traditional } = designTokens.colors;
      
      // 暗いテキスト（墨900）と明るい背景（和紙50）のコントラスト
      const darkTextLightBg = getContrastRatio(traditional.sumi[900], traditional.washi[50]);
      expect(darkTextLightBg).toBeGreaterThan(4.5); // WCAG AA基準
      
      // 明るいテキスト（和紙50）と暗い背景（墨900）のコントラスト
      const lightTextDarkBg = getContrastRatio(traditional.washi[50], traditional.sumi[900]);
      expect(lightTextDarkBg).toBeGreaterThan(4.5); // WCAG AA基準
    });

    it('should maintain contrast in dark theme', () => {
      const { traditional } = darkThemeTokens.colors;
      
      // ダークテーマでのコントラスト確認
      const darkThemeContrast = getContrastRatio(traditional.washi[900], traditional.sumi[50]);
      expect(darkThemeContrast).toBeGreaterThan(4.5);
    });
  });

  // 色の一意性テスト / Test color uniqueness
  describe('Color Uniqueness', () => {
    it('should have unique colors across different traditional colors', () => {
      const { traditional } = designTokens.colors;
      const allColors = new Set<string>();
      
      Object.values(traditional).forEach(colorScale => {
        Object.values(colorScale as ColorScale).forEach(color => {
          expect(allColors.has(color as string)).toBe(false);
          allColors.add(color as string);
        });
      });
    });
  });
});