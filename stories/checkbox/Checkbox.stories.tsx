import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Checkbox } from '../../src';
import { ICheckboxProps } from '../../src/components/checkbox/types';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      description: "Лейбел чекбокса"
    },
    value: {
      description: "Значение чекбокса"
    },
    disabled: {
      description: "Определяет, заблокировано ли поле",
      type: "boolean"
    },
    onCheck: {
      description: "Событие. Срабатывает при клике на чекбокс"
    }
  },
};

export default meta

const Template: StoryFn<typeof Checkbox> = (args: ICheckboxProps) => (
  <Checkbox {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  value: true
};
