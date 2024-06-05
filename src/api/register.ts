import { MAIN_URL } from '@/api/api.constants.ts';
import { checkResponse } from './api.utils.ts';
import { accessTokenLocalStorage, refreshTokenLocalStorage } from '@/utils';

type TUser = {
  email: string;
  name: string;
};

type TResponse = {
  success: boolean;
  user: TUser;
  accessToken: string;
  refreshToken: string;
};

export const register = async (
  email: string,
  password: string,
  name: string,
) => {
  try {
    const response: TResponse = await fetch(`${MAIN_URL}/api/auth/register`, {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(checkResponse);

    const { accessToken, refreshToken } = response;

    accessTokenLocalStorage.set(accessToken);
    refreshTokenLocalStorage.set(refreshToken);
  } catch {
    throw new Error('Ошибка при регистрации');
  }
};
