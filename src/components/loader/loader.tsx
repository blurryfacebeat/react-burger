import { FC } from 'react';
import styles from './loader.module.scss';
import { Text } from '@/components';
import classNames from 'classnames';

type TLoaderProps = {
  isSmall?: boolean;
};

export const Loader: FC<TLoaderProps> = ({ isSmall }) => {
  return (
    <Text className={classNames(!isSmall && styles.loader)} textType="large">
      Загрузка...
    </Text>
  );
};
