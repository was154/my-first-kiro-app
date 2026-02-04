---
inclusion: always
---

# プロジェクト構造・アーキテクチャガイドライン / Project Structure & Architecture Guidelines

## ファイル構成ルール / File Organization Rules

これは **Next.js 14+ React TypeScript** プロジェクトで、以下の構造を持ちます / This is a **Next.js 14+ React TypeScript** project with the following structure:

```
/
├── app/                # Next.js App Router
│   ├── globals.css     # グローバルスタイル / Global styles
│   ├── layout.tsx      # ルートレイアウトコンポーネント / Root layout component
│   └── page.tsx        # ホームページコンポーネント / Home page component
├── components/         # Reactコンポーネント（TSXのみ） / React components (TSX only)
├── data/              # 静的データと設定 / Static data and configurations
├── types/             # TypeScript型定義 / TypeScript type definitions
└── .kiro/             # Kiro設定 / Kiro configuration
```

## アーキテクチャパターン / Architecture Patterns

### コンポーネントアーキテクチャ / Component Architecture
- **React関数コンポーネント** TypeScript使用 / **React functional components** with TypeScript
- **デフォルトでServer Components** (Next.js App Router) / **Server Components by default** (Next.js App Router)
- **Client Components** インタラクティビティが必要な場合のみ (`"use client"`使用) / **Client Components** only when interactivity is needed (use `"use client"`)
- **コンポーネント合成** 継承よりも合成を優先 / **Component composition** over inheritance
- **Propsインターフェース** 同一ファイルまたはtypes/ディレクトリで定義 / **Props interfaces** defined in same file or types/ directory

### ファイル命名規則 / File Naming Conventions
- **コンポーネント**: PascalCase (例: `CourseCard.tsx`, `Header.tsx`) / **Components**: PascalCase (e.g., `CourseCard.tsx`, `Header.tsx`)
- **ページ**: 小文字 (例: `page.tsx`, `layout.tsx`) / **Pages**: lowercase (e.g., `page.tsx`, `layout.tsx`)
- **型定義**: camelCaseインターフェース (例: `course.ts`) / **Types**: camelCase interfaces (e.g., `course.ts`)
- **データファイル**: camelCase (例: `courses.ts`) / **Data files**: camelCase (e.g., `courses.ts`)

### コードスタイルルール / Code Style Rules
- **TypeScript厳密モード** - すべてのファイルは適切に型付けが必要 / **TypeScript strict mode** - all files must be properly typed
- **関数コンポーネント** 適切なTypeScriptインターフェース付き / **Functional components** with proper TypeScript interfaces
- **Tailwind CSS** すべてのスタイリング - 絶対必要でない限りカスタムCSS禁止 / **Tailwind CSS** for all styling - no custom CSS unless absolutely necessary
- **日本語コンテンツ** 適切な国際化考慮 / **Japanese content** with proper internationalization considerations
- **セマンティックHTML** アクセシビリティ属性付き / **Semantic HTML** with accessibility attributes

### コンポーネントガイドライン / Component Guidelines
- **単一責任** - 各コンポーネントは明確な目的を1つ持つ / **Single responsibility** - each component has one clear purpose
- **Props検証** TypeScriptインターフェースを通じて / **Props validation** through TypeScript interfaces
- **一貫したエクスポートパターン** - コンポーネントはデフォルトエクスポート / **Consistent export patterns** - default exports for components
- **適切なコンポーネント階層** - 論理的な親子関係 / **Proper component hierarchy** - logical parent-child relationships

### データ管理 / Data Management
- **静的データ** `/data`ディレクトリに適切なTypeScript型付きで / **Static data** in `/data` directory with proper TypeScript types
- **型定義** `/types`ディレクトリに / **Type definitions** in `/types` directory
- **コースデータ構造** `Course`インターフェースと一致必須 / **Course data structure** must match the `Course` interface
- **不変データパターン** - 直接的な変更を避ける / **Immutable data patterns** - avoid direct mutations

### スタイリング規則 / Styling Conventions
- **Tailwind CSSクラス** すべてのスタイリングに / **Tailwind CSS classes** for all styling
- **レスポンシブデザイン** Tailwindブレークポイント使用 / **Responsive design** using Tailwind breakpoints
- **コンポーネントスコープスタイリング** - グローバルスタイル回避 / **Component-scoped styling** - avoid global styles
- **一貫したスペーシング** Tailwindスペーシングスケール使用 / **Consistent spacing** using Tailwind spacing scale
- **モバイルファーストアプローチ** レスポンシブユーティリティ使用 / **Mobile-first approach** with responsive utilities

## 開発ルール / Development Rules

### 新機能追加時 / When Adding New Features
1. **TypeScriptインターフェース作成** 新しいデータ構造が必要な場合は`/types`に / **Create TypeScript interfaces** in `/types` if new data structures are needed
2. **再利用可能コンポーネント構築** `/components`ディレクトリに / **Build reusable components** in `/components` directory
3. **Next.js App Routerパターンに従う** ルーティングとレイアウトで / **Follow Next.js App Router patterns** for routing and layouts
4. **Server Components使用** クライアントサイドインタラクティビティが不要な場合 / **Use Server Components** unless client-side interactivity is required
5. **レスポンシブデザイン維持** すべての画面サイズで / **Maintain responsive design** across all screen sizes

### 既存コード修正時 / When Modifying Existing Code
1. **既存TypeScriptインターフェース保持** データ構造を明示的に変更しない限り / **Preserve existing TypeScript interfaces** unless explicitly changing data structure
2. **コンポーネントAPI互換性維持** props更新時 / **Maintain component API compatibility** when updating props
3. **レスポンシブ動作テスト** スタイリング変更後 / **Test responsive behavior** after styling changes
4. **日本語コンテンツレンダリング確認** 正しく表示されることを保証 / **Ensure Japanese content rendering** remains correct

### コード品質基準 / Code Quality Standards
- **TypeScriptエラーなし** - コードはクリーンにコンパイル必須 / **No TypeScript errors** - code must compile cleanly
- **適切なエラーハンドリング** データ取得とユーザーインタラクションで / **Proper error handling** for data fetching and user interactions
- **アクセシブルマークアップ** 必要に応じて適切なARIA属性付き / **Accessible markup** with proper ARIA attributes where needed
- **パフォーマンス考慮** - 画像最適化とバンドルサイズ最小化 / **Performance considerations** - optimize images and minimize bundle size