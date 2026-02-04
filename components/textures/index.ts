/**
 * 和紙テクスチャシステム エクスポート
 * Washi Texture System Exports
 */

// 基本テクスチャコンポーネント / Basic texture components
export { 
  WashiTexture,
  type WashiTextureType,
  type WashiTextureProps 
} from './WashiTexture';

// 背景適用システム / Background application system
export {
  WashiBackground,
  WashiCard,
  WashiSection,
  WashiHeader,
  type WashiBackgroundProps
} from './WashiBackground';

// テクスチャライブラリ / Texture library
export {
  TextureLibrary,
  TexturePreview,
  TEXTURE_PRESETS,
  getTextureInfo,
  getTextureTypeInfo,
  type TexturePreset,
  type TextureLibraryProps
} from './TextureLibrary';

// デフォルトエクスポート / Default export
export { default } from './TextureLibrary';