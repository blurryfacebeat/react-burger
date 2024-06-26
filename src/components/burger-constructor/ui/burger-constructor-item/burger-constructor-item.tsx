import { FC } from 'react';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import styles from './burger-constructor-item.module.scss';
import { removeIngredientFromConstructor, useCustomDispatch } from '@/store';
import { useBurgerConstructorItemDnd } from './hooks';

type TBurgerConstructorItemProps = {
  text: string;
  thumbnail: string;
  price: number;
  id: string;
  index?: number;
  onMoveCard?: (dragIndex: number, hoverIndex: number) => void;
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
  index,
  isLocked,
  isDraggable,
  className,
  onMoveCard,
  ...otherProps
}) => {
  const { dispatch } = useCustomDispatch();

  const handleClose = () => {
    dispatch(removeIngredientFromConstructor(id));
  };

  const { targetRef, isDragging } = useBurgerConstructorItemDnd({
    id,
    index,
    isDraggable,
    onMoveCard,
  });

  return (
    <li
      ref={targetRef}
      className={classNames(
        styles.burgerConstructorItem,
        className,
        isDragging && styles.nullableOpacity,
        isDraggable && styles.draggable,
      )}
      {...otherProps}
    >
      <span className={classNames(!isDraggable && styles.hiddenDragIcon)}>
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
