/**
 * 日本伝統デザインシステム間隔システムのテスト
 * Japanese Traditional Design System Spacing System Tests
 */

import { designTokens } from '@/lib/design-tokens';
import spacingUtils from '@/lib/spacing-utils';

describe('Japanese Traditional Spacing System', () => {
  describe('Basic Units', () => {
    test('should have correct tatami (golden ratio) value', () => {
      expect(designTokens.spacing.tatami).toBe('1.618rem');
      expect(parseFloat(designTokens.spacing.tatami)).toBeCloseTo(spacingUtils.GOLDEN_RATIO, 3);
    });

    test('should have correct shaku unit value', () => {
      expect(designTokens.spacing.shaku).toBe('1rem');
    });

    test('should have correct sun unit value', () => {
      expect(designTokens.spacing.sun).toBe('0.1rem');
    });
  });

  describe('Tatami Proportion Scale', () => {
    test('should have all required tatami scale values', () => {
      const expectedKeys = ['0.5', '1', '1.5', '2', '2.5', '3', '4', '5'];
      const actualKeys = Object.keys(designTokens.spacing.tatamiScale);
      
      expect(actualKeys.sort()).toEqual(expectedKeys.sort());
    });

    test('should calculate tatami proportions correctly', () => {
      expect(designTokens.spacing.tatamiScale['0.5']).toBe('0.809rem');
      expect(designTokens.spacing.tatamiScale['1']).toBe('1.618rem');
      expect(designTokens.spacing.tatamiScale['2']).toBe('3.236rem');
      expect(designTokens.spacing.tatamiScale['5']).toBe('8.09rem');
    });

    test('should maintain golden ratio proportions', () => {
      const goldenRatio = spacingUtils.GOLDEN_RATIO;
      
      expect(parseFloat(designTokens.spacing.tatamiScale['0.5'])).toBeCloseTo(goldenRatio * 0.5, 3);
      expect(parseFloat(designTokens.spacing.tatamiScale['1'])).toBeCloseTo(goldenRatio * 1, 3);
      expect(parseFloat(designTokens.spacing.tatamiScale['2'])).toBeCloseTo(goldenRatio * 2, 3);
    });
  });

  describe('Shaku-Sun Scale', () => {
    test('should have all required shaku-sun scale values', () => {
      const expectedKeys = ['0.1', '0.2', '0.3', '0.5', '0.8', '1', '1.2', '1.5', '2', '2.5', '3', '4', '5', '6', '8', '10'];
      const actualKeys = Object.keys(designTokens.spacing.shakuScale);
      
      expect(actualKeys.sort()).toEqual(expectedKeys.sort());
    });

    test('should calculate shaku-sun values correctly', () => {
      expect(designTokens.spacing.shakuScale['0.1']).toBe('0.1rem');
      expect(designTokens.spacing.shakuScale['1']).toBe('1rem');
      expect(designTokens.spacing.shakuScale['2.5']).toBe('2.5rem');
      expect(designTokens.spacing.shakuScale['10']).toBe('10rem');
    });
  });

  describe('Responsive Spacing System', () => {
    test('should have all breakpoint categories', () => {
      const expectedBreakpoints = ['mobile', 'tablet', 'desktop'];
      const actualBreakpoints = Object.keys(designTokens.spacing.responsive);
      
      expect(actualBreakpoints).toEqual(expectedBreakpoints);
    });

    test('should have all size categories for each breakpoint', () => {
      const expectedSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'];
      
      Object.values(designTokens.spacing.responsive).forEach(breakpointSizes => {
        const actualSizes = Object.keys(breakpointSizes);
        expect(actualSizes).toEqual(expectedSizes);
      });
    });

    test('should have progressive sizing across breakpoints', () => {
      // Desktop should generally have larger values than tablet, which should be larger than mobile
      const mobileXL = parseFloat(designTokens.spacing.responsive.mobile.xl);
      const tabletXL = parseFloat(designTokens.spacing.responsive.tablet.xl);
      const desktopXL = parseFloat(designTokens.spacing.responsive.desktop.xl);
      
      expect(mobileXL).toBeLessThan(tabletXL);
      expect(tabletXL).toBeLessThan(desktopXL);
    });
  });

  describe('Component Spacing', () => {
    test('should have all required component spacing values', () => {
      const expectedComponents = [
        'cardGap', 'cardPadding', 'cardMargin',
        'headerHeight', 'headerPadding',
        'navItemGap', 'navPadding',
        'sectionGap', 'sectionPadding',
        'gridGap', 'gridPadding'
      ];
      
      const actualComponents = Object.keys(designTokens.spacing.component);
      expect(actualComponents).toEqual(expectedComponents);
    });

    test('should use traditional proportions for component spacing', () => {
      // Card gap should use tatami proportion
      expect(designTokens.spacing.component.cardGap).toBe('1.618rem');
      
      // Card padding should use shaku unit
      expect(designTokens.spacing.component.cardPadding).toBe('1rem');
      
      // Section gap should use tatami proportion * 2
      expect(designTokens.spacing.component.sectionGap).toBe('3.236rem');
    });
  });

  describe('Spacing Utilities', () => {
    test('should convert shaku to rem correctly', () => {
      expect(spacingUtils.shakuToRem(1)).toBe('1rem');
      expect(spacingUtils.shakuToRem(2.5)).toBe('2.5rem');
    });

    test('should convert sun to rem correctly', () => {
      expect(spacingUtils.sunToRem(1)).toBe('0.1rem');
      expect(spacingUtils.sunToRem(5)).toBe('0.5rem');
    });

    test('should calculate tatami scale correctly', () => {
      expect(spacingUtils.tatamiScale(1)).toBe('1.618rem');
      expect(spacingUtils.tatamiScale(2)).toBe('3.236rem');
    });

    test('should get responsive spacing correctly', () => {
      expect(spacingUtils.getResponsiveSpacing('md', 'mobile')).toBe('0.75rem');
      expect(spacingUtils.getResponsiveSpacing('md', 'tablet')).toBe('1rem');
      expect(spacingUtils.getResponsiveSpacing('md', 'desktop')).toBe('1.5rem');
    });

    test('should validate spacing values correctly', () => {
      expect(spacingUtils.validateSpacing('1rem')).toBe(true);
      expect(spacingUtils.validateSpacing('1.618rem')).toBe(true);
      expect(spacingUtils.validateSpacing('invalid')).toBe(false);
      expect(spacingUtils.validateSpacing('1px')).toBe(false);
    });

    test('should calculate traditional proportions correctly', () => {
      expect(spacingUtils.calculateTraditionalProportion(1, 'tatami')).toBe('1.618rem');
      expect(spacingUtils.calculateTraditionalProportion(2, 'shaku')).toBe('2rem');
      expect(spacingUtils.calculateTraditionalProportion(5, 'sun')).toBe('0.5rem');
    });

    test('should auto-adjust spacing for different screen sizes', () => {
      const originalValue = '2rem';
      
      expect(spacingUtils.autoAdjustSpacing(originalValue, 'mobile')).toBe('1.5rem'); // 75%
      expect(spacingUtils.autoAdjustSpacing(originalValue, 'tablet')).toBe('1.75rem'); // 87.5%
      expect(spacingUtils.autoAdjustSpacing(originalValue, 'desktop')).toBe('2rem'); // 100%
    });
  });

  describe('CSS Variable Generation', () => {
    test('should generate correct CSS variables', () => {
      const cssVars = spacingUtils.generateSpacingCSSVariables();
      
      expect(cssVars['--spacing-tatami']).toBe('1.618rem');
      expect(cssVars['--spacing-shaku']).toBe('1rem');
      expect(cssVars['--spacing-sun']).toBe('0.1rem');
      expect(cssVars['--spacing-tatami-1']).toBe('1.618rem');
      expect(cssVars['--spacing-shaku-2']).toBe('2rem');
      expect(cssVars['--spacing-card-gap']).toBe('1.618rem');
    });
  });

  describe('Spacing Classes Generation', () => {
    test('should generate correct spacing classes', () => {
      const classes = spacingUtils.generateSpacingClasses();
      
      expect(classes['tatami-1']).toBe('1.618rem');
      expect(classes['tatami-2']).toBe('3.236rem');
      expect(classes['shaku-1']).toBe('1rem');
      expect(classes['shaku-2']).toBe('2rem');
    });
  });

  describe('Component Spacing Helpers', () => {
    test('should provide correct component spacing helpers', () => {
      expect(spacingUtils.componentSpacing.card.gap).toBe('1.618rem');
      expect(spacingUtils.componentSpacing.card.padding).toBe('1rem');
      expect(spacingUtils.componentSpacing.header.height).toBe('4rem');
      expect(spacingUtils.componentSpacing.section.gap).toBe('3.236rem');
    });
  });

  describe('Integration with Design Tokens', () => {
    test('should maintain consistency between design tokens and utilities', () => {
      // Verify that utility functions produce the same values as design tokens
      expect(spacingUtils.tatamiScale(1)).toBe(designTokens.spacing.tatami);
      expect(spacingUtils.shakuToRem(1)).toBe(designTokens.spacing.shaku);
      expect(spacingUtils.sunToRem(1)).toBe(designTokens.spacing.sun);
    });

    test('should have all spacing values as valid rem units', () => {
      // Check all tatami scale values
      Object.values(designTokens.spacing.tatamiScale).forEach(value => {
        expect(spacingUtils.validateSpacing(value)).toBe(true);
      });

      // Check all shaku scale values
      Object.values(designTokens.spacing.shakuScale).forEach(value => {
        expect(spacingUtils.validateSpacing(value)).toBe(true);
      });

      // Check all component spacing values
      Object.values(designTokens.spacing.component).forEach(value => {
        expect(spacingUtils.validateSpacing(value)).toBe(true);
      });
    });
  });
});