import {Box, styled} from "@mui/material";

export const AuthFormContainer = styled('div')<{ component?: React.ElementType }>(
  ({theme}) => ({
    display: "flex",
    width: "50vw",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      width: "100vw",
    },
  })
);

export const StyledAuthForm = styled(Box)<{ component?: React.ElementType }>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
    gap: theme.custom.spacingSizes.m,
    boxSizing: "border-box",
    padding: theme.spacing(2),
  })
);


export const BottomImageWrapper = styled(Box)(({theme}) => ({
  bottom: 0,
  left: 0,
  width: "50vw",
  height: "100vh",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  zIndex: 1,
  pointerEvents: "none",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const BottomImage = styled("img")({
  width: "100%",
  height: "auto",
  maxWidth: "100%",
  maxHeight: "100vh",
  objectFit: "contain",
});

