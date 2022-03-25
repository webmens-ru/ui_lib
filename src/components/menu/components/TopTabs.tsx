import React from 'react';
import { ITopTabs } from '../types/index';
import {
  TabsBtn,
} from "../styles/index";


export default function TopTabs({
  arr,
  isDraggable,
  dragStart,
  dragEnter,
  dragEndThenUpdate,
  currentId,
  setTab,
}: ITopTabs) {
  return (<>
    {arr.map((item, index) => (
      <TabsBtn
        key={index}
        draggable={isDraggable}
        onDragStart={() => dragStart(item)}
        onDragEnter={(e: React.MouseEvent<HTMLElement>) => dragEnter(e, item)}
        onDrop={(e: React.MouseEvent<HTMLElement>) => e.preventDefault()}
        onDragEnd={dragEndThenUpdate}
        onClick={() => setTab(item)}
        current={currentId === item.id}
        isDraggable={isDraggable}
      >
        {item.title}
      </TabsBtn>
    ))}
  </>);
}