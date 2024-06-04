import { MAIN_URL } from './api.constants.ts';
import { checkResponse } from './api.utils.ts';
import { accessTokenLocalStorage } from '@/utils';

type TResponse = {
  success: boolean;
  name: string;
  order: {
    number: number;
  };
};

export const createOrder = async (ingredients: string[]) => {
  try {
    const response: TResponse = await fetch(`${MAIN_URL}/api/orders`, {
      method: 'POST',
      body: JSON.stringify({ ingredients }),
      headers: {
        'Content-Type': 'application/json',
        authorization: accessTokenLocalStorage.get(),
      } as Record<string, string>,
    }).then(checkResponse);

    const { name, order } = response;

    return { name, number: order.number };
  } catch {
    throw new Error('Ошибка при создании заказа');
  }
};
