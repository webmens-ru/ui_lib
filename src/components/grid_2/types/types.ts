import { Column } from 'react-data-grid';
import { PaginationProps } from '../../pagination';
import { EditorTypes } from './editors';

export interface IGridProps {
  columns?: TRawColumnItem[];
  rows?: TRowItem[];
  footer?: unknown[];
  height?: number;
  burgerItems?: BurgerItem[];
  rowKey?: string;
  burgerKey?: string;
  isShowCheckboxes?: boolean;
  pagination?: PaginationProps;
  rowColorKey?: string;
  cellColorKey?: CellColorKey | CellColorKey[];
  columnMutation?: (arr: TRawColumnItem[]) => void;
  onRowMutation?: (row: TRowItem, key: string, value: any) => void;
  onBurgerItemClick?: (arg: BurgerItem, row: TRowItem) => void;
  onChangeCheckboxes?: (arr: TRowID[]) => void;
  onCellClick?: (cell: TCellItem) => void;
}

export type TColumnType = "string" | "number" | "date" | "image" | "link"
export type GridColors = "red" | "blue" | "green" | "yellow" | "orange"

export type TRawColumnItem = {
  id: number;
  code: string;
  type: TColumnType;
  title: string;
  visible: boolean;
  frozen?: boolean | null;
  resizeble?: boolean | null;
  reordering?: boolean | null;
  sortable?: boolean | null;
  editable?: boolean | null;
  editor?: {
    type: EditorTypes,
    editorProps?: {
      name?: string
    }
  }
  order: number;
  width: number;
};

export interface TColumnItem extends Column<TRowItem, unknown> {
  instance: TRawColumnItem
}

export type TRowID = number | string;

export type TRowItem = {
  id: TRowID | { title: TRowID, [key: string]: any };
  [key: string]: any;
};

export type TCellItem = {
  [key: string]: any
}

export interface CellColorKey {
  column: string;
  key: string;
}

interface BurgetItemGeneric {
  id: string;
  title: string;
  handler: string;
}

export type BurgerItem = BurgerOpenApplication | BurgerOpenPath | BurgerOpenApplicationPortal | BurgerTrigger

interface BurgerOpenApplication extends BurgetItemGeneric {
  type: "openApplication";
  params: {
    path: string;
    width: number;
    updateOnCloseSlider: boolean;
    params: any;
  }
  iframeUrl?: string;
}

interface BurgerOpenPath extends BurgetItemGeneric {
  type: "openPath";
  params: {
    updateOnCloseSlider: boolean;
  }
}

interface BurgerOpenApplicationPortal extends BurgetItemGeneric {
  type: "openApplicationPortal";
  params: {
    handler: string;
    updateOnCloseSlider: boolean;
  }
}

interface BurgerTrigger extends BurgetItemGeneric {
  type: "trigger";
  params: {
    updateOnCloseSlider: boolean;
    popup: any;
    output: any;
    [key: string]: any;
  }
}
