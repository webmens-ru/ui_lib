import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyleForm = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const FormContainer = styled.div`
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;

  & * {
    box-sizing: border-box;
  }
`

export const FormSubmitContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
`
