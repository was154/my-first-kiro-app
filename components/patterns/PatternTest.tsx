'use client';

/**
 * パターンコンポーネントの簡単なテスト
 * Simple test for pattern components
 */

import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { PatternLibrary } from './PatternLibrary';

const PatternTest: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="p-8 space-y-8">
        <h1 className="text-2xl font-bold">Pattern Component Test</h1>
        
        {/* 青海波テスト / Seigaiha test */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">青海波 (Seigaiha)</h2>
          <div className="w-64 h-32 border rounded-lg overflow-hidden">
            <PatternLibrary
              pattern="seigaiha"
              preset="normal"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        
        {/* 麻の葉テスト / Asanoha test */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">麻の葉 (Asanoha)</h2>
          <div className="w-64 h-32 border rounded-lg overflow-hidden">
            <PatternLibrary
              pattern="asanoha"
              preset="normal"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        
        {/* 桜テスト / Sakura test */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">桜 (Sakura)</h2>
          <div className="w-64 h-32 border rounded-lg overflow-hidden">
            <PatternLibrary
              pattern="sakura"
              preset="normal"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default PatternTest;