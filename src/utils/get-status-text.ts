import { OrderStatus } from '@/api';

export const getStatusText = (status?: OrderStatus) => {
  if (status === OrderStatus.CREATED) {
    return 'Создан';
  }

  if (status === OrderStatus.PENDING) {
    return 'Готовится';
  }

  return 'Выполнен';
};
