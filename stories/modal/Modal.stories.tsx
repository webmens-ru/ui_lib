import { ComponentStory, Meta } from "@storybook/react";
import React from "react";
import { Button, Modal } from "../../src";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    isShow: {
      description: "boolean",
    },
  },
} as Meta<typeof Modal>;

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
