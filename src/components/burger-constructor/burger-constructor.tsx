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
import { useDispatch, useSelector } from 'react-redux';
import {
  swipeIngredientsInBurgerConstructor,
  TAppDispatch,
  TRootState,
} from '@/store';
import { useDrop } from 'react-dnd';

export const BurgerConstructor: FC = () => {
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();

  const dispatch = useDispatch<TAppDispatch>();

  const burgerConstructor = useSelector(
    (state: TRootState) => state.burgerConstructor.burgerConstructor,
  );

  const bun = burgerConstructor.find((item) => item.type === 'bun')!;
  const ingredients = burgerConstructor.filter((item) => item.type !== 'bun')!;

  const total = useMemo(
    () =>
      burgerConstructor.reduce((acc, item) => {
        if (item.type === 'bun') {
          return acc + item.price * 2;
        }

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

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    console.log(dragIndex, hoverIndex);
    dispatch(
      swipeIngredientsInBurgerConstructor({
        fromIndex: dragIndex,
        toIndex: hoverIndex,
      }),
    );
  };

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
                id={bun.key}
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
                id={bun.key}
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
