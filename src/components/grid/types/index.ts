export interface IGridProps {
  column?: TColumnItem[];
  row?: TRowItem[];
  footer?: TFooterItem[];
  height?: number;
  minHeight?: string;
  burgerItems?: BurgerItem[];
  isShowCheckboxes?: boolean;
  columnMutation?: (arr: TColumnItem[]) => void;
  onBurgerItemClick?: (arg: BurgerItem, row?: TRowItem) => void;
  onChangeCheckboxes?: (arr: TRowID[]) => void;
  onCellClick?: (cell: TRowItem) => void;
}

export interface IGridContext extends IGridProps {
  children: JSX.Element;
}

export type TColumnItem = {
  id: number;
  code: string;
  title: string;
  visible: number;
  order: number;
  width: number;
};

export type TRowID = number | string;

export type TRowItem = {
  id: TRowID | {title: TRowID, [key: string]: any};
  [key: string]: any;
};

export type TFooterItem = {
  [key: string]: any;
};

export type TColumn = {
  item: TColumnItem;
  onDragStart: () => void;
  onDragEnter: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onDragEnd: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export type TCell = {
  children: any;
  location?: "body" | "header" | "footer";
  onClick?: () => void;
  onDragStart?: () => void;
  onDragEnter?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onDragEnd?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export type THeaderCell = {
  onDragStart?: () => void;
  onDragEnter?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onDragEnd?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export type TBody = {
  item: TColumnItem;
};

export type TFirstRowCell = {
  location?: "body" | "header" | "footer";
  children?: TRowItem
};

export type TCheckbox = {
  location?: "body" | "header";
};

export type BurgerItem = { label: string; [key: string]: any };
