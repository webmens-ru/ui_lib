import styled from "styled-components";

type FieldTextProps = {
  hasValue: boolean;
}

export const ViewFieldText = styled.span<FieldTextProps>`
  opacity: ${({hasValue}) => hasValue ? '.8' : '.5'};
  color: ${({hasValue}) => hasValue ? '#000' : '#424956' };

  &:hover {
    opacity: 1;
  }
`

export const ViewFieldList = styled.ul`
  
`
