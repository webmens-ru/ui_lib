import { Meta } from "@storybook/react";
import React from "react";
import { Select } from "../../src";
import { ISelectProps } from "../../src/components/select";
import { generateMockData } from "./__mocks__";

const getControlType = (type: string) => {
  return { type }
}
const getTableType = (type: string) => {
  return { type: { summary: type } }
}

const config = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    data: {
      description: "Данные для отображения списка. Является массивом объёктов, где ключ **value** - ID элемента, а **title** - отображаемое имя элемента.",
      control: getControlType('array'),
      table: getTableType("array")
    },
    dataUrl: {
      description: "Ссылка, по которой нужно получить данные для отображения списка.",
      control: getControlType('text'),
      table: getTableType("string")
    },
    remoteMode: {
      description: "Установить в **true**, если нужно загружать данные удалённо. В таком случае массив **data** будет игнорироваться, а данные будут запрашиваться через **dataUrl**.",
      control: getControlType('boolean'),
      table: getTableType("boolean")
    },
    queryParams: {
      description: "Параметры, которые будут передаваться на сервер, если `remoteMode` установлен в **true**.",
      control: getControlType('object'),
      table: getTableType("object")
    },
    queryTitleName: {
      description: "Определяет, под каким ключом отправлять текст, по которому выполняется фильтрация.",
      control: getControlType('text'),
      table: getTableType("string")
    },
    filterable: {
      description: "Определяет, разрешено ли пролизводить фильтрацию.",
      control: getControlType('boolean'),
      table: getTableType("boolean")
    },
    minInputLength: {
      description: "Сколько необходимо напечатать символов, чтобы произвёлся запрос для получения отфильтрованного списка элементов. Если установлено значение **0**, то список будет открываться мгновенно.",
      control: getControlType('number'),
      table: getTableType("number")
    },
    valueField: {
      description: "Определяет, под каким ключом будет передаваться и храниться ID элемента списка",
      control: getControlType('text'),
      table: getTableType('string')
    },
    textField: {
      description: "Определяет, под каким ключом будет передаваться и храниться отображаемый текст элемента списка",
      control: getControlType('text'),
      table: getTableType('string')
    },
    filterDelay: {
      description: "Задержка в миллисекундах, которая воспроизводится после последнего напечатанного символа фильтре, и после который производится поиск по элементам выпадающего списка.",
      control: getControlType('number'),
      table: getTableType("number")
    },
    multiple: {
      description: "Если установить в **true**, позволяет выбирать несколько элементов из списка.",
      control: getControlType('boolean'),
      table: getTableType("boolean")
    },
    closeOnSelect: {
      description: "Если установить в **true**, список элементов будет сразу закрываться после выбора.",
      control: getControlType('boolean'),
      table: getTableType("boolean")
    },
    value: {
      description: "Значение по умолчанию для выпадающего списка. Может быть передано в следующих видах: \n" +
        "- Число или строка, являющееся ID одного из элементов данных; \n" +
        "- Массив чисел или строк, являющееся ID элементов данных. Используется только если параметр **multiple** установлен в **true**;\n" +
        "- Объект с ключами **value** и **title**;\n" +
        "- Массив объектов такого вида, как передаётся в параметр **data**;",
      control: getControlType('array'),
      table: getTableType("number | string | object | array")
    },
    selectWidth: {
      description: "Ширина поля выпадающего списка. Принимаются значения подобного вида: **400px**, **50%** и т.д.",
      control: getControlType('text'),
      table: getTableType("string")
    },
    onChange: {
      description: "Callback-функция, срабатывающая при выборе или удалении значения. Возвращает массив объектов вида, схожего с параметром `data`",
      control: getControlType('function'),
      table: getTableType("function")
    }
  },
} as Meta<typeof Select>;

export default config;

const Template = (args: JSX.IntrinsicAttributes & ISelectProps) => <Select {...args} />

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  data: generateMockData(10)
};

export const Multiple = Template.bind({})
Multiple.args = {
  data: generateMockData(20),
  multiple: true,
  value: [2, 5, 6, 7]
}
