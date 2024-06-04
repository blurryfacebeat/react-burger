import { MAIN_URL } from './api.constants.ts';
import { checkResponse, fetchWithRefresh } from './api.utils.ts';

type TResponse = {
  success: boolean;
  name: string;
  order: {
    number: number;
  };
};

export const createOrder = async (ingredients: string[]) => {
  try {
    const response: TResponse = await fetchWithRefresh(
      `${MAIN_URL}/api/orders`,
      {
        method: 'POST',
        body: JSON.stringify({ ingredients }),
        headers: {
          'Content-Type': 'application/json',
        } as Record<string, string>,
      },
    ).then(checkResponse);

    const { name, order } = response;

    return { name, number: order.number };
  } catch {
    throw new Error('Ошибка при создании заказа');
  }
};
