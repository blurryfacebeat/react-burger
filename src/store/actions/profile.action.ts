import { ThunkAction } from 'redux-thunk';
import {
  getProfileFailure,
  getProfileStart,
  getProfileSuccess,
  TRootState,
} from '@/store';
import { getProfile } from '@/api';

export const getProfileAsync =
  (): ThunkAction<void, TRootState, unknown, any> => async (dispatch) => {
    try {
      dispatch(getProfileStart());

      const profile = await getProfile();

      dispatch(getProfileSuccess(profile));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(getProfileFailure());
      }
    }
  };
