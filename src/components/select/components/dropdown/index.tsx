import React, { useMemo } from 'react';
import { BodyPortal } from '../../../body_portal';
import { DropdownMessage } from '../../styles';
import { IDataItem, IDropdownProps, IGroupDataItem } from '../../types';
import LoadingSelect from '../loading_select';
import { DropdownItem, DropdownItemProps, GroupDropdownItem } from './dropdown_item';
import { SelectDropdownContainer } from './styles';

const SelectDropdown = ({
  multiple = false,
  isShowLettersCount,
  lettersRemaining,
  isNoData,
  canSelectMore,
  isLoading,
  selectedOptions = [],
  data = [],
  position = { width: 0, top: 0, left: 0 },
  onChange = () => { },
}: IDropdownProps) => {
  const dropdownPosition = useMemo((): React.CSSProperties => ({
    position: "absolute",
    ...position
  }), [position])

  const getIsOptionSelected = (option: IDataItem) => {
    return selectedOptions.some((item) => item.value === option.value);
  };

  const handleSelectChange = (evt: React.MouseEvent, option: IDataItem) => {
    evt.preventDefault();
    onChange(option);
  };

  return (
    <BodyPortal container="wm-select-dropdown">
      <SelectDropdownContainer style={dropdownPosition}>
        {isShowLettersCount && (
          <DropdownMessage>
            Введите ещё {lettersRemaining} символов, чтобы отобразить результат поиска
          </DropdownMessage>
        )}
        {isNoData && <DropdownMessage>Нет данных</DropdownMessage>}
        {!canSelectMore && <DropdownMessage>Достигнут предел выбранных записей</DropdownMessage>}
        {isLoading && <LoadingSelect />}

        {(!isLoading && canSelectMore) &&
          data.map((option, index) => {
            const props: DropdownItemProps<IDataItem | IGroupDataItem> = {
              option: option,
              multiple: multiple,
              checkIsSelected: getIsOptionSelected,
              onChange: handleSelectChange,
            }

            if ('title' in option && 'options' in option) {
              return (
                // @ts-ignore
                <GroupDropdownItem {...props} key={index} />
              )
            } else {
              return (
                // @ts-ignore
                <DropdownItem {...props} key={option.value} />
              )
            }
          })}
      </SelectDropdownContainer>
    </BodyPortal>

  );
};

export default SelectDropdown;
