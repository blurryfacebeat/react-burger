import { useCustomSelector } from '@/store';
import { v4 as uuidv4 } from 'uuid';
import { TIngredientItem, TOrderItem } from '@/api';

const MAX_LENGTH = 5;

type TUseOrderItemProps = {
  item: TOrderItem;
};

export const useOrderItem = ({ item }: TUseOrderItemProps) => {
  const {
    storeState: { ingredients },
  } = useCustomSelector<'ingredients'>('ingredients');

  const mappedIngredients = item.ingredients.reduce(
    (acc, item) => {
      const newItem = ingredients.find(
        (ingredientItem) => item === ingredientItem._id,
      );

      if (
        acc.find((accItem) => accItem.type === 'bun') &&
        newItem?.type === 'bun'
      ) {
        return acc;
      }

      if (newItem) {
        acc.push({ ...newItem, keyId: uuidv4() });
      }

      return acc;
    },
    [] as (TIngredientItem & { keyId: string })[],
  );

  const total = mappedIngredients.reduce((acc, item) => {
    if (item.type === 'bun') {
      return acc + item.price * 2;
    }

    return acc + item.price;
  }, 0);

  const remainingIngredients = mappedIngredients.slice(MAX_LENGTH);

  return { MAX_LENGTH, mappedIngredients, remainingIngredients, total };
};
