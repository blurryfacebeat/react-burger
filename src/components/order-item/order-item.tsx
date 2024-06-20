import { FC } from 'react';
import styles from './order-item.module.scss';
import { Price, Text } from '@/components';
import { OrderStatus, TOrderItem } from '@/api';
import { formatDateTime, getStatusText } from '@/utils';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { useOrderItem } from './hooks';

type TOrderItemProps = {
  item: TOrderItem;
  link: string;
  isBig?: boolean;
};

export const OrderItem: FC<TOrderItemProps> = ({ item, link, isBig }) => {
  const { MAX_LENGTH, total, mappedIngredients, remainingIngredients } =
    useOrderItem({ item });

  const location = useLocation();

  return (
    <li>
      <Link
        className={classNames(styles.container, isBig && styles.containerBig)}
        to={`${link}/${item.number}`}
        state={{ background: location }}
      >
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
              {getStatusText(item.status)}
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
      </Link>
    </li>
  );
};
