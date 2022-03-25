import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from ".";
import { ITitleProps } from "./types";

export default {
  title: "Components/Title",
  component: Title,
  argTypes: {
    label: {
      description: "Text",
    },
    childrenBefore: {
      description: "JSX before text",
      control: {
        type: "text",
      },
    },
    childrenAfter: {
      description: "JSX after text",
      control: {
        type: "text",
      },
    },
    variant: {
      description: "Variant of title",
    },
    customConfig: {
      description: "{ fontSize, fontWeight }",
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args: ITitleProps) => <Title {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  label: "Title",
};
