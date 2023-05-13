import { ComponentStory } from "@storybook/react";
import React from "react";
import { FileInput } from "../../src";

const getControlType = (type: string) => {
  return { type }
}
const getTableType = (type: string) => {
  return { type: { summary: type } }
}

const config = {
  title: "Components/FileInput",
  component: FileInput,
  argTypes: {
  },
};

export default config;

const Template: ComponentStory<typeof FileInput> = (args) => <FileInput {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  // data: generateMockData(10)
};
