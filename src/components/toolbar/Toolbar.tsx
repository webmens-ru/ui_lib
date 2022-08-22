import React, { useMemo } from "react";
import { ToolbarBlock, ToolbarContainer } from "./styles";
import { BlockItems, IToolbarBlock, IToolbarProps } from "./types";
import { getSuitableBlockItem, sortBlocks } from "./utils";

export function Toolbar({
  blocks = [],
  onItemClick = () => { },
  onMetricFilterClick = () => {},
  onMetricLinkClick = () => {}
}: IToolbarProps) {
  const sortedBlocks = useMemo(() => sortBlocks(blocks), [blocks])

  const handleBlockItemClick = (item: BlockItems, block: IToolbarBlock) => {
    switch (item.type) {
      case "metric-filter":
        onMetricFilterClick(item, block)
        break;
      case "metric-link":
        onMetricLinkClick(item, block)
        break;
    }

    onItemClick(item, block)
  }

  return (
    <ToolbarContainer>
      {sortedBlocks.map((block, index) => (
        <ToolbarBlock key={index} >
          {block.items.map((item) => getSuitableBlockItem(item, (blockItem) => handleBlockItemClick(blockItem, block)))}
        </ToolbarBlock>
      ))}
    </ToolbarContainer>
  )
}
