import React, { useCallback, useMemo, useState } from 'react';
import {
  DateFieldContainer,
  DateInput,
  FilterFieldTitle,
} from '../../../styles';
import {
  dateDropDown,
  monthsDropDown,
  quartersDropDown,
  TDateDropDown,
  TMonth,
  TQuarter,
  TYear,
  yearsDropDown,
} from './const';
import { useCustomContext } from '../../../store/Context';
import DropDownWithAttr from '../../mini_components/dropdown/DropDownWithAttr';
import DropDown from '../../mini_components/dropdown/DropDown';
import { IField, IOneField, IThreeField, ITwoField } from '../../../types';
import { useFieldsDraggable } from '../../../utils/useFieldsDraggble';
import { DatePicker } from '../../../../date_picker';

export default function DateField({ item, updateField, ...props }: IField) {
  const [dropDownValue, setDropDownValue] = useState<TDateDropDown>(
    dateDropDown.find((dateItem) => dateItem.title === item.value[0]) ||
      dateDropDown[0]
  );
  const { dispatch } = useCustomContext();

  const updateValue = useCallback(
    (value: string[]) => {
      const field = {
        ...item,
        value,
      };
      dispatch({
        type: 'SET_FILTER_FIELD_VALUE',
        field,
      });
      updateField(field, 'value');
    },
    [dispatch, item, updateField]
  );

  const setDDV = useCallback(
    (value: TDateDropDown) => {
      setDropDownValue(value);
      updateValue([value.title]);
    },
    [updateValue]
  );

  const currentComponent = useMemo(() => {
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
  }, [dropDownValue, item, setDDV, updateValue]);

  const { draggable, events } = useFieldsDraggable();

  return (
    <DateFieldContainer draggable={draggable} {...props}>
      <FilterFieldTitle>{item.title}</FilterFieldTitle>
      <div {...events}>{currentComponent}</div>
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
  const setInputValueCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.match(/^\d*$/)) {
        updateValue([value.title, e.target.value]);
      }
    },
    [updateValue, value.title]
  );

  const buttonChange = useCallback(
    (num: number) => {
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
    },
    [item.value, updateValue, value.title]
  );

  const [selectYear, setSelectYear] = useState(
    yearsDropDown[new Date().getFullYear() - 2000]
  );

  const setYear = useCallback(
    (year: TYear) => {
      setSelectYear(year);
      updateValue([value.title, year.title]);
    },
    [updateValue, value.title]
  );

  const setDate = useCallback(
    (date: string) => {
      updateValue([value.title, date]);
    },
    [updateValue, value.title]
  );

  const firstDropDown = useMemo(
    () => (
      <DropDownWithAttr
        items={dateDropDown}
        width="49%"
        currentItem={value}
        setCurrentItem={setValue}
      />
    ),
    [setValue, value]
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
            fieldWidth="49%"
            onSelect={setDate}
            initialDateISO={item.value[1]}
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
    yearsDropDown[new Date().getFullYear() - 2000]
  );

  const setYear = useCallback(
    (year: TYear) => {
      setSelectYear(year);
      updateValue([item.value[0], item.value[1], year.title]);
    },
    [item.value, updateValue]
  );

  const yearDropDown = useMemo(
    () => (
      <DropDown
        items={yearsDropDown}
        width="32%"
        currentItem={selectYear}
        setCurrentItem={setYear}
      />
    ),
    [selectYear, setYear]
  );

  const [selectMonth, setSelectMonth] = useState(
    monthsDropDown[new Date().getMonth()]
  );

  const setMonth = useCallback(
    (month: TMonth) => {
      setSelectMonth(month);
      updateValue([item.value[0], `${month.id}`, item.value[2]]);
    },
    [item.value, updateValue]
  );

  const monthDropDown = useMemo(
    () => (
      <DropDown
        items={monthsDropDown}
        width="32%"
        currentItem={selectMonth}
        setCurrentItem={setMonth}
      />
    ),
    [selectMonth, setMonth]
  );

  const [selectQuarter, setSelectQuarter] = useState(quartersDropDown[1]);

  const setQuarter = useCallback(
    (quarter: TQuarter) => {
      setSelectQuarter(quarter);
      updateValue([item.value[0], `${quarter.id}`, item.value[2]]);
    },
    [item.value, updateValue]
  );

  const quarterDropDown = useMemo(()=>(
    <DropDown
      items={quartersDropDown}
      width="32%"
      currentItem={selectQuarter}
      setCurrentItem={setQuarter}
    />
  ),[selectQuarter, setQuarter]) ;

  const setFirstDate = useCallback((date: string) => {
    updateValue([item.value[0], date, item.value[2]]);
  },[item.value, updateValue]) ;

  const setSecondDate = useCallback((date: string) => {
    updateValue([item.value[0], item.value[1], date]);
  },[item.value, updateValue]) ;

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
            onSelect={setFirstDate}
            initialDateISO={item.value[1]}
            fieldWidth="32%"
          />
          <DatePicker
            onSelect={setSecondDate}
            initialDateISO={item.value[2]}
            fieldWidth="32%"
          />
        </>
      );
  }
}
