import React from "react";
import { Select } from "../../../../select";
import {
  FilterFieldTitle,
  SelectContainer,
} from "../../../styles";
import { IField } from "../../../types";
import { useFieldsDraggable } from "../../../utils/useFieldsDraggble";

export function SelectWrapper({ item, updateField, ...props }: IField) {
  const { draggable, events } = useFieldsDraggable();


  return (
    <SelectContainer draggable={draggable} {...props}>
      <FilterFieldTitle>{item.title}</FilterFieldTitle>
      <div {...events}>
        <Select {...item.params} />
      </div>
      <span></span>
      <span onClick={() => updateField(item, "hide")}></span>
    </SelectContainer>
  );
}
