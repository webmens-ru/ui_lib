import { IDataItem } from "../../select";


export type TProps = {
  filters?: TFilter[];
  currentFilter?: TFilter;
  fields?: TField[];
  getSelectItems?: TGetSelectItems;
  textSearch?: string;
  setCurrentFilter?: (f: TFilter) => void;
  createFilter?: (f: TFilter) => void;
  updateFilter?: (f: TUpdateFilter) => void;
  deleteFilter?: (f: TFilter) => void;
  updateFiltersOrder?: (f: Array<{id: number, order: number}>) => void;
  updateField?: (f: TField, param: string) => void;
  updateFieldsOrder?: (f: TField[]) => void;
  updateTextSearch?: (text: string) => void;
  returnDefaultFields?: () => void;
  onSearch?: (fields: TField[]) => void;
  onClearFilter?: () => void;
}

export type TGetSelectItems = (type: string, queryKey: string) => Promise<any[]>;
export type FieldTypes = "integer" | "number" | "string" | "select" | "multiple_select" | "select_dynamic" | "multiple_select_dynamic" | "date"
export type FieldOperator = "" | "=" | "in" | "isNull" | "isNotNull" | "isNotUsed" | "range" | "%like%" | "%like" | "like%" | "=<>" | ">=" | "<=" | "=>=" | "=<=";
export type DateFieldOperator = "anyDate"|"yesterday"|"today"|"tomorrow"|"currentWeek"|"currentMonth"|"currentQuarter"|"last7Days"|"last30Days"|"last60Days"|"last90Days"|"lastNDays"|"nextNDays"|"nextWeek"|"nextMonth"|"month"|"quarter"|"year"|"exactDate"|"lastWeek"|"lastMonth"|"range"

export type TFilter = {
  id: number;
  title: string;
  visible: boolean | number;
  order: number;
  [key: string]: any;
};

export type TUpdateFilter = {
  id?: number;
  title?: string;
  visible?: boolean | number;
  order?: number;
  [key: string]: any;
};

export type TField = {
  id: number;
  filterId: number;
  order: number;
  value: string[];
  type: FieldTypes;
  title: string;
  queryKey: string;
  code: string;
  visible: boolean | number;
  params: any;
  options: any;
  queryParams?: { [key: string]: any }
};

export type TFilterFieldsItem = {
  id: number;
  order: number;
  value: string[];
  type: string;
  title: string;
  queryKey: string;
  visible: boolean | number;
};

export type TUpdateFieldParams = {
  globalId: number;
  body: {
    filterId: number;
    value: string[];
  };
};

export interface FilterSquare {
  title: string;
  value: string;
}


export type TMouseEvent = React.MouseEvent<HTMLElement>;

type TChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;
type TMouseEventFunc = (e: React.MouseEvent<HTMLElement>) => void;

export interface IAddFieldInput {
  children: string;
  onChange: TChangeEvent;
  checked: boolean;
}

export interface IDashedBlueBtn {
  children: string;
  onClick: TMouseEventFunc;
}

export interface IDashedGreyBtn {
  children: string;
  onClick: TMouseEventFunc;
}

export interface IField {
  item: TField;
  updateField: (props: TField, param: string) => void;
}

export interface ITwoField {
  value: IDataItem;
  setValue: (props: IDataItem[]) => void;
  updateValue: (props: string[]) => void;
  item: TField;
}

export interface IThreeField {
  value: IDataItem;
  setValue: (props: IDataItem[]) => void;
  updateValue: (props: string[]) => void;
  item: TField;
}

export interface IMultipleSelect {
  item: TField;
  onDragStart: () => void;
  onDragEnter: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLElement>) => void;
  updateField: (props: TField, param: string) => void;
  maxHeight?: number;
}

export type TSelectDynamicItem = {
  ID: number;
  VALUE: string;
}

export interface IBodySelectDynamic {
  setItem: (item: TSelectDynamicItem) => void;
}

export type TMultiplySelectDynamicItem = {
  id: number;
  title: string
}

export interface IBodyMultiplySelectDynamic {
  addItem: (item: TMultiplySelectDynamicItem) => void;
  selectedItems: TMultiplySelectDynamicItem[]
  setIsShowMenu: (isShow: boolean) => void;
  item: TFilterFieldsItem;
  setDefaultSelectedItems: (item: TMultiplySelectDynamicItem[]) => void;
  searchInputValue: string;
}

export type TFilterDates = "anyDate"|"yesterday"|"today"|"tomorrow"|"currentWeek"|"currentMonth"|"currentQuarter"|"last7Days"|"last30Days"|"last60Days"|"last90Days"|"lastNDays"|"nextNDays"|"nextWeek"|"nextMonth"|"month"|"quarter"|"year"|"exactDate"|"lastWeek"|"lastMonth"|"range"

export interface IDateFieldDataItem extends IDataItem {
  value: TFilterDates;
}
