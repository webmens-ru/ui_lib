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

  // const updateValue = ({ ID, VALUE }: { ID: string; VALUE: string }) => {
  //   const field = {
  //     ...item,
  //     value: [ID, VALUE, ""],
  //   };
  //   dispatch({
  //     type: "SET_FILTER_FIELD_VALUE",
  //     field,
  //   });
  //   updateField(field, "valueWithRefetch");
  //   setShow(false);
  // };

  return (
    <SelectContainer draggable={draggable} {...props}>
      <FilterFieldTitle>{item.title}</FilterFieldTitle>
      <div {...events}>
        <Select {...item.params} onChange={updateField} />
      </div>
      <span></span>
      <span onClick={() => updateField(item, "hide")}></span>
    </SelectContainer>
  );
}
