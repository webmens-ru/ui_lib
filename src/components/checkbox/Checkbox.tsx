import React from "react";
import { ICheckboxProps } from "./types";

export const Checkbox = ({value, onCheck}: ICheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.value === 'on'
    onCheck(isChecked)
  }

  return (
    <input type="checkbox" checked={value} onChange={handleChange} />
  )
}
