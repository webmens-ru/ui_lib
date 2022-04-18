import styled from "styled-components";
import GreyClose from "./assets/grey-close.svg";

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #33333347;
  z-index: 100;
`;

export const Container = styled.div`
  position: fixed;
  padding: 20px;
  min-width: 100px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 7px 21px rgba(83, 92, 105, 0.12),
    0 -1px 6px 0 rgba(83, 92, 105, 0.06);
  z-index: 101;
  & * {
    font-family: "Open Sans", sans-serif;
  }
`;

export const Header = styled.div`
  width: 100%;
  position: relative;
`;
export const Footer = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  & > * {
    margin: 0 5px;
  }
`;

export const Title = styled.h3`
  padding-right: 50px;
  color: #80868e;
  font-size: 13px;
  font-weight: 600;
`;

export const CloseBtn = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  background: url(${GreyClose}) no-repeat center;
  cursor: pointer;
`;
