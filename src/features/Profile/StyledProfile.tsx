import {Box, styled} from "@mui/material";

export const ProfileContainer = styled(Box)(({theme}) => ({
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const AvatarsContainer = styled(Box)(({theme}) => ({
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(2),
}));

export const StyledForm = styled('div')(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  width: '100%',
}));


export const LeftContainer = styled("div")({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
});

export const RightContainer = styled("div")({
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
  padding: "1rem",
});

export const CurrentAvatarImage = styled("img")<{ selected?: boolean }>(({ selected }) => ({
  width: '90%',
  aspectRatio: 'auto',
  borderRadius: "50%",
  objectFit: "cover",
  cursor: "pointer",
  border: selected ? "3px solid #1976d2" : "2px solid transparent",
  transition: "border 0.3s ease",
  "&:hover": {
    borderColor: "#1976d2",
  },
}));

export const AvatarImage = styled("img")<{ selected?: boolean }>(({ selected }) => ({
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
}));

export const ThemeContainer = styled(Box)(({theme}) => ({
  margin: theme.spacing(4, 0, 2, 0),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),
}));