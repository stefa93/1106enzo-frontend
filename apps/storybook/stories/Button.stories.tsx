import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight, Mail } from 'lucide-react';

import { Button } from '@enzo/ui';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading',
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Send Mail',
    leftIcon: <Mail className="h-4 w-4" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Next Page',
    rightIcon: <ArrowRight className="h-4 w-4" />,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

export const IconButton: Story = {
  args: {
    size: 'icon',
    children: <Mail className="h-4 w-4" />,
  },
};
