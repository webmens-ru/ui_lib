import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonProps } from '../../src/components/button';
import { mockItems } from './__mocks__/items';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      description: 'Main color',
    },
    children: {
      description: 'Text inside button',
    },
    palette: {
      description: 'Custom color palette',
    },
    svgBefore: {
      description: 'Svg before text',
    },
    buttonProps: {
      description: "Props for button like 'onClick'",
    },
    items: {
      description:
        'label: string(required), borderTop: boolean, borderBottom: boolean',
    },
    itemsProps: {
      description: "Props for dropdown items like 'onClick'",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  color: 'success',
  children: 'button',
};

export const Search = Template.bind({});
Search.args = {
  color: 'primary',
  children: 'search',
  svgBefore: 'white-search',
};

export const Add = Template.bind({});
Add.args = {
  color: 'success',
  children: 'add element',
  svgBefore: 'white-plus',
};

export const Gear = Template.bind({});
Gear.args = {
  color: 'light',
  variant: 'square',
  items: mockItems,
};

export const Dropdown = Template.bind({});
Dropdown.args = {
  color: 'light',
  variant: 'dropdown',
  items: mockItems,
  children: 'dropdown',
};

export const Circle = Template.bind({});
Circle.args = {
  color: 'primary',
  variant: 'circle',
  children: 'circle',
  items: mockItems,
};
