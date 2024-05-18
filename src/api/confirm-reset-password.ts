import { MAIN_URL } from '@/api/api.constants.ts';
import { checkResponse } from './api.utils.ts';

export const confirmResetPassword = async (password: string, code: string) => {
  try {
    await fetch(`${MAIN_URL}/api/password-reset/reset`, {
      method: 'POST',
      body: JSON.stringify({ password, token: code }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(checkResponse);

    return true;
  } catch {
    throw new Error('Ошибка при восстановлении пароля');
  }
};
