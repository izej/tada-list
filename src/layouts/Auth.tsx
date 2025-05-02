import { Outlet } from "react-router-dom";
import { styled } from "@mui/material";

const FullscreenContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export default function AuthLayout() {
  return (
    <FullscreenContainer>
      <Outlet />
    </FullscreenContainer>
  );
}
