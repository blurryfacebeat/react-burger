import { FC } from 'react';
import { Text } from '@/components';
import styles from './burger-constructor-empty.module.scss';
import classNames from 'classnames';

type TBurgerConstructorEmptyProps = {
  isDroppedItemOver: boolean;
};

export const BurgerConstructorEmpty: FC<TBurgerConstructorEmptyProps> = ({
  isDroppedItemOver,
}) => {
  return (
    <div
      className={classNames(
        styles.container,
        'p-5',
        isDroppedItemOver && styles.containerIsOver,
      )}
    >
      <Text className={styles.text} textType="medium">
        Добавьте ингредиенты
      </Text>
    </div>
  );
};
