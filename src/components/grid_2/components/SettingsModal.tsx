import React, { useMemo, useState } from "react";
import { Button, Checkbox, Input } from "../../../";
import LockClosed from "../assets/svg/lock-closed.svg";
import LockOpen from "../assets/svg/lock-open.svg";
import { IGNORED_COLUMN_KEYS } from "../consts";
import { ActionsContainer, BodyModalContainer, ButtonsContainer, ColumnsList, ColumnsListItem, ColumnsListItemTitle, FooterInnerContainer, FooterModalContainer, HeaderCancelButton, HeaderModalContainer, LockIcon, SettingsModalBackdrop, SettingsModalContainer, SettingsModalInnerContainer, TogglersContainer } from "../styles";
import { TColumnItem } from "../types";

interface SettingsModalProps {
  columns: TColumnItem[];
  onClose: () => void;
  onSubmit: (newColumns: TColumnItem[]) => void;
}

export default function SettingsModal({ columns, onClose, onSubmit }: SettingsModalProps) {
  const [filterValue, setFilterValue] = useState("")
  const [columnsSettings, setColumnsSettings] = useState(columns)

  const checkedColumns = useMemo(() => columnsSettings.filter(column => column.key !== "action" && column.instance.visible), [columnsSettings])
  const filteredColumns = useMemo(() => {
    const clearColumns = columnsSettings.filter(column => !IGNORED_COLUMN_KEYS.includes(column.key))

    if (filterValue === "") {
      return clearColumns
    } else {
      return clearColumns.filter(column => column.name.toString().toLowerCase().includes(filterValue.toLowerCase()))
    }
  }, [columnsSettings, filterValue])

  const handleColumnCheck = (column: TColumnItem) => {
    const changedColumns = columnsSettings.map(item => {
      if (column === item) {
        const instance = { ...item.instance, visible: !item.instance.visible }
        return { ...item, instance }
      } else return item
    })
    
    setColumnsSettings(changedColumns)
  }

  const handleColumnFrozen = (evt: React.MouseEvent<HTMLImageElement>, column: TColumnItem) => {
    evt.stopPropagation()

    const changedColumns = columnsSettings.map(item => {
      if (column === item) {
        const instance = { ...item.instance, frozen: !item.instance.frozen }
        return { ...item, frozen: !item.frozen, instance }
      } else return item
    })

    setColumnsSettings(changedColumns)
  }

  const handleSettingsSubmit = () => {
    onSubmit(columnsSettings)
    onClose()
  }

  const toggleCheckboxes = (check: boolean) => {
    const toggledColumns = columnsSettings.map(column => {
      if (IGNORED_COLUMN_KEYS.includes(column.key)) {
        return { ...column }
      }

      return { ...column, instance: { ...column.instance, visible: check } }
    })
    setColumnsSettings(toggledColumns)
  }

  return (
    <>
      <SettingsModalBackdrop onClick={onClose} />
      <SettingsModalContainer>
        <SettingsModalInnerContainer>

          <HeaderModalContainer>
            <Input iconLeftName="searchWhite" width="30%" iconPosition="left" onChange={(value) => setFilterValue(value)} />
            <HeaderCancelButton onClick={onClose} />
          </HeaderModalContainer>

          <BodyModalContainer>
            <ColumnsList>
              {filteredColumns.map(column => (
                <ColumnsListItem key={column.key} selected={column.instance.visible} onClick={() => handleColumnCheck(column)}>
                  <Checkbox value={column.instance.visible} onCheck={() => handleColumnCheck(column)} />
                  <ColumnsListItemTitle children={column.name} />
                  <LockIcon title={column.frozen ? "Открепить столбец" : "Закрепить столбец"} src={column.frozen ? LockClosed : LockOpen} onClick={(e) => handleColumnFrozen(e, column)} />
                </ColumnsListItem>
              ))}
            </ColumnsList>
          </BodyModalContainer>

          <FooterModalContainer>
            <FooterInnerContainer>
              <ActionsContainer />
              <ButtonsContainer>
                <Button color="success" children="Сохранить" disabled={checkedColumns.length === 0} onClick={handleSettingsSubmit} />
                <Button color="light" children="Отменить" onClick={onClose} />
              </ButtonsContainer>
              <TogglersContainer>
                <Button color="dashed" children="Выбрать все" onClick={() => toggleCheckboxes(true)} />
                <Button color="dashed" children="Отменить все" onClick={() => toggleCheckboxes(false)} />
              </TogglersContainer>
            </FooterInnerContainer>
          </FooterModalContainer>

        </SettingsModalInnerContainer>
      </SettingsModalContainer>
    </>
  )
}
