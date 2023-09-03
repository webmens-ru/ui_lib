import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Menu } from "../../src";
import { mockTabsGenerator } from "./__mocks__/menuGenerator";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    items: {
      description: "Tab`s array"
    },
    setItem: {
      description: "return tab after click"
    },
    itemsMutation: {
      description: "return mutation array of tab"
    },
    isEditable: {
      description: "is editable order or visible"
    },
    initialMenuId: {
      description: "id for current menu"
    }
  },
} as Meta<typeof Menu>;

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  items: mockTabsGenerator(30),
};

export const Card = Template.bind({});
Simple.args = {
  items: mockTabsGenerator(30),
};
