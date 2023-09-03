import { Meta } from "@storybook/react";
import React from "react";
import { Button, Modal } from "../../src";
import { ModalProps } from "../../src/components/modal_2/Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    showBackdrop: {
      description: "Нужно ли затемлять задний фон"
    },
    header: {
      description: "Разметка шапки попапа"
    },
    body: {
      description: "Разметка тела попапа"
    },
    footer: {
      description: "Разметка подвала попапа"
    },
    style: {
      description: "Стили, применяемые к контейнеру попапа"
    },
    bodyModalClass: {
      description: "HTML-класс, применяемый к контейнеру тела попапа"
    },
    onClose: {
      description: "Событие. Срабатывает при закрытии попапа"
    }
  },
} as Meta<typeof Modal>;

const Template = (args: JSX.IntrinsicAttributes & ModalProps) => <Modal {...args} />

export const Simple = Template.bind({});
Simple.args = {
  isShow: true,
  footer: (
    <div style={{ display: "flex", justifyContent: "center", width: "100%", gap: 12 }}>
      <Button color="success" variant="default">
        Submit
      </Button>
      <Button color="light" variant="default">
        Cancel
      </Button>
    </div>
  ),
};
