# 歴史と文化の散歩道 - NAZOARUKI

東京都内の歴史と文化の散歩道全23コースを紹介するモダンなWebサイトです。

## 🚀 技術スタック

- **Next.js 14** - React フレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS** - ユーティリティファーストCSS
- **Lucide React** - アイコンライブラリ

## 📁 プロジェクト構造

```
/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # ホームページ
├── components/            # Reactコンポーネント
│   ├── Header.tsx         # ヘッダーナビゲーション
│   ├── Hero.tsx           # ヒーローセクション
│   ├── About.tsx          # 散歩道について
│   ├── Courses.tsx        # コース一覧
│   ├── CourseCard.tsx     # コースカード
│   ├── Pagination.tsx     # ページネーション
│   ├── Features.tsx       # 特徴セクション
│   └── Footer.tsx         # フッター
├── data/                  # データファイル
│   └── courses.ts         # コースデータ
├── types/                 # TypeScript型定義
│   └── course.ts          # コース関連の型
├── tailwind.config.ts     # Tailwind設定
├── tsconfig.json          # TypeScript設定
├── next.config.js         # Next.js設定
└── package.json           # 依存関係
```

## 🛠️ 開発環境のセットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### 3. ビルド

```bash
npm run build
```

### 4. 本番サーバーの起動

```bash
npm start
```

## 📱 機能

### ✅ 実装済み機能

- **レスポンシブデザイン** - モバイルファーストアプローチ
- **コース一覧表示** - 全23コースの詳細情報
- **ページネーション** - 4コースずつ表示
- **スムーススクロール** - セクション間のナビゲーション
- **アニメーション** - フェードイン・ホバーエフェクト
- **TypeScript** - 型安全性の確保

### 🔄 今後の拡張予定

- 地図API連携
- コース詳細ページ
- 検索・フィルター機能
- ユーザーレビュー
- お気に入り機能
- GPSナビゲーション

## 🎨 デザインシステム

### カラーパレット

- **Primary**: Blue系 (#3b82f6)
- **Secondary**: Orange系 (#f59e0b)
- **Dark**: Gray系 (#1e293b)

### コンポーネント設計

- **Atomic Design** の原則に基づく
- **再利用可能** なコンポーネント
- **TypeScript** による型安全性
- **Tailwind CSS** によるユーティリティクラス

## 📊 パフォーマンス

- **Static Site Generation** - 高速な初期読み込み
- **Code Splitting** - 必要な部分のみ読み込み
- **Image Optimization** - Next.jsの画像最適化
- **Bundle Size** - 最小限の依存関係

## 🚀 デプロイ

### Vercel (推奨)

```bash
npm run build
```

### 静的ホスティング

```bash
npm run build
# outフォルダの内容をデプロイ
```

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 📞 お問い合わせ

プロジェクトに関する質問や提案がありましたら、Issueを作成してください。