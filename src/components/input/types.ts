import { IconName } from "../icon/types";

export interface IInputProps {
  value?: InputValue;
  placeholder?: string;
  readonly?: boolean;
  iconPosition?: "none"|"left"|"right"|"both";
  iconLeftName?: IconName;
  iconRightName?: IconName;
  onChange?: (value: string) => void
  onBlur?: () => void
}

export type InputValue = string
