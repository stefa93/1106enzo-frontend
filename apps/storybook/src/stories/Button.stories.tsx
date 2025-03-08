import type { Meta, StoryObj } from '@storybook/react';

interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
}

const Button = ({ primary = false, label, onClick }: ButtonProps) => {
  const baseClasses = 'rounded-lg px-4 py-2 font-semibold transition-colors';
  const colorClasses = primary
    ? 'bg-blue-500 text-white hover:bg-blue-600'
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return (
    <button type="button" className={`${baseClasses} ${colorClasses}`} onClick={onClick}>
      {label}
    </button>
  );
};

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
  },
};
