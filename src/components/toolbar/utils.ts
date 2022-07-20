import { IBlockItem, IListItem } from './types';

export const sortBlocks = (blocks: IBlockItem[]) => {
  return blocks.map(block => ({
    ...block,
    items: sortList(block.items)
  })).sort((a, b) => a.order - b.order)
}

export const sortList = (list: IListItem[]) => {
  return list.slice().sort((a, b) => a.order - b.order)
}
