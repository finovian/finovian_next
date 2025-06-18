import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge class names with theme-aware styles
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Theme-aware class name utility for consistent styling
 */
export const themeClasses = {
  // Background variants
  background: {
    primary: 'bg-background text-foreground',
    secondary: 'bg-muted text-muted-foreground',
    accent: 'bg-accent text-accent-foreground',
    card: 'bg-card text-card-foreground',
  },

  // Text variants
  text: {
    primary: 'text-foreground',
    secondary: 'text-muted-foreground',
    accent: 'text-accent-foreground',
    brand: 'text-primary',
  },

  // Border variants
  border: {
    default: 'border-border',
    accent: 'border-accent',
    primary: 'border-primary',
  },

  // Button variants
  button: {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-border bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  },

  // Input variants
  input: {
    default: 'bg-input border-border text-foreground placeholder:text-muted-foreground',
    focus: 'focus:ring-2 focus:ring-ring focus:border-ring',
  },

  // Transition classes
  transition: {
    colors: 'transition-colors duration-300',
    all: 'transition-all duration-300',
    fast: 'transition-all duration-150',
  },
} as const;

/**
 * Generate theme-aware component classes
 */
export function createThemeClasses(base: string, variants?: Record<string, string>) {
  return {
    base: cn(base, themeClasses.transition.colors),
    variants: variants ? Object.fromEntries(
      Object.entries(variants).map(([key, value]) => [key, cn(base, value, themeClasses.transition.colors)])
    ) : {},
  };
}

/**
 * Get theme-aware shadow classes based on elevation
 */
export function getShadowClass(elevation: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'sm') {
  const shadows = {
    xs: 'shadow-xs',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  };
  return shadows[elevation];
}

