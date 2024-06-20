import { MAIN_URL } from '@/api/api.constants.ts';
import { checkResponse } from '@/api/api.utils.ts';
import { TOrderItem } from '@/api/api.types.ts';

type TResponse = {
  success: boolean;
  orders: TOrderItem[];
};

export const getOrder = async (orderNumber: string): Promise<TOrderItem> => {
  try {
    const response: TResponse = await fetch(
      `${MAIN_URL}/api/orders/${orderNumber}`,
    ).then(checkResponse);
    const { orders } = response;

    return orders[0];
  } catch {
    throw new Error('Ошибка при загрузке заказа');
  }
};
