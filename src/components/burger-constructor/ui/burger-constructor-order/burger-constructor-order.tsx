import { FC } from 'react';
import classNames from 'classnames';
import { Text } from '@/components';
import styles from './burger-constructor-order.module.scss';
import doneIcon from '@/assets/images/done-icon.svg';

export const BurgerConstructorOrder: FC = () => {
  return (
    <div className={classNames(styles.content, 'pt-20')}>
      <Text
        className={classNames(styles.orderNumber, 'mb-8')}
        textType="digitsLarge"
      >
        034536
      </Text>
      <Text className="mb-15" textType="medium">
        идентификатор заказа
      </Text>
      <img className="mb-15" src={doneIcon} alt="Done icon" />
      <Text className="mb-2">Ваш заказ начали готовить</Text>
      <Text textType="inactiveColor">
        Дождитесь готовности на орбитальной станции
      </Text>
    </div>
  );
};
