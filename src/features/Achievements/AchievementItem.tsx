import {styled, Tooltip} from "@mui/material";
import {useTranslation} from "react-i18next";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Wrapper = styled("div")({
  position: "relative",
  width: "150px",
  height: "150px",
  backgroundImage: "url('/achievement.png')",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Emoji = styled("div")({
  fontSize: "2.5rem",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -80%)",
});

const Label = styled("div")({
  fontSize: "1rem",
  fontWeight: 500,
  color: "#333",
  textAlign: "center",
});

interface AchievementProps {
  name_key: string,
  emoji?: string,
  description_key: string,
}

const AchievementItem = ({name_key, emoji, description_key}: AchievementProps) => {
  const {t} = useTranslation();

  return (
    <Container>
      <Tooltip title={t(description_key)}>
        <Wrapper>
          <Emoji>{emoji}</Emoji>
        </Wrapper>
      </Tooltip>
      <Label>{t(name_key)}</Label>
    </Container>
  );
};

export default AchievementItem;
