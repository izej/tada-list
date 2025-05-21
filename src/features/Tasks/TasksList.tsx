import {Trans, useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks.ts";
import {removeTaskAndFetch, selectTasksByDateAndStatus, Task, toggleTaskAndFetch} from "./tasksSlice.tsx";
import {
  EmptyContainer,
  EmptyMessage,
  ItemsContainer,
  ListContainer,
  TaskImage,
  TaskItem,
  TaskText
} from "./StyledTasks.tsx";
import {useMemo} from "react";
import {TaskStatus} from "models/Task.ts";
import confetti from "canvas-confetti";
import DeleteIcon from "@mui/icons-material/Delete";
import {IconButton} from "@mui/material";

interface TasksListProps {
  done: boolean,
  date?: string,
  calendarMode?: boolean,
}

const TasksList = ({done, date, calendarMode}: TasksListProps) => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const today = new Date().toISOString().split('T')[0];
  const isFutureDate = useMemo(() => date ? new Date().getTime() <= new Date(date).getTime() : false, [date, today]);

  const completedTasks = useAppSelector(state =>
    selectTasksByDateAndStatus(date ?? today, true)(state)
  );

  const toDoTasks =  useAppSelector(state =>
    selectTasksByDateAndStatus(date ?? today, false)(state)
  );

  const tasks = useMemo(() => done ? completedTasks : toDoTasks, [done, completedTasks, toDoTasks]);

  const allTaskCompleted = useMemo(() => completedTasks.length > 0 && toDoTasks.length < 1, [done, completedTasks, toDoTasks]);

  const title = useMemo(() => done ? t("tasks.completed") : t("tasks.to_do"), [done, completedTasks, toDoTasks]);

  const emptyBoxImage = useMemo(() => allTaskCompleted ? 'completed.png' : 'lazy_day.png', [done, completedTasks, toDoTasks]);

  const getTaskEmoji = (taskText: string, status: TaskStatus) => {
    const emojis = {
      [TaskStatus.DONE]: ["🚀", "🎉", "🥳", "👏🏻", "📣", "🤸🏼‍♀️", "🎊"],
      [TaskStatus.TO_DO]: ["🎯", "⏳", "👉", "⏰", "📍", "📆"]
    };

    const hashCode = (str: string) => {
      return str.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    };

    const pool = emojis[status];
    const index = hashCode(taskText) % pool.length;
    return pool[index];
  };

  const handleTaskClick = async (task: Task) => {
    try {
      const setDone = !task.done;

      const data = {
        id: task.id,
        done: setDone
      }

      await dispatch(toggleTaskAndFetch(data)).unwrap();

      if (setDone) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: {y: 0.6},
        });
      }
    } catch (error) {
      console.error("Failed to toggle task:", error);
    }
  }

  return <ListContainer>
    {tasks.length > 0 && <TaskText> {title} </TaskText>}
    <ItemsContainer>
      {tasks.length > 0 ? (
        tasks.map(task => <TaskItem
          onClick={() => calendarMode ? null : handleTaskClick(task)}
          key={task.id}
          readonly={calendarMode}
          secondaryAction={
            (calendarMode && done) ? null :
          <IconButton
              edge="end"
              aria-label="delete"
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(removeTaskAndFetch(task.id));
              }}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          {getTaskEmoji(task.text, done ? TaskStatus.DONE : TaskStatus.TO_DO)} {task.text} </TaskItem>)
      ) : <EmptyContainer>
        {allTaskCompleted ? (
          <EmptyMessage>{t("tasks.all_completed")}</EmptyMessage>
        ) : (calendarMode && !isFutureDate && done) ? (
          <EmptyMessage>
            <Trans i18nKey="tasks.default_empty_list" components={{ strong: <strong />, br: <br /> }} />
          </EmptyMessage>
        ) : (
          <EmptyMessage>
            <Trans i18nKey="tasks.empty_to_do_list" components={{ strong: <strong />, br: <br /> }} />
          </EmptyMessage>
        )}
        <TaskImage src={emptyBoxImage} alt="No tasks"/>
      </EmptyContainer>}
    </ItemsContainer>
  </ListContainer>
}

export default TasksList
