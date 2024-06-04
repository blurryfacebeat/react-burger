import { configureStore } from '@reduxjs/toolkit';
import {
  ingredientsReducer,
  burgerConstructorReducer,
  currentOrderReducer,
  profileReducer,
} from '@/store/reducers';

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    currentOrder: currentOrderReducer,
    profile: profileReducer,
  },
  devTools: true,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
