import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Badge } from '../../src';
import { IBadgeProps } from '../../src/components/badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    type: {
      description: 'Цветовая схема бейджа',
    },
    count: {
      description: 'Текст внутри бейджа',
    },
  },
};

export default meta

const Template: StoryFn<typeof Badge> = (args: IBadgeProps) => (
  <Badge {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  type: "primary",
  count: "test"
};
