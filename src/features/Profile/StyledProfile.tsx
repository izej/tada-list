import {Box, styled} from "@mui/material";

export const ProfileContainer = styled(Box)(({theme}) => ({
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  maxWidth: "100%",
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(8),
  },
}));

export const AvatarsContainer = styled(Box)(({theme}) => ({
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(2),
  },
}));

export const StyledForm = styled('div')(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    gap: 15,
  },
}));


export const LeftContainer = styled("div")(({theme}) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding:theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: theme.spacing(1),
  },
}));

export const RightContainer = styled("div")(({theme}) => ({
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    gridTemplateColumns: "repeat(4, 1fr)",
    padding: "0.5rem",
  },
  [theme.breakpoints.down('xs')]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));

export const CurrentAvatarImage = styled("img")<{ selected?: boolean }>(({ selected, theme }) => ({
  width: '90%',
  maxWidth: '200px',
  aspectRatio: 'auto',
  borderRadius: "50%",
  objectFit: "cover",
  cursor: "pointer",
  border: selected ? "3px solid #1976d2" : "2px solid transparent",
  transition: "border 0.3s ease",
  "&:hover": {
    borderColor: "#1976d2",
  },
  [theme.breakpoints.down('sm')]: {
    width: '80%',
    maxWidth: '150px',
  },
}));

export const AvatarImage = styled("img")<{ selected?: boolean }>(({ selected, theme }) => ({
  width: 80,
  height: 80,
  borderRadius: "50%",
  objectFit: "cover",
  cursor: "pointer",
  border: selected ? "3px solid #1976d2" : "2px solid transparent",
  transition: "border 0.3s ease",
  "&:hover": {
    borderColor: "#1976d2",
  },
  [theme.breakpoints.down('sm')]: {
    width: 60,
    height: 60,
  },
}));

export const ThemeContainer = styled(Box)(({theme}) => ({
  margin: theme.spacing(4, 0, 2, 0),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(1),
  },
}));
