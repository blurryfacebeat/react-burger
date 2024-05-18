import { MAIN_URL } from '@/api/api.constants.ts';
import { checkResponse } from './api.utils.ts';

export type TIngredientItem = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

type TResponse = {
  success: boolean;
  data: TIngredientItem[];
};

export const getIngredients = async (): Promise<TIngredientItem[]> => {
  try {
    const response: TResponse = await fetch(`${MAIN_URL}/api/ingredients`).then(
      checkResponse,
    );
    const { data } = response;

    return data;
  } catch {
    throw new Error('Ошибка при загрузке ингредиентов');
  }
};
