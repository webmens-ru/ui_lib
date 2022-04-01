import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatePicker } from '../../src/components/date_picker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {
    value: {
      description: 'will call with timestamp',
    },
    svg: {
      description: 'choose svg position',
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  svg: 'left',
};
