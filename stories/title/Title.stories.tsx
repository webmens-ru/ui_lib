import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from '../../src/components/title';
import { ITitleProps } from '../../src/components/title/types';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    label: {
      description: 'text in title',
    },
    childrenBefore: {
      description: 'JSX elements before text',
      control: {
        type: 'text',
      },
    },
    childrenAfter: {
      description: 'JSX elements after text',
      control: {
        type: 'text',
      },
    },
    variant: {
      description: "one of 'grid-title' | 'slider-title'",
    },
    customConfig: {
      description: '{fontSize: string; fontWeight: number;}',
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args: ITitleProps) => (
  <Title {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  label: 'Title',
};
