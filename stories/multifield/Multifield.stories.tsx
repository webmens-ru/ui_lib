import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Multifield from "../../src/components/multifield/Multifield"

const getControlType = (type: string) => {
  return { type }
}
const getTableType = (type: string) => {
  return { type: { summary: type } }
}

const config = {
  title: "Components/Multifield",
  component: Multifield,
  argTypes: {
  },
} as ComponentMeta<typeof Multifield>;

export default config;

const Template: ComponentStory<typeof Multifield> = (args) => <Multifield {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  // data: generateMockData(10)
};
