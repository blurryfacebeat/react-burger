import { MAIN_URL } from '@/api/api.constants.ts';
import { accessTokenLocalStorage, refreshTokenLocalStorage } from '@/utils';

export const checkResponse = async (response: Response) => {
  return response.ok
    ? response.json()
    : response.json().then((error) => Promise.reject(error));
};

export const refreshToken = async () => {
  return fetch(`${MAIN_URL}/api/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  })
    .then(checkResponse)
    .then((refreshData) => {
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }

      accessTokenLocalStorage.set(refreshData.refreshToken);
      refreshTokenLocalStorage.set(refreshData.accessToken);

      return refreshData;
    });
};

export const fetchWithRefresh = async (url: string, options?: RequestInit) => {
  try {
    const res = await fetch(url, options);

    return await checkResponse(res);
  } catch (error) {
    if (error instanceof Error && error.message === 'jwt expired') {
      const refreshData = await refreshToken();

      const headers = options?.headers
        ? new Headers(options.headers)
        : new Headers();

      if (!headers.has('Authorization')) {
        headers.set('Authorization', refreshData.accessToken);
      }

      const res = await fetch(url, options);

      return await checkResponse(res);
    }

    return Promise.reject(error);
  }
};
