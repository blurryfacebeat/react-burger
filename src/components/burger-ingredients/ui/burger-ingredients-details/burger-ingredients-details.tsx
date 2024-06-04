import { FC } from 'react';
import { Text } from '@/components';
import styles from './burger-ingredients-details.module.scss';
import classNames from 'classnames';
import { BurgerIngredientsDetailsCharacteristics } from './ui';
import { useSelector } from 'react-redux';
import { TRootState } from '@/store';
import { useParams } from 'react-router-dom';

type TBurgerIngredientsDetailsProps = {
  asPage?: boolean;
};

export const BurgerIngredientsDetails: FC<TBurgerIngredientsDetailsProps> = ({
  asPage,
}) => {
  const params = useParams();

  const ingredients = useSelector(
    (state: TRootState) => state.ingredients.ingredients,
  );

  const currentIngredient = ingredients.find(
    (item) => item._id === params.ingredientId,
  );

  return (
    <>
      {currentIngredient && (
        <div
          className={classNames(styles.content, asPage && styles.contentAsPage)}
        >
          <img
            className="pb-4"
            src={currentIngredient.image_large}
            alt="Ingredient image"
          />
          <Text
            className={classNames(styles.itemName, 'pb-8')}
            textType="medium"
          >
            {currentIngredient.name}
          </Text>
          <BurgerIngredientsDetailsCharacteristics item={currentIngredient} />
        </div>
      )}
    </>
  );
};
