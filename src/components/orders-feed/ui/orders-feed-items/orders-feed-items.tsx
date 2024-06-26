import { FC } from 'react';
import styles from './orders-feed-items.module.scss';
import { TOrderItem } from '@/api';
import { CustomScrollbar, OrderItem } from '@/components';
import { ROUTES } from '@/router';

type TOrdersFeedItemsProps = {
  items?: TOrderItem[];
};

export const OrdersFeedItems: FC<TOrdersFeedItemsProps> = ({ items }) => {
  return (
    <CustomScrollbar className={styles.scrollBarContainer}>
      <ul className={styles.container}>
        {items?.map((item) => (
          <OrderItem key={item._id} link={ROUTES.FEED} item={item} />
        ))}
      </ul>
    </CustomScrollbar>
  );
};
