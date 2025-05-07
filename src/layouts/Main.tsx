import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation.tsx";
import {styled} from "@mui/material";
import '../i18n';

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  width: '100vw',
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  overflow: "hidden",
  boxSizing: "border-box",
}));

const Main = styled("main")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  maxWidth: "768px",
  margin: "0 auto",
  padding: theme.spacing(2),
  boxSizing: "border-box",
  overflow: "hidden",
}));

export default function MainLayout() {

  return (
    <Container>
      <Navigation />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}
