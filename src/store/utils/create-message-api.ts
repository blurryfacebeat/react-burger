import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const createMessageApi = <T>(url: string, id: string) => {
  return createApi({
    reducerPath: `api_${id}`,
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (build) => ({
      getMessages: build.query<T[], string>({
        queryFn: () => ({ data: [] }),
        async onCacheEntryAdded(_, { updateCachedData, cacheEntryRemoved }) {
          const socket = new WebSocket(url);

          const listener = (event: MessageEvent) => {
            const data = JSON.parse(event.data);

            updateCachedData((draft) => {
              draft.push(data);
            });
          };

          socket.addEventListener('message', listener);

          await cacheEntryRemoved;

          socket.close();
        },
      }),
    }),
  });
};
