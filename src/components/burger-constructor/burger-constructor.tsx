import { FC, useMemo } from 'react';
import styles from './burger-constructor.module.scss';
import classNames from 'classnames';
import {
  BurgerConstructorItem,
  BurgerConstructorTotal,
  BurgerConstructorOrder,
} from '@/components/burger-constructor/ui';
import { CustomScrollbar, Modal, useModal } from '@/components';
import { useSelector } from 'react-redux';
import { TRootState } from '@/store';

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

  return (
    <>
      {burgerConstructor.length && (
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
      )}
      <div className={classNames(styles.burgerConstructor, 'mt-25 pl-4')}>
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
    </>
  );
};
