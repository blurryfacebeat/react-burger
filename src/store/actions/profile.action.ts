import { ThunkAction } from 'redux-thunk';
import {
  setAuthChecked,
  setProfileIsLoading,
  setProfile,
  TRootState,
} from '@/store';
import { getProfile } from '@/api';
import { accessTokenLocalStorage, refreshTokenLocalStorage } from '@/utils';

export const checkProfileAuthAsync =
  (): ThunkAction<void, TRootState, unknown, any> => async (dispatch) => {
    if (accessTokenLocalStorage.get()) {
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
    } else {
      dispatch(setAuthChecked(true));
    }
  };
