import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Text } from '../lib';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: 'select',
    },
  },
} as Meta;

const Template: Story = (args) => <Text {...args}>{args.children}</Text>;
export const Body = Template.bind({});
Body.args = {
  children: 'Hello world',
  variant: 'Body',
};
export const Hero = Template.bind({});
Hero.args = {
  ...Body.args,
  variant: 'Hero',
};
export const Heading = Template.bind({});
Heading.args = {
  ...Body.args,
  variant: 'Heading',
};
