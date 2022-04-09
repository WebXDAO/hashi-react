import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HSButton from './index';

export default {
  title: '1.UI',
  component: HSButton
} as ComponentMeta<typeof HSButton>;

const Template: ComponentStory<typeof HSButton> = (args) => <HSButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click me!'
};
