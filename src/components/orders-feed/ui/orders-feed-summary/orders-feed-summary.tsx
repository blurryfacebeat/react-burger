import { FC } from 'react';
import styles from './orders-feed-summary.module.scss';
import { Text } from '@/components';

const ready = ['034533', '034532', '034530', '034527', '034525'];
const inProgress = ['034538', '034541', '034542'];

type TOrdersFeedSummaryProps = {
  total: number | string;
  totalToday: number | string;
};

export const OrdersFeedSummary: FC<TOrdersFeedSummaryProps> = ({
  total,
  totalToday,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.ordersContainer}>
        <ul className={styles.ordersItems}>
          {ready.map((item) => (
            <li key={item}>
              <Text textType="digitsDefault" className={styles.readyItem}>
                {item}
              </Text>
            </li>
          ))}
        </ul>
        <ul className={styles.ordersItems}>
          {inProgress.map((item) => (
            <li key={item}>
              <Text textType="digitsDefault">{item}</Text>
            </li>
          ))}
        </ul>
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
