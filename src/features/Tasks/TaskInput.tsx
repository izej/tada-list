import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import {useTranslation} from "react-i18next";
import confetti from "canvas-confetti";
import {ActionsContainer, ButtonsContainer} from "./StyledTasks";
import {useAppDispatch} from "hooks/reduxHooks";
import {createTask} from "./tasksSlice.tsx";

interface TasksInputProps {
  date?: string,
  calendarMode?: boolean,
}

const TaskInput = ({date, calendarMode}: TasksInputProps) => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const [newTask, setNewTask] = useState("");

  const today = new Date().toISOString().split('T')[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (done?: boolean) => {
    if (!newTask.trim()) return;

    dispatch(createTask({text: newTask, done: done ?? false, date: date ?? today}));
    setNewTask("");

    if (done) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {y: 0.6},
      });
    }
  };

  return (
    <ActionsContainer>
      <TextField
        fullWidth
        value={newTask}
        onChange={handleInputChange}
        placeholder={t("tasks.form.placeholder")}
        size="small"
      />

      <ButtonsContainer>
        {
          calendarMode
            ? null
            : <Button variant="contained"
                      color="secondary"
                      disabled={!newTask.trim()}
                      onClick={() => handleAddTask(true)}>
              {t("tasks.form.done")}
            </Button>
        }

        <Button variant="contained"
                color="primary"
                disabled={!newTask.trim()}
                onClick={() => handleAddTask(false)}>
          {t("tasks.form.add")}
        </Button>
      </ButtonsContainer>
    </ActionsContainer>
  );
};

export default TaskInput;
