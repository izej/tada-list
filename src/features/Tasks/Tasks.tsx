import {useAppSelector} from "../../hooks/reduxHooks.ts";
import {selectTasksByDate} from "./tasksSlice.ts";
import Info from "../../components/Info/Info.tsx";
import {ActionsContainer, Container} from "./StyledTasks.tsx";
import { Button } from "@mui/material";
import {useTranslation} from "react-i18next";

const Tasks = () => {
  const {t} = useTranslation();

  const today = new Date().toISOString().split('T')[0];
  const tasksForToday = useAppSelector(selectTasksByDate(today));

  return <Container>
    {tasksForToday.length
      ? <> Taski </>
      : <Info title={t("tasks.empty_list")}
              content={t("tasks.empty_list_info")}
        />
      }

    <ActionsContainer>
      <Button variant="contained" color="primary">
        Dodaj zadanie
      </Button>
    </ActionsContainer>
  </Container>;
}

export default Tasks;