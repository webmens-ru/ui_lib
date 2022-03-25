import styled from "styled-components";

type SelectContainerProps = {
  width: string;
  isShow: boolean;
}

/* SELECT BASE */
export const SelectContainer = styled.div`
  font-family: 'Times New Roman', Times, serif;
  position: relative;
  width: ${({width}: SelectContainerProps) => width || '100%'};
  border: 1px solid transparent;
  border-color: ${({isShow}: SelectContainerProps) => isShow ? '#66afe9' : 'rgba(83, 92, 105, 0.2)'};
  background: #fff;
  cursor: pointer;
  transition: border .3s ease,background-color .3s ease,color .3s ease,padding .3s ease;
  box-sizing: border-box;

  &:focus, &:hover {
    border-color: #66afe9;
  }
`

export const SelectInner = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-right: 32px;
  line-height: 32px;
`

export const SelectFilter = styled.input`
  padding: 12px 8px;
  height: auto;
  border: none;
  outline: none;
  flex-grow: 1;
  cursor: pointer;

  &::placeholder {
    font-family: 'Times New Roman', Times, serif;
    padding: 0 5px;
    font-size: 16px;
    opacity: .5;
  }
`

export const SelectCurrentValue = styled.span`
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: #535c69;
`

export const SelectErrorMsg = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  color: darkred;
`
/* SELECT BASE */

/* SELECT RIGHT ARROW */
export const SelectSuffix = styled.span`
  position: absolute;
  top: 0;
  right: 12px;
  display: inline-flex;
  height: 100%;
  align-items: center;
  transform: ${({isShow}: SelectContainerProps) => isShow ? 'rotate(-180deg)' : 'none'};
  transition: transform 220ms ease;
  z-index: 100;
`

export const Suffix = styled.span`
  border-left: 2px solid #535c69;
  border-top: 2px solid #535c69;
  transform: rotate(-135deg);
  width: 8px;
  height: 8px;
`
/* SELECT RIGHT ARROW */

/* TAGS */
export const SelectTagsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 4px;
  z-index: 500;
`

export const SelectTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 2px 8px;
  background: #bcedfc;
  color: #535c69;
  height: 32px;
  cursor: default;
`

export const TagTitle = styled.span`

`

export const TagRemove = styled.span`
  &::before {
    content: '✖';
    font-size: .8rem;
    opacity: .75;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 110ms ease;
  }

  &:hover::before {
    opacity: 1;
  }
`
/* TAGS */
