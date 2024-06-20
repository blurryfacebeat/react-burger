import { FC } from 'react';
import styles from './order-details-ingredients-item.module.scss';
import { TIngredientItem } from '@/api';
import { Price, Text } from '@/components';

type TOrderDetailsIngredientsItemProps = {
  item: TIngredientItem & { count: number };
};

export const OrderDetailsIngredientsItem: FC<
  TOrderDetailsIngredientsItemProps
> = ({ item }) => {
  return (
    <li className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={item.image_mobile}
            alt="Ingredient image"
          />
        </div>
        <Text>{item.name}</Text>
      </div>
      <Price>{`${item.type === 'bun' ? 2 : item.count} x ${item.price}`}</Price>
    </li>
  );
};
