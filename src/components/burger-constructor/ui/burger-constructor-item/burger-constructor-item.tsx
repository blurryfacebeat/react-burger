import { FC, useRef } from 'react';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import styles from './burger-constructor-item.module.scss';
import { useDispatch } from 'react-redux';
import { removeIngredientFromConstructor, TAppDispatch } from '@/store';
import { useDrag, useDrop } from 'react-dnd';
import { Identifier, XYCoord } from 'dnd-core';

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

type TDragItem = {
  index: number;
  id: string;
  type: string;
};

const itemType = 'constructor-item';

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
}) => {
  const dispatch = useDispatch<TAppDispatch>();

  const handleClose = () => {
    dispatch(removeIngredientFromConstructor(id));
  };

  const targetRef = useRef<HTMLLIElement>(null);

  const [, drop] = useDrop<TDragItem, void, { handlerId: Identifier | null }>({
    accept: itemType,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: TDragItem, monitor) {
      if (!targetRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index as number;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = targetRef.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      onMoveCard?.(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: itemType,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: isDraggable,
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(targetRef));

  return (
    <li
      ref={targetRef}
      className={classNames(styles.burgerConstructorItem, className)}
      style={{ opacity }}
    >
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
