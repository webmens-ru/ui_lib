import { MetricFilter, MetricLink, Separator } from './components/block-items';
import { BlockItems, IToolbarBlock } from './types';

export const sortBlocks = (blocks: IToolbarBlock[]) => {
  return blocks.map(block => ({
    ...block,
    items: sortList(block.items)
  })).sort((a, b) => a.order - b.order)
}

export const sortList = (list: BlockItems[]) => {
  return list.slice().sort((a, b) => a.order - b.order)
}

export const getSuitableBlockItem = (blockItem: BlockItems, onClick: (blockItem: BlockItems) => void): JSX.Element | null => {  
  switch (blockItem.type) {
    case "metric-filter": return MetricFilter({ blockItem, onClick });
    case "metric-link": return MetricLink({ blockItem, onClick });
    case "separator": return Separator();
    default: return MetricFilter({ blockItem, onClick })
  }
}
