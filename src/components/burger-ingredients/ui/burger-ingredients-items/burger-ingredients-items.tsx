import { FC, MouseEvent } from 'react';
import { CustomScrollbar } from '@/components';
import {
  BurgerIngredientsCategory,
  BurgerIngredientsItem,
} from '@/components/burger-ingredients/ui';
import { TIngredientItem } from '@/api';
import { BURGER_INGREDIENTS_ANCHOR_TAG } from '@/components/burger-ingredients/burger-ingredients.constants.ts';
import styles from './burger-ingredients-items.module.scss';
import { useSelector } from 'react-redux';
import { TRootState } from '@/store';

type TBurgerIngredientsItemsProps = {
  data: Record<string, TIngredientItem[]>;
  onItemClick: (item: TIngredientItem) => void;
  onSetActiveTab: (value: string) => void;
};

export const BurgerIngredientsItems: FC<TBurgerIngredientsItemsProps> = ({
  data,
  onItemClick,
  onSetActiveTab,
}) => {
  const burgerConstructorCounts = useSelector(
    (state: TRootState) => state.burgerConstructor.counts,
  );

  const handleScrollCapture = (event: MouseEvent<HTMLDivElement>) => {
    const containerBounds = event.currentTarget.getBoundingClientRect();
    const titles = event.currentTarget.querySelectorAll(
      '[data-target=ingredientsHeader]',
    );

    for (let i = 0; i < titles.length; i++) {
      const headerBounds = titles[i].getBoundingClientRect();

      if (
        headerBounds.top >= containerBounds.top &&
        headerBounds.top <= containerBounds.bottom
      ) {
        const tabId = titles[i].getAttribute('id');
        onSetActiveTab(tabId?.split('-')[0] as string);

        return;
      }
    }
  };

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
              <BurgerIngredientsItem
                key={item._id}
                item={item}
                count={burgerConstructorCounts[item._id]}
                onClick={() => onItemClick(item)}
              />
            ))}
          </BurgerIngredientsCategory>
        ))}
      </div>
    </CustomScrollbar>
  );
};
