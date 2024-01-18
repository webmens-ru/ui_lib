import { IMenuProps, Item, SliderOpenner } from "../types";
import { MenuStyles } from './../types/index';

export type State = {
  items: Item[];
  disabled: boolean;
  menuStyle: MenuStyles;
  currentItem: Item | undefined;
  isReadyForRender: boolean;
  countTopItems: number;
  isEditable: boolean;
  showNativeSlider: boolean;
  itemsMutation: (items: Item[]) => void
  sliderOpenner?: SliderOpenner
};

export type Action =
  | { type: "set_items"; items: Item[] }
  | { type: "set_count_top_items"; count: number }
  | { type: "set_current_item"; item: Item }
  | { type: "set_disabled"; disabled: boolean };

export interface IContext {
  state: State;
  dispatch: (act: Action) => void;
}

export interface IPropsContext extends IMenuProps {
  children: JSX.Element[];
}
