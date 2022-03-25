import styled from "styled-components";
import Icons from "./icons";

type IconContainerProps = {
  iconWidth: string;
  iconName: keyof typeof Icons;
}

export const IconContainer = styled.div<IconContainerProps>`
  position: relative;
  display: inline-block;
  width: ${({ iconWidth }) => iconWidth || '32px'};

  & > i {
    position: relative;
    display: block;
    padding-top: 100%;
    width: 100%;
    border-radius: 50%;
    background-position: center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color: #a6aab0;
    background-image: ${ ({ iconName }) => `url(${Icons[iconName]})` };
  }
`