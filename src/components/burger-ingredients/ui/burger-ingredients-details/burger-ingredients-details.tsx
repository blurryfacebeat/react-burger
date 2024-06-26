import { FC } from 'react';
import { Text } from '@/components';
import styles from './burger-ingredients-details.module.scss';
import classNames from 'classnames';
import { BurgerIngredientsDetailsCharacteristics } from './ui';
import { TIngredientItem } from '@/api';

type TBurgerIngredientsDetailsProps = {
  asPage?: boolean;
  item?: TIngredientItem;
};

export const BurgerIngredientsDetails: FC<TBurgerIngredientsDetailsProps> = ({
  asPage,
  item,
}) => {
  return (
    <>
      {item && (
        <div
          className={classNames(styles.content, asPage && styles.contentAsPage)}
        >
          <img
            data-test-id="ingredient-details-image"
            className="pb-4"
            src={item.image_large}
            alt="Ingredient image"
          />
          <Text
            data-test-id="ingredient-details-name"
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
