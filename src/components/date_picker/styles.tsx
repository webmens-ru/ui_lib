import styled from "styled-components"

type DatePickerContainerProps = {
    width?: string;
}

export const DatePickerContainer = styled.div`
  width: ${({width}: DatePickerContainerProps) => width ? width : '100%'};
  background: '#fff';
`;