import React from "react";
import {
  BodyContainer,
  DayInCurrentMonth,
  DayInOtherMonth,
  useCustomContext,
} from "..";

export function Body() {
  const { state, dispatch } = useCustomContext();

  const daysOfPastMonth = getDaysArray(
    state.date.getFullYear(),
    state.date.getMonth() - 1,
  ).slice(
    -whatDayOfWeek(state.date.getFullYear(), state.date.getMonth(), 1) + 1,
  );

  const daysOfNextMonth = getDaysArray(
    state.date.getFullYear(),
    state.date.getMonth() + 1,
  ).slice(
    0,
    7 -
      whatDayOfWeek(
        state.date.getFullYear(),
        state.date.getMonth(),
        getDaysArray(
          state.date.getFullYear(),
          state.date.getMonth(),
        ).reverse()[0],
      ),
  );

  const chooseDayInPastMonth = (day: number) => {
    const date = new Date(state.date.getTime());
    date.setMonth(date.getMonth() - 1, day);
    dispatch({ type: "set_date", date });
    state.onSelect(date.toISOString());
  };

  const chooseDayInCurrentMonth = (day: number) => {
    const date = new Date(state.date.getTime());
    date.setDate(day);
    dispatch({ type: "set_date", date });
    state.onSelect(date.toISOString());
  };

  const chooseDayInNextMonth = (day: number) => {
    const date = new Date(state.date.getTime());
    date.setMonth(date.getMonth() + 1, day);
    dispatch({ type: "set_date", date });
    state.onSelect(date.toISOString());
  };

  const isThisToday = (day: number, month: number, year: number) => {
    if (
      state.date.getDate() === day &&
      state.date.getMonth() === month &&
      state.date.getFullYear() === year
    ) {
      return "#eee";
    }
    return "#fff";
  };

  return (
    <BodyContainer>
      {whatDayOfWeek(state.date.getFullYear(), state.date.getMonth(), 1) !==
        1 &&
        daysOfPastMonth.map((day) => (
          <DayInOtherMonth
            key={day}
            onClick={() => chooseDayInPastMonth(day)}
            bg={isThisToday(
              day,
              state.date.getMonth() - 1,
              state.date.getFullYear(),
            )}
          >
            {day}
          </DayInOtherMonth>
        ))}
      {getDaysArray(state.date.getFullYear(), state.date.getMonth()).map(
        (day) => (
          <DayInCurrentMonth
            bg={isThisToday(
              day,
              state.date.getMonth(),
              state.date.getFullYear(),
            )}
            key={day}
            onClick={() => chooseDayInCurrentMonth(day)}
          >
            {day}
          </DayInCurrentMonth>
        ),
      )}
      {whatDayOfWeek(
        state.date.getFullYear(),
        state.date.getMonth(),
        getDaysArray(
          state.date.getFullYear(),
          state.date.getMonth(),
        ).reverse()[0],
      ) !== 7 &&
        daysOfNextMonth.map((day) => (
          <DayInOtherMonth
            key={day}
            onClick={() => chooseDayInNextMonth(day)}
            bg={isThisToday(
              day,
              state.date.getMonth() + 1,
              state.date.getFullYear(),
            )}
          >
            {day}
          </DayInOtherMonth>
        ))}
    </BodyContainer>
  );
}

const getDaysArray = (year: number, month: number): number[] => {
  return Array.from({ length: howDaysInMonth(year, month) }, (_, i) => i + 1);
};

const howDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const whatDayOfWeek = (year: number, month: number, day: number) => {
  return new Date(year, month, day).getDay() || 7;
};
