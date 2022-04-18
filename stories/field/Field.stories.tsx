import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Field } from '../../src/components/field';

export default {
  title: 'Components/Field',
  component: Field,
  argTypes: {
    type: {
      description: "one of 'date' ",
    },
    variant: {
      description: "one of 'with_border' | 'dashed_underline' | 'text_bold'",
    },
    onSelect: {
      description: 'return date in ISO8601 if correct',
    },
    props: {
      description: 'css properties for container',
    },
  },
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  type: 'date',
  variant: 'with_border',
};
