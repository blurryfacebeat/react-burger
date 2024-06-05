import { FC, useMemo } from 'react';
import { Tabs, Text } from '@/components';
import styles from './burger-ingredients.module.scss';
import classNames from 'classnames';
import { useBurgerIngredientsTabs } from './hooks';
import { BurgerIngredientsItems } from './ui';
import { TIngredientItem } from '@/api';
import { BURGER_INGREDIENTS_ANCHOR_TAG } from '@/components/burger-ingredients/burger-ingredients.constants.ts';
import { useSelector } from 'react-redux';
import { TRootState } from '@/store';

export const BurgerIngredients: FC = () => {
  const ingredients = useSelector(
    (state: TRootState) => state.ingredients.ingredients,
  );

  const mappedData = useMemo(
    () =>
      ingredients.reduce(
        (acc, item) => {
          if (!acc[item.type]) {
            acc[item.type] = [];
          }

          acc[item.type].push(item);

          return acc;
        },
        {} as Record<string, TIngredientItem[]>,
      ),
    [ingredients],
  );

  const { tabs, currentTab, handleSetCurrentTab } = useBurgerIngredientsTabs({
    data: mappedData,
  });

  return (
    <div className={classNames(styles.burgerIngredients, 'mt-10')}>
      <Text textType="large" className="mb-5">
        Соберите бургер
      </Text>
      <Tabs
        current={currentTab}
        tabs={tabs}
        onSetCurrent={handleSetCurrentTab}
        anchorTag={BURGER_INGREDIENTS_ANCHOR_TAG}
        className="mb-10"
      />
      <BurgerIngredientsItems
        data={mappedData}
        onSetActiveTab={handleSetCurrentTab}
      />
    </div>
  );
};
