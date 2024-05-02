import { TIngredientItem } from '@/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TSelectedIngredientState = {
  selectedIngredient: TIngredientItem | null;
};

const initialState: TSelectedIngredientState = {
  selectedIngredient: null,
};

const selectedIngredientSlice = createSlice({
  name: 'selectedIngredient',
  initialState,
  reducers: {
    setSelectedIngredient(
      state,
      action: PayloadAction<TIngredientItem | null>,
    ) {
      state.selectedIngredient = action.payload;
    },
  },
});

export const { setSelectedIngredient } = selectedIngredientSlice.actions;

export default selectedIngredientSlice.reducer;
