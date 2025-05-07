import {styled} from "@mui/material";

export const Container = styled("div")(() => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  overflow: "hidden",
}));

export const ActionsContainer = styled("div")(({theme}) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "flex-end",
  padding: theme.spacing(1, 0),
}));
