import reducer, {
  addIngredientToConstructor,
  removeIngredientFromConstructor,
  swipeIngredientsInBurgerConstructor,
  TBurgerConstructorState,
} from '../burger-constructor.reducer.ts';
import { TIngredientItem } from '@/api';

jest.mock('uuid', () => ({
  v4: () => 'unique-id',
}));

describe('burgerConstructorSlice', () => {
  const initialState: TBurgerConstructorState = {
    burgerConstructor: {
      bun: null,
      ingredients: [],
    },
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle addIngredientToConstructor for bun', () => {
    const bun: TIngredientItem = {
      _id: '1',
      name: 'Bun',
      type: 'bun',
      proteins: 10,
      fat: 20,
      carbohydrates: 30,
      calories: 40,
      price: 50,
      image: 'image_url',
      image_mobile: 'image_mobile_url',
      image_large: 'image_large_url',
      __v: 0,
    };

    const action = addIngredientToConstructor(bun);
    const expectedState: TBurgerConstructorState = {
      burgerConstructor: {
        bun: { ...bun, key: 'unique-id' } as TIngredientItem & { key: string },
        ingredients: [],
      },
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle addIngredientToConstructor for ingredient', () => {
    const ingredient: TIngredientItem = {
      _id: '2',
      name: 'Ingredient',
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
    };

    const action = addIngredientToConstructor(ingredient);
    const expectedState: TBurgerConstructorState = {
      burgerConstructor: {
        bun: null,
        ingredients: [
          {
            ...ingredient,
            key: 'unique-id',
          },
        ],
      },
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle removeIngredientFromConstructor', () => {
    const initialStateWithIngredient: TBurgerConstructorState = {
      burgerConstructor: {
        bun: null,
        ingredients: [
          {
            _id: '2',
            name: 'Ingredient',
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
            key: 'unique-id',
          },
        ],
      },
    };

    const action = removeIngredientFromConstructor('unique-id');
    const expectedState: TBurgerConstructorState = {
      burgerConstructor: {
        bun: null,
        ingredients: [],
      },
    };

    expect(reducer(initialStateWithIngredient, action)).toEqual(expectedState);
  });

  it('should handle swipeIngredientsInBurgerConstructor', () => {
    const initialStateWithIngredients: TBurgerConstructorState = {
      burgerConstructor: {
        bun: null,
        ingredients: [
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
            key: 'unique-id-1',
          },
          {
            _id: '2',
            name: 'Ingredient 2',
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
            key: 'unique-id-2',
          },
        ],
      },
    };

    const action = swipeIngredientsInBurgerConstructor({
      toIndex: 0,
      fromIndex: 1,
    });

    const expectedState: TBurgerConstructorState = {
      burgerConstructor: {
        bun: null,
        ingredients: [
          {
            _id: '2',
            name: 'Ingredient 2',
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
            key: 'unique-id-2',
          },
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
            key: 'unique-id-1',
          },
        ],
      },
    };

    expect(reducer(initialStateWithIngredients, action)).toEqual(expectedState);
  });
});
