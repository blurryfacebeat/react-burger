import { FC, useMemo } from 'react';
import styles from './burger-constructor.module.scss';
import classNames from 'classnames';
import {
  BurgerConstructorItem,
  BurgerConstructorTotal,
  BurgerConstructorOrder,
} from '@/components/burger-constructor/ui';
import { CustomScrollbar, Modal, useModal } from '@/components';
import { TDataItem } from '@/api';

type TBurgerConstructorProps = {
  data: TDataItem[];
};

export const BurgerConstructor: FC<TBurgerConstructorProps> = ({ data }) => {
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();

  const bun = data.find((item) => item.type === 'bun')!;
  const ingredients = data.filter((item) => item.type !== 'bun')!;

  const total = useMemo(
    () =>
      data.reduce((acc, item) => {
        return acc + item.price;
      }, 0),
    [data],
  );

  return (
    <>
      <div className={classNames(styles.burgerConstructor, 'mt-25 pl-4')}>
        <BurgerConstructorItem
          text={`${bun.name} (верх)`}
          thumbnail={bun.image}
          price={bun.price}
          type="top"
          isLocked
        />
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
        <BurgerConstructorItem
          text={`${bun.name} (низ)`}
          thumbnail={bun.image}
          price={bun.price}
          type="bottom"
          isLocked
        />
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
