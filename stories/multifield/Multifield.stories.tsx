import { Meta } from "@storybook/react";
import React from "react";
import { Multifield } from "../../src";
import { IMultifieldProps } from "../../src/components/multifield";

const config = {
  title: "Components/Multifield",
  component: Multifield,
  argTypes: {
    minLimit: {
      description: "Минимальное количество полей"
    },
    maxLimit: {
      description: "Максимальное количество полей"
    },
    fields: {
      description: "Заранее установленные поля"
    },
    type: {
      description: "Тип добавляемых полей. `input` - текстовые поля. `select` - выпадающие списки. `combo` - текстовое поле и выпадающий список"
    },
    fieldParams: {
      description: "Пропсы, применяемые к каждому добавляемому полю. Соответствует пропсам по присвоенному типу (тип `input` - пропсы для поля **Input** и т.д.). В типе `combo` - применяются только для текстового поля"
    },
    comboParams: {
      description: "Пропсы, применяемые к выпадающему списку для типа `combo`."
    },
    addTitle: {
      description: "Текст для кнопки добавления полей"
    },
    onChange: {
      description: "Событие. Срабатывает при редактировании полей"
    }
  },
} as Meta<typeof Multifield>;

export default config;

const Template = (args: JSX.IntrinsicAttributes & IMultifieldProps) => <Multifield {...args} />

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  // data: generateMockData(10)
};
