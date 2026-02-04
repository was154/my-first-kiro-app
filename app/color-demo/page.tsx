'use client';

/**
 * 日本伝統色パレットのデモページ
 * Japanese Traditional Color Palette Demo Page
 */

import React from 'react';
import ColorPaletteDemo from '@/components/ColorPaletteDemo';
import ColorValidation from '@/components/ColorValidation';
import ThemeProvider from '@/components/ThemeProvider';

export default function ColorDemoPage() {
  return (
    <ThemeProvider defaultMode="light">
      <div className="space-y-8">
        <ColorValidation />
        <ColorPaletteDemo />
      </div>
    </ThemeProvider>
  );
}