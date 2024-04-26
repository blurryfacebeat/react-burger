import { TIngredientItem } from '@/api';
import { v4 as uuidv4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TBurgerConstructorIngredientItem = TIngredientItem & {
  key: string;
};

type TBurgerConstructorState = {
  burgerConstructor: TBurgerConstructorIngredientItem[];
};

const initialState: TBurgerConstructorState = {
  burgerConstructor: [],
};

const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addIngredientToConstructor(state, action: PayloadAction<TIngredientItem>) {
      if (action.payload.type === 'bun') {
        state.burgerConstructor = state.burgerConstructor.filter(
          (item) => item.type !== 'bun',
        );
      }

      state.burgerConstructor.push({ ...action.payload, key: uuidv4() });
    },
    removeIngredientFromConstructor(state, action: PayloadAction<string>) {
      state.burgerConstructor = state.burgerConstructor.filter(
        (item) => item.key !== action.payload,
      );
    },
  },
});

export const { addIngredientToConstructor, removeIngredientFromConstructor } =
  burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
