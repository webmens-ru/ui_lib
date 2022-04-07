export interface ISelectProps {
  multiple?: boolean;
  filterable?: boolean;
  minInputLength?: number;
  filterDelay?: number;
  value?: ISelectValue;
  data?: IDataItem[];
  dataUrl?: string;
  remoteMode?: boolean;
  closeOnSelect?: boolean;
  selectWidth?: string;
  queryParams?: IQueryParams;
  queryTitleName?: string;
  onChange?: (options: IDataItem[]) => void;
}

export type ISelectValue = (number|string)|(number|string|IDataItem)[] | IDataItem

export interface IDropdownProps {
  isShow?: boolean;
  children?: React.ReactElement;
  multiple?: boolean;
  isShowLettersCount?: boolean; 
  lettersRemaining?: number;
  isNoData?: boolean;
  isLoading?: boolean;
  selectedOptions?: IDataItem[]; 
  data?: IDataItem[];
  onChange?: (option: IDataItem) => void;
}

export interface ISelectReducerProps {
  minInputLength: number;
  data: IDataItem[];
  filterable: boolean;
  value: ISelectValue;
}
export interface ISelectReducerState {
  value: IDataItem[];
  data: IDataItem[]|[];
  filteredData: IDataItem[]|[];
  loading: boolean;
  filterValue: string;
  inited: boolean;
  hasErrorsOnFetch: boolean;
}

export type ISelectReducerAction = 
  | { type: "setLoading", loading: boolean }
  | { type: "setValue", value: IDataItem[] }
  | { type: "setFilterValue", filterValue: string }
  | { type: "setFilteredData", filteredData: IDataItem[] }

export interface IDataItem {
  value: string|number;
  title: string;
}

export interface IQueryParams {
  [key: string]: string;
}
