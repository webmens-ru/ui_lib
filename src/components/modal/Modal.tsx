import React, { StrictMode, useEffect } from "react";
import {
  Container,
  Popup,
  IModalProps,
  CloseBtn,
  Title,
  Footer,
  Header,
} from ".";
import { useShowControl } from "../../hooks/useShowControl";

export function Modal({
  withPopup = false,
  isShow,
  title,
  children,
  buttons,
}: IModalProps) {
  const { ref, isShow: insideIsShow, setShow, toggleShow } = useShowControl();

  useEffect(() => {
    setShow(isShow);
  }, [isShow, setShow]);

  useEffect(() => {
    if (ref && ref.current) {
      const left = document.body.clientWidth / 2 - ref.current.clientWidth / 2;
      ref.current.style.left = left + "px";
      const top = document.body.clientHeight / 2 - ref.current.clientHeight / 2;
      ref.current.style.top = (top < 0 ? 50 : top) + "px";
    }
  }, [ref, insideIsShow]);

  if (!insideIsShow) return null;

  return (
    <StrictMode>
      <Container ref={ref}>
        <Header>
          <Title>{title}</Title>
          <CloseBtn onClick={toggleShow} />
        </Header>
        {children}
        <Footer>{buttons}</Footer>
      </Container>
      {withPopup && <Popup />}
    </StrictMode>
  );
}
