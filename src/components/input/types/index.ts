export interface IInputProps {
  value: string;
  placeholder: string;
  readonly: boolean;
  iconPosition: "none"|"left"|"right"|"both";
  iconLeftName: string;
  iconRightName: string;
  onChange: (value: string) => void
}