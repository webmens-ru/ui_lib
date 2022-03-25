import React, { StrictMode } from "react";
import { Container, ITitleProps, Text, defaultConfig } from ".";

export function Title({
  label,
  childrenBefore,
  childrenAfter,
  variant = "grid-title",
  customConfig,
}: ITitleProps) {
  return (
    <StrictMode>
      <Container>
        {childrenBefore}
        <Text config={customConfig || defaultConfig[variant]}>{label}</Text>
        {childrenAfter}
      </Container>
    </StrictMode>
  );
}
