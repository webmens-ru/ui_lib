import React, { useCallback, useEffect, useMemo, useState } from "react";
import { HeaderRendererProps, SortColumn } from "react-data-grid";
import { DraggableHeaderRenderer } from "../components/DraggableHeader";
import SettingsCellHeader from "../components/SettingsCellHeader";
import { IGNORED_COLUMN_KEYS } from "../consts";
import { EditorProps } from "../types/editors";
import { CellColorKey, TColumnItem, TRowItem } from "../types/types";
import { getSuitableEditor } from "../utils/editor";
import { updateInstance } from "../utils/grid_parser";

interface UseColumnsProps {
  createColumns: TColumnItem[];
  cellColorKey?: CellColorKey | CellColorKey[]
  onChangeEnd: (row: TRowItem, key: string, value: any) => void;
  onReorder: (columns: TColumnItem[]) => void;
}

export default function useColumns({ createColumns, cellColorKey, onReorder, onChangeEnd }: UseColumnsProps) {
  const [columns, setColumns] = useState(createColumns);
  const [sortColumns, setSortColumns] = useState<SortColumn[]>([]);
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => setColumns(createColumns), [createColumns])

  const generateCellClassname = useCallback((column: TColumnItem, row: TRowItem) => {
    if (!cellColorKey) return

    if (Array.isArray(cellColorKey)) {
      const cellKey = cellColorKey.find((item) => item.column === column.key)
      if (!cellKey) return

      return row[cellKey.key]
    } else {
      return row[cellColorKey.key]
    }
  }, [cellColorKey])

  const draggableColumns = useMemo(() => {
    function HeaderRenderer(props: HeaderRendererProps<TRowItem>) {
      return <DraggableHeaderRenderer {...props} onColumnsReorder={handleColumnsReorder} />;
    }

    function handleColumnsReorder(sourceKey: string, targetKey: string) {
      const sourceColumnIndex = columns.findIndex((c) => c.key === sourceKey);
      const targetColumnIndex = columns.findIndex((c) => c.key === targetKey);
      const reorderedColumns = [...columns];

      reorderedColumns.splice(
        targetColumnIndex,
        0,
        reorderedColumns.splice(sourceColumnIndex, 1)[0]
      );

      const resultColumns = updateInstance(reorderedColumns)

      onReorder(resultColumns)
      setColumns(resultColumns);
    }

    return columns
      .filter((c) => !!c.instance.visible)
      .map((c) => {        
        if (c.key === "action") {
          return { ...c, headerRenderer: () => SettingsCellHeader({ onClick: () => setShowSettings(true) }) }
        } else if (IGNORED_COLUMN_KEYS.includes(c.key) || !c.instance.reordering) {
          return { ...c }
        };
        return {
          ...c,
          headerRenderer: HeaderRenderer,
          cellClass: (row: TRowItem) => generateCellClassname(c, row),
          editable: !!c.instance.editable,
          editor: (props: EditorProps) => getSuitableEditor({ ...props, onChangeEnd  })
        };
      });
  }, [columns, generateCellClassname, onChangeEnd, onReorder])

  return {
    draggableColumns,
    sortColumns,
    showSettings,
    setShowSettings,
    setSortColumns
  }
}
