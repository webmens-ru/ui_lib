import React from "react";
import { IMenuTabs } from "../types";
import { MenuBtn } from "../styles";

export default function MenuTabs({
  firstPart,
  secondPart,
  isDraggable,
  dragStart,
  dragEnter,
  dragEndThenUpdate,
  dragToHide,
  setTab,
}: IMenuTabs) {
  return (
    <>
      {firstPart.map((item, index) => (
        <MenuBtn
          key={index}
          draggable={isDraggable}
          onDragStart={() => dragStart(item)}
          onDragEnter={(e: React.MouseEvent<HTMLElement>) => dragEnter(e, item)}
          onDrop={(e: React.MouseEvent<HTMLElement>) => e.preventDefault()}
          onDragEnd={dragEndThenUpdate}
          onClick={() => setTab(item)}
          isDraggable={isDraggable}
        >
          {item.title}
        </MenuBtn>
      ))}
      <span>Скрытые</span>
      {secondPart.length === 0 && (
        <p onDragEnter={(e: React.MouseEvent<HTMLElement>) => dragToHide(e)}>Перетащите сюда, чтобы скрыть</p>
      )}
      {secondPart.map((item, index) => (
        <MenuBtn
          key={index}
          draggable={isDraggable}
          onDragStart={() => dragStart(item)}
          onDragEnter={(e: React.MouseEvent<HTMLElement>) => dragEnter(e, item)}
          onDrop={(e: React.MouseEvent<HTMLElement>) => e.preventDefault()}
          onDragEnd={dragEndThenUpdate}
          onClick={() => setTab(item)}
          isDraggable={isDraggable}
        >
          {item.title}
        </MenuBtn>
      ))}
      <span>Управление</span>
    </>
  );
}
