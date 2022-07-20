import styled from "styled-components";
import gearSvg from "../assets/grid-gear.svg";

export const GearBtn = styled.div`
  position: relative;
  margin-top: 6px;
  width: 34px;
  height: 32px;
  background: url(${gearSvg}) no-repeat center;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 200px;
  left: calc(50vw - 490px);
  padding: 20px;
  width: 980px;
  background: #fff;
  box-shadow: 0 7px 21px rgba(83, 92, 105, 0.3);
  transition: all 200ms;
  & > h2:first-of-type {
    margin-bottom: 20px;
  }
  & > div:first-of-type {
    min-height: 100px;
    padding: 10px 0;
    display: block;
    column-count: 4;
    & > div {
      margin-bottom: 3px;
      break-inside: avoid-column;
    }
  }
  & > div:last-of-type {
    display: flex;
    align-items: center;
    & > div:first-of-type {
      margin-left: 352px;
      display: flex;
      & > *:first-of-type {
        margin-right: 10px;
      }
    }
    & > div:last-of-type {
      margin-left: auto;
      display: flex;
    }
  }
`;

export const CheckboxBlueContainer = styled.div`
  position: relative;
  padding: 6px 5px 6px 22px;
  width: 230px;
  display: flex;
  background: ${({ checked }: { checked: boolean }) =>
    checked ? "#b3eafc" : "none"};
  border-radius: 2px;
  overflow: hidden;
  &:hover {
    background: #b3eafc;
    & button {
      opacity: 0.5;
    }
  }
  & input[type="checkbox"] {
    position: absolute;
    top: 7px;
    left: 5px;
    padding-top: 5px;
    margin: 0 3px 0 0;
  }
  & label {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: #525c69;
  }
`;
