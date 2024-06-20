import { FC, useEffect } from 'react';
import { Loader, MainLayout, Text } from '@/components';
import styles from './orders-feed.module.scss';
import { OrdersFeedItems, OrdersFeedSummary } from './ui';
import { useGetMessagesQueryAllOrders } from '@/store';

export const OrdersFeed: FC = () => {
  const { data, isLoading } = useGetMessagesQueryAllOrders('default');

  const isContentLoading = isLoading || !(data as unknown as [])?.length;
  const actualItem = data?.at(-1) || null;
  const total = actualItem?.total || '-';
  const totalToday = actualItem?.totalToday || '-';

  useEffect(() => {
    console.log(321, data, isLoading);
  }, [data, isLoading]);

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
            <OrdersFeedSummary total={total} totalToday={totalToday} />
          </div>
        </div>
      )}
    </MainLayout>
  );
};
