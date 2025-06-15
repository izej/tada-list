import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api, {ACHIEVEMENTS_API_URL} from "api/apiConfig.ts";
import { Achievement } from "models/Achievement";
import {RootState} from "app/store.ts";

interface AchievementsState {
  achievements: Achievement[];
}

const initialState: AchievementsState = {
  achievements: [],
};

export const fetchAchievements = createAsyncThunk<Achievement[]>(
  'achievements/fetchAchievements',
  async (_, {rejectWithValue}) => {
    try {
      const response = await api.get(`${ACHIEVEMENTS_API_URL}/unlocked`);

      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAchievements.fulfilled, (state, action) => {
        state.achievements = action.payload;
      })
  },
});

export const selectAchievements = () => (state: RootState) =>
  state.achievements.achievements;

export default achievementsSlice.reducer;