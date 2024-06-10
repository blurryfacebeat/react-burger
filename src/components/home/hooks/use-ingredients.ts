import { useCustomSelector } from '@/store';

export const useIngredients = () => {
  const {
    storeState: { isLoading, errorMessage },
  } = useCustomSelector<'ingredients'>('ingredients');

  const isError = !!errorMessage;

  return { isLoading, isError, errorMessage };
};
