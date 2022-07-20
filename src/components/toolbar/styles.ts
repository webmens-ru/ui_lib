import styled from "styled-components";

export const ToolbarContainer = styled.div`
  display: flex;
  font-family: "Open Sans";
  font-size: 14px;
  max-width: 100%;
  margin: 0 5px 10px 5px;
`

export const ToolbarBlock = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 16px;
  margin-right: 10px;
  background: rgba(82,92,105,.08);
  color: #525c69;
  padding: 0 10px;
  max-width: 100%;
  overflow: hidden;
`

export const BlockItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 5px;
  overflow: hidden;
  white-space: nowrap;
  transition: all 220ms ease;
  cursor: pointer;

  &:hover {
    background: rgba(82,92,105,.15);
  }
`
