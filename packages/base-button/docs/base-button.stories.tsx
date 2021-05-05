import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button } from '../lib';
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'inline-radio',
    },
    children: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story = (args) => (
  <Button {...args}>{args.children || ''}</Button>
);
export const Default = Template.bind({});
Default.args = {
  children: 'Hello world',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  variant: 'secondary',
};
Secondary.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
