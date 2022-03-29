export interface IDatePicker{
  initialDateISO?: string
  initialFieldText?: string
  fieldWidth?: string;
  onSelect?: (date: string) => void;
}