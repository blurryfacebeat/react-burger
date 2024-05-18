import { MAIN_URL } from '@/api/api.constants.ts';
import { checkResponse } from './api.utils.ts';

export const login = async (email: string, password: string) => {
  try {
    await fetch(`${MAIN_URL}/api/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(checkResponse);

    return true;
  } catch {
    throw new Error('Ошибка при восстановлении пароля');
  }
};
