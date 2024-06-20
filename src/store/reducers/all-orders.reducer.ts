import { createMessageApi } from '../utils';
import { TOrderItem } from '@/api';

type TResponse = {
  success: boolean;
  orders: TOrderItem[];
  total: number;
  totalToday: number;
};

const api = createMessageApi<TResponse>(
  'wss://norma.nomoreparties.space/orders/all',
);

export const { useGetMessagesQuery: useGetMessagesQueryAllOrders } = api;
export default api;
