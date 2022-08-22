export interface ICheckboxProps {
  value?: CheckboxValue;
  label?: string;
  onCheck?: (isChecked: boolean) => void
}

export type CheckboxValue = boolean;
