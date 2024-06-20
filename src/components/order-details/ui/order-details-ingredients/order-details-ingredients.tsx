import { FC } from 'react';
import styles from './order-details-ingredients.module.scss';
import { CustomScrollbar, Text } from '@/components';
import { TIngredientItem } from '@/api';
import { OrderDetailsIngredientsItem } from '../order-details-ingredients-item';

type TOrderDetailsIngredientsProps = {
  items?: Record<string, TIngredientItem & { count: number }>;
};

export const OrderDetailsIngredients: FC<TOrderDetailsIngredientsProps> = ({
  items,
}) => {
  return (
    <div className={styles.container}>
      <Text textType="medium">Состав:</Text>
      {items && (
        <CustomScrollbar className={styles.scrollBarContainer}>
          <ul className={styles.items}>
            {Object.values(items).map((item) => (
              <OrderDetailsIngredientsItem key={item._id} item={item} />
            ))}
          </ul>
        </CustomScrollbar>
      )}
    </div>
  );
};
