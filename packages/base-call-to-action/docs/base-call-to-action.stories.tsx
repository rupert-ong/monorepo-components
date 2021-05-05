import { Meta, Story } from '@storybook/react';
import React from 'react';
import { CallToAction } from '../lib';

export default {
  title: 'CallToAction',
  component: CallToAction,
  argTypes: {
    text: {
      control: 'text',
    },
    buttonText: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story = (args) => (
  <CallToAction text={args.text} buttonText={args.buttonText} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Buy now',
  text: 'Exclusive offer',
};
