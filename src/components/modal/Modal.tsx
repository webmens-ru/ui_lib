import React, { StrictMode, useEffect, useRef, } from "react";
import {
  Container,
  Popup,
  IModalProps,
  CloseBtn,
  Title,
  Footer,
  Header,
} from ".";

export const Modal = ({
  withPopup = true,
  title,
  children,
  buttons,
  closeCb,
}: IModalProps) => {

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref && ref.current) {
      const left = document.body.clientWidth / 2 - ref.current.clientWidth / 2;
      ref.current.style.left = left + "px";
      const top = document.body.clientHeight / 2 - ref.current.clientHeight / 2;
      ref.current.style.top = (top < 0 ? 50 : top) + "px";
    }
  }, [ref]);

  return (
    <StrictMode>
      <Container ref={ref}>
        <Header>
          <Title>{title}</Title>
          <CloseBtn onClick={closeCb} />
        </Header>
        {children}
        <Footer>{buttons}</Footer>
      </Container>
      {withPopup && <Popup onClick={closeCb} />}
    </StrictMode>
  );
};
