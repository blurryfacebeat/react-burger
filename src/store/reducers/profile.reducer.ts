import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TProfile = {
  name: string;
  email: string;
};

type TProfileState = {
  profile: TProfile | null;
  isAuthChecked: boolean;
  isLoading: boolean;
};

type TSetProfilePayload = {
  email: string;
  name: string;
};

const initialState: TProfileState = {
  profile: null,
  isAuthChecked: false,
  isLoading: false,
};

const profileReducer = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setAuthChecked: (state, action: PayloadAction<boolean>) => {
      state.isAuthChecked = action.payload;
    },
    setProfile: (state, action: PayloadAction<TSetProfilePayload | null>) => {
      state.profile = action.payload;
    },
    setProfileIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setProfileIsLoading, setProfile, setAuthChecked } =
  profileReducer.actions;

export default profileReducer.reducer;
