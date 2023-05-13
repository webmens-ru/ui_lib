import { ComponentStory, Meta } from "@storybook/react";
import React from "react";

import { FilterAlpha } from "../../src";
import { fieldGenerator } from "./__mocks__/fieldGenerator";
import { filterGenerator } from "./__mocks__/filterGenerator";

export default {
  title: "Components/FilterAlpha",
  component: FilterAlpha,
  argTypes: {
    filters: {
      description: ''
    },
    fields: {
      description: ""
    }
  },
} as Meta<typeof FilterAlpha>;

const Template: ComponentStory<typeof FilterAlpha> = (args) => <FilterAlpha {...args} />;

const test = (...arg: any) => {
console.log("🚀 ~ file: Filter.stories.tsx ~ line 24 ~ test ~ arg", arg)
}

export const Simple = Template.bind({});
Simple.args = {
  filters: filterGenerator(2),
  fields: fieldGenerator(1),
  updateField: test
};
