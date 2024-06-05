import { FC } from 'react';
import { CustomScrollbar } from '@/components';
import {
  BurgerIngredientsCategory,
  BurgerIngredientsItem,
} from '@/components/burger-ingredients/ui';
import { TIngredientItem } from '@/api';
import { BURGER_INGREDIENTS_ANCHOR_TAG } from '@/components/burger-ingredients/burger-ingredients.constants.ts';
import styles from './burger-ingredients-items.module.scss';
import { useBurgerIngredientsItemsScroll } from './hooks';

type TBurgerIngredientsItemsProps = {
  data: Record<string, TIngredientItem[]>;
  onSetActiveTab: (value: string) => void;
};

export const BurgerIngredientsItems: FC<TBurgerIngredientsItemsProps> = ({
  data,
  onSetActiveTab,
}) => {
  const { handleScrollCapture } = useBurgerIngredientsItemsScroll({
    onSetActiveTab,
  });

  return (
    <CustomScrollbar
      className={styles.scrollBarContainer}
      onScrollCapture={handleScrollCapture}
    >
      <div className={styles.ingredientsContainer}>
        {Object.entries(data).map(([key, value]) => (
          <BurgerIngredientsCategory
            key={key}
            category={key}
            anchorTag={BURGER_INGREDIENTS_ANCHOR_TAG}
          >
            {value.map((item) => (
              <BurgerIngredientsItem key={item._id} item={item} />
            ))}
          </BurgerIngredientsCategory>
        ))}
      </div>
    </CustomScrollbar>
  );
};
