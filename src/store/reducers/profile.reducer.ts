import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TProfile = {
  name: string;
  email: string;
};

type TProfileState = {
  profile: TProfile | null;
  isLoading: boolean;
};

type TGetProfilePayload = {
  email: string;
  name: string;
};

const initialState: TProfileState = {
  profile: null,
  isLoading: false,
};

const profileReducer = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfileStart(state) {
      state.isLoading = true;
    },
    getProfileSuccess(state, action: PayloadAction<TGetProfilePayload>) {
      state.isLoading = false;
      state.profile = action.payload;
    },
    getProfileFailure(state) {
      state.isLoading = false;
      state.profile = initialState.profile;
    },
  },
});

export const { getProfileSuccess, getProfileFailure, getProfileStart } =
  profileReducer.actions;

export default profileReducer.reducer;
