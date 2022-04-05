import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { Action, ICalendarContext, IProviderProps, State } from '.';

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'next_month':
      let date = new Date(state.date.getTime());
      date.setMonth(date.getMonth() + 1);
      return { ...state, date };
    case 'prev_month':
      date = new Date(state.date.getTime());
      date.setMonth(date.getMonth() - 1);
      return { ...state, date };
    case 'set_month':
      date = new Date(state.date.getTime());
      date.setMonth(action.month);
      return { ...state, date };
    case 'set_year':
      date = new Date(state.date.getTime());
      date.setFullYear(action.year);
      return { ...state, date };
    case 'set_date':
      return { ...state, date: action.date };
    case 'set_hour':
      date = new Date(state.date.getTime());
      date.setHours(action.hour);
      return { ...state, date };
    case 'set_minute':
      date = new Date(state.date.getTime());
      date.setMinutes(action.minute);
      return { ...state, date };
    default:
      return state;
  }
};

export const CalendarContext = createContext<ICalendarContext>(
  {} as ICalendarContext
);

export function CalendarProvider(props: IProviderProps) {
  const init = ({ dateISO }: IProviderProps) => {
    let date;
    if (isValidDateISO(dateISO)) {
      date = new Date(dateISO);
    } else {
      date = new Date();
    }
    return {
      date,
      onSelect: props.onSelect || ((date) => console.log(date)),
    };
  };

  const [state, dispatch] = useReducer(reducer, props, init);

  const onSelect = useCallback(
    (action) => {
      if (props.onSelect) {
        props.onSelect((action.date || state.date).toISOString());
      }
    },
    [props, state]
  );

  const dispatchWithMiddleware = useCallback(
    (action: Action) => {
      if (['set_date', 'submit'].includes(action.type)) {
        onSelect(action);
      }
      dispatch(action);
    },
    [onSelect]
  );

  useEffect(() => {
    if (isValidDateISO(props.dateISO))
      dispatch({ type: 'set_date', date: new Date(props.dateISO) });
  }, [props.dateISO]);

  return (
    <CalendarContext.Provider
      value={{ state, dispatch: dispatchWithMiddleware }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
}

export const useCustomContext = () => useContext(CalendarContext);

function isValidDateISO(dateISO?: string) {
  if (!dateISO) return false;
  const date = new Date(dateISO);
  return date instanceof Date && !isNaN(date.getTime());
}
