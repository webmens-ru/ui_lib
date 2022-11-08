import React, { useRef } from "react";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import { FieldContainer, FieldDragHandle, FieldRemoveHandle } from "./styles";

interface FieldWrapperProps {
  fieldProps: any;
  field: React.ReactNode;
  onMoveFields: (dragId: number, hoverId: number) => void;
}

export default function FieldWrapper({ fieldProps, field, onMoveFields }: FieldWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  const [{ isDragging }, drag, preview] = useDrag({
    type: "FILTER_FIELD",
    item: () => ({ id: fieldProps.item.id }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ["FILTER_FIELD"],
    hover: (item: any, monitor) => {
      const [dragId, hoverId] = [item.id, fieldProps.item.id]

      if (!ref.current || dragId === hoverId) {
        return
      }

      const hoverBoundingRect = ref.current.parentElement!.getBoundingClientRect()
      const clientOffset = monitor.getClientOffset() as XYCoord
      const [hoverMiddleY, hoverClientY] = [(hoverBoundingRect.top + hoverBoundingRect.bottom) / 2, clientOffset.y]

      if (hoverClientY > hoverMiddleY) {
        onMoveFields(dragId, hoverId)
      }
    },
  })
  
  drag(ref)

  return (
    <FieldContainer
      ref={(ref) => {
        drop(ref)
        preview(ref)
      }}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <FieldDragHandle ref={ref} />
      {field}
      <FieldRemoveHandle />
    </FieldContainer>
  )
}
