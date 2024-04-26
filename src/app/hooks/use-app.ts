import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIngredientsAsync, TAppDispatch, TRootState } from '@/store';

export const useApp = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const ingredients = useSelector(
    (state: TRootState) => state.ingredients.ingredients,
  );
  const isLoading = useSelector(
    (state: TRootState) => state.ingredients.isLoading,
  );
  const errorMessage = useSelector(
    (state: TRootState) => state.ingredients.errorMessage,
  );
  const isError = !!errorMessage;

  useEffect(() => {
    dispatch(fetchIngredientsAsync());
  }, [dispatch]);

  return { ingredients, isLoading, isError, errorMessage };
};
