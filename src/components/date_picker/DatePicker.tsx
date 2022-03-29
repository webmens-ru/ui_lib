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
  initialFieldText,
}: IDatePicker) {
  const [dateISO, setDateISO] = useState({
    field: initialFieldText || initialDateISO,
    calendar: initialDateISO || ''
  });

  const { ref, isShow, setShow } = useShowControl();

  useEffect(() => {
    if (onSelect) {
      onSelect(dateISO.calendar);
    }
  }, [dateISO, onSelect]);

  const calendarSelectHandler = (date: string) => {
    setDateISO({field: date, calendar: date});
    setShow(false);
  };

  const fieldSelectHandler = (date: string) => {
    setDateISO((old) => ({...old, calendar: date}))
  }

  return (
    <DatePickerContainer ref={ref} fieldWidth={fieldWidth}>
      <Field
        type="date"
        variant="with_border"
        dateISO={dateISO.field}
        onClick={() => setShow(true)}
        onSelect={fieldSelectHandler}
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
