import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfileAsync, TAppDispatch } from '@/store';
import { RouterProvider } from '@/router';

export const App: FC = () => {
  const dispatch = useDispatch<TAppDispatch>();

  useEffect(() => {
    dispatch(getProfileAsync());
  }, [dispatch]);

  return <RouterProvider />;
};
