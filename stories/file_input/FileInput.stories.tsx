import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FileInput from "../../src/components/file_input/FileInput"

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
} as ComponentMeta<typeof FileInput>;

export default config;

const Template: ComponentStory<typeof FileInput> = (args) => <FileInput {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  // data: generateMockData(10)
};
