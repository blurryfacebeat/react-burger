import { MAIN_URL } from '@/api/api.constants.ts';

export type TDataItem = {
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
  data: TDataItem[];
};

export const getIngredients = async (): Promise<TDataItem[] | undefined> => {
  try {
    const response: Response = await fetch(`${MAIN_URL}/api/ingredients`);
    const { data }: TResponse = await response.json();

    return data;
  } catch (error) {
    throw new Error('Ошибка при загрузке ингредиентов');
  }
};
