import styled from "styled-components";
import draggableIcon from "../../../assets/svg/draggable.svg";

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FieldDragHandle = styled.div`
  width: 10px;
  height: 15px;
  background: url(${draggableIcon}) no-repeat center;
  cursor: move;
`

export const FieldRemoveHandle = styled.div.attrs({ children: "✖" })`

`
