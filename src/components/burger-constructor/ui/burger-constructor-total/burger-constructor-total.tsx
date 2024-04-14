import { FC } from 'react';
import { Text } from '@/components';
import classNames from 'classnames';
import styles from './burger-constructor-total.module.scss';
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

type TBurgerConstructorTotalProps = {
  value: number;
};

export const BurgerConstructorTotal: FC<TBurgerConstructorTotalProps> = ({
  value,
}) => {
  return (
    <div className={classNames(styles.burgerConstructorTotal, 'pt-6')}>
      <div className={styles.value}>
        <div className={styles.icon}>
          <CurrencyIcon type="primary" />
        </div>
        <Text textType="digitsMedium">{value}</Text>
      </div>
      <Button type="primary" size="large" htmlType="submit">
        Оформить заказ
      </Button>
    </div>
  );
};
