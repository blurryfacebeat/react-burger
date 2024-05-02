import { FC, useMemo } from 'react';
import styles from './burger-ingredients-item.module.scss';
import { Text, Price } from '@/components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import { TIngredientItem } from '@/api';
import { useBurgerIngredientsItemDnd } from './hooks';
import { useSelector } from 'react-redux';
import { TRootState } from '@/store';

type TBurgerIngredientsItemProps = {
  item: TIngredientItem;
  onClick: () => void;
};

export const BurgerIngredientsItem: FC<TBurgerIngredientsItemProps> = ({
  item,
  onClick,
}) => {
  const burgerConstructorCounts = useSelector(
    (state: TRootState) => state.burgerConstructor.counts,
  );

  const bun = useSelector(
    (state: TRootState) => state.burgerConstructor.burgerConstructor.bun,
  );

  const count = useMemo(() => {
    if (item.type === 'bun' && bun?._id === item._id) {
      return 1;
    }

    return burgerConstructorCounts[item._id];
  }, [bun, burgerConstructorCounts, item._id, item.type]);

  const { isDragging, drag } = useBurgerIngredientsItemDnd({ item });

  return (
    <li
      className={classNames(
        styles.burgerIngredientsItem,
        isDragging && styles.burgerIngredientsItemAnimated,
      )}
      ref={drag}
      onClick={onClick}
    >
      {count && <Counter count={count} size="default" />}
      <img src={item.image} alt="burger ingredient" />
      <Price>{item.price}</Price>
      <Text>{item.name}</Text>
    </li>
  );
};
