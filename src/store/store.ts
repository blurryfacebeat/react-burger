import { configureStore } from '@reduxjs/toolkit';
import {
  ingredientsReducer,
  selectedIngredientReducer,
  burgerConstructorReducer,
  currentOrderReducer,
} from '@/store/reducers';

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    selectedIngredient: selectedIngredientReducer,
    burgerConstructor: burgerConstructorReducer,
    currentOrder: currentOrderReducer,
  },
  devTools: true,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
