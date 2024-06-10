import { useCustomSelector } from '@/store';
import { useMemo } from 'react';

export const useBurgerConstructorState = () => {
  const {
    storeState: {
      burgerConstructor: { ingredients, bun },
    },
  } = useCustomSelector<'burgerConstructor'>('burgerConstructor');

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
