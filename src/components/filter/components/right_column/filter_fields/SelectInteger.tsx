import React, { useState } from "react";
import { useCustomContext } from "../../../store/Context";
import { IField } from "../../../types";
import {
  FilterFieldTitle,
  SelectTextInput,
  SelectTextStyle,
} from "../../../styles";
import { integerDropDownValues, TIntegerValue } from "./const";
import DropDownWithAttr from "../../mini_components/dropdown/DropDownWithAttr";
import { useFieldsDraggable } from "../../../utils/useFieldsDraggble";

export default function SelectIntegerField({
  item,
  updateField,
  ...props
}: IField) {
  const [selectValue, setSelectValue] = useState<TIntegerValue>(
    integerDropDownValues.find((val) => val.attr === item.value[0]) ||
      integerDropDownValues[0],
  );
  const { dispatch } = useCustomContext();

  const checkFirstValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^\d*$/)) {
      dispatch({
        type: "SET_FILTER_FIELD_VALUE",
        field: {
          ...item,
          value: [item.value[0], e.target.value, item.value[2]],
        },
      });
    }
  };

  const checkSecondValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^\d*$/)) {
      dispatch({
        type: "SET_FILTER_FIELD_VALUE",
        field: {
          ...item,
          value: [item.value[0], item.value[1], e.target.value],
        },
      });
    }
  };

  const changeAttr = (valuesItem: TIntegerValue) => {
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
          items={integerDropDownValues}
          width="30%"
          currentItem={selectValue}
          setCurrentItem={changeAttr}
        />
        {selectValue.id === 4 ? (
          <>
            <SelectTextInput
              type="text"
              width="32%"
              value={item.value[1]}
              onChange={checkFirstValue}
              onBlur={() => updateField(item, "value")}
            />
            <SelectTextInput
              type="text"
              width="32%"
              value={item.value[2]}
              onChange={checkSecondValue}
              onBlur={() => updateField(item, "value")}
            />
          </>
        ) : (
          <SelectTextInput
            type="text"
            width="67%"
            value={item.value[1]}
            onChange={checkFirstValue}
            onBlur={() => updateField(item, "value")}
          />
        )}
      </div>
      <span></span>
      <span onClick={hideField}></span>
    </SelectTextStyle>
  );
}
