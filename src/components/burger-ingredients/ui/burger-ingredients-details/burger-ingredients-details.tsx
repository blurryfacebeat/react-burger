import { FC } from 'react';
import { Text } from '@/components';
import styles from './burger-ingredients-details.module.scss';
import classNames from 'classnames';
import { TIngredientItem } from '@/api';
import { BurgerIngredientsDetailsCharacteristics } from './ui';

type TBurgerIngredientsModalProps = {
  item: TIngredientItem | null;
};

export const BurgerIngredientsDetails: FC<TBurgerIngredientsModalProps> = ({
  item,
}) => {
  return (
    <>
      {item && (
        <div className={styles.content}>
          <img className="pb-4" src={item.image_large} alt="Ingredient image" />
          <Text
            className={classNames(styles.itemName, 'pb-8')}
            textType="medium"
          >
            {item.name}
          </Text>
          <BurgerIngredientsDetailsCharacteristics item={item} />
        </div>
      )}
    </>
  );
};
