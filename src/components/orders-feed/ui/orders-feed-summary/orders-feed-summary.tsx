import { FC } from 'react';
import styles from './orders-feed-summary.module.scss';
import { Text } from '@/components';
import { OrderStatus, TOrderItem } from '@/api';
import { chunkArray } from '@/utils';

type TOrdersFeedSummaryProps = {
  total: number | string;
  totalToday: number | string;
  items?: TOrderItem[];
};

const CHUNK_SIZE = 10;

export const OrdersFeedSummary: FC<TOrdersFeedSummaryProps> = ({
  items = [],
  total,
  totalToday,
}) => {
  const doneItems = items.filter((item) => item.status === OrderStatus.DONE);
  const pendingItems = items.filter(
    (item) => item.status === OrderStatus.PENDING,
  );

  const doneColumns = chunkArray(doneItems, CHUNK_SIZE);
  const pendingColumns = chunkArray(pendingItems, CHUNK_SIZE);

  return (
    <div className={styles.container}>
      <div className={styles.ordersContainer}>
        <div className={styles.numbersContainer}>
          <Text textType="medium" className={styles.ordersTypeTitle}>
            Готовы:
          </Text>
          <div className={styles.numbersColumns}>
            {doneColumns.map((column, columnIndex) => (
              <ul className={styles.ordersItems} key={columnIndex}>
                {column.map((item) => (
                  <li key={item._id}>
                    <Text textType="digitsDefault" className={styles.readyItem}>
                      {item.number}
                    </Text>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className={styles.numbersContainer}>
          <Text textType="medium" className={styles.ordersTypeTitle}>
            В работе:
          </Text>
          <div className={styles.numbersColumns}>
            {pendingColumns.map((column, columnIndex) => (
              <ul className={styles.ordersItems} key={columnIndex}>
                {column.map((item) => (
                  <li key={item._id}>
                    <Text textType="digitsDefault">{item.number}</Text>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.totalContainer}>
        <Text textType="medium">Выполнено за все время:</Text>
        <Text textType="digitsLarge" className={styles.bigNumbers}>
          {total}
        </Text>
      </div>
      <div className={styles.totalContainer}>
        <Text textType="medium">Выполнено за сегодня:</Text>
        <Text textType="digitsLarge" className={styles.bigNumbers}>
          {totalToday}
        </Text>
      </div>
    </div>
  );
};
