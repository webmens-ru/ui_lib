import React, { useEffect } from "react";
import { useCustomContext } from "../../store/Context";
import SelectIntegerField from "./filter_fields/SelectInteger";
import SelectStringField from "./filter_fields/SelectString";
import { Select } from "./filter_fields/Select";
import { useDragAndDrop } from "../../utils/useDragAndDrop";
import DateField from "./filter_fields/Date";

export function FilterFields() {
  const { state } = useCustomContext();

  const {
    draggableItems,
    setDraggableItems,
    onDragStart,
    onDragEnter,
    onDragEnd,
  } = useDragAndDrop(state.updateFieldsOrder);

  useEffect(() => {
    setDraggableItems(state.fields.slice().sort((a, b) => a.order - b.order));
  }, [setDraggableItems, state.fields]);

  const getContent = (arr: any[]) => {
    return arr
      .slice()
      .filter((f) => f.visible)
      .map((item, index) => {
        const props = {
          key: index,
          item,
          onDragStart: () => onDragStart(item),
          onDragEnter: (e: React.MouseEvent<HTMLElement>) =>
            onDragEnter(e, item),
          onDragEnd: onDragEnd,
          updateField: state.updateField,
        };

        switch (item.type) {
          case "integer":
          case "number":
            return <SelectIntegerField {...props} />;
          case "string":
            return <SelectStringField {...props} />;
          case "multiple_select":
          case "select":
            return <Select {...props} />;
          case "date":
            return <DateField {...props} />;
          default:
            return <h3 key="error">Field type error</h3>;
        }
      });
  };
  return <>{getContent(draggableItems)}</>;
}
