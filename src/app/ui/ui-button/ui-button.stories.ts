import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { UIButton } from './ui-button';

const meta: Meta<UIButton> = {
  title: 'Example/UIButton',
  component: UIButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<UIButton>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: false,
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};
