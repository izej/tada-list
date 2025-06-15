import {styled, Typography} from "@mui/material";
import {ListContainer} from "features/Tasks/StyledTasks.tsx";

export const ItemsContainer = styled(ListContainer)(({theme}) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2, 0),
  maxWidth: "100%",
  boxSizing: "border-box",
  overflowWrap: "break-word",
  wordWrap: "break-word",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  alignItems: "center",
  justifyContent: "center",
}));

export const AchievementsContainer = styled('div')(({theme}) => ({
  display: "flex",
  alignItems: "start",
  justifyContent: "start",
  width: '100%',
  padding: theme.spacing(1),
}));

export const ListImage = styled("img")({
  width: "100%",
  height: "auto",
  maxWidth: "30%",
  maxHeight: "100vh",
  objectFit: "contain",
});

export const Message = styled(Typography)(({theme}) => ({
  maxWidth: "100%",
  boxSizing: "border-box",
  textAlign: "center",
  [theme.breakpoints.down('sm')]: {
    marginRight: theme.spacing(2),
  },
}));