import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Form from "../../src/components/form/Form";

const config = {
  title: "Components/Form",
  component: Form,
  argTypes: {
    data: {
      description: "",
    },
  }
} as ComponentMeta<typeof Form>

export default config

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  fields: [
    { type: 'input', name: 'test', label: 'Текстовое поле' },
    { type: 'select', name: 'test1', label: 'Выпадающий список', fieldParams: {
      multiple: true,
      data: [
        {value: 1, title: 'Test1'},
        {value: 2, title: 'Test2'},
      ]
    } }
  ],
  validationRules: [
    { type: "required", fields: ['test', 'test1'], rules: { message: 'Поле обязательно для заполнения' } },
    { type: "integer", fields: ['test'], rules: { message: 'Значение должно быть числом!' } }
  ]
};
