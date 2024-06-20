import { configureStore } from '@reduxjs/toolkit';
import {
  ingredientsReducer,
  burgerConstructorReducer,
  currentOrderReducer,
  profileReducer,
  allOrders,
} from '@/store/reducers';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    currentOrder: currentOrderReducer,
    profile: profileReducer,
    [allOrders.reducerPath]: allOrders.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allOrders.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
