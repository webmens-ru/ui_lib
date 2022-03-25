import { ISelectValue, IDataItem } from "../types"

export const getInitialValue = (propsValue: ISelectValue, data: IDataItem[] = []) => {

  switch (typeof propsValue) {
    case 'number':
    case 'string':
      const option = data.find(item => item.value === propsValue)
      if (option) {
        return [{ value: propsValue, title: option.title }]
      } else {
        return [{ value: propsValue, title: '' }]
      }
    case 'object':
      if (Array.isArray(propsValue)) {
        return propsValue.map(item => {
          if (typeof item === 'object' && 'value' in item && 'title' in item) {
            return item
          } else {
            const title = data.find(option => option.value === item)?.title
            return { value: item, title }
          }
        })
      }
      break;
    default:
      throw new Error();
  }
}