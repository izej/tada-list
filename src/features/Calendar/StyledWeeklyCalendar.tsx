import {Box, Button, styled} from "@mui/material";

export const CalendarContainer = styled(Box)(({theme}) => ({
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const HeaderContainer = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2),
}));

export const TodayButton = styled(Button)(({theme}) => ({
  color: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius * 10,
}));

export const WeekNavigation = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
  marginBottom: theme.spacing(2),
}));

export const DaysGrid = styled(Box)(({theme}) => ({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  width: '100%',
  padding: theme.spacing(0, 1),
}));

export const DayBox = styled(Box)(() => ({
  cursor: "pointer",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const DayNumber = styled(Box)<{ selected: boolean }>(({selected, theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: "center",
  padding: theme.spacing(0.5),
  width: '30px',
  aspectRatio: '1/1',
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: selected ? theme.palette.primary.main : "transparent",
  color: selected ? "#fff" : "#000",
  "&:hover": {
    backgroundColor: selected ? theme.palette.primary.dark : theme.palette.primary.light,
  },
}));