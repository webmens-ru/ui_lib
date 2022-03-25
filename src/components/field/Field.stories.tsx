import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Field } from ".";

export default {
  title: "Components/Field",
  component: Field,
  argTypes: {
    value: {
      description: "will call with timestamp",
    },
    onSelect: {
      description: "will call with date in ISO"
    }
  },
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => (
  <Field {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  type: "date",
  variant: "with_border"
};
