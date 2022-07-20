import {
  IGridProps,
  BurgerItem,
  TFooterItem,
  TRowItem,
  TColumnItem,
  TRowID,
} from "../types";

export interface IState {
  column: TColumnItem[];
  row: TRowItem[];
  footer: TFooterItem[];
  hoverId: number;
  scrollStep: number;
  scrollFactor: number;
  burgerItems: BurgerItem[];
  isShowCheckboxes: boolean;
  checkedRowsId: TRowID[];
  columnMutation: (arr: TColumnItem[]) => void;
  onBurgerItemClick: (arg: BurgerItem, row?: TRowItem) => void;
  onChangeCheckboxes: (arr: TRowID[]) => void;
  onCellClick: (cell: TRowItem) => void;
}

export type Action =
  | { type: "INITIAL"; props: IGridProps }
  | { type: "SET_COLUMN"; column: TColumnItem[] }
  | { type: "SET_ROW"; row: TRowItem[] }
  | { type: "SET_HOVER_ID"; hoverId: TRowID }
  | { type: "SET_SCROLL_FACTOR"; scrollFactor: number }
  | { type: "SET_CHECKED_ID"; id: TRowID | TRowID[] }
  | { type: "DELETE_CHECKED_ID"; id: TRowID };

export interface IContext {
  state: IState;
  dispatch: (props: Action) => void;
}
