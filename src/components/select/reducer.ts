import { getInitialValue } from "./utils/selectUtils"
import { ISelectProps, IDataItem, ISelectReducerState } from "./types"

const initialState = {
  value: [],
  data: [],
  dataUrl: "",
  remoteMode: false,
  filteredData: [],
  loading: true,
  filterValue: '',
  inited: false,
  hasErrorsOnFetch: false
}

export const reducer = function(state: ISelectReducerState, {type, payload}: {type: string, payload: any}) {
  switch (type) {
    case "setLoading":
      return {...state, loading: payload}
    case "setValue":
      return {...state, value: payload}
    case "setFilterValue":
      return {...state, filterValue: payload}
    case "setFilteredData":
      return {...state, filteredData: payload}
    default: 
      throw new Error()
  }
}

export const init = function({ remoteMode, dataUrl, minInputLength, data, filterable, value }: ISelectProps) {
  let selectData = data
  let hasErrorsOnFetch = false

  const filteredData: IDataItem[] = filterable && (minInputLength > 0) ? [] : selectData

  return {
    ...initialState,
    value: getInitialValue(value, filteredData),
    data: selectData,
    filteredData,
    inited: true,
    loading: false,
    hasErrorsOnFetch,
    remoteMode,
    dataUrl
  }
}
