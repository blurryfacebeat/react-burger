import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/router';
import { logout } from '@/api';

export const useProfileNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const subtext =
    location.pathname === ROUTES.PROFILE
      ? 'В этом разделе вы можете изменить свои персональные данные'
      : 'В этом разделе вы можете просмотреть свою историю заказов';

  const handleExitClick = async () => {
    try {
      await logout();
      navigate(ROUTES.HOME);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return { subtext, handleExitClick };
};
