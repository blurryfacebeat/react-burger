import { MAIN_URL } from '@/api/api.constants.ts';
import { checkResponse } from './api.utils.ts';

type TUser = {
  email: string;
  name: string;
};

type TResponse = {
  accessToken: string;
  refreshToken: string;
  success: boolean;
  user: TUser;
};

export const login = async (
  email: string,
  password: string,
): Promise<Omit<TResponse, 'success'>> => {
  try {
    const response: TResponse = await fetch(`${MAIN_URL}/api/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(checkResponse);

    const { accessToken, refreshToken, user } = response;

    return {
      accessToken,
      refreshToken,
      user,
    };
  } catch {
    throw new Error('Ошибка при логине');
  }
};
