import type { Meta, StoryObj } from '@storybook/react';
import { Bell, Calendar, Home, Settings } from 'lucide-react';
import { EnzoIcon } from '../EnzoIcon';

const meta = {
  title: 'Icons/Enzo',
  component: EnzoIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'range', min: 16, max: 48, step: 4 },
      defaultValue: 24,
    },
    strokeWidth: {
      control: { type: 'range', min: 1, max: 4, step: 0.5 },
      defaultValue: 2,
    },
    color: {
      control: 'color',
      defaultValue: 'currentColor',
    },
  },
} satisfies Meta<typeof EnzoIcon>;

export default meta;
type Story = StoryObj<typeof EnzoIcon>;

export const Default: Story = {
  args: {
    size: 24,
    strokeWidth: 2,
  },
};

export const Large: Story = {
  args: {
    size: 48,
    strokeWidth: 2,
  },
};

export const Thin: Story = {
  args: {
    size: 32,
    strokeWidth: 1,
  },
};

export const Bold: Story = {
  args: {
    size: 32,
    strokeWidth: 3,
  },
};

export const Colored: Story = {
  args: {
    size: 32,
    strokeWidth: 2,
    color: '#2563eb', // blue-600
  },
};

// Example usage with other icons
export const IconSet = () => {
  return (
    <div className="flex items-center gap-4">
      <EnzoIcon size={32} className="text-primary" />
      <Home size={32} className="text-secondary" />
      <Bell size={32} className="text-accent" />
      <Calendar size={32} className="text-gray-600" />
      <Settings size={32} className="text-gray-800" />
    </div>
  );
};
