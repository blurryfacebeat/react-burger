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
      token: refreshTokenLocalStorage.get(),
    }),
  })
    .then(checkResponse)
    .then((refreshData) => {
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }

      accessTokenLocalStorage.set(refreshData.accessToken);
      refreshTokenLocalStorage.set(refreshData.refreshToken);

      return refreshData;
    });
};

export const fetchWithRefresh = async (url: string, options?: RequestInit) => {
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: accessTokenLocalStorage.get(),
      } as Record<string, string>,
      ...options,
    });

    return await checkResponse(res);
  } catch (error) {
    if ((error as Error).message === 'jwt expired') {
      const refreshData = await refreshToken();

      const headers = options?.headers
        ? new Headers(options.headers)
        : new Headers();

      headers.set('authorization', refreshData.accessToken);

      const res = await fetch(url, { ...options, headers });

      return await checkResponse(res);
    }

    return Promise.reject(error);
  }
};
