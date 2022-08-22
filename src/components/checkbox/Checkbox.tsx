import React, { useMemo } from "react";
import { ICheckboxProps } from "./types";

export const Checkbox = ({
  value = false,
  label = "",
  onCheck = () => { }
}: ICheckboxProps) => {
  const randomId = useMemo(() => `wm-checkbox-${Math.random() * 100}`, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.value === 'on'
    onCheck(isChecked)
  }

  return (
    <>
      <input
        type="checkbox"
        id={randomId}
        checked={value}
        onChange={handleChange}
      />
      {label && (
        <label
          htmlFor={randomId}
          children={label}
        />
      )}
    </>
  )
}
