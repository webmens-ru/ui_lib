export interface IToolbarProps {
  blocks?: IBlockItem[];
  onItemClick?: (item: IListItem, block: IBlockItem) => void;
}

export interface IBlockItem {
  order: number;
  items: IListItem[]
}

export interface IListItem {
  order: number;
  title: string;
  value: string | number;
  params?: IListItemParams;
}

export interface IListItemParams {
  url?: string;
  [key: string]: any;
}
