import { ThunkAction } from 'redux-thunk';
import {
  TRootState,
  fetchIngredientsStart,
  fetchIngredientsSuccess,
  fetchIngredientsFailure,
  setSelectedIngredient,
} from '@/store';
import { getIngredients } from '@/api';

export const fetchIngredientsAsync =
  (activeIngredient?: string): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(fetchIngredientsStart());

      const ingredients = await getIngredients();

      const selectedIngredientItem = ingredients?.find(
        (item) => item._id === activeIngredient,
      );

      if (activeIngredient && selectedIngredientItem) {
        dispatch(setSelectedIngredient(selectedIngredientItem));
      }

      dispatch(fetchIngredientsSuccess(ingredients));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchIngredientsFailure(error.message));
      }
    }
  };
