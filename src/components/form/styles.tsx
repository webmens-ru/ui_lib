import styled, { createGlobalStyle } from "styled-components";
import { FormMode } from "./types";

export type FormContainerProps = {
  mode: FormMode;
}

export const GlobalStyleForm = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const FormContainer = styled.div<FormContainerProps>`
  height: 100vh;
  padding: 10px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;

  background: ${({mode}) => mode === "edit" ? '#ffffff' : '#f9fafb'};

  & * {
    box-sizing: border-box;
  }
`

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 11px;
  border-bottom: 1px solid #f0f3f4;
`

export const FormTitle = styled.span`
  font-weight: bold;
  color: #525c69;
  text-transform: uppercase;
`

export const FormModeToggler = styled.span`
  color: #333;
  border-bottom: 1px dashed transparent;
  text-transform: lowercase;
  transition: all 150ms ease-in;
  cursor: pointer;

  &:hover {
    color: #6a6f75;
    border-color: #6a6f75;
  }
`

export const FormButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: white;
  box-shadow: 0 -2px 4px 0 rgba(0,0,0,.05);
  z-index: 200;

  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 60px;
`
