'use client';

import { useTheme } from '@/hooks/useTheme';
import { themeClasses, cn, getShadowClass } from '@/lib/theme-utils';

export function ThemeDemo() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <div className="p-4">Loading theme demo...</div>;
  }

  return (
    <div className={cn('p-6 space-y-6', themeClasses.background.primary)}>
      <div className="flex items-center justify-between">
        <h2 className={cn('text-2xl font-bold', themeClasses.text.primary)}>
          Theme Demo
        </h2>
        <button
          onClick={toggleTheme}
          className={cn(
            'px-4 py-2 rounded-md font-medium',
            themeClasses.button.primary,
            themeClasses.transition.colors
          )}
        >
          Toggle to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      {/* Background Variants */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className={cn('p-4 rounded-lg', themeClasses.background.primary, getShadowClass('sm'))}>
          <h3 className={cn('font-semibold mb-2', themeClasses.text.primary)}>Primary Background</h3>
          <p className={cn('text-sm', themeClasses.text.secondary)}>Main background color</p>
        </div>
        
        <div className={cn('p-4 rounded-lg', themeClasses.background.card, getShadowClass('sm'))}>
          <h3 className={cn('font-semibold mb-2', themeClasses.text.primary)}>Card Background</h3>
          <p className={cn('text-sm', themeClasses.text.secondary)}>Card surface color</p>
        </div>
        
        <div className={cn('p-4 rounded-lg', themeClasses.background.secondary, getShadowClass('sm'))}>
          <h3 className={cn('font-semibold mb-2', themeClasses.text.primary)}>Muted Background</h3>
          <p className={cn('text-sm', themeClasses.text.secondary)}>Subtle background</p>
        </div>
        
        <div className={cn('p-4 rounded-lg', themeClasses.background.accent, getShadowClass('sm'))}>
          <h3 className={cn('font-semibold mb-2', themeClasses.text.primary)}>Accent Background</h3>
          <p className={cn('text-sm', themeClasses.text.secondary)}>Accent surface</p>
        </div>
      </div>

      {/* Button Variants */}
      <div className="space-y-3">
        <h3 className={cn('text-lg font-semibold', themeClasses.text.primary)}>Button Variants</h3>
        <div className="flex flex-wrap gap-3">
          <button className={cn('px-4 py-2 rounded-md', themeClasses.button.primary)}>
            Primary Button
          </button>
          <button className={cn('px-4 py-2 rounded-md', themeClasses.button.secondary)}>
            Secondary Button
          </button>
          <button className={cn('px-4 py-2 rounded-md', themeClasses.button.outline)}>
            Outline Button
          </button>
          <button className={cn('px-4 py-2 rounded-md', themeClasses.button.ghost)}>
            Ghost Button
          </button>
        </div>
      </div>

      {/* Form Elements */}
      <div className="space-y-3">
        <h3 className={cn('text-lg font-semibold', themeClasses.text.primary)}>Form Elements</h3>
        <div className="space-y-3 max-w-md">
          <input
            type="text"
            placeholder="Enter text here..."
            className={cn(
              'w-full px-3 py-2 rounded-md border',
              themeClasses.input.default,
              themeClasses.input.focus,
              themeClasses.transition.colors
            )}
          />
          <textarea
            placeholder="Enter longer text here..."
            rows={3}
            className={cn(
              'w-full px-3 py-2 rounded-md border resize-none',
              themeClasses.input.default,
              themeClasses.input.focus,
              themeClasses.transition.colors
            )}
          />
        </div>
      </div>

      {/* Text Variants */}
      <div className="space-y-3">
        <h3 className={cn('text-lg font-semibold', themeClasses.text.primary)}>Text Variants</h3>
        <div className="space-y-2">
          <p className={themeClasses.text.primary}>Primary text color</p>
          <p className={themeClasses.text.secondary}>Secondary text color</p>
          <p className={themeClasses.text.accent}>Accent text color</p>
          <p className={themeClasses.text.brand}>Brand text color</p>
        </div>
      </div>
    </div>
  );
}

