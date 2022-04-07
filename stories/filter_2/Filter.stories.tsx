import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Filter2 } from "../../src/components/filter_2";
import { filterGenerator } from "./__mocks__/filterGenerator";
import { fieldGenerator } from "./__mocks__/fieldGenerator";

export default {
  title: "Components/Filter2",
  component: Filter2,
  argTypes: {
    filters: {
      description: ''
    },
    fields: {
      description: ""
    }
  },
} as ComponentMeta<typeof Filter2>;

const Template: ComponentStory<typeof Filter2> = (args) => <Filter2 {...args} />;

const test = (...arg: any) => {
console.log("🚀 ~ file: Filter.stories.tsx ~ line 24 ~ test ~ arg", arg)
}

export const Simple = Template.bind({});
Simple.args = {
  filters: filterGenerator(2),
  fields: fieldGenerator(1),
  updateField: test
};
