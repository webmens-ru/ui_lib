import { IDataItem } from './../select/types';
import { CheckboxValue } from './../checkbox/types';
import { ICheckboxProps } from 'components/checkbox/types';
import { IDatePicker } from 'components/date_picker/types';
import { ISelectProps, ISelectValue } from 'components/select/types';
import { IInputProps, InputValue } from 'components/input/types';
import { ErrorsItem } from './components/field/types';

export interface IFormProps {
  fields: FormFieldsItem[];
  formTitle?: string;
  mode?: FormMode;
  canToggleMode?: boolean;
  validationRules?: ValidationItem[];
  onFieldChange?: (name: string, value: any) => void;
  onSubmit?: (form: FormValues) => void
}

export type FormMode = "edit" | "view";

export interface FormFieldsItemGeneric {
  name: string;
  label?: string;
  readonly?: boolean;
}

export type FormFieldsItem = FormFieldsItemGeneric &
  (
    | {type: 'input', value?: InputValue, fieldParams?: IInputProps}
    | {type: 'select', value?: ISelectValue, fieldParams?: ISelectProps}
    | {type: 'date', value: string, fieldParams?: IDatePicker}
    | {type: 'checkbox', value?: CheckboxValue, fieldParams?: ICheckboxProps}
  )

export type FormFieldsItemShort = {
  name: string;
  value: any; // TODO: Переписать на типы значений компонентов
}

export interface IFormProviderProps extends IFormProps {
  children: JSX.Element
}

export interface IFormReducerState {
  errors: ErrorsItem[];
  values: FormValues;
  tempValues: FormValues;
  mode: FormMode;
  inited: boolean;
}

export type FormValues = {
  [key: string]: InputValue|IDataItem[]|CheckboxValue|string
}

export type IFormReducerAction = 
  | { type: "toggle_mode" }
  | { type: "submit_form" }
  | { type: "undo_changes" }
  | { type: "set_errors", errors: ErrorsItem[] }
  | { type: "set_field", field: FormFieldsItemShort }
  | { type: "set_form", form: {errors: ErrorsItem[], field: FormFieldsItemShort} }

export interface IFormReducerProps {
  fields: FormFieldsItem[];
  mode: FormMode;
}

/* Validation */
export type ValidationTypes = 
  'required'|'string'|'integer'|'double'|'match'|'email'|'in'|'date'|'time'|'link';

export type ValidationRules = {
  message: string;
  [key: string]: string|number
};

export type ValidationItemGeneric = {
  fields: string[];
}

export type ValidationItem = ValidationItemGeneric & (
  | IAutoHandlingCase
  | IPrimitiveCase
  | IMatchCase
  | IInCase
)

export interface IAutoHandlingCase {
  type: 'required'|'email'|'date'|'time'|'link', rules: {message: string}
}

export interface IPrimitiveCase {
  type: 'string'|'integer'|'double', 
  rules?: {min?: number, max?: number, message?: string}
}

export interface IMatchCase {
  type: 'match', 
  rules?: {pattern?: RegExp, message?: string}
}

export interface IInCase {
  type: 'in', 
  rules?: {range?: string|number[], message?: string}
}

export interface IFormValidatorGeneric {
  target: FormFieldsItemShort;
  result: IValidationErrorItem[]
}

export interface IAutoHandlingValidator extends IFormValidatorGeneric {
  item: IAutoHandlingCase
}

export interface IPrimitiveValidator extends IFormValidatorGeneric {
  item: IPrimitiveCase
}

export interface IMatchValidator extends IFormValidatorGeneric {
  item: IMatchCase
}

export interface IInValidator extends IFormValidatorGeneric {
  target: {
    name: string;
    value: string|number
  }
  item: IInCase
}

export interface IValidationErrorItem {
  field: string;
  message: string;
}
