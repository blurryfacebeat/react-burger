import { FC } from 'react';
import styles from './order-item.module.scss';
import { Price, Text } from '@/components';
import { OrderStatus, TIngredientItem, TOrderItem } from '@/api';
import { formatDateTime } from '@/utils';
import classNames from 'classnames';
import { useCustomSelector } from '@/store';
import { v4 as uuidv4 } from 'uuid';

type TOrderItemProps = {
  item: TOrderItem;
  isBig?: boolean;
};

const MAX_LENGTH = 5;

export const OrderItem: FC<TOrderItemProps> = ({ item, isBig }) => {
  const getStatusText = () => {
    if (item.status === OrderStatus.CREATED) {
      return 'Создан';
    }

    if (item.status === OrderStatus.PENDING) {
      return 'Готовится';
    }

    return 'Выполнен';
  };

  const {
    storeState: { ingredients },
  } = useCustomSelector<'ingredients'>('ingredients');

  const mappedIngredients = item.ingredients.reduce(
    (acc, item) => {
      const newItem = ingredients.find(
        (ingredientItem) => item === ingredientItem._id,
      );

      if (
        acc.find((accItem) => accItem.type === 'bun') &&
        newItem?.type === 'bun'
      ) {
        return acc;
      }

      if (newItem) {
        acc.push({ ...newItem, keyId: uuidv4() });
      }

      return acc;
    },
    [] as (TIngredientItem & { keyId: string })[],
  );

  const total = mappedIngredients.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const remainingIngredients = mappedIngredients.slice(MAX_LENGTH);

  return (
    <li className={classNames(styles.container, isBig && styles.containerBig)}>
      <div className={styles.header}>
        <Text textType="digitsDefault">#{item.number}</Text>
        <Text textType="inactiveColor">{formatDateTime(item.createdAt)}</Text>
      </div>
      <div className={styles.middle}>
        <Text textType="medium" className={styles.overflowText}>
          {item.name}
        </Text>
        {isBig && (
          <Text
            className={classNames(
              item.status === OrderStatus.DONE && styles.doneText,
            )}
          >
            {getStatusText()}
          </Text>
        )}
      </div>
      <div className={styles.bottom}>
        <ul className={styles.ingredients}>
          {mappedIngredients.slice(0, MAX_LENGTH).map((item) => (
            <li className={styles.ingredient} key={item.keyId}>
              <img
                className={styles.ingredientImage}
                src={item.image_mobile}
                alt="Ingredient image"
              />
            </li>
          ))}
          {!!remainingIngredients.length && (
            <li
              className={styles.ingredient}
              key={remainingIngredients[0].keyId}
            >
              <img
                className={styles.ingredientImage}
                src={remainingIngredients[0].image_mobile}
                alt="Ingredient image"
              />
              <div className={styles.ingredientOverlay}>
                <Text textType="digitsDefault">
                  +{remainingIngredients.length}
                </Text>
              </div>
            </li>
          )}
        </ul>
        <Price>{total}</Price>
      </div>
    </li>
  );
};
