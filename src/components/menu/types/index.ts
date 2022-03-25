type TTabsMutation = (props: Item[]) => void;
type TSetTab = (props: Item) => void;
type TMouseEvent = (e: React.MouseEvent<HTMLElement>) => void;
type TMouseEventItem = (e: React.MouseEvent<HTMLElement>, item: Item) => void;

export interface IMenuProps {
  items?: Item[];
  setItem?: TSetTab;
  itemsMutation?: TTabsMutation;
  isEditable?: boolean;
  initialMenuId?: number;
}

export type Item = {
  id: number;
  title: string;
  visible: number;
  order: number;
  menuId: number;
  type: string;
  params: {
    url: string;
    entity: string;
  };
  width?: number;
}

export interface IRenderParagraph {
  item: Item;
  setTab: (item: Item) => void
}

export interface ITopTabs {
  arr: Item[];
  isDraggable: boolean;
  dragStart: (item: Item) => void;
  dragEnter: TMouseEventItem;
  dragEndThenUpdate: TMouseEvent;
  currentId: number;
  setTab: TSetTab;
}



export interface IMenuTabs {
  firstPart: Item[];
  secondPart: Item[];
  isDraggable: boolean;
  dragStart: (item: Item) => void;
  dragEnter: TMouseEventItem;
  dragEndThenUpdate: TMouseEvent
  dragToHide: TMouseEvent
  setTab: (item: Item) => void;
}