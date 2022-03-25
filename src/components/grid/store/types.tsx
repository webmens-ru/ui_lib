import {
  IGridProps,
  BurgerItem,
  TFooterItem,
  TRowItem,
  TColumnItem,
} from "../types";

export interface IState {
  column: TColumnItem[];
  row: TRowItem[];
  footer: TFooterItem[];
  hoverId: number;
  scrollStep: number;
  scrollFactor: number;
  columnMutation: (arr: TColumnItem[]) => void;
  burgerItems: BurgerItem[];
  onBurgerItemClick: (arg: BurgerItem, id?: number) => void;
  isShowCheckboxes: boolean;
  checkedRowsId: number[];
  onChangeCheckboxes: (arr: number[]) => void;
  onCellClick: (cell: TRowItem) => void;
}

export type Action =
  | { type: "INITIAL"; props?: IGridProps }
  | { type: "SET_COLUMN"; column: TColumnItem[] }
  | { type: "SET_ROW"; row: TRowItem[] }
  | { type: "SET_HOVER_ID"; hoverId: number }
  | { type: "SET_SCROLL_FACTOR"; scrollFactor: number }
  | { type: "SET_CHECKED_ID"; id: number | number[] }
  | { type: "DELETE_CHECKED_ID"; id: number };

export interface IContext {
  state: IState;
  dispatch: (props: Action) => void;
}
