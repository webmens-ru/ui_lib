export interface ICheckboxProps {
  value?: CheckboxValue;
  label?: string;
  disabled?: boolean;
  onCheck?: (isChecked: boolean) => void
}

export type CheckboxValue = boolean;
