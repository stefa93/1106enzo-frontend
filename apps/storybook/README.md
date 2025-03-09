# Storybook

This is the Storybook app for our component library. It uses Next.js and Tailwind CSS for styling.

## Getting Started

```bash
# Start Storybook development server
pnpm run dev

# Build Storybook for production
pnpm run build
```

## Creating Stories

1. Create a new `.stories.tsx` file in the `src/stories` directory
2. Import your component and create a story using the Storybook format
3. Use Tailwind classes for styling

Example:
```tsx
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof YourComponent>;

export const Default: Story = {
  args: {
    // Your props here
  },
};
```

## Features

- Next.js integration
- Tailwind CSS support
- TypeScript support
- Automatic documentation generation
- Component testing capabilities 