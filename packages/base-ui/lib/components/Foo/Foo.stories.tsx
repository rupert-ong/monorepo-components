import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Foo } from '../Foo';

export default {
  title: 'base-ui/Foo',
  component: Foo,
} as Meta;

const Template: Story = (args) => <Foo {...args} />;

export const Default = Template.bind({});
