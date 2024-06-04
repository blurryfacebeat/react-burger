import { FC, useMemo } from 'react';
import styles from './burger-ingredients-item.module.scss';
import { Text, Price } from '@/components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import { TIngredientItem } from '@/api';
import { useBurgerIngredientsItemDnd } from './hooks';
import { useSelector } from 'react-redux';
import { TRootState } from '@/store';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/router';

type TBurgerIngredientsItemProps = {
  item: TIngredientItem;
  onClick: () => void;
};

export const BurgerIngredientsItem: FC<TBurgerIngredientsItemProps> = ({
  item,
  onClick,
}) => {
  const location = useLocation();

  const ingredients = useSelector(
    (state: TRootState) =>
      state.burgerConstructor.burgerConstructor.ingredients,
  );

  const bun = useSelector(
    (state: TRootState) => state.burgerConstructor.burgerConstructor.bun,
  );

  const count = useMemo(() => {
    if (item.type === 'bun' && bun?._id === item._id) {
      return 2;
    }

    return ingredients.filter((ingredient) => ingredient._id === item._id)
      .length;
  }, [bun, ingredients, item._id, item.type]);

  const { isDragging, drag } = useBurgerIngredientsItemDnd({ item });

  return (
    <li
      className={classNames(isDragging && styles.burgerIngredientsItemAnimated)}
      ref={drag}
    >
      <Link
        className={styles.burgerIngredientsItem}
        to={`${ROUTES.INGREDIENTS}/${item._id}`}
        state={{ background: location }}
        onClick={onClick}
      >
        {!!count && <Counter count={count} size="default" />}
        <img src={item.image} alt="burger ingredient" />
        <Price>{item.price}</Price>
        <Text>{item.name}</Text>
      </Link>
    </li>
  );
};
