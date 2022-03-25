import styled from "styled-components";
import draggableIcon from "../assets/draggable.svg";

export const TabsContainer = styled.div`
  & > div:first-of-type {
    height: 60px;
    display: flex;
    background: #fff;
    overflow: auto;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #535c69;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    outline: none;
    transition: all 200ms, min-width 0ms;
  }
`;

export const TabsBtn = styled.button`
  position: relative;
  margin-left: 20px;
  border-bottom: ${({ current }: { current: boolean; isDraggable: boolean }) =>
    current ? "2px solid #1058d0" : "2px solid transparent"};
  color: ${({ current }) => (current ? "#1058d0" : "#545c6a")};
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  background: none;
  cursor: pointer;
  outline: none;
  &::before {
    content: "";
    position: absolute;
    top: 19px;
    left: -12px;
    width: 10px;
    height: 20px;
    display: ${({ isDraggable }) => (isDraggable ? "block" : "none")};
    background: url(${draggableIcon}) no-repeat center;
    cursor: move;
  }
`;

export const MoreBtn = styled.button`
  position: relative;
  margin-left: auto;
  margin-right: 10px;
  cursor: pointer;
  border-bottom: ${({ current }: { current: boolean }) =>
    current ? "2px solid #1058d0" : "2px solid transparent"};
  color: ${({ current }: { current: boolean }) =>
    current ? "#1058d0" : "#545c6a"};
  font-size: 15px;
  font-weight: 600;
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 70px;
  right: 10px;
  width: 230px;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 15;
  & > span {
    position: relative;
    margin: 10px auto;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: -120px;
      width: 100px;
      height: 1px;
      background: #c2c5ca;
    }
    &::after {
      left: auto;
      right: -120px;
    }
  }
  & > p {
    font-size: 13px;
    padding: 10px 0;
    text-align: center;
  }
`;

export const SettingBtn = styled.button`
  position: relative;
  padding: 10px;
  padding-left: 25px;
  font-size: 13px;
  text-align: left;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #ececec;
  }
  & img {
    margin-left: 10px;
  }
`;

export const MenuBtn = styled.button`
  position: relative;
  padding: 10px;
  padding-left: 25px;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
  &:hover {
    background: #ececec;
  }
  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 10px;
    display: ${({ isDraggable }: { isDraggable: boolean }) =>
      isDraggable ? "block" : "none"};
    width: 10px;
    height: 20px;
    background: url(${draggableIcon}) no-repeat center;
    cursor: move;
  }
`;
