import React, { useMemo } from "react";
import Badge from "../badge";
import { BlockItem, ToolbarBlock, ToolbarContainer } from "./styles";
import { IToolbarProps } from "./types";
import { sortBlocks } from "./utils";

export function Toolbar({
  blocks = [],
  onItemClick = () => {}
}: IToolbarProps) {
  const sortedBlocks = useMemo(() => sortBlocks(blocks), [blocks])
  
  return (
    <ToolbarContainer>
      {sortedBlocks.map((block, index) => (
        <ToolbarBlock key={index} >
          {block.items.map((item, index) => (
            <BlockItem key={index} title={item.title} onClick={() => onItemClick(item, block)}>
              <Badge count={item.value} />
              <span>{item.title}</span>
            </BlockItem>
          ))}
        </ToolbarBlock>
      ))}
    </ToolbarContainer>
  )
}
