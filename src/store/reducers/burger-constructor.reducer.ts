import { TIngredientItem } from '@/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TBurgerConstructorState = {
  burgerConstructor: TIngredientItem[];
};

const initialState: TBurgerConstructorState = {
  burgerConstructor: [],
};

const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addIngredientToConstructor(state, action: PayloadAction<TIngredientItem>) {
      state.burgerConstructor.push(action.payload);
    },
    removeIngredientFromConstructor(state, action: PayloadAction<string>) {
      state.burgerConstructor = state.burgerConstructor.filter(
        (item) => item._id !== action.payload,
      );
    },
  },
});

export const { addIngredientToConstructor, removeIngredientFromConstructor } =
  burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
