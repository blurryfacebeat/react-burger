import { FC, useEffect } from 'react';
import { Text } from '@/components';
import styles from './burger-ingredients-details.module.scss';
import classNames from 'classnames';
import { BurgerIngredientsDetailsCharacteristics } from './ui';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIngredientsAsync, TAppDispatch, TRootState } from '@/store';
import { useParams } from 'react-router-dom';

type TBurgerIngredientsDetailsProps = {
  asPage?: boolean;
};

export const BurgerIngredientsDetails: FC<TBurgerIngredientsDetailsProps> = ({
  asPage,
}) => {
  const params = useParams();

  const dispatch = useDispatch<TAppDispatch>();

  const item = useSelector(
    (state: TRootState) => state.selectedIngredient.selectedIngredient,
  );

  const ingredients = useSelector(
    (state: TRootState) => state.ingredients.ingredients,
  );

  useEffect(() => {
    if (!ingredients.length) {
      dispatch(fetchIngredientsAsync(params.ingredientId));
    }
  }, [ingredients, params.ingredientId, dispatch]);

  return (
    <>
      {item && (
        <div
          className={classNames(styles.content, asPage && styles.contentAsPage)}
        >
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
