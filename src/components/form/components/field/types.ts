export interface IFieldProps {
  label?: string;
  errors: ErrorsItem[];
  name: string;
  children: JSX.Element;
}

export type ErrorsItem = {
  field: string;
  message: string;
}
