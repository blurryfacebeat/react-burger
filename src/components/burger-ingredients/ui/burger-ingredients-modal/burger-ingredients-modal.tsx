import { FC } from 'react';
import { Modal, Text } from '@/components';
import styles from './burger-ingredients-modal.module.scss';
import classNames from 'classnames';
import { TDataItem } from '@/api';
import { BurgerIngredientsModalCharacteristics } from './ui';

type TBurgerIngredientsModalProps = {
  isOpen: boolean;
  item: TDataItem | null;
  onClose: () => void;
};

export const BurgerIngredientsModal: FC<TBurgerIngredientsModalProps> = ({
  isOpen,
  item,
  onClose,
}) => {
  return (
    <>
      {isOpen && (
        <Modal
          className={classNames(styles.container, 'pb-15')}
          title="Детали ингредиента"
          onClose={onClose}
        >
          {item && (
            <div className={styles.content}>
              <img
                className="pb-4"
                src={item.image_large}
                alt="Ingredient image"
              />
              <Text
                className={classNames(styles.itemName, 'pb-8')}
                textType="medium"
              >
                {item.name}
              </Text>
              <BurgerIngredientsModalCharacteristics item={item} />
            </div>
          )}
        </Modal>
      )}
    </>
  );
};
