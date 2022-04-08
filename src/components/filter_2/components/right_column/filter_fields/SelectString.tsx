import React, { useState } from 'react';
import { useCustomContext } from '../../../store/Context';
import {
  FilterFieldTitle,
  SelectTextStyle,
  SelectTextInput,
} from '../../../styles';
import { stringDropDownValues } from './const';
import { IField } from '../../../types';
import { useFieldsDraggable } from '../../../utils/useFieldsDraggble';
import { Select } from '../../../../select';
import { IDataItem } from '../../../../select/types';

export default function SelectStringField({
  item,
  updateField,
  ...props
}: IField) {
  const { dispatch } = useCustomContext();
  const [selectValue, setSelectValue] = useState<IDataItem>(
    stringDropDownValues.find((val) => val.value === item.value[0]) ||
      stringDropDownValues[0]
  );

  const checkFirstValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'SET_FILTER_FIELD_VALUE',
      field: {
        ...item,
        value: [item.value[0], e.target.value, item.value[2]],
      },
    });
  };

  const changeAttr = (valuesItem: IDataItem[]) => {
    console.log(
      '🚀 ~ file: SelectString.tsx ~ line 36 ~ changeAttr ~ valuesItem',
      valuesItem
    );
    // const field = {
    //   ...item,
    //   value: [valuesItem.attr, item.value[1], item.value[2]],
    // };
    // dispatch({
    //   type: "SET_FILTER_FIELD_VALUE",
    //   field,
    // });
    // setSelectValue(valuesItem);
    // updateField(field, "value");
  };

  const hideField = () => {
    const field = {
      ...item,
      visible: false,
    };
    updateField(field, 'hide');
    dispatch({ type: 'UPDATE_FILTER_FIELD', field });
  };

  const { draggable, events } = useFieldsDraggable();

  return (
    <SelectTextStyle draggable={draggable} {...props}>
      <FilterFieldTitle>{item.title}</FilterFieldTitle>
      <div {...events}>
        <Select
          filterable={false}
          value={selectValue}
          data={item.params.data || stringDropDownValues}
          closeOnSelect={true}
          selectWidth="30%"
          onChange={changeAttr}
        />
        <SelectTextInput
          type="text"
          width="67%"
          draggable={false}
          value={item.value[1]}
          onChange={checkFirstValue}
          onBlur={() => updateField(item, 'value')}
        />
      </div>
      <span></span>
      <span onClick={hideField}></span>
    </SelectTextStyle>
  );
}
