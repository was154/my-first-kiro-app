import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: '歴史と文化の散歩道 | 東京散歩地図 - NAZOARUKI',
  description: '東京都内の歴史と文化の散歩道全23コースを詳細マップで紹介。謎解きウォーキングで楽しく東京の歴史を発見しよう。',
  keywords: '東京, 散歩道, 歴史, 文化, ウォーキング, 謎解き, 観光',
  authors: [{ name: 'NAZOARUKI' }],
  robots: 'index, follow',
  openGraph: {
    title: '歴史と文化の散歩道 | 東京散歩地図 - NAZOARUKI',
    description: '東京都内の歴史と文化の散歩道全23コースを詳細マップで紹介。謎解きウォーキングで楽しく東京の歴史を発見しよう。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="font-japanese antialiased bg-washi-50 text-sumi-900 transition-colors duration-300">
        <ThemeProvider defaultMode="light" defaultSeasonalVariant="spring">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}