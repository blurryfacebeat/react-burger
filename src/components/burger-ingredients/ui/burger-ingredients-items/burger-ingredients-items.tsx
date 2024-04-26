import { FC } from 'react';
import { CustomScrollbar } from '@/components';
import {
  BurgerIngredientsCategory,
  BurgerIngredientsItem,
} from '@/components/burger-ingredients/ui';
import { TIngredientItem } from '@/api';
import { BURGER_INGREDIENTS_ANCHOR_TAG } from '@/components/burger-ingredients/burger-ingredients.constants.ts';
import styles from './burger-ingredients-items.module.scss';

type TBurgerIngredientsItemsProps = {
  data: Record<string, TIngredientItem[]>;
  onItemClick: (item: TIngredientItem) => void;
};

export const BurgerIngredientsItems: FC<TBurgerIngredientsItemsProps> = ({
  data,
  onItemClick,
}) => {
  return (
    <CustomScrollbar className={styles.scrollBarContainer}>
      <div className={styles.ingredientsContainer}>
        {Object.entries(data).map(([key, value]) => (
          <BurgerIngredientsCategory
            key={key}
            category={key}
            anchorTag={BURGER_INGREDIENTS_ANCHOR_TAG}
          >
            {value.map((item) => (
              <BurgerIngredientsItem
                key={item._id}
                price={item.price}
                name={item.name}
                image={item.image}
                id={item._id}
                onClick={() => onItemClick(item)}
              />
            ))}
          </BurgerIngredientsCategory>
        ))}
      </div>
    </CustomScrollbar>
  );
};
