import { FC } from 'react';
import styles from './orders-history.module.scss';
import { useGetMessagesQueryUserOrders } from '@/store';
import { CustomScrollbar, Loader, OrderItem } from '@/components';
import { ROUTES } from '@/router';

export const OrdersHistory: FC = () => {
  const { data, isLoading } = useGetMessagesQueryUserOrders('default');

  const isContentLoading = isLoading || !data?.length;
  const actualItem = data?.at(-1) || null;

  return (
    <div className={styles.container}>
      {isContentLoading ? (
        <Loader isSmall />
      ) : (
        <CustomScrollbar className={styles.scrollBarContainer}>
          <ul className={styles.items}>
            {actualItem?.orders.map((item) => (
              <OrderItem
                isBig
                key={item._id}
                item={item}
                link={ROUTES.PROFILE_ORDERS}
              />
            ))}
          </ul>
        </CustomScrollbar>
      )}
    </div>
  );
};
