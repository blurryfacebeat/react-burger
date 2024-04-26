import { FC } from 'react';
import styles from './burger-ingredients-item.module.scss';
import {
  Text,
  Price,
  BURGER_INGREDIENT_DRAG_AND_DROP_NAME,
} from '@/components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import classNames from 'classnames';

type TBurgerIngredientsItemProps = {
  image: string;
  name: string;
  price: number;
  id: string;
  onClick: () => void;
  count?: number;
};

export const BurgerIngredientsItem: FC<TBurgerIngredientsItemProps> = ({
  image,
  price,
  name,
  id,
  count,
  onClick,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: BURGER_INGREDIENT_DRAG_AND_DROP_NAME,
    item: { name: id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

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
      <img src={image} alt="burger ingredient" />
      <Price>{price}</Price>
      <Text>{name}</Text>
    </li>
  );
};
