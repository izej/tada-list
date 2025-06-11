import {BottomNavigation, Toolbar, styled, Box} from "@mui/material";

export const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  maxWidth: "100vw",
  zIndex: 1100,
  backgroundColor: theme.palette.background.paper,
}));

export const MobileNavItemWrapper = styled(Box)(() => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const MobileNavIconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>(({ selected, theme }) => ({
  paddingInline: "1rem",
  height: "40px",
  borderRadius: "9999px",
  backgroundColor: selected ? theme.palette.tertiary.dark  : theme.palette.tertiary.main,
  color: theme.palette.background.default,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "background-color 0.3s ease",

  "&:hover": {
    backgroundColor:  theme.palette.tertiary.light,
  },
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  minHeight: theme.custom.nav.toolbarMinHeight,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

export const NavItems = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}));

export const NavItem = styled("div", {
  shouldForwardProp: (prop) => prop !== "current",
})<{ current: boolean }>(({ current, theme }) => ({
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(0.5),

  ".icon-wrapper": {
    paddingInline: theme.custom.nav.iconPaddingX,
    height: theme.custom.nav.iconHeight,
    borderRadius: theme.shape.borderRadius * 10,
    minWidth: theme.custom.nav.iconWidth,
    backgroundColor: current ? theme.palette.tertiary.main : theme.palette.tertiary.light,
    color: current ? theme.palette.background.default : theme.palette.background.default,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s ease",
  },

  "&:hover .icon-wrapper": {
    backgroundColor: !current ? theme.palette.secondary.light : 'undefined',
    color: theme.palette.background.default
  },
}));
