import React, { useCallback, useState } from "react";

/**
 * Hook чтобы сделать массив елементов draggable
 * @param callback Вернет массив элементов (onDragEnd)
 * @returns {Object} Object.
 * @Object .draggableItems - массив элементов, для вывода.
 * @Object .setDraggableItems - в useEffect вызывать с исходным массивом.
 * @info Функции закрепить на каждый элемент.
 * @info draggable={true}
 * @Object .onDragStart -> () => onDragStart(item).
 * @Object .onDragEnter -> (e) => onDragEnter(e, item).
 * @Object .onDragEnd -> (e) => onDragEnd(e).
 */

export const useDragAndDrop = (sendResultFunc: (arg0: any[]) => void) => {
  const [draggableItems, setDraggableItems] = useState<any[]>([]);
  const [moveItem, setMoveItem] = useState<any>({});

  const onDragEnter = useCallback(
    (e: React.MouseEvent<HTMLElement>, item: any) => {
      e.preventDefault();
      if (
        Object.keys(moveItem).length > 0 &&
        Object.keys(moveItem).length === Object.keys(item).length
      ) {
        const copy = draggableItems.slice();
        const indexOfItem = copy.indexOf(item);
        copy.splice(copy.indexOf(moveItem), 1);
        copy.splice(indexOfItem, 0, moveItem);
        setDraggableItems(copy);
      }
    },
    [draggableItems, moveItem],
  );

  const onDragEnd = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()
      if (Object.keys(moveItem).length > 0) {
        setMoveItem({});
        sendResultFunc(
          draggableItems
            .slice()
            .map((item, index) => ({ ...item, order: index + 1 })),
        );
      }
    },
    [draggableItems, moveItem, sendResultFunc],
  );

  const getDraggableProps = useCallback(
    (item) => ({
      draggable: true,
      onDragStart: () => setMoveItem(item),
      onDragEnter: (e: React.MouseEvent<HTMLElement, MouseEvent>) =>
        onDragEnter(e, item),
      onDragEnd: onDragEnd,
      onDrop: onDragEnd,
      onMouseUp: onDragEnd,
      onMouseLeave: onDragEnd,
    }),
    [onDragEnd, onDragEnter],
  );

  return {
    draggableItems,
    setDraggableItems,
    getDraggableProps,
  };
};
