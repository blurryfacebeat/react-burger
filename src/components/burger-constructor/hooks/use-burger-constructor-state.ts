import { useSelector } from 'react-redux';
import { TRootState } from '@/store';
import { useMemo } from 'react';

export const useBurgerConstructorState = () => {
  const ingredients = useSelector(
    (state: TRootState) =>
      state.burgerConstructor.burgerConstructor.ingredients,
  );

  const bun = useSelector(
    (state: TRootState) => state.burgerConstructor.burgerConstructor.bun,
  );

  const total = useMemo(
    () =>
      ingredients.reduce((acc, item) => {
        return acc + item.price;
      }, 0) +
      (bun?.price || 0) * 2,
    [bun, ingredients],
  );

  return {
    bun,
    ingredients,
    total,
  };
};
