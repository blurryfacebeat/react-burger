import { ThunkAction } from 'redux-thunk';
import {
  addCurrentOrderFailure,
  addCurrentOrderStart,
  addCurrentOrderSuccess,
  TRootState,
} from '@/store';
import { createOrder } from '@/api';
import { UnknownAction } from 'redux';

// TODO Попробовать createAsyncThunk вместо стандартный Thunk Actions
export const createOrderAsync =
  (): ThunkAction<void, TRootState, unknown, UnknownAction> =>
  async (dispatch, getState) => {
    try {
      dispatch(addCurrentOrderStart());

      const burgerConstructorState =
        getState().burgerConstructor.burgerConstructor;

      const orderIds = [
        burgerConstructorState.bun!._id,
        ...burgerConstructorState.ingredients.map((item) => item._id),
        burgerConstructorState.bun!._id,
      ];

      const order = await createOrder(orderIds);

      dispatch(addCurrentOrderSuccess(order));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(addCurrentOrderFailure());
        alert(error.message);
      }
    }
  };
