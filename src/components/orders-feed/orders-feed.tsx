import { FC } from 'react';
import { Loader, MainLayout, Text } from '@/components';
import styles from './orders-feed.module.scss';
import { OrdersFeedItems, OrdersFeedSummary } from './ui';
import { useGetMessagesQueryAllOrders } from '@/store';

export const OrdersFeed: FC = () => {
  const { data, isLoading } = useGetMessagesQueryAllOrders('default');

  const isContentLoading = isLoading || !data?.length;
  const actualItem = data?.at(-1) || null;
  const total = actualItem?.total || '-';
  const totalToday = actualItem?.totalToday || '-';

  return (
    <MainLayout>
      {isContentLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <Text textType="large" className="mb-5">
            Лента заказов
          </Text>
          <div className={styles.innerContainer}>
            <OrdersFeedItems items={actualItem?.orders} />
            <OrdersFeedSummary
              items={actualItem?.orders}
              total={total}
              totalToday={totalToday}
            />
          </div>
        </div>
      )}
    </MainLayout>
  );
};
