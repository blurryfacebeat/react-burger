import reducer, {
  fetchIngredientsStart,
  fetchIngredientsSuccess,
  fetchIngredientsFailure,
  TIngredientsState,
} from '../ingredients.reducer.ts';
import { TIngredientItem } from '@/api';

describe('ingredientsReducer', () => {
  const initialState: TIngredientsState = {
    ingredients: [],
    isLoading: true,
    errorMessage: null,
  };

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
      {
        _id: '1',
        name: 'Ingredient 1',
        type: 'main',
        proteins: 10,
        fat: 20,
        carbohydrates: 30,
        calories: 40,
        price: 50,
        image: 'image_url',
        image_mobile: 'image_mobile_url',
        image_large: 'image_large_url',
        __v: 0,
      },
      {
        _id: '2',
        name: 'Ingredient 2',
        type: 'main',
        proteins: 15,
        fat: 25,
        carbohydrates: 35,
        calories: 45,
        price: 55,
        image: 'image_url',
        image_mobile: 'image_mobile_url',
        image_large: 'image_large_url',
        __v: 0,
      },
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
