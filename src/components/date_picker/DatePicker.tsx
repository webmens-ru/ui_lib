import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useShowControl } from '../../hooks';
import { Calendar } from '../calendar';
import { Field } from '../field';
import { IDatePicker } from './types';

export function DatePicker({
  onSelect,
  fieldWidth = '100%',
  initialDateISO,
  initialCalendarTime,
  svg,
}: IDatePicker) {
  const [dateISO, setDateISO] = useState(() => {
    let calendar = initialDateISO || '';
    if (initialCalendarTime) {
      calendar = setTime(initialCalendarTime).toISOString();
    }
    return {
      field: initialDateISO,
      calendar,
    };
  });

  const { ref, isShow, setShow } = useShowControl();

  useEffect(() => {
    if (onSelect) {
      onSelect(dateISO.calendar);
    }
  }, [dateISO, onSelect]);

  useEffect(() => {
    setDateISO((old) => ({ ...old, field: initialDateISO }));
  }, [initialDateISO]);


  const calendarSelectHandler = (date: string) => {
    setDateISO({ field: date, calendar: date });
    setShow(false);
  };

  const fieldSelectHandler = (date: string) => {
    setDateISO((old) => ({ ...old, calendar: date }));
  };

  return (
    <DatePickerContainer ref={ref} fieldWidth={fieldWidth}>
      <Field
        type="date"
        variant="with_border"
        dateISO={dateISO.field}
        onClick={() => setShow(true)}
        onSelect={fieldSelectHandler}
        svg={svg}
      />
      <Calendar
        isShow={isShow}
        dateISO={dateISO.calendar}
        onSelect={calendarSelectHandler}
        withTime={true}
      />
    </DatePickerContainer>
  );
}

type StyleProps = {
  fieldWidth: string;
};

const DatePickerContainer = styled.div<StyleProps>`
  width: ${({ fieldWidth }) => fieldWidth};
`;

function isValidDateISO(dateISO?: string) {
  if (!dateISO) return false;
  const date = new Date(dateISO);
  return date instanceof Date && !isNaN(date.getTime());
}

function createDate(dateISO?: string) {
  return isValidDateISO(dateISO) && dateISO ? new Date(dateISO) : new Date();
}

function setTime(initialCalendarTime?: string, initialDateISO?: string) {
  let date = createDate(initialDateISO);
  if (!initialCalendarTime) return date;
  let time = initialCalendarTime.split(':');
  date.setHours(+time[0]);
  date.setMinutes(+time[1]);
  return date;
}
