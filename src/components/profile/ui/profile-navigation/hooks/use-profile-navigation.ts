import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/router';
import { logoutAsync, useCustomDispatch } from '@/store';

export const useProfileNavigation = () => {
  const location = useLocation();
  const { dispatch } = useCustomDispatch();

  const subtext =
    location.pathname === ROUTES.PROFILE
      ? 'В этом разделе вы можете изменить свои персональные данные'
      : 'В этом разделе вы можете просмотреть свою историю заказов';

  const handleExitClick = async () => {
    dispatch(logoutAsync());
  };

  return { subtext, handleExitClick };
};
