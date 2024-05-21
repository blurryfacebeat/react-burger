import { fetchWithRefresh } from '@/api/api.utils.ts';
import { MAIN_URL } from '@/api/api.constants.ts';
import { accessTokenLocalStorage, refreshTokenLocalStorage } from '@/utils';

export const logout = async () => {
  try {
    await fetchWithRefresh(`${MAIN_URL}/api/auth/logout`, {
      method: 'POST',
      body: JSON.stringify({ token: refreshTokenLocalStorage.get() }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    refreshTokenLocalStorage.remove();
    accessTokenLocalStorage.remove();
  } catch {
    throw new Error('Ошибка при выходе');
  }
};
