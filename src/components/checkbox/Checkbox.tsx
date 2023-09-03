import React, { useMemo } from "react";
import { ICheckboxProps } from "./types";

export const Checkbox = ({
  value = false,
  label = "",
  disabled = false,
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
        disabled={disabled}
        checked={value}
        onChange={handleChange}
      />
      {label && (
        <label htmlFor={randomId} children={label} />
      )}
    </>
  )
}
