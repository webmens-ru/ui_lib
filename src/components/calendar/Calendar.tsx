import React, { StrictMode } from "react";
import { Body } from "./components/Body";
import { DaysOfWeek } from "./components/DaysOfWeek";
import { Dropdown } from "./components/Dropdown";
import { MonthBtn } from "./components/MonthBtn";
import { Time } from "./components/Time";
import { CalendarProvider, ICalendarProps } from ".";
import { CalendarContainer, HeaderContainer } from "./styles/Calendar";
import { useWindowBound } from "../../hooks/useWindowBound";

export function Calendar({
  isShow,
  withTime,
  dateISO,
  onSelect,
  ...props
}: ICalendarProps) {
  const { ref } = useWindowBound();

  if (!isShow) return null;

  return (
    <StrictMode>
      <CalendarProvider dateISO={dateISO} onSelect={onSelect}>
        <CalendarContainer isShow={isShow} ref={ref} {...props}>
          <HeaderContainer>
            <MonthBtn dir="prev" />
            <Dropdown variant="month" />
            <Dropdown variant="year" />
            <MonthBtn dir="next" />
          </HeaderContainer>
          <DaysOfWeek />
          <Body />
          {withTime && <Time />}
        </CalendarContainer>
      </CalendarProvider>
    </StrictMode>
  );
}
