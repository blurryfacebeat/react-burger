import { FC } from 'react';
import styles from './loader.module.scss';
import { Text } from '@/components';

export const Loader: FC = () => {
  return (
    <Text className={styles.loader} textType="large">
      Загрузка...
    </Text>
  );
};
