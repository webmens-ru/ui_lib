import React, { useState } from "react";
import {
  DateFieldContainer,
  DateInput,
  FilterFieldTitle,
} from "../../../styles";
import DatePicker from "@webmens-ru/datepicker";
import {
  dateDropDown,
  monthsDropDown,
  quartersDropDown,
  TDateDropDown,
  TMonth,
  TQuarter,
  TYear,
  yearsDropDown,
} from "./const";
import { useCustomContext } from "../../../store/Context";
import DropDownWithAttr from "../../mini_components/dropdown/DropDownWithAttr";
import DropDown from "../../mini_components/dropdown/DropDown";
import { IField, IOneField, IThreeField, ITwoField } from "../../../types";
import { useFieldsDraggable } from "../../../utils/useFieldsDraggble";

export default function DateField({ item, updateField, ...props }: IField) {
  const [dropDownValue, setDropDownValue] = useState<TDateDropDown>(
    dateDropDown.find((dateItem) => dateItem.title === item.value[0]) ||
      dateDropDown[0],
  );
  const { dispatch } = useCustomContext();

  const setDDV = (value: TDateDropDown) => {
    setDropDownValue(value);
    updateValue([value.title]);
  };

  const updateValue = (value: string[]) => {
    const field = {
      ...item,
      value,
    };
    dispatch({
      type: "SET_FILTER_FIELD_VALUE",
      field,
    });
    updateField(field, 'value');
  };

  const getCurrentComponent = () => {
    switch (dropDownValue.id) {
      case 11:
      case 12:
      case 15:
      case 16:
        return (
          <TwoField
            value={dropDownValue}
            setValue={setDDV}
            updateValue={updateValue}
            item={item}
          />
        );
      case 13:
      case 14:
      case 19:
        return (
          <ThreeField
            value={dropDownValue}
            setValue={setDDV}
            updateValue={updateValue}
            item={item}
          />
        );
      default:
        return (
          <OneField
            value={dropDownValue}
            setValue={setDDV}
            updateValue={updateValue}
          />
        );
    }
  };

  const { draggable, events } = useFieldsDraggable();

  return (
    <DateFieldContainer draggable={draggable} {...props}>
      <FilterFieldTitle>{item.title}</FilterFieldTitle>
      <div {...events}>{getCurrentComponent()}</div>
      <span></span>
      <span onClick={() => updateField(item, 'hide')}></span>
    </DateFieldContainer>
  );
}

function OneField({ value, setValue }: IOneField) {
  return (
    <DropDownWithAttr
      items={dateDropDown}
      width="100%"
      currentItem={value}
      setCurrentItem={setValue}
    />
  );
}

function TwoField({ value, setValue, updateValue, item }: ITwoField) {

  const setInputValueCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^\d*$/)) {
      updateValue([value.title, e.target.value]);
    }
  };

  const buttonChange = (num: number) => {
    let secondValue = item.value[1];
    if (secondValue) {
      if (+secondValue + num < 0) {
        secondValue = `0`;
      } else {
        secondValue = `${+secondValue + num}`;
      }
    } else {
      secondValue = `0`;
    }
    updateValue([value.title, secondValue]);
  };

  const [selectYear, setSelectYear] = useState(
    yearsDropDown[new Date().getFullYear() - 2000],
  );

  const setYear = (year: TYear) => {
    setSelectYear(year);
    updateValue([value.title, year.title]);
  };

  const setDate = (date: number) => {
    updateValue([value.title, `${date}`]);
  };

  const firstDropDown = (
    <DropDownWithAttr
      items={dateDropDown}
      width="49%"
      currentItem={value}
      setCurrentItem={setValue}
    />
  );

  switch (value.id) {
    case 15:
      return (
        <>
          {firstDropDown}
          <DropDown
            items={yearsDropDown}
            width="49%"
            currentItem={selectYear}
            setCurrentItem={setYear}
          />
        </>
      );
    case 16:
      return (
        <>
          {firstDropDown}
          <DatePicker
            onChangeDate={setDate}
            initialValue={+item.value[1] || new Date().getTime()}
            mainWidth="49%"
            isShowTime={false}
            format="DD.MM.YYYY"
          />
        </>
      );
    default:
      return (
        <>
          {firstDropDown}
          <DateInput width="49%">
            <input
              type="text"
              value={item.value[1]}
              onChange={setInputValueCheck}
            />
            <button onClick={() => buttonChange(1)}></button>
            <button onClick={() => buttonChange(-1)}></button>
          </DateInput>
        </>
      );
  }
}

function ThreeField({ value, setValue, updateValue, item }: IThreeField) {
  const firstDropDown = (
    <DropDownWithAttr
      items={dateDropDown}
      width="32%"
      currentItem={value}
      setCurrentItem={setValue}
    />
  );

  const [selectYear, setSelectYear] = useState(
    yearsDropDown[new Date().getFullYear() - 2000],
  );

  const setYear = (year: TYear) => {
    setSelectYear(year);
    updateValue([item.value[0], item.value[1], year.title]);
  };

  const yearDropDown = (
    <DropDown
      items={yearsDropDown}
      width="32%"
      currentItem={selectYear}
      setCurrentItem={setYear}
    />
  );

  const [selectMonth, setSelectMonth] = useState(
    monthsDropDown[new Date().getMonth()],
  );

  const setMonth = (month: TMonth) => {
    setSelectMonth(month);
    updateValue([item.value[0], `${month.id}`, item.value[2]]);
  };

  const monthDropDown = (
    <DropDown
      items={monthsDropDown}
      width="32%"
      currentItem={selectMonth}
      setCurrentItem={setMonth}
    />
  );

  const [selectQuarter, setSelectQuarter] = useState(quartersDropDown[1]);

  const setQuarter = (quarter: TQuarter) => {
    setSelectQuarter(quarter);
    updateValue([item.value[0], `${quarter.id}`, item.value[2]]);
  };

  const quarterDropDown = (
    <DropDown
      items={quartersDropDown}
      width="32%"
      currentItem={selectQuarter}
      setCurrentItem={setQuarter}
    />
  );

  const setFirstDate = (date: number) => {
    updateValue([item.value[0], `${date}`, item.value[2]]);
  };

  const setSecondDate = (date: number) => {
    updateValue([item.value[0], item.value[1], `${date}`]);
  };

  switch (value.id) {
    case 13:
      return (
        <>
          {firstDropDown}
          {monthDropDown}
          {yearDropDown}
        </>
      );
    case 14:
      return (
        <>
          {firstDropDown}
          {quarterDropDown}
          {yearDropDown}
        </>
      );
    default:
      return (
        <>
          {firstDropDown}
          <DatePicker
            onChangeDate={setFirstDate}
            initialValue={+item.value[1] || new Date().getTime()}
            mainWidth="32%"
            isShowTime={false}
            format="DD.MM.YYYY"
          />
          <DatePicker
            onChangeDate={setSecondDate}
            initialValue={+item.value[2] || new Date().getTime()}
            mainWidth="32%"
            isShowTime={false}
            format="DD.MM.YYYY"
          />
        </>
      );
  }
}
