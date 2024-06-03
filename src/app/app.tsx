import { FC, useEffect } from 'react';
import { RouterProvider } from '@/router';
import { useDispatch } from 'react-redux';
import { checkProfileAuthAsync, TAppDispatch } from '@/store';

export const App: FC = () => {
  const dispatch = useDispatch<TAppDispatch>();

  useEffect(() => {
    dispatch(checkProfileAuthAsync());
  }, [dispatch]);

  return <RouterProvider />;
};
