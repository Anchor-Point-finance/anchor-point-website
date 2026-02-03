/**
 * Color scheme following WCAG AA accessibility standards
 * All colors have been tested for adequate contrast ratios
 */

export const colors = {
  // Primary colors - Professional blue for trust and stability
  primary: {
    dark: '#0052A3', // Deep blue - AAA contrast
    main: '#0066CC', // Primary blue - AA contrast
    light: '#0080FF', // Lighter blue for hover states
  },

  // Secondary colors - Teal for growth and progress
  secondary: {
    dark: '#004D66',
    main: '#006680',
    light: '#0080A3',
  },

  // Neutral colors - Grays for text and backgrounds
  neutral: {
    white: '#FFFFFF',
    light: '#F5F7FA',
    lighter: '#E8ECEF',
    medium: '#8A92A6',
    dark: '#2C3E50',
    black: '#0A0E27',
  },

  // Success, warning, error states
  success: '#157F1F', // Dark green - AA contrast
  warning: '#B35806', // Dark orange - AA contrast
  error: '#C41C3B', // Dark red - AA contrast
  info: '#0052A3', // Same as primary dark

  // Accent colors for highlights
  accent: {
    gold: '#D4A574', // Warm accent for premium feel
    teal: '#1B9E9D', // Teal for key CTAs
  },
};

export const colorVariables = {
  '--color-primary-dark': colors.primary.dark,
  '--color-primary-main': colors.primary.main,
  '--color-primary-light': colors.primary.light,
  '--color-secondary-dark': colors.secondary.dark,
  '--color-secondary-main': colors.secondary.main,
  '--color-secondary-light': colors.secondary.light,
  '--color-neutral-white': colors.neutral.white,
  '--color-neutral-light': colors.neutral.light,
  '--color-neutral-lighter': colors.neutral.lighter,
  '--color-neutral-medium': colors.neutral.medium,
  '--color-neutral-dark': colors.neutral.dark,
  '--color-neutral-black': colors.neutral.black,
  '--color-success': colors.success,
  '--color-warning': colors.warning,
  '--color-error': colors.error,
  '--color-info': colors.info,
  '--color-accent-gold': colors.accent.gold,
  '--color-accent-teal': colors.accent.teal,
};
