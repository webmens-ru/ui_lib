import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from ".";
import { Button } from "../button";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    isShow: {
      description: "boolean",
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  isShow: true,
  buttons: [
    <Button color="success" variant="default">
      Submit
    </Button>,
    <Button color="light" variant="default">
      Cancel
    </Button>,
  ],
};
