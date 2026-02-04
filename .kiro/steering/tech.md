---
inclusion: always
---

# 技術スタック / Technology Stack

## フロントエンドアーキテクチャ / Frontend Architecture
- **Next.js 14+** App Routerを使用したReactベースのSSR/SSG / React-based SSR/SSG with App Router
- **React 18+** TypeScriptを使用したコンポーネントベースUI / Component-based UI with TypeScript
- **TypeScript** 厳密モードで型安全性と開発者体験を向上 / Strict mode for type safety and developer experience
- **Tailwind CSS** ユーティリティファーストスタイリングとレスポンシブデザイン / Utility-first styling and responsive design
- **日本語コンテンツサポート** 適切な国際化対応 / Japanese content support with proper internationalization

## ビルドシステム / Build System
- **Next.js** 自動最適化機能付きの内蔵ビルドシステム / Built-in build system with automatic optimization
- **TypeScript コンパイル** 厳密な型チェック付き / TypeScript compilation with strict type checking
- **Tailwind CSS** 処理とパージ機能 / Processing and purging
- **静的エクスポート** デプロイメントの柔軟性 / Static export capability for deployment flexibility

## 開発ワークフロー / Development Workflow

### ローカル開発 / Local Development
```bash
# 開発サーバー起動 / Start development server
npm run dev
# or
yarn dev

# 本番用ビルド / Build for production
npm run build
# or
yarn build
```

### 主要コマンド / Key Commands
- `npm run dev` - localhost:3000で開発サーバー起動 / Start development server on localhost:3000
- `npm run build` - 本番用ビルド作成 / Create production build
- `npm run start` - 本番サーバー起動 / Start production server
- `npm run lint` - コード品質チェック用ESLint実行 / Run ESLint for code quality

## コード規約 / Code Standards

### TypeScript要件 / TypeScript Requirements
- **厳密モード有効** - すべてのコードは適切に型付けが必要 / **Strict mode enabled** - all code must be properly typed
- **インターフェース定義** - すべてのpropsとデータ構造に必須 / **Interface definitions** required for all props and data structures
- **`any`型禁止** - 適切な型付けまたは型ガード付き`unknown`を使用 / **No `any` types** - use proper typing or `unknown` with type guards
- **エクスポート/インポート一貫性** - ES6モジュールを全体で使用 / **Export/import consistency** - use ES6 modules throughout

### Reactパターン / React Patterns
- **関数コンポーネントのみ** - クラスコンポーネント禁止 / **Functional components only** - no class components
- **デフォルトでServer Components** - 必要時のみ`"use client"`使用 / **Server Components by default** - use `"use client"` only when needed
- **Propsインターフェース** - すべてのコンポーネントpropsにTypeScriptインターフェース定義 / **Props interfaces** - define TypeScript interfaces for all component props
- **コンポーネント合成** - prop drillingよりも合成を優先 / **Component composition** - prefer composition over prop drilling

### スタイリングガイドライン / Styling Guidelines
- **Tailwind CSSのみ** - 絶対必要でない限りカスタムCSS回避 / **Tailwind CSS only** - avoid custom CSS unless absolutely necessary
- **モバイルファーストレスポンシブデザイン** - Tailwindブレークポイント使用 (sm:, md:, lg:, xl:) / **Mobile-first responsive design** - use Tailwind breakpoints (sm:, md:, lg:, xl:)
- **一貫したスペーシング** - Tailwindスペーシングスケール使用 (p-4, m-2, etc.) / **Consistent spacing** - use Tailwind spacing scale (p-4, m-2, etc.)
- **セマンティックカラー使用** - Tailwindセマンティックカラーを適切に使用 / **Semantic color usage** - use Tailwind semantic colors appropriately

### ファイル命名規則 / File Naming Conventions
- **コンポーネント**: PascalCase `.tsx`ファイル (例: `CourseCard.tsx`) / **Components**: PascalCase `.tsx` files (e.g., `CourseCard.tsx`)
- **ページ**: Next.js規則に従った小文字 (`page.tsx`, `layout.tsx`) / **Pages**: lowercase with Next.js conventions (`page.tsx`, `layout.tsx`)
- **型定義**: camelCase `.ts`ファイル (例: `course.ts`) / **Types**: camelCase `.ts` files (e.g., `course.ts`)
- **データ**: camelCase `.ts`ファイル (例: `courses.ts`) / **Data**: camelCase `.ts` files (e.g., `courses.ts`)

## パフォーマンス・最適化 / Performance & Optimization
- **Next.js自動最適化** - 画像、フォント、スクリプトの最適化 / **Next.js automatic optimizations** - Image, Font, and Script optimization
- **Server Components** - クライアントサイドJavaScriptを最小化 / **Server Components** - minimize client-side JavaScript
- **可能な限り静的生成** - パフォーマンス向上のため / **Static generation** where possible for better performance
- **適切な画像最適化** - Next.js Imageコンポーネント使用 / **Proper image optimization** using Next.js Image component
- **バンドル分析** - バンドルサイズの監視と最適化 / **Bundle analysis** - monitor and optimize bundle size

## アクセシビリティ・国際化 / Accessibility & Internationalization
- **セマンティックHTML** - 適切なARIA属性付き / **Semantic HTML** with proper ARIA attributes
- **日本語コンテンツサポート** - 適切なlang属性付き / **Japanese content support** with proper lang attributes
- **キーボードナビゲーション** - インタラクティブ要素のサポート / **Keyboard navigation** support for interactive elements
- **スクリーンリーダー互換性** - すべてのUIコンポーネント対応 / **Screen reader compatibility** for all UI components