import { TIngredientItem } from '@/api';
import { v4 as uuidv4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TBurgerConstructorIngredientItem = TIngredientItem & {
  key: string;
};

export type TBurgerConstructor = {
  bun: TIngredientItem | null;
  ingredients: TBurgerConstructorIngredientItem[];
};

type TBurgerConstructorState = {
  burgerConstructor: TBurgerConstructor;
  counts: Record<string, number>;
};

type TSwipeIngredientsInBurgerConstructorPayload = {
  toIndex: number;
  fromIndex: number;
};

const initialState: TBurgerConstructorState = {
  burgerConstructor: {
    bun: null,
    ingredients: [],
  },
  counts: {},
};

const updateCounts = (state: TBurgerConstructorState) => {
  state.counts = state.burgerConstructor.ingredients.reduce(
    (acc, nextItem) => {
      if (!acc[nextItem._id]) {
        acc[nextItem._id] = 1;
      } else {
        acc[nextItem._id] += 1;
      }

      return acc;
    },
    {} as Record<string, number>,
  );
};

const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addIngredientToConstructor(state, action: PayloadAction<TIngredientItem>) {
      if (action.payload.type === 'bun') {
        state.burgerConstructor.bun = action.payload;
      } else {
        state.burgerConstructor.ingredients.push({
          ...action.payload,
          key: uuidv4(),
        });
      }

      updateCounts(state);
    },
    removeIngredientFromConstructor(state, action: PayloadAction<string>) {
      state.burgerConstructor.ingredients =
        state.burgerConstructor.ingredients.filter(
          (item) => item.key !== action.payload,
        );

      updateCounts(state);
    },
    swipeIngredientsInBurgerConstructor(
      state,
      action: PayloadAction<TSwipeIngredientsInBurgerConstructorPayload>,
    ) {
      const { toIndex, fromIndex } = action.payload;

      if (typeof toIndex !== 'undefined' && typeof fromIndex !== 'undefined') {
        const newIngredients = [
          ...state.burgerConstructor.ingredients.filter(
            (item) => item.type !== 'bun',
          ),
        ];

        const movedItem = newIngredients[fromIndex];

        if (fromIndex < toIndex) {
          newIngredients.splice(toIndex + 1, 0, movedItem);
          newIngredients.splice(fromIndex, 1);
        } else {
          newIngredients.splice(fromIndex, 1);
          newIngredients.splice(toIndex, 0, movedItem);
        }

        state.burgerConstructor.ingredients = newIngredients;
      }
    },
  },
});

export const {
  addIngredientToConstructor,
  removeIngredientFromConstructor,
  swipeIngredientsInBurgerConstructor,
} = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
