import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from '@/router/routes.ts';
import {
  ForgotPasswordPage,
  HomePage,
  IngredientsDetailsPage,
  LoginPage,
  NotFoundPage,
  OrderDetailsPage,
  OrdersListPage,
  ProfilePage,
  RegisterPage,
  ResetPasswordPage,
} from '@/pages';
import {
  BurgerIngredientsModal,
  OnlyAuth,
  OnlyUnAuth,
  OrderDetailsModal,
  ProfileInfo,
} from '@/components';

export const RoutesProvider = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route
          path={ROUTES.LOGIN}
          element={<OnlyUnAuth component={<LoginPage />} />}
        />
        <Route
          path={ROUTES.REGISTER}
          element={<OnlyUnAuth component={<RegisterPage />} />}
        />
        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={<OnlyUnAuth component={<ForgotPasswordPage />} />}
        />
        <Route
          path={ROUTES.RESET_PASSWORD}
          element={<OnlyUnAuth component={<ResetPasswordPage />} />}
        />
        <Route
          path={ROUTES.PROFILE}
          element={<OnlyAuth component={<ProfilePage />} />}
        >
          <Route index element={<ProfileInfo />} />
          <Route
            path={ROUTES.PROFILE_ORDERS}
            element={<div>История заказов</div>}
          />
        </Route>
        <Route
          path={`${ROUTES.PROFILE_ORDERS}/:orderNumber`}
          element={<OnlyAuth component={<OrderDetailsPage />} />}
        />
        <Route path={ROUTES.FEED} element={<OrdersListPage />} />
        <Route
          path={`${ROUTES.FEED}/:orderNumber`}
          element={<OrderDetailsPage />}
        />
        <Route
          path={`${ROUTES.INGREDIENTS}/:ingredientId`}
          element={<IngredientsDetailsPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!!background && (
        <Routes>
          <Route
            path={`${ROUTES.INGREDIENTS}/:ingredientId`}
            element={<BurgerIngredientsModal />}
          />
          <Route
            path={`${ROUTES.FEED}/:orderNumber`}
            element={<OrderDetailsModal />}
          />
          <Route
            path={`${ROUTES.PROFILE_ORDERS}/:orderNumber`}
            element={<OnlyAuth component={<OrderDetailsModal />} />}
          />
        </Routes>
      )}
    </>
  );
};
