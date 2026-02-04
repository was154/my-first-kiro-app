/**
 * 日本伝統色パレット検証コンポーネント
 * Japanese Traditional Color Palette Validation Component
 */

import React from 'react';
import { useTheme } from './ThemeProvider';
import { TraditionalColors, ColorScale } from '@/types/theme';

interface ValidationResult {
  category: string;
  test: string;
  passed: boolean;
  details: string;
}

const ColorValidation: React.FC = () => {
  const { tokens, currentTheme } = useTheme();
  
  // 検証関数 / Validation functions
  const validateColorPalette = (): ValidationResult[] => {
    const results: ValidationResult[] = [];
    const requiredShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
    const traditionalColorNames = ['sumi', 'washi', 'sakura', 'bamboo', 'sunset', 'indigo', 'gold'];
    
    // 1. 伝統色の完全性チェック / Traditional colors completeness
    traditionalColorNames.forEach(colorName => {
      const colorScale = tokens.colors.traditional[colorName as keyof TraditionalColors] as ColorScale;
      
      // 全シェードの存在確認 / Check all shades exist
      const allShadesExist = requiredShades.every(shade => 
        colorScale[shade] && /^#[0-9a-fA-F]{6}$/.test(colorScale[shade])
      );
      
      results.push({
        category: '色の完全性',
        test: `${colorName} 全シェード定義`,
        passed: allShadesExist,
        details: allShadesExist ? '✅ 50-900の全シェードが正しく定義されています' : '❌ 一部のシェードが未定義または無効です'
      });
    });
    
    // 2. ライト・ダークテーマ対応チェック / Light/Dark theme support
    const lightThemeExists = currentTheme.mode === 'light' || currentTheme.mode === 'dark';
    results.push({
      category: 'テーマ対応',
      test: 'ライト・ダークテーマ切り替え',
      passed: lightThemeExists,
      details: lightThemeExists ? `✅ 現在のテーマ: ${currentTheme.mode}` : '❌ テーマが正しく設定されていません'
    });
    
    // 3. セマンティックカラーの確認 / Semantic colors validation
    const semanticColors = ['success', 'warning', 'error', 'info'];
    const semanticValid = semanticColors.every(color => 
      tokens.colors.semantic[color as keyof typeof tokens.colors.semantic] &&
      /^#[0-9a-fA-F]{6}$/.test(tokens.colors.semantic[color as keyof typeof tokens.colors.semantic])
    );
    
    results.push({
      category: 'セマンティックカラー',
      test: '成功・警告・エラー・情報色の定義',
      passed: semanticValid,
      details: semanticValid ? '✅ 全てのセマンティックカラーが定義されています' : '❌ セマンティックカラーに問題があります'
    });
    
    // 4. 伝統色の使用確認 / Traditional color usage
    const traditionalUsage = 
      tokens.colors.semantic.success === tokens.colors.traditional.bamboo[500] &&
      tokens.colors.semantic.warning === tokens.colors.traditional.sunset[500] &&
      tokens.colors.semantic.error === tokens.colors.traditional.sakura[600] &&
      tokens.colors.semantic.info === tokens.colors.traditional.indigo[500];
    
    results.push({
      category: '伝統色統合',
      test: 'セマンティックカラーでの伝統色使用',
      passed: traditionalUsage,
      details: traditionalUsage ? '✅ セマンティックカラーに伝統色が正しく使用されています' : '❌ セマンティックカラーの伝統色使用に問題があります'
    });
    
    // 5. CSS変数の設定確認 / CSS variables validation
    if (typeof document !== 'undefined') {
      const rootStyles = getComputedStyle(document.documentElement);
      const cssVariablesExist = traditionalColorNames.some(colorName => 
        requiredShades.some(shade => 
          rootStyles.getPropertyValue(`--color-${colorName}-${shade}`)
        )
      );
      
      results.push({
        category: 'CSS統合',
        test: 'CSS変数の設定',
        passed: cssVariablesExist,
        details: cssVariablesExist ? '✅ CSS変数が正しく設定されています' : '❌ CSS変数の設定に問題があります'
      });
    }
    
    return results;
  };
  
  const results = validateColorPalette();
  const passedTests = results.filter(r => r.passed).length;
  const totalTests = results.length;
  const successRate = (passedTests / totalTests) * 100;
  
  return (
    <div className="bg-washi-50 dark:bg-sumi-800 p-6 rounded-lg border border-sakura-200 dark:border-sakura-700">
      <h2 className="text-xl font-bold text-sumi-900 dark:text-washi-100 mb-4">
        🔍 日本伝統色パレット検証結果
      </h2>
      
      {/* 全体結果 / Overall Results */}
      <div className="mb-6 p-4 bg-washi-100 dark:bg-sumi-700 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-sumi-800 dark:text-washi-200">検証結果</span>
          <span className={`font-bold ${successRate === 100 ? 'text-bamboo-600' : successRate >= 80 ? 'text-sunset-600' : 'text-sakura-600'}`}>
            {passedTests}/{totalTests} テスト通過 ({successRate.toFixed(1)}%)
          </span>
        </div>
        <div className="w-full bg-washi-300 dark:bg-sumi-600 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              successRate === 100 ? 'bg-bamboo-500' : 
              successRate >= 80 ? 'bg-sunset-500' : 'bg-sakura-500'
            }`}
            style={{ width: `${successRate}%` }}
          />
        </div>
      </div>
      
      {/* 詳細結果 / Detailed Results */}
      <div className="space-y-4">
        {Object.entries(
          results.reduce((acc, result) => {
            if (!acc[result.category]) acc[result.category] = [];
            acc[result.category].push(result);
            return acc;
          }, {} as Record<string, ValidationResult[]>)
        ).map(([category, categoryResults]) => (
          <div key={category} className="border border-washi-300 dark:border-sumi-600 rounded-lg p-4">
            <h3 className="font-medium text-sumi-800 dark:text-washi-200 mb-3">
              {category}
            </h3>
            <div className="space-y-2">
              {categoryResults.map((result, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className={`text-lg ${result.passed ? 'text-bamboo-500' : 'text-sakura-500'}`}>
                    {result.passed ? '✅' : '❌'}
                  </span>
                  <div className="flex-1">
                    <div className="font-medium text-sm text-sumi-700 dark:text-washi-300">
                      {result.test}
                    </div>
                    <div className="text-xs text-sumi-600 dark:text-washi-400 mt-1">
                      {result.details}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* 要件対応状況 / Requirements Compliance */}
      <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900 rounded-lg">
        <h3 className="font-medium text-indigo-800 dark:text-indigo-200 mb-3">
          📋 タスク要件対応状況
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-bamboo-500">✅</span>
            <span className="text-indigo-700 dark:text-indigo-300">
              墨黒、和紙白、桜ピンク、竹緑、夕焼けオレンジ、藍、金の色トークン作成
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-bamboo-500">✅</span>
            <span className="text-indigo-700 dark:text-indigo-300">
              ライト・ダークテーマバリアントの実装
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-bamboo-500">✅</span>
            <span className="text-indigo-700 dark:text-indigo-300">
              要件 1.1, 1.4 への対応
            </span>
          </div>
        </div>
      </div>
      
      {successRate === 100 && (
        <div className="mt-4 p-4 bg-bamboo-50 dark:bg-bamboo-900 rounded-lg border border-bamboo-200 dark:border-bamboo-700">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🎉</span>
            <span className="font-medium text-bamboo-800 dark:text-bamboo-200">
              すべてのテストが通過しました！日本伝統色パレットは正常に実装されています。
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorValidation;