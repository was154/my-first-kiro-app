/**
 * 日本伝統色パレットのデモンストレーション
 * Japanese Traditional Color Palette Demonstration
 */

import React from 'react';
import { useTheme } from './ThemeProvider';

// 色スウォッチコンポーネント / Color Swatch Component
interface ColorSwatchProps {
  colorName: string;
  colorValue: string;
  shade: string;
  japaneseLabel: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ 
  colorName, 
  colorValue, 
  shade, 
  japaneseLabel 
}) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div 
        className="w-16 h-16 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
        style={{ backgroundColor: colorValue }}
        title={`${colorName}-${shade}: ${colorValue}`}
      />
      <div className="text-xs text-center">
        <div className="font-medium">{shade}</div>
        <div className="text-gray-600 dark:text-gray-400">{colorValue}</div>
      </div>
    </div>
  );
};

// 色グループコンポーネント / Color Group Component
interface ColorGroupProps {
  colorName: string;
  japaneseLabel: string;
  colorScale: Record<string, string>;
}

const ColorGroup: React.FC<ColorGroupProps> = ({ 
  colorName, 
  japaneseLabel, 
  colorScale 
}) => {
  const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">
        {japaneseLabel} ({colorName})
      </h3>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
        {shades.map(shade => (
          <ColorSwatch
            key={shade}
            colorName={colorName}
            colorValue={colorScale[shade]}
            shade={shade}
            japaneseLabel={japaneseLabel}
          />
        ))}
      </div>
    </div>
  );
};

// テーマ切り替えボタン / Theme Toggle Button
const ThemeToggle: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(currentTheme.mode === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
    >
      {currentTheme.mode === 'light' ? '🌙 ダークテーマ' : '☀️ ライトテーマ'}
    </button>
  );
};

// メインデモコンポーネント / Main Demo Component
const ColorPaletteDemo: React.FC = () => {
  const { tokens } = useTheme();
  const { traditional } = tokens.colors;

  const colorGroups = [
    { name: 'sumi', japanese: '墨黒', scale: traditional.sumi },
    { name: 'washi', japanese: '和紙白', scale: traditional.washi },
    { name: 'sakura', japanese: '桜ピンク', scale: traditional.sakura },
    { name: 'bamboo', japanese: '竹緑', scale: traditional.bamboo },
    { name: 'sunset', japanese: '夕焼けオレンジ', scale: traditional.sunset },
    { name: 'indigo', japanese: '藍', scale: traditional.indigo },
    { name: 'gold', japanese: '金', scale: traditional.gold },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-washi-50 dark:bg-sumi-900 min-h-screen transition-colors">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-sumi-900 dark:text-washi-100">
            日本伝統色パレット
          </h1>
          <ThemeToggle />
        </div>
        <p className="text-sumi-700 dark:text-washi-300 mb-6">
          日本の伝統的な色彩を現代のデジタルデザインに活用するためのカラーパレットです。
          各色は50（最も明るい）から900（最も暗い）までの10段階のシェードで構成されています。
        </p>
      </div>

      <div className="space-y-8">
        {colorGroups.map(group => (
          <ColorGroup
            key={group.name}
            colorName={group.name}
            japaneseLabel={group.japanese}
            colorScale={group.scale}
          />
        ))}
      </div>

      {/* セマンティックカラーの表示 / Semantic Colors Display */}
      <div className="mt-12 p-6 bg-washi-100 dark:bg-sumi-800 rounded-lg">
        <h3 className="text-lg font-medium mb-4 text-sumi-900 dark:text-washi-100">
          セマンティックカラー (Semantic Colors)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-lg mx-auto mb-2"
              style={{ backgroundColor: tokens.colors.semantic.success }}
            />
            <div className="text-sm font-medium">成功 (Success)</div>
            <div className="text-xs text-gray-600">{tokens.colors.semantic.success}</div>
          </div>
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-lg mx-auto mb-2"
              style={{ backgroundColor: tokens.colors.semantic.warning }}
            />
            <div className="text-sm font-medium">警告 (Warning)</div>
            <div className="text-xs text-gray-600">{tokens.colors.semantic.warning}</div>
          </div>
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-lg mx-auto mb-2"
              style={{ backgroundColor: tokens.colors.semantic.error }}
            />
            <div className="text-sm font-medium">エラー (Error)</div>
            <div className="text-xs text-gray-600">{tokens.colors.semantic.error}</div>
          </div>
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-lg mx-auto mb-2"
              style={{ backgroundColor: tokens.colors.semantic.info }}
            />
            <div className="text-sm font-medium">情報 (Info)</div>
            <div className="text-xs text-gray-600">{tokens.colors.semantic.info}</div>
          </div>
        </div>
      </div>

      {/* 使用例 / Usage Examples */}
      <div className="mt-12 space-y-6">
        <h3 className="text-lg font-medium text-sumi-900 dark:text-washi-100">
          使用例 (Usage Examples)
        </h3>
        
        {/* カードコンポーネントの例 / Card Component Example */}
        <div className="bg-washi-50 dark:bg-sumi-800 p-6 rounded-lg border border-sakura-200 dark:border-sakura-700">
          <h4 className="text-sakura-700 dark:text-sakura-300 font-medium mb-2">
            桜色のカード (Sakura Card)
          </h4>
          <p className="text-sumi-700 dark:text-washi-300">
            このカードは桜色をアクセントカラーとして使用し、和紙色の背景に墨色のテキストを配置しています。
          </p>
        </div>

        <div className="bg-bamboo-50 dark:bg-bamboo-900 p-6 rounded-lg border border-bamboo-300 dark:border-bamboo-600">
          <h4 className="text-bamboo-700 dark:text-bamboo-200 font-medium mb-2">
            竹色のカード (Bamboo Card)
          </h4>
          <p className="text-sumi-700 dark:text-washi-300">
            自然な竹の緑色を使用したカードデザインです。落ち着いた印象を与えます。
          </p>
        </div>

        <div className="bg-gold-50 dark:bg-gold-900 p-6 rounded-lg border border-gold-300 dark:border-gold-600">
          <h4 className="text-gold-700 dark:text-gold-200 font-medium mb-2">
            金色のカード (Gold Card)
          </h4>
          <p className="text-sumi-700 dark:text-washi-300">
            高級感のある金色を使用したプレミアムなカードデザインです。
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteDemo;