import { IMultifieldProps, MultifieldItem } from './../../multifield/types';
import { IFormReducerState, FormValues } from './../types';
import { ISelectProps, IDataItem } from './../../select/types';
import { buildCallbackValue } from './../../select/utils/selectUtils';

export const prepareFormData = ({fields, tempValues: values}: IFormReducerState): FormValues => {  
  const parsedValues = Object.entries(values)
  let result = {} as FormValues

  parsedValues.forEach(([name, value]) => {
    let parsedValue = value as any
    const field = fields.find(field => field.name === name)

    if (field?.type === 'select') {
      const multiple = (field?.fieldParams as ISelectProps).multiple
      parsedValue = buildCallbackValue(parsedValue as IDataItem[], multiple)
    }
    if (field?.type === 'multifield') {      
      const fieldType = (field?.fieldParams as IMultifieldProps).type
      const multifieldValue = (value as unknown as MultifieldItem[])
      switch (fieldType) {
        case 'input':
          parsedValue = multifieldValue.map(item => item.value)
          break;
        case 'select':
          parsedValue = multifieldValue.map(item => buildCallbackValue(item.value as IDataItem[], false))
          break;
      }
    }

    result[name] = parsedValue
  })  

  return result
}

export const parseStringRegExp = (regexp: string) => {
  const regexpWithoutSlashes = regexp.slice(1, regexp.length - 1)
  return new RegExp(regexpWithoutSlashes)
}
