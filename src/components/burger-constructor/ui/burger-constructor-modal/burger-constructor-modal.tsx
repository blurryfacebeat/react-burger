import { FC } from 'react';
import classNames from 'classnames';
import { Modal, Text } from '@/components';
import styles from './burger-constructor-modal.module.scss';
import doneIcon from '@/assets/images/done-icon.svg';

type TBurgerConstructorModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const BurgerConstructorModal: FC<TBurgerConstructorModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <>
      {isOpen && (
        <Modal
          className={classNames(styles.container, 'pt-15 pb-30')}
          onClose={onClose}
        >
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
        </Modal>
      )}
    </>
  );
};
