import { createMessageApi } from '../utils';
import { TOrderItem } from '@/api';
import { accessTokenLocalStorage } from '@/utils';

type TResponse = {
  success: boolean;
  orders: TOrderItem[];
  total: number;
  totalToday: number;
};

const api = createMessageApi<TResponse>(
  `wss://norma.nomoreparties.space/orders?token=${accessTokenLocalStorage.get()?.split('Bearer ')[1]}`,
  'userOrders',
);

export const { useGetMessagesQuery: useGetMessagesQueryUserOrders } = api;
export default api;
