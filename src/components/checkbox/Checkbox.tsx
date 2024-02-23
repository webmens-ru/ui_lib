import React, { useMemo } from "react";
import { makeID } from "../../app/utils/strings";
import { CheckboxProps } from "./types";

export const Checkbox = ({
  value = false,
  label = "",
  disabled = false,
  onCheck = () => { }
}: CheckboxProps) => {
  const randomId = useMemo(() => `wm-checkbox-${makeID(6)}`, [])

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
