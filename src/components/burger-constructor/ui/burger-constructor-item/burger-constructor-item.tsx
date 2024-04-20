import { FC } from 'react';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import styles from './burger-constructor-item.module.scss';

type TBurgerConstructorItemProps = {
  text: string;
  thumbnail: string;
  price: number;
  type?: 'top' | 'bottom';
  isLocked?: boolean;
  isDraggable?: boolean;
  className?: string;
  handleClose?: () => void;
};

export const BurgerConstructorItem: FC<TBurgerConstructorItemProps> = ({
  text,
  thumbnail,
  price,
  type,
  isLocked,
  isDraggable,
  className,
  handleClose,
}) => {
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
