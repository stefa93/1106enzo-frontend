# Styling Guide

## Tailwind CSS Configuration

The project uses Tailwind CSS for styling, with custom configurations for brand colors and other
design tokens.

### Brand Colors

Our main brand color palette is configured in `apps/web/tailwind.config.ts`:

```typescript
brand: {
  DEFAULT: '#f2930d', // Main brand color
  50: '#fff8eb',
  100: '#ffecc7',
  200: '#ffd98a',
  300: '#ffc14d',
  400: '#f2930d',
  500: '#e68a0b',
  600: '#cc7a0a',
  700: '#a66208',
  800: '#804b06',
  900: '#663c05',
}
```

### Usage

To use brand colors in your components:

```tsx
// Default brand color
<div className="text-brand bg-brand">

// Specific shade
<div className="text-brand-400 bg-brand-50">
```

### Other Color Palettes

Besides brand colors, we have other semantic color palettes:

- `primary`: Blue-based palette for primary actions
- `success`: Green palette for success states
- `error`: Red palette for error states
- `warning`: Orange palette for warning states

### Typography

We use the Inter font family as our main typeface:

```tsx
// Font sizes
<p className="text-sm">Small text</p>
<p className="text-base">Base text</p>
<p className="text-lg">Large text</p>
<p className="text-xl">Extra large text</p>
<p className="text-2xl">Heading text</p>
```

### Dark Mode

Dark mode is configured using the `class` strategy. To use dark mode variants:

```tsx
<div className="bg-white dark:bg-gray-900">
```

### Animations

Custom animations are available:

- `animate-fade-in`: Fade in animation
- `animate-fade-out`: Fade out animation
- `animate-slide-in`: Slide in from bottom
- `animate-slide-out`: Slide out to bottom

## Best Practices

1. Use Tailwind's utility classes instead of custom CSS when possible
2. Follow mobile-first responsive design
3. Maintain consistent spacing using Tailwind's spacing scale
4. Use semantic color tokens for better maintainability
5. Ensure proper color contrast for accessibility
