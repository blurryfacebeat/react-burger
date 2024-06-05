import { MAIN_URL } from '@/api/api.constants.ts';
import { checkResponse } from './api.utils.ts';

export const resetPassword = async (email: string): Promise<boolean> => {
  try {
    await fetch(`${MAIN_URL}/api/password-reset`, {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(checkResponse);

    return true;
  } catch {
    throw new Error('Ошибка при восстановлении пароля');
  }
};
