import { useCallback, useState } from "react";
import { Action, State } from "../store";
import { Item } from "../types";

export const useDraggable = (
  { items, countTopItems, itemsMutation }: State,
  dispatch: (act: Action) => void,
) => {
  const [moveItem, setMoveItem] = useState<Item>({} as Item);
  const [isDraggable, setIsDraggable] = useState<boolean>(false);

  const dragStart = useCallback((item: Item) => {
    setMoveItem(item);
  }, []);

  const move = useCallback(
    (item: Item) => {
      const copy = items.slice();
      const indexOfItem = copy.indexOf(item);
      copy.splice(copy.indexOf(moveItem), 1);
      if (moveItem.visible !== item.visible) {
        let copyItem = {
          ...moveItem,
          visible: item.visible,
        };
        setMoveItem(copyItem);
        copy.splice(indexOfItem, 0, copyItem);
      } else {
        copy.splice(indexOfItem, 0, moveItem);
      }
      dispatch({ type: "set_items", items: copy });
    },
    [dispatch, items, moveItem],
  );

  const dragEnter = useCallback(
    (e: React.MouseEvent<HTMLElement>, item: Item) => {
      e.preventDefault();
      if (item.id !== moveItem.id) {
        if (+item.id === items[0].id) {
          if (moveItem.type === "updatePage") {
            move(item);
          }
        } else if (moveItem.id === items[0].id) {
          if (items.filter((a) => a.visible)[1]?.type === "updatePage") {
            move(item);
          }
        } else {
          move(item);
        }
      }
    },
    [items, move, moveItem.id, moveItem.type],
  );

  const dragToTop = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (moveItem.visible === 0 && items.indexOf(moveItem) !== -1) {
        const copy = items.slice();
        copy.splice(copy.indexOf(moveItem), 1);
        const newMoveItem = { ...moveItem, visible: 1 };
        copy.splice(countTopItems, 0, newMoveItem);
        dispatch({ type: "set_items", items: copy });
        setMoveItem(newMoveItem);
      }
    },
    [countTopItems, dispatch, items, moveItem],
  );

  const dragToHide = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      let copyItem: Item = {
        ...moveItem,
        visible: 0,
      };
      const copy = items.slice();
      copy.splice(copy.indexOf(moveItem), 1);
      copy.splice(copy.length - 1, 0, copyItem);
      dispatch({ type: "set_items", items: copy });
    },
    [dispatch, items, moveItem],
  );

  const dragEndThenUpdate = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setMoveItem({} as Item);
  }, []);

  const updateTabs = () => {
    setIsDraggable(false);
    itemsMutation(items.map((item, index) => ({ ...item, order: index + 1 })));
  };

  return {
    isDraggable,
    setIsDraggable,
    dragStart,
    dragEnter,
    dragToTop,
    dragToHide,
    dragEndThenUpdate,
    updateTabs,
  };
};
