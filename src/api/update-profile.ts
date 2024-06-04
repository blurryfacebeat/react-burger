import { fetchWithRefresh } from '@/api/api.utils.ts';
import { MAIN_URL } from '@/api/api.constants.ts';

export const updateProfile = async (
  email: string,
  name: string,
  password?: string,
) => {
  try {
    await fetchWithRefresh(`${MAIN_URL}/api/auth/user`, {
      method: 'PATCH',
      body: JSON.stringify({ email, password, name }),
    });
  } catch {
    throw new Error('Ошибка при изменении профиля');
  }
};
