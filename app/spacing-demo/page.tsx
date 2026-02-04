/**
 * 日本伝統デザインシステム間隔デモページ
 * Japanese Traditional Design System Spacing Demo Page
 */

import React from 'react';
import SpacingValidation from '@/components/SpacingValidation';

export default function SpacingDemoPage() {
  return (
    <main className="min-h-screen bg-washi-50">
      <div className="container mx-auto py-8">
        <SpacingValidation />
      </div>
    </main>
  );
}

export const metadata = {
  title: '間隔システムデモ | Japanese Traditional Design System',
  description: '日本伝統デザインシステムの間隔・サイズトークンのデモンストレーション',
};