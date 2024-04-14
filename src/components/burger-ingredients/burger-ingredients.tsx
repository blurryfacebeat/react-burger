import { FC } from 'react';
import { CustomScrollbar, Tabs, Text } from '@/components';
import styles from './burger-ingredients.module.scss';
import classNames from 'classnames';
import { TDataItem } from '@/utils';
import { useBurgerIngredientsTabs } from './hooks';
import {
  BurgerIngredientsCategory,
  BurgerIngredientsItem,
} from '@/components/burger-ingredients/ui';

type TBurgerIngredientsProps = {
  data: TDataItem[];
};

const anchorTag = 'ingredients';

export const BurgerIngredients: FC<TBurgerIngredientsProps> = ({ data }) => {
  const mappedData = data.reduce(
    (acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }

      acc[item.type].push(item);

      return acc;
    },
    {} as Record<string, TDataItem[]>,
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
        anchorTag={anchorTag}
        className="mb-10"
      />
      <CustomScrollbar className={styles.scrollBarContainer}>
        <div className={styles.ingredientsContainer}>
          {Object.entries(mappedData).map(([key, value]) => (
            <BurgerIngredientsCategory
              key={key}
              category={key}
              anchorTag={anchorTag}
            >
              {value.map((item) => (
                <BurgerIngredientsItem
                  key={item._id}
                  price={item.price}
                  name={item.name}
                  image={item.image}
                  count={1}
                />
              ))}
            </BurgerIngredientsCategory>
          ))}
        </div>
      </CustomScrollbar>
    </div>
  );
};
