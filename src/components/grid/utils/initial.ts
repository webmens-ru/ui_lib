import { IState } from '../store';
import { IGridProps } from '../types';

export const init = (props: IGridProps): IState => {
  return {
    hoverId: -1,
    scrollStep: 25,
    scrollFactor: 0,
    checkedRowsId: [],
    column:
      props?.column && Array.isArray(props?.column)
        ? props?.column?.slice().sort((a, b) => a.order - b.order)
        : [],
    row: props?.row && Array.isArray(props?.row) ? props?.row : [],
    footer: props?.footer && Array.isArray(props?.footer) ? props?.footer : [],
    columnMutation:
      typeof props?.columnMutation === 'function'
        ? props?.columnMutation
        : () => {},
    burgerItems:
      props?.burgerItems && Array.isArray(props?.burgerItems)
        ? props?.burgerItems
        : [],
    onBurgerItemClick:
      typeof props?.onBurgerItemClick === 'function'
        ? props?.onBurgerItemClick
        : () => {},
    isShowCheckboxes:
      typeof props?.isShowCheckboxes === 'boolean'
        ? props?.isShowCheckboxes
        : false,
    onChangeCheckboxes:
      typeof props.onChangeCheckboxes === 'function'
        ? props.onChangeCheckboxes
        : () => {},
    onCellClick:
      typeof props?.onCellClick === 'function' ? props?.onCellClick : () => {},
  };
};
