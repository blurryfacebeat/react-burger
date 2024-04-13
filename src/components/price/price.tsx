import { FC, ReactNode } from 'react';
import { Text } from '@/components';
import styles from './price.module.scss';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

type TPriceProps = {
  children: ReactNode;
};

export const Price: FC<TPriceProps> = ({ children }) => {
  return (
    <div className={styles.price}>
      <Text textType="digitsDefault" className="mr-2">
        {children}
      </Text>
      <CurrencyIcon type="primary" />
    </div>
  );
};
