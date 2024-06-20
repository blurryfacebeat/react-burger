import { FC } from 'react';
import { MainLayout, OrderDetails } from '@/components';

export const OrderDetailsPage: FC = () => {
  return (
    <MainLayout>
      <OrderDetails asPage withOrderNumber />
    </MainLayout>
  );
};
