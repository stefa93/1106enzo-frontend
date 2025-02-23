import type { Meta, StoryObj } from '@storybook/react';
import { Download } from 'lucide-react';
import { Button } from '../Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    onClick: { action: 'clicked' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    children: 'This is a very long button text that might wrap or cause layout issues',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Download className="mr-2 h-4 w-4" />
        Download
      </>
    ),
  },
};

export const InteractiveButton: Story = {
  args: {
    children: 'Click me',
    onClick: () => alert('Button clicked!'),
  },
};

export const Playground: Story = {
  parameters: {
    controls: {
      include: ['variant', 'size', 'isLoading', 'disabled', 'children'],
    },
  },
};
