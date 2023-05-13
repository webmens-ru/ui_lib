import { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { DatePicker } from '../../src';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {
    onSelect: {
      description: 'return date in ISO8601 after select',
    },
    fieldWidth: {
      description: 'css property',
    },
    initialDateISO: {
      description: 'date in ISO8601 or string text(placeholder)',
    },
    withTime: {
      description: 'boolean value for control',
    },
    initialCalendarTime: {
      description: 'hours:minutes (18:00)',
    },
    format: {
      description: 'default "DD.MM.YYYY hh:mm"',
    },
    svg: {
      description: '"none" | "left" | "right" | undefined',
      control: { type: 'radio' },
    },
  },
} as Meta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  svg: 'left',
};
