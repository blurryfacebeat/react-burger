import { useSelector } from 'react-redux';
import { TRootState } from '@/store';

export const useIngredients = () => {
  const isLoading = useSelector(
    (state: TRootState) => state.ingredients.isLoading,
  );
  const errorMessage = useSelector(
    (state: TRootState) => state.ingredients.errorMessage,
  );
  const isError = !!errorMessage;

  return { isLoading, isError, errorMessage };
};
