import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useShowControl } from '../../hooks';
import { Calendar } from '../calendar';
import { Field } from '../field';
import { IDatePicker } from './types';

export function DatePicker({
  initialValue,
  onSelect,
  fieldWidth = '100%',
}: IDatePicker) {
  const [dateISO, setDateISO] = useState(() =>
    initialValue
      ? new Date(initialValue).toISOString()
      : new Date().toISOString()
  );

  const { ref, isShow, setShow } = useShowControl();

  useEffect(() => {
    if (onSelect) {
      onSelect(dateISO);
    }
  }, [dateISO, onSelect]);

  return (
    <DatePickerContainer ref={ref} fieldWidth={fieldWidth}>
      <Field
        type="date"
        variant="with_border"
        dateISO={dateISO}
        onClick={() => setShow(true)}
        onSelect={setDateISO}
      />
      <Calendar isShow={isShow} dateISO={dateISO} onSelect={setDateISO} />
    </DatePickerContainer>
  );
}

type StyleProps = {
  fieldWidth: string;
};

const DatePickerContainer = styled.div<StyleProps>`
  width: ${({ fieldWidth }) => fieldWidth};
`;
