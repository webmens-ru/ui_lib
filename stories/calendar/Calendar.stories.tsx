import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Calendar } from "../../src/components/calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
  argTypes: {
    value: {
      description: "will call with timestamp",
    },
  },
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  isShow: true,
  withTime: true
};
