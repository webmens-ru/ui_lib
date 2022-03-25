import React from "react";
import LoadingSelect from "../loading_select";
import { IDropdownProps, IDataItem } from "components/select/types";
import { SelectDropdownContainer, DropdownItem } from "./styles";

const SelectDropdown = ({ 
  isShow, 
  multiple, 
  isShowLettersCount, 
  lettersRemaining, 
  isNoData, 
  isLoading, 
  selectedOptions = [], 
  data = [], 
  onChange 
}: IDropdownProps) => {
  const getIsOptionSelected = (option: IDataItem) => {
    return selectedOptions.some(item => item.value === option.value)
  }

  const handleSelectChange = (evt: React.MouseEvent, option: IDataItem) => {
    evt.preventDefault()
    onChange(option)
  }

  return (
    <SelectDropdownContainer isShow={isShow}>
      {isShowLettersCount && (
        <span>Введите ещё {lettersRemaining} символов, чтобы отобразить результат поиска</span>
      )}
      {isNoData && <span>Нет данных</span>}
      {isLoading && <LoadingSelect />}

      {(isShow && !isLoading) && data.map(option => (
        <DropdownItem
          key={option.value}
          selected={multiple ? false : getIsOptionSelected(option)}
          onClick={(event) => handleSelectChange(event, option)}
        >
          {multiple && <input type="checkbox" readOnly checked={getIsOptionSelected(option)} />}
          {option.title}
        </DropdownItem>
      ))}
    </SelectDropdownContainer>
  )
}

export default SelectDropdown