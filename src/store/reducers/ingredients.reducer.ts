import { TIngredientItem } from '@/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TIngredientsState = {
  ingredients: TIngredientItem[];
  isLoading: boolean;
  errorMessage: string | null;
};

export const initialState: TIngredientsState = {
  ingredients: [],
  isLoading: true,
  errorMessage: null,
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    fetchIngredientsStart(state) {
      state.isLoading = true;
      state.errorMessage = null;
    },
    fetchIngredientsSuccess(state, action: PayloadAction<TIngredientItem[]>) {
      state.isLoading = false;
      state.errorMessage = null;
      state.ingredients = action.payload;
    },
    fetchIngredientsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.ingredients = initialState.ingredients;
    },
  },
});

export const {
  fetchIngredientsStart,
  fetchIngredientsSuccess,
  fetchIngredientsFailure,
} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
