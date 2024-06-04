import { FC, useEffect } from 'react';
import { RouterProvider, RoutesProvider } from '@/router';
import { useDispatch } from 'react-redux';
import {
  checkProfileAuthAsync,
  fetchIngredientsAsync,
  TAppDispatch,
} from '@/store';

export const App: FC = () => {
  const dispatch = useDispatch<TAppDispatch>();

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
