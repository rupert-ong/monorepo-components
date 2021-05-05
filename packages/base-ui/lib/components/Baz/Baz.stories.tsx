import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Baz } from '../Baz';

export default {
  title: 'base-ui/Baz',
  component: Baz,
} as Meta;

const Template: Story = (args) => <Baz {...args} />;

export const Default = Template.bind({});
