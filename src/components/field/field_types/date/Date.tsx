import React, { useEffect, useState } from "react";
import { GreyBorderContainer } from "../../styles/Containers";
import { DateFieldProps } from "./types";

export function DateField({
  placeholder = "",
  dateISO,
  onSelect,
  ...props
}: DateFieldProps) {
  const [data, setData] = useState<Data>({
    date: new Date(dateISO),
    value: "",
    placeholder: placeholder || new Date(dateISO).toDateString(),
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(/^\d{0,2}[./,]{0,1}\d{0,2}[./,]{0,1}\d{0,4}$/))
      return;
    let value = e.target.value;
    const date = new Date(data.date.getTime());
    if (isPrint(data.value, value)) {
      if (value.length === 3 && !value[2].match(/[./,]/)) {
        date.setDate(+value.slice(0, 2));
        value = data.value + "." + value.slice(-1);
        if (onSelect) onSelect(date.toISOString());
      }
      if (value.length === 6 && !value[5].match(/[./,]/)) {
        date.setMonth(+value.slice(3, 5) - 1);
        value = data.value + "." + value.slice(-1);
        if (onSelect) onSelect(date.toISOString());
      }
      if (value.length === 10) {
        date.setFullYear(+value.slice(-4));
        if (onSelect) onSelect(date.toISOString());
      }
    }
    setData({
      date,
      value,
      placeholder: placeholder.slice(value.length),
    });
  };

  useEffect(() => {
    setData((data) => ({
      ...data,
      value: new Date(dateISO).toDateString(),
      placeholder: ''
    }));
  }, [dateISO]);

  return (
    <GreyBorderContainer {...props}>
      <p>
        <span>{data.value}</span>
        {data.placeholder}
      </p>
      <input value={data.value} onChange={onChange} />
    </GreyBorderContainer>
  );
}

type Data = {
  date: Date;
  value: string;
  placeholder: string;
};

const isPrint = (old: string, current: string) => {
  return old.length < current.length;
};
