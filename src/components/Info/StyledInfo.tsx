import {Alert, styled} from "@mui/material";

export const Container = styled("div")(({theme}) => ({
  width: "100%",
  maxWidth: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  overflow: "hidden",
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.5),
  },
}));

export const InfoContainer = styled(Alert)(({theme}) => ({
  width: "100%",
  maxWidth: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  textAlign: "center",
  boxSizing: "border-box",
  overflowWrap: "break-word",
  wordWrap: "break-word",
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    gap: "0.5rem",
  },
}));

export const InfoImage = styled("img")(({theme}) => ({
  width: "20vw",
  height: "auto",
  maxWidth: "50vw",
  [theme.breakpoints.down('sm')]: {
    width: "40vw",
    maxWidth: "80vw",
  },
}));
