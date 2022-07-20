export interface IFileInputProps {
  defaultFileList?: FileInputPropsValue;
  maxLimit?: number;
  extensions?: string[];
  uploadUrl?: string;
  deleteUrl?: string;
  queryParams?: FileInputQueryParams;
  deleteQueryParams?: FileInputQueryParams;
  onChange?: (file: IFileInputItem[]) => void;
}

export type FileInputPropsValue = IFileInputItem | IFileInputItem[];

export type Base64 = string;

export interface IFileInputItem {
  fileName: string;
  fileLink?: string;
  size?: string|number;
}

export interface FileInputQueryParams {
  [key: string]: any;
}

/* State */
export interface TFileInputReducerProps {
  defaultFileList: FileInputPropsValue;
  maxLimit: number;
  extensions: string[];
}

export interface IFileInputState {
  defaultFileList: IFileInputItem[];
  maxLimit: number;
  extensions: string[];
  needCheckExtension: boolean;
  isShowMessage: boolean;
  message: string;
}

export type TFileInputReducerAction = 
  | { type: "SET_FILE", payload: { file: File, filelink: string } }
  | { type: "REMOVE_FILE", payload: { file: IFileInputItem } }
  | { type: "SHOW_MSG", payload: { message: string } }
  | { type: "HIDE_MSG" }
