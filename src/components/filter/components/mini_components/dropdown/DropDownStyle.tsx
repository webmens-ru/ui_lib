import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: relative;
  width: ${({width}: {width: string}) => width};
  height: 40px;
  cursor: pointer;
  & div {
    display: flex;
    p {
      margin: auto 10px;
    }
  }
`;

export const DropDownHeader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  border: ${({readOnly}: {readOnly: boolean})=> readOnly ? '1px solid #fff': '1px solid rgba(83,92,105,0.2)'} ;
  &::before, &::after {
    content: '';
    position: absolute;
    top: 45%;
    right: 15px;
    width: 6px;
    height: 2px;
    background: #000;
    border-radius: 10px;
    transform: rotate(45deg);
  }
  &::after {
    right: 12px;
    transform: rotate(135deg);
  }
`;

export const DropDownBody = styled.div`
  position: absolute;
  top: ${({ isShow }: {isShow: boolean}) => (isShow ? "40px" : "80px")};
  z-index: 1;
  width: 100%;
  max-height: 200px;
  flex-direction: column;
  transition: opacity 0.3s, top 0.3s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  transform: ${({ isShow }: {isShow: boolean}) => (isShow ? "scale(1)" : "scale(0)")};
  opacity: ${({ isShow }: {isShow: boolean}) => (isShow ? "1" : "0")};
  & div {
    display: flex;
  }
`;

export const DropDownItem = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 40px;
  background: #fff;
  border: 1px solid #ffffff;
  border-top: 0;
  &:hover {
    background: #eee;
  }
  & div {
    margin: auto 10px;
  }
`;
