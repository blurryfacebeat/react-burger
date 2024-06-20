import { configureStore, Reducer } from '@reduxjs/toolkit';
import {
  ingredientsReducer,
  burgerConstructorReducer,
  currentOrderReducer,
  profileReducer,
  allOrders,
  userOrders,
} from '@/store/reducers';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    currentOrder: currentOrderReducer,
    profile: profileReducer,
    [allOrders.reducerPath]: allOrders.reducer as Reducer,
    [userOrders.reducerPath]: userOrders.reducer as Reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allOrders.middleware, userOrders.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
