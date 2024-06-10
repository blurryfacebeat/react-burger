import { FC, ReactNode } from 'react';
import { useCustomSelector } from '@/store';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from '@/router';
import { BurgerLoader } from '@/components';

type TProtectedRouteProps = {
  component: ReactNode;
  onlyUnAuth?: boolean;
};

type TOnlyUnAuthProps = {
  component: ReactNode;
};

const ProtectedRoute: FC<TProtectedRouteProps> = ({
  component,
  onlyUnAuth,
}) => {
  const {
    storeState: { isAuthChecked, profile },
  } = useCustomSelector<'profile'>('profile');
  const location = useLocation();

  if (!isAuthChecked) {
    return <BurgerLoader />;
  }

  if (onlyUnAuth && !!profile) {
    const { from } = location.state || { from: { pathname: ROUTES.HOME } };

    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !profile) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth: FC<TProtectedRouteProps> = ProtectedRoute;
export const OnlyUnAuth: FC<TOnlyUnAuthProps> = ({ component }) => (
  <ProtectedRoute onlyUnAuth component={component} />
);
