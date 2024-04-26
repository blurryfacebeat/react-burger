import { FC } from 'react';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import styles from './burger-constructor-item.module.scss';
import { useDispatch } from 'react-redux';
import { removeIngredientFromConstructor, TAppDispatch } from '@/store';

type TBurgerConstructorItemProps = {
  text: string;
  thumbnail: string;
  price: number;
  id: string;
  type?: 'top' | 'bottom';
  isLocked?: boolean;
  isDraggable?: boolean;
  className?: string;
};

export const BurgerConstructorItem: FC<TBurgerConstructorItemProps> = ({
  text,
  thumbnail,
  price,
  type,
  id,
  isLocked,
  isDraggable,
  className,
}) => {
  const dispatch = useDispatch<TAppDispatch>();

  const handleClose = () => {
    dispatch(removeIngredientFromConstructor(id));
  };

  return (
    <li className={classNames(styles.burgerConstructorItem, className)}>
      <span
        className={classNames(
          styles.dragIcon,
          !isDraggable && styles.hiddenDragIcon,
        )}
      >
        <DragIcon type="primary" />
      </span>
      <ConstructorElement
        text={text}
        thumbnail={thumbnail}
        price={price}
        type={type}
        isLocked={isLocked}
        handleClose={handleClose}
      />
    </li>
  );
};
