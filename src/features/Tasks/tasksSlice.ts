import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../../app/store.ts";

interface Task {
  id: string;
  text: string;
  done: boolean;
  date: string;
}

interface TasksState {
  items: Task[];
}

const initialState: TasksState = {
  items: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{ text: string; date: string }>
    ) => {
      state.items.push({
        id: crypto.randomUUID(),
        text: action.payload.text,
        date: action.payload.date,
        done: false,
      });
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.items.find(t => t.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(t => t.id !== action.payload);
    },
  },
});

export const selectTasksByDate = (date: string) => (state: RootState) =>
  state.tasks.items.filter(task => task.date === date);

export const { addTask, toggleTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
