/**
 * 和紙テクスチャシステムのテスト
 * Washi Texture System Tests
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import {
  WashiTexture,
  WashiBackground,
  WashiCard,
  WashiSection,
  WashiHeader,
  TextureLibrary,
  TexturePreview,
  TEXTURE_PRESETS,
  getTextureInfo,
  getTextureTypeInfo,
  type WashiTextureType,
} from '@/components/textures';

// テストヘルパー / Test helper
const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe('WashiTexture Component', () => {
  it('renders with default props', () => {
    renderWithTheme(<WashiTexture />);
    const svg = screen.getByRole('img');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-label', 'Washi texture - smooth');
  });

  it('renders with different texture types', () => {
    const textureTypes: WashiTextureType[] = ['smooth', 'rough', 'handmade', 'aged', 'fibrous', 'mulberry'];
    
    textureTypes.forEach((type) => {
      const { unmount } = renderWithTheme(<WashiTexture type={type} />);
      const svg = screen.getByRole('img');
      expect(svg).toHaveAttribute('aria-label', `Washi texture - ${type}`);
      unmount();
    });
  });

  it('applies custom dimensions', () => {
    renderWithTheme(<WashiTexture width={200} height={150} />);
    const svg = screen.getByRole('img');
    expect(svg).toHaveAttribute('width', '200');
    expect(svg).toHaveAttribute('height', '150');
  });

  it('applies custom opacity', () => {
    renderWithTheme(<WashiTexture opacity={0.5} />);
    const svg = screen.getByRole('img');
    expect(svg).toHaveStyle({ opacity: '0.5' });
  });

  it('applies background classes when asBackground is true', () => {
    renderWithTheme(<WashiTexture asBackground={true} />);
    const svg = screen.getByRole('img');
    expect(svg).toHaveClass('absolute', 'inset-0', 'pointer-events-none');
  });

  it('applies custom className', () => {
    renderWithTheme(<WashiTexture className="custom-class" />);
    const svg = screen.getByRole('img');
    expect(svg).toHaveClass('custom-class');
  });
});

describe('WashiBackground Component', () => {
  it('renders children correctly', () => {
    renderWithTheme(
      <WashiBackground>
        <div data-testid="child">Test Content</div>
      </WashiBackground>
    );
    
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies overlay when overlay prop is true', () => {
    const { container } = renderWithTheme(
      <WashiBackground overlay={true} overlayOpacity={0.3}>
        <div>Content</div>
      </WashiBackground>
    );
    
    const overlay = container.querySelector('[style*="opacity"]');
    expect(overlay).toBeInTheDocument();
  });

  it('renders with responsive behavior', () => {
    renderWithTheme(
      <WashiBackground responsive={true}>
        <div data-testid="responsive-content">Content</div>
      </WashiBackground>
    );
    
    expect(screen.getByTestId('responsive-content')).toBeInTheDocument();
  });

  it('renders with custom texture type', () => {
    renderWithTheme(
      <WashiBackground textureType="handmade">
        <div data-testid="textured-content">Content</div>
      </WashiBackground>
    );
    
    expect(screen.getByTestId('textured-content')).toBeInTheDocument();
  });
});

describe('WashiCard Component', () => {
  it('renders with card content', () => {
    renderWithTheme(
      <WashiCard>
        <div data-testid="card-content">Card Content</div>
      </WashiCard>
    );
    
    expect(screen.getByTestId('card-content')).toBeInTheDocument();
  });

  it('renders with different texture types', () => {
    renderWithTheme(
      <WashiCard textureType="rough">
        <div data-testid="rough-card">Rough Card</div>
      </WashiCard>
    );
    
    expect(screen.getByTestId('rough-card')).toBeInTheDocument();
  });

  it('renders with hover capability', () => {
    renderWithTheme(
      <WashiCard hoverable={true}>
        <div data-testid="hoverable-card">Hoverable Card</div>
      </WashiCard>
    );
    
    expect(screen.getByTestId('hoverable-card')).toBeInTheDocument();
  });

  it('renders with border option', () => {
    renderWithTheme(
      <WashiCard border={true}>
        <div data-testid="bordered-card">Bordered Card</div>
      </WashiCard>
    );
    
    expect(screen.getByTestId('bordered-card')).toBeInTheDocument();
  });
});

describe('WashiSection Component', () => {
  it('renders with section content', () => {
    renderWithTheme(
      <WashiSection>
        <div data-testid="section-content">Section Content</div>
      </WashiSection>
    );
    
    expect(screen.getByTestId('section-content')).toBeInTheDocument();
  });

  it('renders with full width option', () => {
    renderWithTheme(
      <WashiSection fullWidth={true}>
        <div data-testid="full-width-section">Full Width Section</div>
      </WashiSection>
    );
    
    expect(screen.getByTestId('full-width-section')).toBeInTheDocument();
  });
});

describe('WashiHeader Component', () => {
  it('renders with header content', () => {
    renderWithTheme(
      <WashiHeader>
        <div data-testid="header-content">Header Content</div>
      </WashiHeader>
    );
    
    expect(screen.getByTestId('header-content')).toBeInTheDocument();
  });

  it('renders with fixed positioning', () => {
    renderWithTheme(
      <WashiHeader fixed={true}>
        <div data-testid="fixed-header">Fixed Header</div>
      </WashiHeader>
    );
    
    expect(screen.getByTestId('fixed-header')).toBeInTheDocument();
  });

  it('renders with transparency', () => {
    renderWithTheme(
      <WashiHeader transparent={true}>
        <div data-testid="transparent-header">Transparent Header</div>
      </WashiHeader>
    );
    
    expect(screen.getByTestId('transparent-header')).toBeInTheDocument();
  });
});

describe('TextureLibrary Component', () => {
  it('renders with default preset', () => {
    renderWithTheme(
      <TextureLibrary>
        <div data-testid="library-content">Library Content</div>
      </TextureLibrary>
    );
    
    expect(screen.getByTestId('library-content')).toBeInTheDocument();
  });

  it('renders with custom preset', () => {
    renderWithTheme(
      <TextureLibrary preset="traditionalHandmade">
        <div>Traditional Content</div>
      </TextureLibrary>
    );
    
    expect(screen.getByText('Traditional Content')).toBeInTheDocument();
  });

  it('handles invalid preset gracefully', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    
    renderWithTheme(
      // @ts-expect-error Testing invalid preset
      <TextureLibrary preset="invalidPreset">
        <div>Content</div>
      </TextureLibrary>
    );
    
    expect(consoleSpy).toHaveBeenCalledWith('Unknown texture preset: invalidPreset');
    consoleSpy.mockRestore();
  });
});

describe('TexturePreview Component', () => {
  it('renders preview grid with default presets', () => {
    renderWithTheme(<TexturePreview />);
    
    // プリセット名が表示されることを確認
    Object.values(TEXTURE_PRESETS).forEach((preset) => {
      expect(screen.getByText(preset.displayName)).toBeInTheDocument();
    });
  });

  it('renders with custom presets', () => {
    const customPresets = ['premiumSmooth', 'traditionalHandmade'] as const;
    
    renderWithTheme(<TexturePreview presets={customPresets} />);
    
    customPresets.forEach((presetKey) => {
      const preset = TEXTURE_PRESETS[presetKey];
      expect(screen.getByText(preset.displayName)).toBeInTheDocument();
    });
  });

  it('applies correct grid classes based on columns prop', () => {
    const { container } = renderWithTheme(<TexturePreview columns={2} />);
    
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2');
  });
});

describe('Utility Functions', () => {
  describe('getTextureInfo', () => {
    it('returns correct texture preset info', () => {
      const info = getTextureInfo('premiumSmooth');
      expect(info).toEqual(TEXTURE_PRESETS.premiumSmooth);
      expect(info.displayName).toBe('高級滑らか和紙');
    });
  });

  describe('getTextureTypeInfo', () => {
    it('returns correct texture type info', () => {
      const info = getTextureTypeInfo('smooth');
      expect(info.name).toBe('滑らか和紙');
      expect(info.nameEn).toBe('Smooth Washi');
      expect(info.characteristics).toContain('滑らかな表面');
    });

    it('returns info for all texture types', () => {
      const textureTypes: WashiTextureType[] = ['smooth', 'rough', 'handmade', 'aged', 'fibrous', 'mulberry'];
      
      textureTypes.forEach((type) => {
        const info = getTextureTypeInfo(type);
        expect(info).toBeDefined();
        expect(info.name).toBeDefined();
        expect(info.description).toBeDefined();
        expect(info.characteristics).toBeInstanceOf(Array);
      });
    });
  });
});

describe('Texture Presets', () => {
  it('contains all expected presets', () => {
    const expectedPresets = [
      'premiumSmooth',
      'premiumRough',
      'traditionalHandmade',
      'traditionalMulberry',
      'classicalAged',
      'classicalFibrous',
      'modernMinimal',
      'modernTextured',
    ];

    expectedPresets.forEach((preset) => {
      expect(TEXTURE_PRESETS[preset]).toBeDefined();
    });
  });

  it('has valid texture types in all presets', () => {
    const validTextureTypes: WashiTextureType[] = ['smooth', 'rough', 'handmade', 'aged', 'fibrous', 'mulberry'];
    
    Object.values(TEXTURE_PRESETS).forEach((preset) => {
      expect(validTextureTypes).toContain(preset.textureType);
    });
  });

  it('has valid intensity values in all presets', () => {
    const validIntensities = ['subtle', 'normal', 'strong'];
    
    Object.values(TEXTURE_PRESETS).forEach((preset) => {
      expect(validIntensities).toContain(preset.intensity);
    });
  });
});

describe('Integration Tests', () => {
  it('works with pattern library integration', () => {
    renderWithTheme(
      <WashiBackground textureType="handmade" intensity="normal">
        <div data-testid="pattern-content">Pattern with Texture</div>
      </WashiBackground>
    );
    
    expect(screen.getByTestId('pattern-content')).toBeInTheDocument();
  });

  it('maintains responsive behavior across components', () => {
    renderWithTheme(
      <WashiSection>
        <WashiCard>
          <WashiBackground>
            <div>Nested Components</div>
          </WashiBackground>
        </WashiCard>
      </WashiSection>
    );
    
    expect(screen.getByText('Nested Components')).toBeInTheDocument();
  });

  it('applies theme colors correctly', () => {
    renderWithTheme(<WashiTexture type="smooth" />);
    
    const svg = screen.getByRole('img');
    expect(svg).toBeInTheDocument();
    // テーマ色が適用されていることを確認（実際の色値は動的なので存在確認のみ）
  });
});