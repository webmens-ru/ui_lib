import React from "react";
import { IIconProps } from "./types";
import { IconContainer } from "./styles";

export const Icon = ({ iconWidth, iconName }: IIconProps) => {
  if(iconName === "undefined") return null
  return (
    <IconContainer iconWidth={iconWidth} iconName={iconName} >
      <i></i>
    </IconContainer>
  )
}
