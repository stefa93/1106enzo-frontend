import type { Meta, StoryObj } from '@storybook/react';
// biome-ignore lint/correctness/noUnusedImports: React is needed for JSX
import React from 'react';
import { Button } from './Button';

const meta = {
  title: 'Actions/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Primary button component for user interactions. Uses Tailwind for styling and supports various states and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether to show loading state',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground Story - Interactive demo
export const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

// Feature Stories - Variants
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'md',
  },
};

// Feature Stories - Sizes
export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
};

// Feature Stories - States
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
    variant: 'primary',
    size: 'md',
    loading: true,
  },
};

// Recipe Stories - Common combinations
export const ButtonGroup: Story = {
  name: 'Button Group',
  parameters: {
    docs: {
      description: 'A group of related buttons for common actions like Save/Cancel',
    },
  },
  render: () => (
    <div className="flex space-x-4">
      <Button variant="primary">Save</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  ),
  args: {
    children: 'Button Group Example', // Placeholder to satisfy TypeScript
  },
};

export const LoadingStates: Story = {
  name: 'Loading States',
  parameters: {
    docs: {
      description: 'Different button variants in loading state',
    },
  },
  render: () => (
    <div className="flex flex-col space-y-4">
      <Button variant="primary" loading>
        Saving...
      </Button>
      <Button variant="secondary" loading>
        Processing...
      </Button>
      <Button variant="outline" loading>
        Loading...
      </Button>
    </div>
  ),
  args: {
    children: 'Loading States Example', // Placeholder to satisfy TypeScript
  },
};

export const SizeComparison: Story = {
  name: 'Size Comparison',
  parameters: {
    docs: {
      description: 'Comparison of different button sizes',
    },
  },
  render: () => (
    <div className="flex items-center space-x-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  args: {
    children: 'Size Comparison Example', // Placeholder to satisfy TypeScript
  },
};

export const CallToAction: Story = {
  name: 'Call to Action',
  parameters: {
    docs: {
      description: 'Example of buttons in a call-to-action context',
    },
  },
  render: () => (
    <div className="flex flex-col items-center space-y-4 p-8 bg-gray-100 rounded-lg">
      <h3 className="text-2xl font-bold text-gray-900">Subscribe Now</h3>
      <p className="text-gray-600 mb-4">Get access to all premium features</p>
      <Button variant="primary" size="lg">
        Start Free Trial
      </Button>
      <Button variant="outline" size="md">
        Learn More
      </Button>
    </div>
  ),
  args: {
    children: 'Call to Action Example', // Placeholder to satisfy TypeScript
  },
};
