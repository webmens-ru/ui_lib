import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Menu } from "../../src/components/menu";
import { mockTabsGenerator } from "./__mocks__/menuGenerator";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    tabs: {
      description: "Tab`s array"
    },
    tabsMutation: {
      description: "will call with tabs after change"
    },
    setTab: {
      description: "will call with tab after click"
    },
    isEditable: {
      description: "is it possible to change"
    }
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  items: mockTabsGenerator(30),
};
