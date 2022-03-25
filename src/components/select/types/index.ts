export interface ISelectProps {
  multiple: boolean;
  filterable: boolean;
  minInputLength: number;
  filterDelay: number;
  value: ISelectValue;
  data: IDataItem[];
  dataUrl: string;
  remoteMode: boolean;
  closeOnSelect: boolean;
  selectWidth: string;
  queryParams: IQueryParams;
  queryTitleName: string;
  onChange: (options: IDataItem[]) => void;
}

export type ISelectValue = (number|string|IDataItem)[] | IDataItem

export interface IDropdownProps {
  isShow: boolean;
  multiple: boolean;
  isShowLettersCount: boolean; 
  lettersRemaining: number;
  isNoData: boolean;
  isLoading: boolean;
  selectedOptions: IDataItem[]; 
  data: IDataItem[];
  onChange: (option: IDataItem) => void;
}

export interface ISelectReducerState extends ISelectProps {
  remoteMode: boolean;
  filteredData: IDataItem[];
  loading: boolean;
  filterValue: string;
  inited: boolean;
  hasErrorsOnFetch: boolean;
}

export interface IDataItem {
  value: string|number;
  title: string;
}

export interface IQueryParams {
  [key: string]: string;
}
