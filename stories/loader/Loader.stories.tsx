import { ComponentStory, Meta } from "@storybook/react";
import React from "react";
import { Loader } from "../../src";

export default {
  title: "Components/Loader",
  component: Loader,
  argTypes: {},
} as Meta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Simple = Template.bind({});
Simple.args = {};
