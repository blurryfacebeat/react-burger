import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ForgotPasswordPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  OrdersListPage,
  ProfilePage,
  RegisterPage,
  ResetPasswordPage,
} from '@/pages';
import { ROUTES } from './routes.ts';
import { ProfileInfo } from '@/components';

export const RouterProvider: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
        <Route path={ROUTES.RESET_PASSWORD} element={<ResetPasswordPage />} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage />}>
          <Route index element={<ProfileInfo />} />
          <Route
            path={ROUTES.PROFILE_ORDERS}
            element={<div>История заказов</div>}
          />
        </Route>
        <Route path={ROUTES.ORDERS_LIST} element={<OrdersListPage />} />
        <Route path={`${ROUTES.INGREDIENTS}/:id`} element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
