import { FC } from 'react';
import { BurgerIngredientsDetails } from '@/components/burger-ingredients/ui';
import { MainLayout } from '@/components';

export const IngredientsDetailsPage: FC = () => {
  return (
    <MainLayout>
      <BurgerIngredientsDetails asPage />
    </MainLayout>
  );
};
