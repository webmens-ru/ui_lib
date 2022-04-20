import React, { useRef, useReducer } from "react";
import { useShowControl } from "../../hooks/useShowControl";
import { reducer, init } from "./reducer";
import { ISelectProps, IDataItem } from "./types";
import LoadingSelect from './components/loading_select';
import SelectDropdown from "./components/dropdown";
import { SelectContainer, SelectInner, SelectFilter, SelectErrorMsg, SelectSuffix, Suffix, SelectTagsContainer, SelectCurrentValue, SelectTag, TagTitle, TagRemove } from "./styles";

// onBlur

export const Select = ({
  multiple = false,
  filterable = true,
  minInputLength = 0,
  filterDelay = 350,
  value = [],
  valueField = "value",
  textField = "title",
  data = [],
  dataUrl = "",
  remoteMode = false,
  closeOnSelect = false,
  selectWidth = '100%',
  queryParams = {},
  queryTitleName = "title_like",
  onChange = () => { },
}: ISelectProps) => {
  const { ref, isShow, setShow } = useShowControl()
  const filterRef = useRef(null)
  const [select, dispatch] = useReducer(reducer, {
    minInputLength,
    data,
    dataUrl,
    filterable,
    value,
    valueField,
    textField
  }, init)

  const isEnoughFilterLength = select.filterValue.length >= minInputLength

  const handleFilterChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = evt.target.value
    // show loading if select need to get remote data
    if (remoteMode) {
      dispatch({ type: 'setLoading', loading: true })
    }
    dispatch({ type: 'setFilterValue', filterValue })

    setTimeout(() => {
      if (filterValue !== evt.target.value) return
      updateFilteredData(filterValue)
    }, filterDelay)
  }

  const updateFilteredData = async (filterValue: string) => {
    let filteredData = data

    if (filterValue.length >= minInputLength) {
      if (remoteMode /*&& minInputLength > 0*/) {
        const selectQueryParams = new URLSearchParams({ 
          ...queryParams, 
          [queryTitleName]: filterValue.trim() 
        }).toString()
        const queryUrl = `${dataUrl}?${selectQueryParams}`

        await fetch(queryUrl)
          .then(response => response.json())
          .then(data => filteredData = data)
      } else {
        filteredData = select.data.filter((option) => {
          const title = typeof option[textField] === "number" ? option[textField].toString() : option[textField] as string
          return title.toLowerCase().includes(filterValue.trim().toLowerCase())
        })
      }
    }

    dispatch({ type: 'setFilteredData', filteredData })
    dispatch({ type: 'setLoading', loading: false })
  }

  const handleFilterClick = (evt: React.MouseEvent) => {
    if (isShow) {
      evt.stopPropagation()
    } else if (select.filterValue) {
      dispatch({ type: 'setLoading', loading: true })
      updateFilteredData(select.filterValue)
    }
  }

  const handleSelectChange = (newValue: IDataItem) => {
    let value = [newValue]
    if (multiple) {
      if (select.value.some((item: IDataItem) => item[valueField] === newValue[valueField])) {
        value = select.value.filter((item: IDataItem) => item[valueField] !== newValue[valueField])
      } else {
        value = select.value.concat([newValue])
      }
    }

    dispatch({ type: 'setValue', value })
    onChange(value)

    if (closeOnSelect) setShow(false)
  }

  const handleRemoveTag = (event: React.MouseEvent, tag: IDataItem) => {
    event.stopPropagation()
    const value = select.value.filter((item: IDataItem) => item !== tag)
    dispatch({ type: 'setValue', value })
    onChange(select.value)
  }

  const getFilterPlaceholder = () => {
    if (isShow && !!select.value.length && !multiple) {
      const title = select.value[0][textField];
      return typeof title === "number" ? title.toString() : title
    } else return ''
  }

  if (!select.inited || select.hasErrorsOnFetch) {
    return (
      <SelectContainer width={selectWidth} isShow={isShow} ref={ref} onClick={() => setShow(!isShow)}>
        {select.hasErrorsOnFetch && <SelectErrorMsg children="Произошла ошибка при загрузке данных" />}

        <SelectSuffix isShow={isShow}>
          <Suffix />
        </SelectSuffix>

        <SelectDropdown isShow={isShow}>
          <LoadingSelect />
        </SelectDropdown>
      </SelectContainer>
    )
  }

  return (
    <SelectContainer width={selectWidth} isShow={isShow} ref={ref} onClick={() => setShow(!isShow)}>

      <SelectInner>
        {multiple && (
          <SelectTagsContainer>
            {select.value.map((tag: IDataItem) => (
              <SelectTag key={tag[valueField]}>
                <TagTitle children={tag[textField] || <i>Нет данных</i>} />
                <TagRemove onClick={(event: React.MouseEvent) => handleRemoveTag(event, tag)} />
              </SelectTag>
            ))}
          </SelectTagsContainer>
        )}

        {(!multiple && !isShow && select.value.length > 0) && (
          <SelectCurrentValue children={select.value[0][textField] || <i>Нет данных</i>} />
        )}

        <SelectFilter
          ref={filterRef}
          readOnly={!filterable}
          placeholder={getFilterPlaceholder()}
          value={isShow ? select.filterValue : ''}
          onChange={handleFilterChange}
          onClick={handleFilterClick}
        />

      </SelectInner>

      <SelectSuffix isShow={isShow}>
        <Suffix />
      </SelectSuffix>

      <SelectDropdown 
        isShow={isShow}
        multiple={multiple}
        isShowLettersCount={minInputLength > 0 && !isEnoughFilterLength}
        lettersRemaining={minInputLength - select.filterValue.length}
        isNoData={isEnoughFilterLength && !select.filteredData.length && !select.loading}
        isLoading={select.loading}
        selectedOptions={select.value}
        data={select.filteredData}
        onChange={handleSelectChange}
      />

    </SelectContainer>
  )
}
