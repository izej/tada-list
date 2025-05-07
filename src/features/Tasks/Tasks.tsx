import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {addTask, selectTasksByDateAndStatus} from "./tasksSlice.tsx";
import Info from "../../components/Info/Info.tsx";
import {ActionsContainer, Container} from "./StyledTasks.tsx";
import {Button, TextField} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import confetti from 'canvas-confetti';
import TasksList from "./TasksList.tsx";

const Tasks = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const [newTask, setNewTask] = useState("");

  const today = new Date().toISOString().split('T')[0];
  const completedTasks = useAppSelector(selectTasksByDateAndStatus(today, true));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (done?: boolean) => {
    if (!newTask.trim()) return;

    dispatch(addTask({text: newTask, done: done ?? false, date: today}));
    setNewTask("");

    if (done) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {y: 0.6},
      });
    }
  };

  return <Container>
    {completedTasks.length > 0
      ? <TasksList done={true}/>

      : <Info title={t("tasks.empty_list")}
              content={t("tasks.empty_list_info")}
      />
    }

    <ActionsContainer>
      <TextField
        fullWidth
        value={newTask}
        onChange={handleInputChange}
        placeholder={t("tasks.form.placeholder")}
        size="small"
      />

      <Button variant="contained"
              color="secondary"
              disabled={!newTask.trim()}
              onClick={() => handleAddTask(true)}>
        {t("tasks.form.done")}
      </Button>

      <Button variant="contained"
              color="primary"
              disabled={!newTask.trim()}
              onClick={() => handleAddTask(false)}>
        {t("tasks.form.add")}
      </Button>
    </ActionsContainer>

    <TasksList done={false}/>
  </Container>;
}

export default Tasks;