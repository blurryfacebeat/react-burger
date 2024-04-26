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
import { TIngredientItem } from '@/api';
import { useDispatch } from 'react-redux';
import { addIngredientToConstructor, TAppDispatch } from '@/store';

type TBurgerIngredientsItemProps = {
  item: TIngredientItem;
  count?: number;
  onClick: () => void;
};

type TDropResult = {
  id: string;
};

export const BurgerIngredientsItem: FC<TBurgerIngredientsItemProps> = ({
  item,
  count,
  onClick,
}) => {
  const dispatch = useDispatch<TAppDispatch>();

  const [{ isDragging }, drag] = useDrag(() => ({
    item,
    type: BURGER_INGREDIENT_DRAG_AND_DROP_NAME,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<TDropResult>();

      if (item && dropResult) {
        dispatch(addIngredientToConstructor(item));
      }
    },
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
      <img src={item.image} alt="burger ingredient" />
      <Price>{item.price}</Price>
      <Text>{item.name}</Text>
    </li>
  );
};
