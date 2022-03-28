export interface IDatePicker{
  initialValue?: string
  fieldWidth?: string;
  onSelect?: (date: string) => void;
}