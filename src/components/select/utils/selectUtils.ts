import { ISelectValue, IDataItem } from '../types';

export const getInitialValue = (
  propsValue: ISelectValue,
  data: IDataItem[] = [],
  valueField: string,
  textField: string
): IDataItem[] => {
  switch (typeof propsValue) {
    case 'number':
    case 'string':
      const option = data.find((item) => item[valueField] === propsValue);
      if (option) {
        return [{ value: propsValue, title: option.title }];
      } else {
        return [{ value: propsValue, title: '' }];
      }
    case 'object':
      if (Array.isArray(propsValue)) {
        return propsValue.map((item) => {
          if (typeof item === 'object' && valueField in item && textField in item) {
            return item;
          } else {
            const title = data.find((option) => option.value === item)?.title || '';
            return { value: item as string|number, title };
          }
        });
      } else return [propsValue];
    default:
      return [];
  }
};
