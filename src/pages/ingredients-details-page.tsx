import { FC } from 'react';
import { BurgerIngredientsDetails } from '@/components/burger-ingredients/ui';
import { MainLayout } from '@/components';
import { useCustomSelector } from '@/store';
import { useParams } from 'react-router-dom';

export const IngredientsDetailsPage: FC = () => {
  const params = useParams();

  const {
    storeState: { ingredients },
  } = useCustomSelector<'ingredients'>('ingredients');

  const currentIngredient = ingredients.find(
    (item) => item._id === params.ingredientId,
  );

  return (
    <MainLayout>
      <BurgerIngredientsDetails asPage item={currentIngredient} />
    </MainLayout>
  );
};
