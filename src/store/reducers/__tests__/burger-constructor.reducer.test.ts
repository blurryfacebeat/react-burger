import reducer, {
  addIngredientToConstructor,
  removeIngredientFromConstructor,
  swipeIngredientsInBurgerConstructor,
  TBurgerConstructorState,
  initialState,
} from '../burger-constructor.reducer.ts';
import { TIngredientItem } from '@/api';
import { createIngredientItem } from '../helpers/reducers-tests.helpers.ts';

jest.mock('uuid', () => ({
  v4: () => 'unique-id',
}));

describe('burgerConstructorReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle addIngredientToConstructor for bun', () => {
    const bun: TIngredientItem = createIngredientItem({ type: 'bun' });

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
    const ingredient: TIngredientItem = createIngredientItem({ id: '2' });

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
            ...createIngredientItem({ id: '2' }),
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
            ...createIngredientItem(),
            key: 'unique-id-1',
          },
          {
            ...createIngredientItem({ id: '2' }),
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
            ...createIngredientItem({ id: '2' }),
            key: 'unique-id-2',
          },
          {
            ...createIngredientItem(),
            key: 'unique-id-1',
          },
        ],
      },
    };

    expect(reducer(initialStateWithIngredients, action)).toEqual(expectedState);
  });
});
