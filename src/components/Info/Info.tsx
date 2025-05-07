import {AlertTitle, Typography} from "@mui/material";
import {Container, InfoContainer, InfoImage} from "./StyledInfo.tsx";

interface InfoProps {
  title?: string,
  content?: string,
  img?: string,
}

const Info = ({title, content, img}: InfoProps) => {

  return <Container>
    { img && <InfoImage src={img} alt={title}/> }
  <InfoContainer severity="info" variant="outlined" icon={false}>
    <AlertTitle>
      {title}
    </AlertTitle>
    <Typography>
      {content}
    </Typography>
  </InfoContainer>
    </Container>
}

export default Info