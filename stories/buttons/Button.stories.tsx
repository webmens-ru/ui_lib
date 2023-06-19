import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Button } from '../../src';
import { ButtonProps } from '../../src/components/button';
import { mockItems } from './__mocks__/items';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      description: 'Цвет кнопки',
    },
    variant: {
      description: "Форма кнопки",
    },
    children: {
      description: 'Текст внутри кнопки',
    },
    palette: {
      description: 'Кастомные настройки элементов кнопки',
    },
    svgBefore: {
      description: 'Иконка перед текстом',
    },
    buttonProps: {
      description: "HTML-пропсы тега <button>",
    },
    items: {
      description: 'label: string(required), borderTop: boolean, borderBottom: boolean',
    },
    itemsProps: {
      description: "Props for dropdown items like 'onClick'",
    },
    dropdownDirection: {
      description: "Горизонтальное направление выпадающего списка"
    },
    dropdownWidth: {
      description: "Ширина выпадающего списка"
    }
  },
};

export default meta

const Template: StoryFn<typeof Button> = (args: ButtonProps) => (
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
