import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from "app/store.ts";
import {TASKS_API_URL} from "api/apiConfig.ts";
import api from "api/apiConfig.ts";

export interface Task {
  id: string;
  text: string;
  done: boolean;
  date: string;
}

interface CreateTaskPayload {
  text: string;
  date?: string;
  done?: boolean;
}

interface ToggleTaskPayload {
  id: string;
  done: boolean;
}

interface TasksState {
  items: Task[];
}

const initialState: TasksState = {
  items: [],
};

export const fetchTasks = createAsyncThunk<Task[]>(
  'tasks/fetchTasks',
  async (_, {rejectWithValue}) => {
    try {
      const response = await api.get(`${TASKS_API_URL}`);

      return response.data.content as Task[];
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const createTask = createAsyncThunk<Task, CreateTaskPayload>(
  'tasks/createTask',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await api.post(`${TASKS_API_URL}/create`, payload);

      return response.data as Task;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const toggleTaskAndFetch = createAsyncThunk<Task, ToggleTaskPayload>(
  'tasks/toggleTaskAndFetch',
  async (payload, {dispatch, rejectWithValue}) => {
    try {
      const response = await api.patch(`${TASKS_API_URL}/done`, payload);

      await dispatch(fetchTasks());

      return response.data as Task;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const removeTaskAndFetch = createAsyncThunk<void, string>(
  'tasks/removeTaskAndFetch',
  async (payload, {dispatch, rejectWithValue}) => {
    try {
      await api.delete(`${TASKS_API_URL}/${payload}`);

      await dispatch(fetchTasks());

    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);


const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
      .addCase(toggleTaskAndFetch.fulfilled, () => {
      })
      .addCase(removeTaskAndFetch.fulfilled, () => {
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
  },
});

export const selectTasksByDate = (date: string) => (state: RootState) =>
  state.tasks.items.filter(task => task.date === date);

export const selectTasksByDateAndStatus = (date: string, done: boolean) => (state: RootState) =>
  state.tasks.items.filter(task => task.date === date && task.done === done);

export default tasksSlice.reducer;
