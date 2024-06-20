import { FC } from 'react';
import { useOrderDetails } from './hooks';
import { Loader, Price, Text } from '@/components';
import styles from './order-details.module.scss';
import classNames from 'classnames';
import { OrderStatus } from '@/api';
import { formatDateTime, getStatusText } from '@/utils';
import { OrderDetailsIngredients } from './ui';

type TOrderDetailsProps = {
  asPage?: boolean;
  withOrderNumber?: boolean;
};

export const OrderDetails: FC<TOrderDetailsProps> = ({ withOrderNumber }) => {
  const { isLoading, order, orderNumber, mappedIngredients, total } =
    useOrderDetails();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {order && (
        <div className={styles.container}>
          {withOrderNumber && (
            <Text className={styles.orderNumber} textType="digitsDefault">
              #{orderNumber}
            </Text>
          )}
          <div className={styles.header}>
            <Text textType="medium">{order.name}</Text>
            <Text
              className={classNames(
                order.status === OrderStatus.DONE && styles.doneText,
              )}
            >
              {getStatusText(order.status)}
            </Text>
          </div>
          <OrderDetailsIngredients items={mappedIngredients} />
          <div className={styles.footer}>
            <Text textType="inactiveColor">
              {formatDateTime(order.createdAt)}
            </Text>
            <Price>{total}</Price>
          </div>
        </div>
      )}
    </>
  );
};
