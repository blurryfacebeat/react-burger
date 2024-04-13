import { FC, ReactNode } from 'react';
import styles from './burger-ingredients-category.module.scss';
import { Text } from '@/components';
import { INGREDIENTS_MAP } from '@/utils';
import classNames from 'classnames';

type TBurgerIngredientsCategoryProps = {
  children: ReactNode;
  category: string;
  anchorTag?: string;
};

export const BurgerIngredientsCategory: FC<TBurgerIngredientsCategoryProps> = ({
  children,
  category,
  anchorTag,
}) => {
  return (
    <div className={styles.burgerIngredientsCategory}>
      <h2 id={`${category}-${anchorTag}`}>
        <Text textType="medium" className="mb-6">
          {INGREDIENTS_MAP[category]}
        </Text>
      </h2>
      <ul
        className={classNames(
          styles.burgerIngredientsCategoryContainer,
          'pl-6 pr-6',
        )}
      >
        {children}
      </ul>
    </div>
  );
};
