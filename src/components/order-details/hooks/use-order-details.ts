import { getOrder, TIngredientItem, TOrderItem } from '@/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCustomSelector } from '@/store';

export const useOrderDetails = () => {
  const params = useParams();
  const orderNumber = params.orderNumber as string;

  const [order, setOrder] = useState<TOrderItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    storeState: { ingredients },
  } = useCustomSelector<'ingredients'>('ingredients');

  const mappedIngredients = order?.ingredients.reduce(
    (acc, item) => {
      const newItem = ingredients.find(
        (ingredientItem) => item === ingredientItem._id,
      );

      if (newItem) {
        if (!acc[newItem._id]) {
          acc[newItem._id] = { ...newItem, count: 1 };
        } else {
          acc[newItem._id].count += 1;
        }
      }

      return acc;
    },
    {} as Record<string, TIngredientItem & { count: number }>,
  );

  const total = mappedIngredients
    ? Object.values(mappedIngredients).reduce((acc, item) => {
        if (item.type === 'bun') {
          return acc + item.price * 2;
        }

        return acc + item.price * item.count;
      }, 0)
    : 0;

  const getOrderAsync = async () => {
    try {
      setIsLoading(true);

      const order = await getOrder(orderNumber);

      setOrder(order);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrderAsync();
  }, [params.orderNumber]);

  return { order, isLoading, orderNumber, mappedIngredients, total };
};
