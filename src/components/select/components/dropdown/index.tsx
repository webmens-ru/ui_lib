import React from 'react';
import LoadingSelect from '../loading_select';
import { IDropdownProps, IDataItem } from '../../types';
import { SelectDropdownContainer, DropdownItem, DropdownGroup, GroupTitle } from './styles';
import { DropdownMessage } from '../../styles';

const SelectDropdown = ({
  isShow = false,
  multiple,
  isShowLettersCount,
  lettersRemaining,
  isNoData,
  canSelectMore,
  isLoading,
  selectedOptions = [],
  data = [],
  onChange = () => {},
}: IDropdownProps) => {
  const getIsOptionSelected = (option: IDataItem) => {
    return selectedOptions.some((item) => item.value === option.value);
  };

  const handleSelectChange = (evt: React.MouseEvent, option: IDataItem) => {
    evt.preventDefault();
    onChange(option);
  };  

  return (
    <SelectDropdownContainer isShow={isShow}>
      {isShowLettersCount && (
        <DropdownMessage>
          Введите ещё {lettersRemaining} символов, чтобы отобразить результат поиска
        </DropdownMessage>
      )}
      {isNoData && <DropdownMessage>Нет данных</DropdownMessage>}
      {!canSelectMore && <DropdownMessage>Достигнут предел выбранных записей</DropdownMessage>}
      {isLoading && <LoadingSelect />}

      {(isShow && !isLoading && canSelectMore) &&
        data.map((option, index) => {
          if ('title' in option && 'options' in option) {
            return (
              <DropdownGroup className='test' key={index} >
                <GroupTitle children={option.title} />
                {option.options.map((item) => (
                  <DropdownItem
                    key={item.value}
                    className="dropdown-item"
                    selected={multiple ? false : getIsOptionSelected(item)}
                    onClick={(event) => handleSelectChange(event, item)}
                  >
                    {multiple && (
                      <input
                        type="checkbox"
                        readOnly
                        checked={getIsOptionSelected(item)}
                      />
                    )}
                    {item.title}
                  </DropdownItem>
                ))}
              </DropdownGroup>
            )
          } else {
            return (
              <DropdownItem
                key={option.value}
                selected={multiple ? false : getIsOptionSelected(option)}
                onClick={(event) => handleSelectChange(event, option)}
              >
                {multiple && (
                  <input
                    type="checkbox"
                    readOnly
                    checked={getIsOptionSelected(option)}
                  />
                )}
                {option.title}
              </DropdownItem>
            )
          }
        })}
    </SelectDropdownContainer>
  );
};

export default SelectDropdown;
