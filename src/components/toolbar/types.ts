export interface IToolbarProps {
  blocks?: IBlockItem[];
  onItemClick?: (item: IListItem, block: IBlockItem) => void;
}

export interface IBlockItem {
  order: number;
  title?: string;
  items: IListItem[]
}

export interface IToolbarList extends Array<IListItem | "separator"> {}

export type ListItemTypes = "metric-filter" | "metric-link" | "separator"

export interface IListItemGeneric {
  order: number;
  type: ListItemTypes;
}

export interface IListItem extends IListItemGeneric {
  order: number;
  title: string;
  value: string | number;
  params?: IListItemParams;
}

export interface IListItemParams {
  url?: string;
  [key: string]: any;
}
