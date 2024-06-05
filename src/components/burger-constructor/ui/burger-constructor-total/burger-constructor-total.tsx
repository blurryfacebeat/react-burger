import { FC } from 'react';
import { Text } from '@/components';
import classNames from 'classnames';
import styles from './burger-constructor-total.module.scss';
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { TRootState } from '@/store';

type TBurgerConstructorTotalProps = {
  value: number;
  onClick: () => void;
};

export const BurgerConstructorTotal: FC<TBurgerConstructorTotalProps> = ({
  value,
  onClick,
}) => {
  const isOrderCreateLoading = useSelector(
    (state: TRootState) => state.currentOrder.isLoading,
  );

  const bun = useSelector(
    (state: TRootState) => state.burgerConstructor.burgerConstructor.bun,
  );

  const isButtonDisabled = !value || !bun || isOrderCreateLoading;

  return (
    <div className={classNames(styles.burgerConstructorTotal, 'pt-6')}>
      <div className={styles.value}>
        <div className={styles.icon}>
          <CurrencyIcon type="primary" />
        </div>
        <Text textType="digitsMedium">{value}</Text>
      </div>
      <Button
        disabled={isButtonDisabled}
        type="primary"
        size="large"
        htmlType="submit"
        onClick={onClick}
      >
        {isOrderCreateLoading ? 'Загрузка...' : 'Оформить заказ'}
      </Button>
    </div>
  );
};
