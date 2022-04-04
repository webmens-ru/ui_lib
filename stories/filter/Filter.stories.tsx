import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Filter } from "../../src/components/filter";
import { filterGenerator } from "./__mocks__/filterGenerator";
import { fieldGenerator } from "./__mocks__/fieldGenerator";

export default {
  title: "Components/Filter",
  component: Filter,
  argTypes: {
    filters: {
      description: ''
    },
    fields: {
      description: ""
    }
  },
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

const test = (...arg: any) => {
console.log("🚀 ~ file: Filter.stories.tsx ~ line 24 ~ test ~ arg", arg)
}

export const Simple = Template.bind({});
Simple.args = {
  filters: filterGenerator(2),
  fields: fieldGenerator(2),
  updateField: test
};
