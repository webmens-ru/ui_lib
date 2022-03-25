import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loader } from ".";

export default {
  title: "Components/Loader",
  component: Loader,
  argTypes: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Simple = Template.bind({});
Simple.args = {};
