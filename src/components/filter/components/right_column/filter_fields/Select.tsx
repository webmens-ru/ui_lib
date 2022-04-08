import React, { useState } from "react";
import { useShowControl } from "../../../../../hooks";
import { useCustomContext } from "../../../store/Context";
import {
  FilterFieldTitle,
  SelectBody,
  SelectBodyItem,
  SelectContainer,
  SelectHeader,
} from "../../../styles";
import { IField } from "../../../types";
import { useFieldsDraggable } from "../../../utils/useFieldsDraggble";
import LoadingSelect from "../../mini_components/loading_select";

export function SelectWrapper({ item, updateField, ...props }: IField) {
  const { draggable, events } = useFieldsDraggable();
  const { ref, isShow, setShow } = useShowControl();
  const { state, dispatch } = useCustomContext();
  const [items, setItems] = useState<any[]>([]);

  const clickShowHandle = async () => {
    if (!isShow) {
      setShow(true);
      if (!items.length) {
        const response = await state.getSelectItems(item.type, item.queryKey);
        setItems(response);
      }
    }
  };

  const updateValue = ({ ID, VALUE }: { ID: string; VALUE: string }) => {
    const field = {
      ...item,
      value: [ID, VALUE, ""],
    };
    dispatch({
      type: "SET_FILTER_FIELD_VALUE",
      field,
    });
    updateField(field, "valueWithRefetch");
    setShow(false);
  };

  return (
    <SelectContainer draggable={draggable} {...props}>
      <FilterFieldTitle>{item.title}</FilterFieldTitle>
      <div {...events}>
        <SelectHeader onClick={clickShowHandle}>
          <p>{item.value[1]}</p>
        </SelectHeader>
        <SelectBody isShow={isShow} ref={ref}>
          {items.length ? (
            items.map((item: any, index: number) => (
              <SelectBodyItem key={index} onClick={() => updateValue(item)}>
                <div>{item.VALUE}</div>
              </SelectBodyItem>
            ))
          ) : (
            <LoadingSelect />
          )}
        </SelectBody>
      </div>
      <span></span>
      <span onClick={() => updateField(item, "hide")}></span>
    </SelectContainer>
  );
}
