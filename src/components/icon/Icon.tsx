import React from "react";
import { IIconProps } from "./types";
import { IconContainer } from "./styles";

export const Icon = ({ iconWidth, iconName }: IIconProps) => {
  return (
    <IconContainer iconWidth={iconWidth} iconName={iconName} >
      <i></i>
    </IconContainer>
  )
}
