import {useEffect, useMemo, useState} from "react";
import {
  startOfWeek,
  addDays,
  format,
  addWeeks,
  subWeeks,
  isSameDay,
} from "date-fns";
import {Box, IconButton, Typography} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  CalendarContainer,
  DayBox,
  DayNumber,
  DaysGrid,
  HeaderContainer, TodayButton,
  WeekNavigation,
} from "features/Calendar/StyledWeeklyCalendar.tsx";

import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import WeekPicker from "components/WeekPicker/WeekPicker.tsx";
import {useTranslation} from "react-i18next";
import TasksList from "features/Tasks/TasksList.tsx";
import TaskInput from "features/Tasks/TaskInput.tsx";

const WeeklyCalendar = () => {
  const {t} = useTranslation();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentWeekStart, setCurrentWeekStart] = useState(
    startOfWeek(new Date(), {weekStartsOn: 1})
  );

  const isFutureDate = useMemo(() => selectedDate ? new Date().getTime() <= new Date(format(selectedDate, 'yyyy-MM-dd')).getTime() : false, [selectedDate]);

  const updateWeekToDate = (date: Date | null) => {
    setSelectedDate(date ?? new Date());
    setCurrentWeekStart(startOfWeek(date ?? new Date(), {weekStartsOn: 1}));
  };

  const days = [...Array(7)].map((_, i) => addDays(currentWeekStart, i));

  const goToNextWeek = () => {
    const nextWeek = addWeeks(currentWeekStart, 1);
    setCurrentWeekStart(nextWeek);
    setSelectedDate(addDays(nextWeek, 0));
  };

  const goToPrevWeek = () => {
    const prevWeek = subWeeks(currentWeekStart, 1);
    setCurrentWeekStart(prevWeek);
    setSelectedDate(addDays(prevWeek, 0));
  };

  useEffect(() => {
    updateWeekToDate(selectedDate)
  }, [selectedDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CalendarContainer>
        <HeaderContainer>
          <WeekPicker selectedDate={selectedDate} onChange={updateWeekToDate}/>
          <TodayButton variant={"contained"}
                       onClick={() => setSelectedDate(new Date())}> {t('calendar.today')} </TodayButton>
        </HeaderContainer>

        <WeekNavigation>
          <IconButton onClick={goToPrevWeek}>
            <ArrowBackIosIcon/>
          </IconButton>

          <DaysGrid>
            {days.map((day) => (
              <DayBox key={day.toISOString()} onClick={() => setSelectedDate(day)}>
                <Typography fontWeight="bold">{format(day, "EEE")}</Typography>

                <DayNumber selected={isSameDay(day, selectedDate)}>
                  <Typography>{format(day, "d")}</Typography>
                </DayNumber>
              </DayBox>
            ))}
          </DaysGrid>

          <IconButton onClick={goToNextWeek}>
            <ArrowForwardIosIcon/>
          </IconButton>
        </WeekNavigation>

        <Box>
          <TasksList done={!isFutureDate} date={format(selectedDate, 'yyyy-MM-dd')} calendarMode={true}/>

          {
            isFutureDate ? <TaskInput date={format(selectedDate, 'yyyy-MM-dd')} calendarMode={true}/>
              : null
          }

        </Box>
      </CalendarContainer>
    </LocalizationProvider>
  );
};

export default WeeklyCalendar;
