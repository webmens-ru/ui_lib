import React, { useState } from "react";
import { useCustomContext } from "../../../store/Context";
import {
  FilterFieldTitle,
  SelectTextStyle,
  SelectTextInput,
} from "../../../styles";
import { stringDropDownValues, TStringValue } from "./const";
import DropDownWithAttr from "../../mini_components/dropdown/DropDownWithAttr";
import { IField } from "../../../types";
import { useFieldsDraggable } from "../../../utils/useFieldsDraggble";

export default function SelectStringField({
  item,
  updateField,
  ...props
}: IField) {
  const { dispatch } = useCustomContext();
  const [selectValue, setSelectValue] = useState(
    stringDropDownValues.find((val) => val.attr === item.value[0]) ||
      stringDropDownValues[0],
  );

  const checkFirstValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_FILTER_FIELD_VALUE",
      field: {
        ...item,
        value: [item.value[0], e.target.value, item.value[2]],
      },
    });
  };

  const changeAttr = (valuesItem: TStringValue) => {
    const field = {
      ...item,
      value: [valuesItem.attr, item.value[1], item.value[2]],
    };
    dispatch({
      type: "SET_FILTER_FIELD_VALUE",
      field,
    });
    setSelectValue(valuesItem);
    updateField(field, "value");
  };

  const hideField = () => {
    const field = {
      ...item,
      visible: false,
    };
    updateField(field, "hide");
    dispatch({ type: "UPDATE_FILTER_FIELD", field });
  };

  const { draggable, events } = useFieldsDraggable();

  return (
    <SelectTextStyle draggable={draggable} {...props}>
      <FilterFieldTitle>{item.title}</FilterFieldTitle>
      <div {...events}>
        <DropDownWithAttr
          items={stringDropDownValues}
          width="30%"
          currentItem={selectValue}
          setCurrentItem={changeAttr}
        />
        <SelectTextInput
          type="text"
          width="67%"
          draggable={false}
          value={item.value[1]}
          onChange={checkFirstValue}
          onBlur={() => updateField(item, "value")}
        />
      </div>
      <span></span>
      <span onClick={hideField}></span>
    </SelectTextStyle>
  );
}
