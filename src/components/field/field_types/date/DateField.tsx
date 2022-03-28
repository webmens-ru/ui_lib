import React, { useEffect, useState } from 'react';
import { GreyBorderContainer } from '../../styles/Containers';
import { DateFieldProps } from './types';

export function DateField({
  placeholder,
  dateISO,
  onSelect,
  readOnly = false,
  format,
  ...props
}: DateFieldProps) {
  const [data, setData] = useState<Data>({
    date: new Date(dateISO),
    value: dateToString(new Date(dateISO)),
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (!e.target.value.match(/^\d{0,2}[./,]{0,1}\d{0,2}[./,]{0,1}\d{0,4}$/))
    let value = e.target.value;
    if (isPrint(data.value, value)) {
      let date = new Date(data.date.getTime());

      if (!value.match(/^[\d./,-]*$/) || value.length > 10) return;

      if (value.length === 3 && !value[2].match(/[./,-]/)) {
        date.setDate(+value.slice(0, 2));
        value = data.value + '.' + value.slice(-1);
        if (onSelect) onSelect(date.toISOString());
      }

      if (value.length === 6 && !value[5].match(/[./,-]/)) {
        date.setDate(+value.slice(0, 2));
        date.setMonth(+value.slice(3, 5) - 1);
        value = data.value + '.' + value.slice(-1);
        if (onSelect) onSelect(date.toISOString());
      }

      if (value.length === 10) {
        date.setDate(+value.slice(0, 2));
        date.setMonth(+value.slice(3, 5) - 1);
        date.setFullYear(+value.slice(-4));
        if (onSelect) onSelect(date.toISOString());
      }

      setData({
        date,
        value,
      });
    }

    if (isErase(data.value, e.target.value)) {
      setData((data) => ({
        ...data,
        value,
      }));
    }
  };

  useEffect(() => {
    setData((data) => ({
      ...data,
      value: dateToString(new Date(dateISO), format),
    }));
  }, [dateISO, format]);

  return (
    <GreyBorderContainer {...props}>
      <input
        value={data.value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    </GreyBorderContainer>
  );
}

type Data = {
  date: Date;
  value: string;
};

const isPrint = (old: string, current: string) => {
  return old.length < current.length;
};

const isErase = (old: string, current: string) => {
  return old.length > current.length;
};

const dateToString = (date: Date, format: string = 'DD.MM.YYYY hh:mm') => {
  return format
    .replace('YYYY', `${date.getFullYear()}`)
    .replace('YY', `${date.getFullYear()}`.slice(-2))
    .replace('MM', `0${date.getMonth() + 1}`.slice(-2))
    .replace('DD', `0${date.getDate()}`.slice(-2))
    .replace('hh', `0${date.getHours()}`.slice(-2))
    .replace('mm', `0${date.getMinutes()}`.slice(-2));
};
