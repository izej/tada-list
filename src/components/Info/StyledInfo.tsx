import {Alert, styled} from "@mui/material";

export const Container = styled("div")(() => ({
  width: "100%",
  maxWidth: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  overflow: "hidden",
}));

export const InfoContainer = styled(Alert)({
  width: "100%",
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
});

export const InfoImage = styled("img")({
  width: "20vw",
  height: "auto",
  maxWidth: "50vw",
});
