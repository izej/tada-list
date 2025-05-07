import {ListItem, styled, Typography} from "@mui/material";

export const Container = styled("div")(({theme}) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  overflow: "hidden",
  gap: theme.spacing(1)
}));

export const ActionsContainer = styled("div")(({theme}) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "flex-end",
  padding: theme.spacing(1, 0),
  gap: theme.spacing(1),
}));

export const ListContainer = styled("div")(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  overflow: "hidden",
  gap: theme.spacing(1),
  width: "100%",
}));

export const ItemsContainer = styled(ListContainer)(({theme}) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1, 0),
  maxWidth: "100%",
  boxSizing: "border-box",
  overflowWrap: "break-word",
  wordWrap: "break-word",
}));

export const TaskText = styled(Typography)(() => ({
  overflowWrap: "break-word",
  wordWrap: "break-word",
  maxWidth: "100%",
  boxSizing: "border-box",
  cursor: "pointer",
  userSelect: "none",
}));

export const TaskItem = styled(ListItem)(({theme }) => ({
  overflowWrap: "break-word",
  wordWrap: "break-word",
  maxWidth: "100%",
  boxSizing: "border-box",
  cursor: "pointer",
  userSelect: "none",

  "& .delete-button": {
    opacity: 0,
    transition: "opacity 0.3s ease",
  },

  "&:hover .delete-button": {
    opacity: 1,
  },

  "&:hover": {
    backgroundColor: theme.palette.tertiary.light,
  }
}));

export const EmptyContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  height: "100%",
  padding: "1rem",
});

export const TaskImage = styled("img")({
  width: "50%",
  height: "auto",
  maxWidth: "30%",
  maxHeight: "100vh",
  objectFit: "contain",
});

export const EmptyMessage = styled(Typography)(() => ({
  maxWidth: "100%",
  boxSizing: "border-box",
  textAlign: "center",
}));