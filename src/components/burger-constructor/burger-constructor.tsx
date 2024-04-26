import { FC, useMemo } from 'react';
import styles from './burger-constructor.module.scss';
import classNames from 'classnames';
import {
  BurgerConstructorItem,
  BurgerConstructorTotal,
  BurgerConstructorOrder,
  BurgerConstructorEmpty,
} from './ui';
import {
  BURGER_INGREDIENT_DRAG_AND_DROP_NAME,
  CustomScrollbar,
  Modal,
  useModal,
} from '@/components';
import { useSelector } from 'react-redux';
import { TRootState } from '@/store';
import { useDrop } from 'react-dnd';

export const BurgerConstructor: FC = () => {
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();

  const burgerConstructor = useSelector(
    (state: TRootState) => state.burgerConstructor.burgerConstructor,
  );

  const bun = burgerConstructor.find((item) => item.type === 'bun')!;
  const ingredients = burgerConstructor.filter((item) => item.type !== 'bun')!;

  const total = useMemo(
    () =>
      burgerConstructor.reduce((acc, item) => {
        return acc + item.price;
      }, 0),
    [burgerConstructor],
  );

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: BURGER_INGREDIENT_DRAG_AND_DROP_NAME,
    drop: () => ({
      name: 'burgerConstructor',
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div className={classNames(styles.burgerConstructor, 'mt-25 pl-4')}>
      <div
        ref={drop}
        className={classNames(
          styles.dropContainer,
          canDrop && styles.dropContainerCanDrop,
        )}
      >
        {burgerConstructor.length ? (
          <>
            {bun && (
              <BurgerConstructorItem
                text={`${bun.name} (верх)`}
                thumbnail={bun.image}
                price={bun.price}
                type="top"
                isLocked
              />
            )}
            {ingredients.length && (
              <CustomScrollbar className={styles.scrollBarContainer}>
                <ul className={styles.burgerConstructorContainer}>
                  {ingredients.map((item) => (
                    <BurgerConstructorItem
                      key={item._id}
                      text={item.name}
                      thumbnail={item.image}
                      price={item.price}
                      isDraggable
                    />
                  ))}
                </ul>
              </CustomScrollbar>
            )}
            {bun && (
              <BurgerConstructorItem
                text={`${bun.name} (низ)`}
                thumbnail={bun.image}
                price={bun.price}
                type="bottom"
                isLocked
              />
            )}
          </>
        ) : (
          <BurgerConstructorEmpty isDroppedItemOver={isOver} />
        )}
      </div>
      <BurgerConstructorTotal value={total} onClick={handleModalOpen} />
      {isModalOpen && (
        <Modal
          className={classNames(styles.burgerConstructorModal, 'pt-15 pb-30')}
          onClose={handleModalClose}
        >
          <BurgerConstructorOrder />
        </Modal>
      )}
    </div>
  );
};
