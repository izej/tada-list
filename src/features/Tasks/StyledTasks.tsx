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
  boxSizing: "border-box",
  [theme.breakpoints.down('sm')]: {
    flexDirection: "column",
    width: "100%",
    gap: theme.spacing(1),
  },
}));

export const ButtonsContainer = styled("div")(({theme}) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(1),

  [theme.breakpoints.down('sm')]: {
    width: "100%",
    height: "auto",
    justifyContent: "space-between",
    padding: theme.spacing(1, 0),
    boxSizing: "border-box",

    '& button': {
      width: '50%'
    }
  },
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
  boxSizing: "border-box",
});

export const TaskImage = styled("img")({
  width: "50%",
  height: "auto",
  maxWidth: "30%",
  maxHeight: "100vh",
  objectFit: "contain",
});

export const EmptyMessage = styled(Typography)(({theme}) => ({
  maxWidth: "100%",
  boxSizing: "border-box",
  textAlign: "center",
  [theme.breakpoints.down('sm')]: {
    marginRight: theme.spacing(2),
  },
}));
