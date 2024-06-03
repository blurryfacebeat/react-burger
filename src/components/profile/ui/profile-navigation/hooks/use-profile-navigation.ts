import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/router';
import { useDispatch } from 'react-redux';
import { logoutAsync, TAppDispatch } from '@/store';

export const useProfileNavigation = () => {
  const location = useLocation();
  const dispatch = useDispatch<TAppDispatch>();

  const subtext =
    location.pathname === ROUTES.PROFILE
      ? 'В этом разделе вы можете изменить свои персональные данные'
      : 'В этом разделе вы можете просмотреть свою историю заказов';

  const handleExitClick = async () => {
    dispatch(logoutAsync());
  };

  return { subtext, handleExitClick };
};
