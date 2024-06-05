import { FC, ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

type TRouterProviderProps = {
  children: ReactNode;
};

export const RouterProvider: FC<TRouterProviderProps> = ({ children }) => {
  return <Router>{children}</Router>;
};
