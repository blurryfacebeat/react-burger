import { FC } from 'react';
import { Text } from '@/components';
import styles from './burger-ingredients-details.module.scss';
import classNames from 'classnames';
import { BurgerIngredientsDetailsCharacteristics } from './ui';
import { useSelector } from 'react-redux';
import { TRootState } from '@/store';

export const BurgerIngredientsDetails: FC = () => {
  const item = useSelector(
    (state: TRootState) => state.selectedIngredient.selectedIngredient,
  );

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
