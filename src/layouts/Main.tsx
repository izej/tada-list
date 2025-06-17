import { Outlet } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import {styled} from "@mui/material";
import '../i18n';
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks.ts";
import {useEffect} from "react";
import {fetchTasks} from "features/Tasks/tasksSlice.tsx";
import {useAchievementListener} from "hooks/useAchievementListener.tsx";
import {toast} from "react-toastify";
import {fetchProfileData, selectProfileId} from "features/Profile/profileSlice.tsx";
import {useTranslation} from "react-i18next";

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
  [theme.breakpoints.down("sm")]: {
    paddingBottom: theme.spacing(8),
  },
}));

export default function MainLayout() {
  const dispatch = useAppDispatch();
  const {t} = useTranslation();

  const profileId = useAppSelector(state =>
    selectProfileId()(state)
  );

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchProfileData());
  }, [dispatch]);

  useAchievementListener(profileId ?? '', (achievement) => {
    toast.info(
      `Odblokowano nowe osiągnięcie: ${t(achievement.achievementNameKey)}!`,
      { icon: <span>🎉</span> }
    );
  });


  return (
    <Container>
      <Navigation />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}
