import React, { createContext, useContext, useEffect, useReducer } from "react";
import { Action, ICalendarContext, IProviderProps, State } from ".";

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "next_month":
      let date = new Date(state.date.getTime());
      date.setMonth(date.getMonth() + 1);
      return { ...state, date };
    case "prev_month":
      date = new Date(state.date.getTime());
      date.setMonth(date.getMonth() - 1);
      return { ...state, date };
    case "set_month":
      date = new Date(state.date.getTime());
      date.setMonth(action.month);
      return { ...state, date };
    case "set_year":
      date = new Date(state.date.getTime());
      date.setFullYear(action.year);
      return { ...state, date };
    case "set_date":
      return { ...state, date: action.date };
    case "set_hour":
      date = new Date(state.date.getTime());
      date.setHours(action.hour);
      return { ...state, date };
    case "set_minute":
      date = new Date(state.date.getTime());
      date.setMinutes(action.minute);
      return { ...state, date };
    default:
      return state;
  }
};

export const CalendarContext = createContext<ICalendarContext>(
  {} as ICalendarContext,
);

export function CalendarProvider(props: IProviderProps) {
  const init = ({ dateISO }: IProviderProps) => {
    return {
      date: new Date(dateISO),
      onSelect: props.onSelect || ((date) => console.log(date)),
    };
  };

  const [state, dispatch] = useReducer(reducer, props, init);

  useEffect(() => {
    dispatch({ type: "set_date", date: new Date(props.dateISO) });
  }, [props.dateISO]);

  return (
    <CalendarContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CalendarContext.Provider>
  );
}

export const useCustomContext = () => useContext(CalendarContext);
