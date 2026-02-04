/**
 * パターンライブラリ完全性のプロパティベーステスト
 * Property-Based Tests for Pattern Library Completeness
 * 
 * **Validates: Requirements 7.1, 7.2, 7.3**
 */

import * as fc from 'fast-check';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import {
  PatternLibrary,
  PatternType,
  PatternBackground,
  getPatternInfo,
} from '@/components/patterns';
import {
  WashiTextureType,
  getTextureTypeInfo,
  TEXTURE_PRESETS,
} from '@/components/textures';

// テストヘルパー: ThemeProviderでラップ / Test helper: Wrap with ThemeProvider
const renderWithTheme = (component: React.ReactElement) => {
  return render(
    React.createElement(ThemeProvider, null, component)
  );
};

describe('Pattern Library Completeness Property Tests', () => {
  
  // プロパティ7: パターンライブラリ完全性
  // Property 7: Pattern Library Completeness
  describe('Property 7: Pattern Library Completeness', () => {
    
    // パターンタイプのアービトラリ / Pattern type arbitrary
    const patternTypeArbitrary = fc.constantFrom(
      'seigaiha', 'asanoha', 'sakura', 
      'seasonal-spring', 'seasonal-autumn', 'seasonal-winter'
    );
    
    // プリセットのアービトラリ / Preset arbitrary
    const presetArbitrary = fc.constantFrom('subtle', 'normal', 'prominent');
    
    // 季節テーマのアービトラリ / Seasonal theme arbitrary
    const seasonalThemeArbitrary = fc.constantFrom('spring', 'summer', 'autumn', 'winter');
    
    // 和紙テクスチャタイプのアービトラリ / Washi texture type arbitrary
    const washiTextureTypeArbitrary = fc.constantFrom(
      'smooth', 'rough', 'handmade', 'aged', 'fibrous', 'mulberry'
    );

    it('should provide authentic Japanese traditional geometric patterns for any pattern request', () => {
      fc.assert(fc.property(
        patternTypeArbitrary,
        presetArbitrary,
        fc.option(seasonalThemeArbitrary),
        fc.integer({ min: 50, max: 200 }),
        fc.integer({ min: 50, max: 200 }),
        (patternType: PatternType, preset: 'subtle' | 'normal' | 'prominent', seasonalTheme: string | null, width: number, height: number) => {
          // 要件7.1: 本格的な日本の伝統的幾何学パターンを含むこと
          // Requirement 7.1: Include authentic Japanese traditional geometric patterns
          
          const { unmount } = renderWithTheme(
            React.createElement(PatternLibrary, {
              pattern: patternType,
              preset: preset,
              seasonalTheme: seasonalTheme as any,
              width: width,
              height: height
            })
          );
          
          // パターンが正常にレンダリングされること
          const svgs = screen.getAllByRole('img');
          expect(svgs.length).toBeGreaterThan(0);
          
          // パターン情報が存在すること
          const patternInfo = getPatternInfo(patternType);
          expect(patternInfo).toBeDefined();
          expect(patternInfo.name).toBeDefined();
          expect(patternInfo.nameEn).toBeDefined();
          expect(patternInfo.description).toBeDefined();
          expect(patternInfo.meaning).toBeDefined();
          
          // 伝統的なパターンの特性を検証
          if (patternType === 'seigaiha') {
            expect(patternInfo.name).toBe('青海波');
            expect(patternInfo.nameEn).toBe('Seigaiha');
            expect(patternInfo.meaning).toContain('平和');
          } else if (patternType === 'asanoha') {
            expect(patternInfo.name).toBe('麻の葉');
            expect(patternInfo.nameEn).toBe('Asanoha');
            expect(patternInfo.meaning).toContain('成長');
          } else if (patternType === 'sakura') {
            expect(patternInfo.name).toBe('桜');
            expect(patternInfo.nameEn).toBe('Sakura');
            expect(patternInfo.meaning).toContain('美しさ');
          }
          
          unmount();
        }
      ), { numRuns: 30 });
    });

    it('should apply subtle washi texture for backgrounds when requested', () => {
      fc.assert(fc.property(
        patternTypeArbitrary,
        washiTextureTypeArbitrary,
        fc.constantFrom('subtle', 'normal', 'strong'),
        fc.boolean(),
        (patternType: PatternType, textureType: WashiTextureType, intensity: 'subtle' | 'normal' | 'strong', washiTexture: boolean) => {
          // 要件7.2: 背景をレンダリングするとき、繊細な和紙テクスチャを適用すること
          // Requirement 7.2: Apply subtle washi texture when rendering backgrounds
          
          const { unmount } = renderWithTheme(
            React.createElement(PatternBackground, {
              pattern: patternType,
              washiTexture: washiTexture,
              washiTextureType: textureType,
              washiIntensity: intensity,
              width: 100,
              height: 100,
              children: React.createElement('div', { 'data-testid': 'content' }, 'Test Content')
            })
          );
          
          // パターン背景が正常にレンダリングされること
          expect(screen.getByTestId('content')).toBeInTheDocument();
          const svgs = screen.getAllByRole('img');
          expect(svgs.length).toBeGreaterThan(0);
          
          // 和紙テクスチャが要求された場合、適切に適用されること
          if (washiTexture) {
            // 和紙テクスチャの情報が存在すること
            const textureInfo = getTextureTypeInfo(textureType);
            expect(textureInfo).toBeDefined();
            expect(textureInfo.name).toBeDefined();
            expect(textureInfo.nameEn).toBeDefined();
            expect(textureInfo.description).toBeDefined();
            expect(textureInfo.characteristics).toBeDefined();
            expect(Array.isArray(textureInfo.characteristics)).toBe(true);
            expect(textureInfo.characteristics.length).toBeGreaterThan(0);
            
            // テクスチャタイプ別の特性を検証
            if (textureType === 'smooth') {
              expect(textureInfo.name).toBe('滑らか和紙');
              expect(textureInfo.characteristics).toContain('滑らかな表面');
            } else if (textureType === 'rough') {
              expect(textureInfo.name).toBe('粗目和紙');
              expect(textureInfo.characteristics).toContain('粗い表面');
            } else if (textureType === 'handmade') {
              expect(textureInfo.name).toBe('手漉き和紙');
              expect(textureInfo.characteristics).toContain('不規則なパターン');
            } else if (textureType === 'aged') {
              expect(textureInfo.name).toBe('古紙');
              expect(textureInfo.characteristics).toContain('経年変化');
            } else if (textureType === 'fibrous') {
              expect(textureInfo.name).toBe('繊維和紙');
              expect(textureInfo.characteristics).toContain('明確な繊維');
            } else if (textureType === 'mulberry') {
              expect(textureInfo.name).toBe('楮紙');
              expect(textureInfo.characteristics).toContain('楮繊維');
            }
          }
          
          unmount();
        }
      ), { numRuns: 25 });
    });

    it('should provide seasonal pattern variations for spring, autumn, and winter', () => {
      fc.assert(fc.property(
        fc.constantFrom('seasonal-spring', 'seasonal-autumn', 'seasonal-winter'),
        fc.constantFrom('sparse', 'medium', 'dense'),
        fc.constantFrom('falling', 'floating', 'swaying', 'none'),
        fc.boolean(),
        fc.boolean(),
        (seasonalPattern: 'seasonal-spring' | 'seasonal-autumn' | 'seasonal-winter', density: 'sparse' | 'medium' | 'dense', animationEffect: 'falling' | 'floating' | 'swaying' | 'none', windEffect: boolean, useGradient: boolean) => {
          // 要件7.3: 季節のパターンバリエーション（春の桜、秋の紅葉、冬の雪）を提供すること
          // Requirement 7.3: Provide seasonal pattern variations (spring sakura, autumn maple, winter snow)
          
          const { unmount } = renderWithTheme(
            React.createElement(PatternLibrary, {
              pattern: seasonalPattern,
              patternConfig: {
                density,
                animationEffect,
                windEffect,
                useGradient,
              },
              width: 100,
              height: 100
            })
          );
          
          // 季節パターンが正常にレンダリングされること
          const svgs = screen.getAllByRole('img');
          expect(svgs.length).toBeGreaterThan(0);
          
          // 季節パターンの情報が存在すること
          const patternInfo = getPatternInfo(seasonalPattern);
          expect(patternInfo).toBeDefined();
          expect(patternInfo.name).toBeDefined();
          expect(patternInfo.nameEn).toBeDefined();
          expect(patternInfo.description).toBeDefined();
          expect(patternInfo.meaning).toBeDefined();
          
          // 季節別の特性を検証
          if (seasonalPattern === 'seasonal-spring') {
            expect(patternInfo.name).toBe('春桜');
            expect(patternInfo.nameEn).toBe('Spring Sakura');
            expect(patternInfo.meaning).toContain('新生');
            expect(patternInfo.description).toContain('桜の花びら');
          } else if (seasonalPattern === 'seasonal-autumn') {
            expect(patternInfo.name).toBe('秋紅葉');
            expect(patternInfo.nameEn).toBe('Autumn Maple');
            expect(patternInfo.meaning).toContain('変化');
            expect(patternInfo.description).toContain('紅葉');
          } else if (seasonalPattern === 'seasonal-winter') {
            expect(patternInfo.name).toBe('冬雪');
            expect(patternInfo.nameEn).toBe('Winter Snow');
            expect(patternInfo.meaning).toContain('純粋');
            expect(patternInfo.description).toContain('雪の結晶');
          }
          
          unmount();
        }
      ), { numRuns: 20 });
    });

    it('should maintain visual consistency across all pattern components', () => {
      fc.assert(fc.property(
        patternTypeArbitrary,
        presetArbitrary,
        fc.option(seasonalThemeArbitrary),
        fc.float({ min: Math.fround(0.1), max: Math.fround(1.0) }),
        fc.constantFrom('small', 'medium', 'large'),
        (patternType: PatternType, preset: 'subtle' | 'normal' | 'prominent', seasonalTheme: string | null, opacity: number, size: 'small' | 'medium' | 'large') => {
          // パターンライブラリがすべてのコンポーネント間で視覚的一貫性を維持すること
          // Pattern library maintains visual consistency across all components
          
          const { unmount } = renderWithTheme(
            React.createElement(PatternLibrary, {
              pattern: patternType,
              preset: preset,
              seasonalTheme: seasonalTheme as any,
              opacity: opacity,
              size: size,
              width: 100,
              height: 100
            })
          );
          
          // パターンが正常にレンダリングされること
          const svgs = screen.getAllByRole('img');
          expect(svgs.length).toBeGreaterThan(0);
          
          unmount();
        }
      ), { numRuns: 25 });
    });

    it('should provide complete texture library with all required washi texture types', () => {
      fc.assert(fc.property(
        fc.constantFrom(...Object.keys(TEXTURE_PRESETS)),
        fc.option(washiTextureTypeArbitrary),
        fc.constantFrom('subtle', 'normal', 'strong'),
        (presetName: string, customTextureType: WashiTextureType | null, intensity: 'subtle' | 'normal' | 'strong') => {
          // テクスチャライブラリがすべての必要な和紙テクスチャタイプを提供すること
          // Texture library provides all required washi texture types
          
          const preset = TEXTURE_PRESETS[presetName];
          expect(preset).toBeDefined();
          
          // プリセットの基本構造を検証
          expect(preset.name).toBeDefined();
          expect(preset.displayName).toBeDefined();
          expect(preset.description).toBeDefined();
          expect(preset.textureType).toBeDefined();
          expect(preset.intensity).toBeDefined();
          
          // テクスチャタイプが有効であること
          const validTextureTypes: WashiTextureType[] = ['smooth', 'rough', 'handmade', 'aged', 'fibrous', 'mulberry'];
          expect(validTextureTypes).toContain(preset.textureType);
          
          // 強度が有効であること
          const validIntensities = ['subtle', 'normal', 'strong'];
          expect(validIntensities).toContain(preset.intensity);
          
          // カスタムテクスチャタイプが指定された場合の検証
          if (customTextureType) {
            const customTextureInfo = getTextureTypeInfo(customTextureType);
            expect(customTextureInfo).toBeDefined();
            expect(customTextureInfo.name).toBeDefined();
            expect(customTextureInfo.nameEn).toBeDefined();
            expect(customTextureInfo.description).toBeDefined();
            expect(customTextureInfo.characteristics).toBeDefined();
            expect(Array.isArray(customTextureInfo.characteristics)).toBe(true);
          }
        }
      ), { numRuns: 20 });
    });
  });

  // 既存のパターンライブラリの完全性テスト
  describe('Existing Pattern Library Completeness', () => {
    
    const requiredPatterns: PatternType[] = ['seigaiha', 'asanoha', 'sakura', 'seasonal-spring', 'seasonal-autumn', 'seasonal-winter'];
    const requiredTextureTypes: WashiTextureType[] = ['smooth', 'rough', 'handmade', 'aged', 'fibrous', 'mulberry'];
    
    it('should have complete pattern information for all required patterns', () => {
      requiredPatterns.forEach(patternType => {
        const patternInfo = getPatternInfo(patternType);
        
        // パターン情報の基本構造を検証
        expect(patternInfo).toBeDefined();
        expect(patternInfo.name).toBeDefined();
        expect(typeof patternInfo.name).toBe('string');
        expect(patternInfo.name.length).toBeGreaterThan(0);
        
        expect(patternInfo.nameEn).toBeDefined();
        expect(typeof patternInfo.nameEn).toBe('string');
        expect(patternInfo.nameEn.length).toBeGreaterThan(0);
        
        expect(patternInfo.description).toBeDefined();
        expect(typeof patternInfo.description).toBe('string');
        expect(patternInfo.description.length).toBeGreaterThan(0);
        
        expect(patternInfo.meaning).toBeDefined();
        expect(typeof patternInfo.meaning).toBe('string');
        expect(patternInfo.meaning.length).toBeGreaterThan(0);
        
        expect(patternInfo.origin).toBeDefined();
        expect(typeof patternInfo.origin).toBe('string');
        expect(patternInfo.origin.length).toBeGreaterThan(0);
      });
    });
    
    it('should have complete texture information for all required texture types', () => {
      requiredTextureTypes.forEach(textureType => {
        const textureInfo = getTextureTypeInfo(textureType);
        
        // テクスチャ情報の基本構造を検証
        expect(textureInfo).toBeDefined();
        expect(textureInfo.name).toBeDefined();
        expect(typeof textureInfo.name).toBe('string');
        expect(textureInfo.name.length).toBeGreaterThan(0);
        
        expect(textureInfo.nameEn).toBeDefined();
        expect(typeof textureInfo.nameEn).toBe('string');
        expect(textureInfo.nameEn.length).toBeGreaterThan(0);
        
        expect(textureInfo.description).toBeDefined();
        expect(typeof textureInfo.description).toBe('string');
        expect(textureInfo.description.length).toBeGreaterThan(0);
        
        expect(textureInfo.characteristics).toBeDefined();
        expect(Array.isArray(textureInfo.characteristics)).toBe(true);
        expect(textureInfo.characteristics.length).toBeGreaterThan(0);
        
        // 各特性が文字列であることを確認
        textureInfo.characteristics.forEach(characteristic => {
          expect(typeof characteristic).toBe('string');
          expect(characteristic.length).toBeGreaterThan(0);
        });
      });
    });
    
    it('should have all required texture presets with valid configurations', () => {
      const presetKeys = Object.keys(TEXTURE_PRESETS);
      expect(presetKeys.length).toBeGreaterThan(0);
      
      presetKeys.forEach(presetKey => {
        const preset = TEXTURE_PRESETS[presetKey];
        
        // プリセットの基本構造を検証
        expect(preset.name).toBeDefined();
        expect(typeof preset.name).toBe('string');
        expect(preset.displayName).toBeDefined();
        expect(typeof preset.displayName).toBe('string');
        expect(preset.description).toBeDefined();
        expect(typeof preset.description).toBe('string');
        expect(preset.textureType).toBeDefined();
        expect(requiredTextureTypes).toContain(preset.textureType);
        expect(preset.intensity).toBeDefined();
        expect(['subtle', 'normal', 'strong']).toContain(preset.intensity);
        
        // オプショナルプロパティの検証
        if (preset.opacity !== undefined) {
          expect(typeof preset.opacity).toBe('number');
          expect(preset.opacity).toBeGreaterThan(0);
          expect(preset.opacity).toBeLessThanOrEqual(1);
        }
        
        if (preset.blendMode !== undefined) {
          expect(['normal', 'multiply', 'overlay', 'soft-light', 'hard-light']).toContain(preset.blendMode);
        }
      });
    });
  });

  // パターンライブラリの堅牢性テスト
  describe('Pattern Library Robustness', () => {
    
    it('should handle invalid pattern types gracefully', () => {
      const { unmount } = renderWithTheme(
        React.createElement(PatternLibrary, {
          pattern: 'invalid-pattern' as PatternType,
          width: 100,
          height: 100
        })
      );
      
      // 無効なパターンタイプでもデフォルトパターンが表示されること
      const svgs = screen.getAllByRole('img');
      expect(svgs.length).toBeGreaterThan(0);
      
      unmount();
    });
    
    it('should handle extreme size values appropriately', () => {
      const { unmount } = renderWithTheme(
        React.createElement(PatternLibrary, {
          pattern: 'seigaiha',
          width: 1,
          height: 1
        })
      );
      
      // 極端に小さいサイズでもレンダリングされること
      const svgs = screen.getAllByRole('img');
      expect(svgs.length).toBeGreaterThan(0);
      
      unmount();
    });
  });
});