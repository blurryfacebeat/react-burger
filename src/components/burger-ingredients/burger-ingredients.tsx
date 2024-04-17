import { FC, useMemo } from 'react';
import { Tabs, Text } from '@/components';
import styles from './burger-ingredients.module.scss';
import classNames from 'classnames';
import { useBurgerIngredientsTabs, useBurgerIngredientsModal } from './hooks';
import { BurgerIngredientsModal, BurgerIngredientsItems } from './ui';
import { TDataItem } from '@/api';
import { BURGER_INGREDIENTS_ANCHOR_TAG } from '@/components/burger-ingredients/burger-ingredients.constants.ts';

type TBurgerIngredientsProps = {
  data: TDataItem[];
};

export const BurgerIngredients: FC<TBurgerIngredientsProps> = ({ data }) => {
  const mappedData = useMemo(
    () =>
      data.reduce(
        (acc, item) => {
          if (!acc[item.type]) {
            acc[item.type] = [];
          }

          acc[item.type].push(item);

          return acc;
        },
        {} as Record<string, TDataItem[]>,
      ),
    [data],
  );

  const { tabs, currentTab, handleSetCurrentTab } = useBurgerIngredientsTabs({
    data: mappedData,
  });

  const { isModalOpen, currentItem, handleModalClose, handleItemClick } =
    useBurgerIngredientsModal({ data });

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
      <BurgerIngredientsItems data={mappedData} onItemClick={handleItemClick} />
      <BurgerIngredientsModal
        isOpen={isModalOpen}
        item={currentItem.current}
        onClose={handleModalClose}
      />
    </div>
  );
};
