import {useAppSelector} from "hooks/reduxHooks";
import {selectTasksByDateAndStatus} from "./tasksSlice.tsx";
import Info from "../../components/Info/Info";
import {Container} from "./StyledTasks";
import {useTranslation} from "react-i18next";
import TasksList from "./TasksList";
import TaskInput from "./TaskInput";

const Tasks = () => {
  const {t} = useTranslation();
  const today = new Date().toISOString().split('T')[0];
  const completedTasks = useAppSelector(state =>
    selectTasksByDateAndStatus(today, true)(state)
  );

  return (
    <Container>
      {completedTasks.length > 0
        ? <TasksList done={true}/>
        : <Info
          title={t("tasks.empty_list")}
          content={t("tasks.empty_list_info")}
        />
      }

      <TaskInput />
      <TasksList done={false}/>
    </Container>
  );
};

export default Tasks;
