import { ComponentStory, Meta } from "@storybook/react";
import React from "react";
import { Multifield } from "../../src";

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
} as Meta<typeof Multifield>;

export default config;

const Template: ComponentStory<typeof Multifield> = (args) => <Multifield {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  // data: generateMockData(10)
};
