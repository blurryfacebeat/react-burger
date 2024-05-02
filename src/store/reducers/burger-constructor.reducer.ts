import { TIngredientItem } from '@/api';
import { v4 as uuidv4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TBurgerConstructorIngredientItem = TIngredientItem & {
  key: string;
};

type TBurgerConstructorState = {
  burgerConstructor: TBurgerConstructorIngredientItem[];
  counts: Record<string, number>;
};

const initialState: TBurgerConstructorState = {
  burgerConstructor: [],
  counts: {},
};

const updateCounts = (state: TBurgerConstructorState) => {
  state.counts = state.burgerConstructor.reduce(
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
        state.burgerConstructor = state.burgerConstructor.filter(
          (item) => item.type !== 'bun',
        );
      }

      state.burgerConstructor.push({ ...action.payload, key: uuidv4() });

      updateCounts(state);
    },
    removeIngredientFromConstructor(state, action: PayloadAction<string>) {
      state.burgerConstructor = state.burgerConstructor.filter(
        (item) => item.key !== action.payload,
      );

      updateCounts(state);
    },
    swipeIngredientsInBurgerConstructor(
      state,
      action: PayloadAction<{ toIndex: number; fromIndex: number }>,
    ) {
      const { toIndex, fromIndex } = action.payload;

      if (typeof toIndex !== 'undefined' && typeof fromIndex !== 'undefined') {
        const newConstructor = [...state.burgerConstructor];

        const movedItem = newConstructor[fromIndex];

        if (fromIndex < toIndex) {
          newConstructor.splice(toIndex + 1, 0, movedItem);
          newConstructor.splice(fromIndex, 1);
        } else {
          newConstructor.splice(fromIndex, 1);
          newConstructor.splice(toIndex, 0, movedItem);
        }

        return {
          ...state,
          burgerConstructor: newConstructor,
        };
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
