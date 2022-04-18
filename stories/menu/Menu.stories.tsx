import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Menu } from "../../src/components/menu";
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
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  items: mockTabsGenerator(30),
};
