import { ThunkAction } from 'redux-thunk';
import {
  setAuthChecked,
  setProfileIsLoading,
  setProfile,
  TRootState,
} from '@/store';
import { getProfile, login, logout } from '@/api';
import { accessTokenLocalStorage, refreshTokenLocalStorage } from '@/utils';
import { Action } from 'redux';

export const loginAsync =
  (
    email: string,
    password: string,
  ): ThunkAction<void, TRootState, unknown, Action> =>
  async (dispatch) => {
    try {
      const response = await login(email, password);

      const { accessToken, refreshToken, user } = response;

      accessTokenLocalStorage.set(accessToken);
      refreshTokenLocalStorage.set(refreshToken);
      dispatch(setProfile(user));
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

export const checkProfileAuthAsync =
  (): ThunkAction<void, TRootState, unknown, Action> => async (dispatch) => {
    if (!accessTokenLocalStorage.get()) {
      dispatch(setAuthChecked(true));
      return;
    }

    try {
      dispatch(setProfileIsLoading(true));

      const profile = await getProfile();

      dispatch(setProfile(profile));
    } catch (error) {
      accessTokenLocalStorage.remove();
      refreshTokenLocalStorage.remove();
    } finally {
      dispatch(setAuthChecked(true));
      dispatch(setProfileIsLoading(false));
    }
  };

export const logoutAsync =
  (): ThunkAction<void, TRootState, unknown, Action> => async (dispatch) => {
    try {
      await logout();

      dispatch(setProfile(null));
      accessTokenLocalStorage.remove();
      refreshTokenLocalStorage.remove();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
