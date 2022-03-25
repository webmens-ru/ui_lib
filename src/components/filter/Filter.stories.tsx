import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Filter } from ".";

export default {
  title: "Components/Filter",
  component: Filter,
  argTypes: {},
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const Simple = Template.bind({});
Simple.args = {};
