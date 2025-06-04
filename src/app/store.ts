import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/Tasks/tasksSlice.tsx';
import profileReducer from '../features/Profile/profileSlice.tsx';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    profile: profileReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
