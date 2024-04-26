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
  onClick: () => void;
};

export const BurgerConstructorTotal: FC<TBurgerConstructorTotalProps> = ({
  value,
  onClick,
}) => {
  return (
    <div className={classNames(styles.burgerConstructorTotal, 'pt-6')}>
      <div className={styles.value}>
        <div className={styles.icon}>
          <CurrencyIcon type="primary" />
        </div>
        <Text textType="digitsMedium">{value}</Text>
      </div>
      <Button
        disabled={!value}
        type="primary"
        size="large"
        htmlType="submit"
        onClick={onClick}
      >
        Оформить заказ
      </Button>
    </div>
  );
};
