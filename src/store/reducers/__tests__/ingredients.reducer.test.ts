import reducer, {
  fetchIngredientsStart,
  fetchIngredientsSuccess,
  fetchIngredientsFailure,
  TIngredientsState,
  initialState,
} from '../ingredients.reducer.ts';
import { TIngredientItem } from '@/api';
import { createIngredientItem } from '../helpers/reducers-tests.helpers.ts';

describe('ingredientsReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle fetchIngredientsStart', () => {
    const expectedState: TIngredientsState = {
      ingredients: [],
      isLoading: true,
      errorMessage: null,
    };

    expect(reducer(initialState, fetchIngredientsStart())).toEqual(
      expectedState,
    );
  });

  it('should handle fetchIngredientsSuccess', () => {
    const ingredients: TIngredientItem[] = [
      createIngredientItem(),
      createIngredientItem({ id: '2' }),
    ];
    const action = fetchIngredientsSuccess(ingredients);
    const expectedState: TIngredientsState = {
      ingredients,
      isLoading: false,
      errorMessage: null,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle fetchIngredientsFailure', () => {
    const errorMessage = 'Failed to fetch ingredients';
    const action = fetchIngredientsFailure(errorMessage);
    const expectedState: TIngredientsState = {
      ingredients: [],
      isLoading: false,
      errorMessage,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
