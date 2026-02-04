/**
 * 日本伝統色パレットの検証スクリプト
 * Japanese Traditional Color Palette Validation Script
 */

import { designTokens, lightThemeTokens, darkThemeTokens } from '../lib/design-tokens';
import { TraditionalColors, ColorScale } from '../types/theme';

// 色の検証関数 / Color validation functions
const isValidHexColor = (color: string): boolean => {
  return /^#[0-9a-fA-F]{6}$/.test(color);
};

const getBrightness = (hex: string): number => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000;
};

const getContrastRatio = (color1: string, color2: string): number => {
  const lum1 = getBrightness(color1) / 255;
  const lum2 = getBrightness(color2) / 255;
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
};

// 検証結果の型 / Validation result types
interface ValidationResult {
  success: boolean;
  message: string;
  details?: string[];
}

// メイン検証関数 / Main validation function
const validateColorPalette = (): ValidationResult[] => {
  const results: ValidationResult[] = [];
  const requiredShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
  const traditionalColorNames = ['sumi', 'washi', 'sakura', 'bamboo', 'sunset', 'indigo', 'gold'];

  // 1. 伝統色の完全性チェック / Traditional colors completeness check
  console.log('🎨 日本伝統色パレットの検証を開始します...\n');

  traditionalColorNames.forEach(colorName => {
    const colorScale = designTokens.colors.traditional[colorName as keyof TraditionalColors] as ColorScale;
    const details: string[] = [];
    let allShadesValid = true;

    // 各シェードの存在と形式をチェック / Check existence and format of each shade
    requiredShades.forEach(shade => {
      const color = colorScale[shade];
      if (!color) {
        details.push(`❌ ${shade}シェードが未定義`);
        allShadesValid = false;
      } else if (!isValidHexColor(color)) {
        details.push(`❌ ${shade}シェード (${color}) が無効な16進色形式`);
        allShadesValid = false;
      } else {
        details.push(`✅ ${shade}: ${color}`);
      }
    });

    // 明度の順序をチェック / Check brightness order
    if (allShadesValid) {
      const brightnesses = requiredShades.map(shade => getBrightness(colorScale[shade]));
      let orderCorrect = true;
      for (let i = 0; i < brightnesses.length - 1; i++) {
        if (brightnesses[i] < brightnesses[i + 1]) {
          orderCorrect = false;
          break;
        }
      }
      
      if (orderCorrect) {
        details.push('✅ 明度の順序が正しい (明→暗)');
      } else {
        details.push('⚠️ 明度の順序に問題がある可能性');
      }
    }

    results.push({
      success: allShadesValid,
      message: `${colorName} (${getColorNameInJapanese(colorName)})`,
      details
    });
  });

  // 2. ライト・ダークテーマの対応チェック / Light/Dark theme correspondence check
  console.log('\n🌓 ライト・ダークテーマの対応をチェックします...\n');

  traditionalColorNames.forEach(colorName => {
    const lightColor = lightThemeTokens.colors.traditional[colorName as keyof TraditionalColors] as ColorScale;
    const darkColor = darkThemeTokens.colors.traditional[colorName as keyof TraditionalColors] as ColorScale;
    const details: string[] = [];
    let themeConsistent = true;

    requiredShades.forEach(shade => {
      const lightShade = lightColor[shade];
      const darkShade = darkColor[shade];
      
      if (!lightShade || !darkShade) {
        details.push(`❌ ${shade}シェードがライトまたはダークテーマで未定義`);
        themeConsistent = false;
      } else {
        details.push(`✅ ${shade}: Light(${lightShade}) Dark(${darkShade})`);
      }
    });

    results.push({
      success: themeConsistent,
      message: `${colorName} テーマ対応`,
      details
    });
  });

  // 3. アクセシビリティチェック / Accessibility check
  console.log('\n♿ アクセシビリティ要件をチェックします...\n');

  const accessibilityTests = [
    {
      name: 'ライトテーマ: 暗いテキスト × 明るい背景',
      textColor: designTokens.colors.traditional.sumi[900],
      bgColor: designTokens.colors.traditional.washi[50],
    },
    {
      name: 'ダークテーマ: 明るいテキスト × 暗い背景',
      textColor: darkThemeTokens.colors.traditional.washi[900],
      bgColor: darkThemeTokens.colors.traditional.sumi[50],
    },
    {
      name: 'セマンティック: エラーテキスト × 背景',
      textColor: designTokens.colors.semantic.error,
      bgColor: designTokens.colors.traditional.washi[50],
    }
  ];

  accessibilityTests.forEach(test => {
    const contrast = getContrastRatio(test.textColor, test.bgColor);
    const meetsAA = contrast >= 4.5;
    const meetsAAA = contrast >= 7;

    results.push({
      success: meetsAA,
      message: test.name,
      details: [
        `コントラスト比: ${contrast.toFixed(2)}:1`,
        meetsAAA ? '✅ WCAG AAA準拠' : meetsAA ? '✅ WCAG AA準拠' : '❌ WCAG基準未達',
        `テキスト: ${test.textColor}`,
        `背景: ${test.bgColor}`
      ]
    });
  });

  return results;
};

// 日本語の色名を取得 / Get Japanese color names
const getColorNameInJapanese = (colorName: string): string => {
  const names: Record<string, string> = {
    sumi: '墨黒',
    washi: '和紙白',
    sakura: '桜ピンク',
    bamboo: '竹緑',
    sunset: '夕焼けオレンジ',
    indigo: '藍',
    gold: '金'
  };
  return names[colorName] || colorName;
};

// 結果の表示 / Display results
const displayResults = (results: ValidationResult[]): void => {
  let totalTests = 0;
  let passedTests = 0;

  results.forEach(result => {
    totalTests++;
    if (result.success) passedTests++;

    console.log(`${result.success ? '✅' : '❌'} ${result.message}`);
    if (result.details) {
      result.details.forEach(detail => {
        console.log(`   ${detail}`);
      });
    }
    console.log('');
  });

  console.log('='.repeat(60));
  console.log(`📊 検証結果: ${passedTests}/${totalTests} テスト通過`);
  console.log(`成功率: ${((passedTests / totalTests) * 100).toFixed(1)}%`);
  
  if (passedTests === totalTests) {
    console.log('🎉 すべてのテストが通過しました！日本伝統色パレットは正常に実装されています。');
  } else {
    console.log('⚠️ 一部のテストが失敗しました。上記の詳細を確認してください。');
  }
};

// スクリプト実行 / Execute script
if (require.main === module) {
  try {
    const results = validateColorPalette();
    displayResults(results);
  } catch (error) {
    console.error('❌ 検証中にエラーが発生しました:', error);
    process.exit(1);
  }
}

export { validateColorPalette, displayResults };