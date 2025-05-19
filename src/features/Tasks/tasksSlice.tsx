import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from "app/store.ts";

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
      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:8080/api/v1/tasks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? {Authorization: `Bearer ${token}`} : {}),
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }

      const tasks = await response.json();

      return tasks.content as Task[];
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const createTask = createAsyncThunk<Task, CreateTaskPayload>(
  'tasks/createTask',
  async (payload, {rejectWithValue}) => {
    try {
      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:8080/api/v1/tasks/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? {Authorization: `Bearer ${token}`} : {}),
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to create task');
      }

      const createdTask = await response.json();
      return createdTask as Task;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const toggleTaskAndFetch = createAsyncThunk<Task, ToggleTaskPayload>(
  'tasks/toggleTaskAndFetch',
  async (payload, {dispatch, rejectWithValue}) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/v1/tasks/done', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? {Authorization: `Bearer ${token}`} : {}),
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to toggle task');
      }

      const toggledTask = await response.json();


      await dispatch(fetchTasks());

      return toggledTask as Task;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const removeTaskAndFetch = createAsyncThunk<void, string>(
  'tasks/removeTaskAndFetch',
  async (payload, {dispatch, rejectWithValue}) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8080/api/v1/tasks/${payload}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? {Authorization: `Bearer ${token}`} : {}),
        }
      });

      if (!response.ok) {
        throw new Error('Failed to remove task');
      }

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
