import { FC, useEffect } from 'react';
import { RouterProvider, RoutesProvider } from '@/router';
import {
  checkProfileAuthAsync,
  fetchIngredientsAsync,
  useCustomDispatch,
} from '@/store';

export const App: FC = () => {
  const { dispatch } = useCustomDispatch();

  useEffect(() => {
    dispatch(checkProfileAuthAsync());
    dispatch(fetchIngredientsAsync());
  }, [dispatch]);

  return (
    <RouterProvider>
      <RoutesProvider />
    </RouterProvider>
  );
};
