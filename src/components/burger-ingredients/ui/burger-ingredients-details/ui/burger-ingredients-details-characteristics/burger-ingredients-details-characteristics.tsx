import { FC } from 'react';
import { TIngredientItem } from '@/api';
import styles from './burger-ingredients-details-characteristics.module.scss';
import { Text } from '@/components';

type TBurgerIngredientsItemsCharacteristicsProps = {
  item: TIngredientItem;
};

export const BurgerIngredientsDetailsCharacteristics: FC<
  TBurgerIngredientsItemsCharacteristicsProps
> = ({ item }) => {
  return (
    <ul className={styles.itemCharacteristics}>
      <li className={styles.item}>
        <Text textType="inactiveColor">Калории, ккал</Text>
        <Text textType="inactiveColor">{item.calories}</Text>
      </li>
      <li className={styles.item}>
        <Text textType="inactiveColor">Белки, г</Text>
        <Text textType="inactiveColor">{item.proteins}</Text>
      </li>
      <li className={styles.item}>
        <Text textType="inactiveColor">Жиры, г</Text>
        <Text textType="inactiveColor">{item.fat}</Text>
      </li>
      <li className={styles.item}>
        <Text textType="inactiveColor">Углеводы, г</Text>
        <Text textType="inactiveColor">{item.carbohydrates}</Text>
      </li>
    </ul>
  );
};
