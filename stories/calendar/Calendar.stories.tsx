import { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { Calendar } from "../../src";

export default {
  title: 'Components/Calendar',
  component: Calendar,
  argTypes: {
    isShow: {
      description: 'boolean value for control',
    },
    withTime: {
      description: 'boolean value for control',
    },
    dateISO: {
      description: 'date in ISO8601 or string text(placeholder)',
    },
    onSelect: {
      description: 'return date in ISO8601 after select',
    },
    top: {
      description: 'css property',
    },
    left: {
      description: 'css property',
    },
    bottom: {
      description: 'css property',
    },
    right: {
      description: 'css property',
    },
  },
} as Meta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  isShow: true,
  withTime: true,
};
