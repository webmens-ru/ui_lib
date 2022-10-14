import React from "react";
import { BodyModalContainer, FooterModalContainer, HeaderCancelButton, HeaderModalContainer, ModalBackdrop, ModalContainer, ModalInnerContainer } from "./styles";

interface ModalProps {
  showBackdrop?: boolean;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
  onClose?: () => void;
}

export function Modal({ header, body, footer, showBackdrop = true, style, onClose }: ModalProps) {
  return (
    <>
      <ModalBackdrop onClick={onClose} style={{ display: showBackdrop ? 'block' : 'none' }} />
      <ModalContainer style={style}>
        <ModalInnerContainer>

          <HeaderModalContainer>
            {header}
            <HeaderCancelButton onClick={onClose} />
          </HeaderModalContainer>

          <BodyModalContainer children={body} />
          <FooterModalContainer children={footer} />

        </ModalInnerContainer>
      </ModalContainer>
    </>
  )
}
