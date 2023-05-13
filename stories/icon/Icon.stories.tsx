import { ComponentStory, Meta } from "@storybook/react";
import React from "react";
import { Icon } from "../../src";
import Icons from "../../src/components/icon/icons";

const getControlType = (type: string) => {
  return { type }
}
const getTableType = (type: string) => {
  return { type: { summary: type } }
}

const config = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    iconWidth: {
      description: "Размер иконки",
      control: getControlType('text'),
      table: getTableType('string')
    },
    iconName: {
      description: "Системное имя иконки. Просмотреть список иконок и узнать их системные имена можно в разделе **Iconography**",
      control: {
        type: 'select',
        options: Object.keys(Icons)
      },
      table: getTableType('string')
    },
  }
} as Meta<typeof Icon>

export default config

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  iconWidth: '40px',
  iconName: 'bitrix'
}