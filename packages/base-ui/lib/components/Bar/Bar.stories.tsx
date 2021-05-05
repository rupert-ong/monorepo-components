import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Bar } from '../Bar';

export default {
  title: 'base-ui/Bar',
  component: Bar,
} as Meta;

const Template: Story = (args) => <Bar {...args} />;

export const Default = Template.bind({});
