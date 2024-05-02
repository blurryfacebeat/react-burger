import { FC } from 'react';
import styles from './burger-constructor.module.scss';
import classNames from 'classnames';
import {
  BurgerConstructorItem,
  BurgerConstructorTotal,
  BurgerConstructorOrder,
  BurgerConstructorEmpty,
} from './ui';
import { CustomScrollbar, Modal, useModal } from '@/components';
import { useBurgerConstructorDnd, useBurgerConstructorState } from './hooks';

export const BurgerConstructor: FC = () => {
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();

  const { bun, total, ingredients } = useBurgerConstructorState();

  const { canDrop, isOver, drop, moveCard } = useBurgerConstructorDnd();

  return (
    <div className={classNames(styles.burgerConstructor, 'mt-25 pl-4')}>
      <div
        ref={drop}
        className={classNames(
          styles.dropContainer,
          canDrop && styles.dropContainerCanDrop,
        )}
      >
        {ingredients.length || !!bun ? (
          <>
            {!!bun && (
              <BurgerConstructorItem
                text={`${bun.name} (верх)`}
                thumbnail={bun.image}
                price={bun.price}
                type="top"
                id={bun._id}
                isDraggable={false}
                isLocked
              />
            )}
            {!!ingredients.length && (
              <CustomScrollbar className={styles.scrollBarContainer}>
                <ul className={styles.burgerConstructorContainer}>
                  {ingredients.map((item, idx) => (
                    <BurgerConstructorItem
                      key={item.key}
                      text={item.name}
                      thumbnail={item.image}
                      price={item.price}
                      id={item.key}
                      index={idx}
                      isDraggable
                      onMoveCard={moveCard}
                    />
                  ))}
                </ul>
              </CustomScrollbar>
            )}
            {!!bun && (
              <BurgerConstructorItem
                text={`${bun.name} (низ)`}
                thumbnail={bun.image}
                price={bun.price}
                type="bottom"
                id={bun._id}
                isDraggable={false}
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
