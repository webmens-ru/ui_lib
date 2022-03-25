import React from "react";
import { useColumnData } from "../hooks/column/useColumnData";
import { useCustomContext } from "../store";
import { ColumnContainer } from "../styles";
import { FirstRowCell } from "./FirstRowsCell";

export function FirstColumn() {
  const { state } = useCustomContext();
  const { height, body } = useColumnData();
  return (
    <ColumnContainer
      style={{
        height,
      }}
    >
      <FirstRowCell location="header" key="header" />
      {body.map((rowItem, index) => (
        <FirstRowCell key={index}>{rowItem}</FirstRowCell>
      ))}

      {!!state.footer.length && <FirstRowCell location="footer" key="footer" />}
    </ColumnContainer>
  );
}
