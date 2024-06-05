import { ThunkAction } from 'redux-thunk';
import {
  TRootState,
  fetchIngredientsStart,
  fetchIngredientsSuccess,
  fetchIngredientsFailure,
} from '@/store';
import { getIngredients } from '@/api';
import { Action } from 'redux';

export const fetchIngredientsAsync =
  (): ThunkAction<void, TRootState, unknown, Action> => async (dispatch) => {
    try {
      dispatch(fetchIngredientsStart());

      const ingredients = await getIngredients();

      dispatch(fetchIngredientsSuccess(ingredients));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchIngredientsFailure(error.message));
      }
    }
  };
