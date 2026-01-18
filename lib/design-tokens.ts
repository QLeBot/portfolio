/**
 * Design Tokens - Centralized design system constants
 * Use these throughout the application for consistent styling
 */

export const designTokens = {
  // Colors - Semantic naming
  colors: {
    // Primary text colors
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-700',
      tertiary: 'text-gray-600',
      muted: 'text-gray-500',
      // Light theme variants (for dark backgrounds)
      light: {
        primary: 'text-stone-200',
        secondary: 'text-stone-300',
        tertiary: 'text-stone-400',
      },
    },
    // Background colors
    bg: {
      white: 'bg-white',
      light: 'bg-gray-50',
      muted: 'bg-muted',
      dark: 'bg-gradient-darker',
      card: 'bg-white',
      cardDark: 'bg-uni-slate-light',
    },
    // Border colors
    border: {
      default: 'border-gray-200',
      light: 'border-gray-100',
      dark: 'border-gray-300',
    },
  },

  // Spacing - Consistent spacing scale
  spacing: {
    section: {
      py: 'py-16',
      pyLarge: 'py-24',
    },
    container: {
      padding: 'px-4',
      width: 'w-[95%] lg:w-[90%] xl:w-[85%]',
      maxWidth: 'max-w-7xl',
    },
  },

  // Typography
  typography: {
    font: {
      body: 'space-mono-regular',
      heading: 'space-mono-bold',
    },
    heading: {
      h1: 'text-5xl md:text-6xl lg:text-7xl font-bold',
      h2: 'text-3xl md:text-4xl font-bold',
      h3: 'text-2xl md:text-3xl font-bold',
      h4: 'text-xl md:text-2xl font-semibold',
    },
    body: {
      large: 'text-lg md:text-xl',
      base: 'text-base',
      small: 'text-sm',
    },
  },

  // Layout
  layout: {
    container: 'mx-auto w-[95%] lg:w-[90%] xl:w-[85%] px-4',
    section: 'w-full',
    card: {
      base: 'rounded-lg shadow-md',
      hover: 'transition-all duration-300 hover:shadow-lg',
    },
  },

  // Transitions
  transitions: {
    default: 'transition-all duration-300',
    fast: 'transition-all duration-150',
    slow: 'transition-all duration-500',
  },
} as const;
