import { ThunkAction } from 'redux-thunk';
import {
  addCurrentOrderFailure,
  addCurrentOrderStart,
  addCurrentOrderSuccess,
  TRootState,
} from '@/store';
import { createOrder, TIngredientItem } from '@/api';

export const createOrderAsync =
  (): ThunkAction<void, TRootState, unknown, any> =>
  async (dispatch, getState) => {
    try {
      dispatch(addCurrentOrderStart());

      const burgerConstructorState =
        getState().burgerConstructor.burgerConstructor;

      const ingredients: TIngredientItem[] = [
        ...burgerConstructorState.ingredients,
      ];

      if (burgerConstructorState.bun) {
        ingredients.push(burgerConstructorState.bun);
      }

      const order = await createOrder(ingredients.map((item) => item._id));

      dispatch(addCurrentOrderSuccess(order));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(addCurrentOrderFailure(error.message));
      }
    }
  };
