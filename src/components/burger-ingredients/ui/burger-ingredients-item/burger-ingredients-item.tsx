import { FC, useMemo } from 'react';
import styles from './burger-ingredients-item.module.scss';
import { Text, Price } from '@/components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import { TIngredientItem } from '@/api';
import { useBurgerIngredientsItemDnd } from './hooks';
import { useCustomSelector } from '@/store';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/router';

type TBurgerIngredientsItemProps = {
  item: TIngredientItem;
};

export const BurgerIngredientsItem: FC<TBurgerIngredientsItemProps> = ({
  item,
}) => {
  const location = useLocation();

  const {
    storeState: {
      burgerConstructor: { ingredients, bun },
    },
  } = useCustomSelector<'burgerConstructor'>('burgerConstructor');

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
      >
        {!!count && <Counter count={count} size="default" />}
        <img src={item.image} alt="burger ingredient" />
        <Price>{item.price}</Price>
        <Text>{item.name}</Text>
      </Link>
    </li>
  );
};
