import {Button, styled, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const Container = styled("div")(({theme}) => ({
  display: "flex",
  width: '100vw',
  flexDirection: "column",
  height: "100vh",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const Title = styled(Typography)(({theme}) => ({
  fontSize: "1.7rem",
  color: theme.palette.primary.main,
}));

export const NotFoundImage = styled("img")({
  maxWidth: "100%",
  maxHeight: "50vh",
});

const NotFound = () => {
  const {t} = useTranslation();

  return <Container>
    <NotFoundImage src="404.png" alt="404"/>
    <Title>
      {t('not_found.title')}
    </Title>
    <Typography>
      {t('not_found.content')}
    </Typography>
    <Button variant={'text'} color={'secondary'} onClick={() => window.history.back()}>
      {t('not_found.back')}
    </Button>
  </Container>
}

export default NotFound;