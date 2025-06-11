import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {PROFILE_API_URL} from "api/apiConfig.ts";
import api from "api/apiConfig.ts";
import {User} from "models/User.ts";
import {RootState} from "app/store.ts";
import {ThemeMode} from "models/Theme.ts";

interface ProfileData {
  name?: string,
  userData?: User,
  themeMode?: ThemeMode,
  avatar?: string
}

interface EditProfileDataPayload {
  name?: string,
  email?: string,
  password?: string,
  theme?: ThemeMode,
  avatar?: string
}


interface ProfileState {
  profileData: ProfileData,
}

const initialState: ProfileState = {
  profileData: {
    userData: {
      email: '',
      username: '',
      id: ''
    },
  }
};

export const fetchProfileData = createAsyncThunk<ProfileData>(
  'profile/fetchProfileData',
  async (_, {rejectWithValue}) => {
    try {
      const response = await api.get(`${PROFILE_API_URL}`);

      return response.data as ProfileData;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const editData = createAsyncThunk<ProfileData, EditProfileDataPayload>(
  'profile/editProfileData',
  async (payload, {dispatch, rejectWithValue}) => {
    try {
      const response = await api.patch(`${PROFILE_API_URL}/edit`, payload);

      await dispatch(fetchProfileData());

      return response.data as ProfileData;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      if (state.profileData.userData) {
        state.profileData.userData.id = action.payload?.id;
        state.profileData.userData.email = action.payload?.email;
        state.profileData.userData.username = action.payload?.username;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(editData.fulfilled, (state, action) => {
        state.profileData = action.payload
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.profileData = action.payload;
      })
  },
});

export const { setUserData } = profileSlice.actions;

export const selectProfileData = () => (state: RootState) =>
  state.profile.profileData

export default profileSlice.reducer;
