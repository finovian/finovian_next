// Accessibility utilities and helpers

// ARIA attributes helper
export const generateAriaAttributes = ({
  label,
  describedBy,
  expanded,
  controls,
  pressed,
  selected,
  hidden,
  live = 'polite',
}: {
  label?: string;
  describedBy?: string;
  expanded?: boolean;
  controls?: string;
  pressed?: boolean;
  selected?: boolean;
  hidden?: boolean;
  live?: 'polite' | 'assertive' | 'off';
}) => {
  const attributes: Record<string, unknown> = {};
  
  if (label) attributes['aria-label'] = label;
  if (describedBy) attributes['aria-describedby'] = describedBy;
  if (expanded !== undefined) attributes['aria-expanded'] = expanded;
  if (controls) attributes['aria-controls'] = controls;
  if (pressed !== undefined) attributes['aria-pressed'] = pressed;
  if (selected !== undefined) attributes['aria-selected'] = selected;
  if (hidden !== undefined) attributes['aria-hidden'] = hidden;
  if (live !== 'off') attributes['aria-live'] = live;
  
  return attributes;
};

// Focus management
export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
    
    if (e.key === 'Escape') {
      element.focus();
    }
  };
  
  element.addEventListener('keydown', handleTabKey);
  
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

// Color contrast checker
export const getContrastRatio = (color1: string, color2: string): number => {
  // This is a simplified version - in production, use a proper color contrast library
  const getLuminance = (color: string): number => {
    // Simplified luminance calculation
    const rgb = parseInt(color.replace('#', ''), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    
    const rsRGB = r / 255;
    const gsRGB = g / 255;
    const bsRGB = b / 255;
    
    const rLin = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
    const gLin = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
    const bLin = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);
    
    return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
  };
  
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
};

// Keyboard navigation helper
export const handleKeyboardNavigation = (
  e: KeyboardEvent,
  items: HTMLElement[],
  currentIndex: number,
  onNavigate: (index: number) => void
) => {
  switch (e.key) {
    case 'ArrowDown':
    case 'ArrowRight':
      e.preventDefault();
      const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      onNavigate(nextIndex);
      items[nextIndex]?.focus();
      break;
      
    case 'ArrowUp':
    case 'ArrowLeft':
      e.preventDefault();
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      onNavigate(prevIndex);
      items[prevIndex]?.focus();
      break;
      
    case 'Home':
      e.preventDefault();
      onNavigate(0);
      items[0]?.focus();
      break;
      
    case 'End':
      e.preventDefault();
      const lastIndex = items.length - 1;
      onNavigate(lastIndex);
      items[lastIndex]?.focus();
      break;
  }
};

// Screen reader announcements
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.setAttribute('class', 'sr-only');
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Reduced motion preference
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// High contrast preference
export const prefersHighContrast = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-contrast: high)').matches;
};

// Focus visible utility
export const addFocusVisibleSupport = () => {
  if (typeof document === 'undefined') return;
  
  let hadKeyboardEvent = true;
  
  const _keyboardThrottleTimeout = {
    current: 0,
  };
  
  const detectKeyboard = (e: KeyboardEvent) => {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    
    hadKeyboardEvent = true;
  };
  
  const detectPointer = () => {
    hadKeyboardEvent = false;
  };
  
  const onFocus = (e: FocusEvent) => {
    const target = e.target as HTMLElement;
    if (hadKeyboardEvent || target.matches(':focus-visible')) {
      target.classList.add('focus-visible');
    }
  };
  
  const onBlur = (e: FocusEvent) => {
    const target = e.target as HTMLElement;
    target.classList.remove('focus-visible');
  };
  
  document.addEventListener('keydown', detectKeyboard, true);
  document.addEventListener('mousedown', detectPointer, true);
  document.addEventListener('pointerdown', detectPointer, true);
  document.addEventListener('touchstart', detectPointer, true);
  document.addEventListener('focus', onFocus, true);
  document.addEventListener('blur', onBlur, true);
};

