import React, { createContext, useReducer, useContext } from 'react';
import { useEffect } from 'react';
import { Action, IContext, IState } from '.';
import { IGridContext } from '../types';
import { init } from '../utils/initial';

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case 'INITIAL':
      return {
        ...state,
        ...action.props,
      };
    case 'SET_COLUMN':
      return { ...state, column: action.column };
    case 'SET_ROW':
      return {
        ...state,
        row: action.row,
      };
    case 'SET_HOVER_ID':
      if (state.hoverId === action.hoverId) {
        return state;
      }
      return {
        ...state,
        hoverId: action.hoverId,
      };
    case 'SET_SCROLL_FACTOR': {
      if (action.scrollFactor < 0) {
        return state;
      }
      return {
        ...state,
        scrollFactor: action.scrollFactor,
      };
    }
    case 'SET_CHECKED_ID': {
      if (Array.isArray(action.id)) {
        return {
          ...state,
          checkedRowsId: action.id,
        };
      }
      return {
        ...state,
        checkedRowsId: [...state.checkedRowsId, action.id],
      };
    }
    case 'DELETE_CHECKED_ID': {
      return {
        ...state,
        checkedRowsId: state.checkedRowsId.filter((id) => id !== action.id),
      };
    }
    default:
      return state;
  }
};

export const Context = createContext<IContext>({} as IContext);

export function ContextProvider(props: IGridContext) {
  const [state, dispatch] = useReducer(reducer, props, init);

  useEffect(() => {
    dispatch({ type: 'INITIAL', props: init(props) });
  }, [props]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}

export const useCustomContext = () => useContext(Context);
