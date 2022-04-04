export interface ICheckboxProps {
  value?: CheckboxValue;
  onCheck: (isChecked: boolean) => void
}

export type CheckboxValue = boolean;
