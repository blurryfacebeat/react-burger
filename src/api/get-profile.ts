import { MAIN_URL } from '@/api/api.constants.ts';
import { fetchWithRefresh } from '@/api/api.utils.ts';

type TFetchResponse = {
  success: boolean;
  user: {
    name: string;
    email: string;
  };
};

type TResponse = {
  email: string;
  name: string;
};

export const getProfile = async (): Promise<TResponse> => {
  try {
    const response: TFetchResponse = await fetchWithRefresh(
      `${MAIN_URL}/api/auth/user`,
    );

    return response.user;
  } catch {
    throw new Error('Ошибка при получении профиля');
  }
};
