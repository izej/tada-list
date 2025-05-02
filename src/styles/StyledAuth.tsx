import {Box, styled} from "@mui/material";

export const AuthFormContainer = styled('div')<{ component?: React.ElementType }>(
  () => ({
    display: "flex",
    width: "50vw",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })
);

export const StyledAuthForm = styled(Box)<{ component?: React.ElementType }>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    maxWidth: 400,
    gap: theme.custom.spacingSizes.m,
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

