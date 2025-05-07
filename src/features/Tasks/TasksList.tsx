import {Trans, useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {selectTasksByDateAndStatus, Task, toggleTask} from "./tasksSlice.tsx";
import {EmptyContainer, EmptyMessage, ItemsContainer, ListContainer, TaskImage, TaskText} from "./StyledTasks.tsx";
import {useMemo} from "react";
import {TaskStatus} from "../../models/Task.ts";
import confetti from "canvas-confetti";

interface TasksListProps {
  done: boolean
}

const TasksList = ({done}: TasksListProps) => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const today = new Date().toISOString().split('T')[0];
  const completedTasks = useAppSelector(selectTasksByDateAndStatus(today, true));
  const toDoTasks = useAppSelector(selectTasksByDateAndStatus(today, false));


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

  const handleTaskClick = (task: Task) => {
    const setDone = !task.done;

    dispatch(toggleTask(task.id));

    if (setDone) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {y: 0.6},
      });
    }
  }

  return <ListContainer>
    {tasks.length > 0 && <TaskText> {title} </TaskText>}
    <ItemsContainer>
      {tasks.length > 0 ? (
        tasks.map(task => <TaskText
          component="div"
          onClick={() => handleTaskClick(task)}
          key={task.id}
        >
          {getTaskEmoji(task.text, done ? TaskStatus.DONE : TaskStatus.TO_DO)} {task.text} </TaskText>)
      ) : <EmptyContainer>
        {allTaskCompleted ? (
          <EmptyMessage>{t("tasks.all_completed")}</EmptyMessage>
        ) : (
          <EmptyMessage>
            <Trans i18nKey="tasks.empty_to_do_list" components={{strong: <strong/>, br: <br/>}}/>
          </EmptyMessage>
        )}
        <TaskImage src={emptyBoxImage} alt="No tasks"/>
      </EmptyContainer>}
    </ItemsContainer>
  </ListContainer>
}

export default TasksList
