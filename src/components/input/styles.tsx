import styled from "styled-components"

type InputContainerProps = {
  readonly: boolean
}

export const InputContainer = styled.div`
  display: flex;
  border: 1px solid;
  width: 100%;
  transition: all 220ms linear;

  background: ${({ readonly }: InputContainerProps) => readonly ? '#f4f4f4' : '#fff'};
  cursor: ${({ readonly }: InputContainerProps) => readonly ? 'not-allowed' : 'default'};
  border-color: ${({ readonly }: InputContainerProps) => readonly ? '#c6cdd3' : 'rgba(83, 92, 105, 0.2)'};

  &:focus, &:hover {
    border-color: #66afe9;
    cursor: text;
  }

  & > input {
    width: 100%;
    position: relative;
    background: inherit;
    cursor: inherit;
    height: 40px;
    padding: 0 11px;
    color: #535c69;
    outline: none;
    border: none;
  }
`

export const PrefixIconContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  padding: 0 8px;
  height: 60%;
  border-right: 1px solid rgba(221,224,232,.54);

  &:hover {
    cursor: default;
  }
`

export const PostfixIconContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  padding-right: 8px;
`