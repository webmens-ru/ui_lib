import { IInputProps } from "../../src/components/input/types";
import React from "react";
import Icons from "../../src/components/icon/icons";

import { Input } from "../../src/components/input/Input";

const getControlType = (type: string) => {
  return { type }
}
const getTableType = (type: string) => {
  return { type: { summary: type } }
}

const config = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    value: {
      description: 'Значение поля по умолчанию.',
      control: getControlType('text'),
      table: getTableType('string')
    },
    placeholder: {
      description: 'Плейсхолдер поля.',
      control: getControlType('text'),
      table: getTableType('string')
    },
    readonly: {
      description: 'Если установить в **true**, поле будет неизменяемо.',
      control: getControlType('boolean'),
      table: getTableType('boolean')
    },
    iconPosition: {
      description: "Определяет, с какой стороны расположить иконку либо иконки.",
      control: {
        type: 'radio',
        options: ['none', 'left', 'right', 'both']
      },
      table: getTableType('string')
    },
    iconLeftName: {
      description: "Системное имя иконки для левой части поля. Список всех иконок можно узнать в разделе **Icons**.",
      control: {
        type: 'select',
        options: Object.keys(Icons)
      },
      table: getTableType('string')
    },
    iconRightName: {
      description: "Системное имя иконки для правой части поля. Список всех иконок можно узнать в разделе **Icons**.",
      control: {
        type: 'select',
        options: Object.keys(Icons)
      },
      table: getTableType('string')
    },
    onChange: {
      description: 'Callback-функция, вызывающаяся при каждом изменении поля. Возвращает текущее значение поля.',
      control: getControlType('function'),
      table: getTableType('function')
    },
  }
}

export default config

const Template = (args: JSX.IntrinsicAttributes & IInputProps) => <Input {...args} />

export const BasicUsage = Template.bind({});