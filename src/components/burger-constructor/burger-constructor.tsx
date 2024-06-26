import { FC } from 'react';
import styles from './burger-constructor.module.scss';
import classNames from 'classnames';
import {
  BurgerConstructorItem,
  BurgerConstructorTotal,
  BurgerConstructorOrder,
  BurgerConstructorEmpty,
} from './ui';
import { CustomScrollbar, Modal } from '@/components';
import {
  useBurgerConstructorDnd,
  useBurgerConstructorState,
  useBurgerConstructorModal,
} from './hooks';
import { createOrderAsync, useCustomDispatch } from '@/store';
import { accessTokenLocalStorage } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/router';

export const BurgerConstructor: FC = () => {
  const navigate = useNavigate();

  const { isModalOpen, handleModalClose } = useBurgerConstructorModal();

  const { bun, total, ingredients } = useBurgerConstructorState();

  const { canDrop, isOver, drop, moveCard } = useBurgerConstructorDnd();

  const { dispatch } = useCustomDispatch();
  const createOrder = () => {
    if (accessTokenLocalStorage.get()) {
      dispatch(createOrderAsync());
    } else {
      navigate(ROUTES.LOGIN);
    }
  };

  return (
    <div className={classNames(styles.burgerConstructor, 'mt-25 pl-4')}>
      <div
        data-test-id="ingredients-drop-zone"
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
                data-test-id="burger-constructor-bun-top"
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
                      data-test-id="burger-constructor-main"
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
                data-test-id="burger-constructor-bun-bottom"
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
      <BurgerConstructorTotal value={total} onClick={createOrder} />
      {isModalOpen && (
        <Modal
          data-test-id="order-modal"
          className={classNames(styles.burgerConstructorModal, 'pt-15 pb-30')}
          onClose={handleModalClose}
        >
          <BurgerConstructorOrder />
        </Modal>
      )}
    </div>
  );
};
