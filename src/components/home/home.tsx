import { FC } from 'react';
import {
  BurgerConstructor,
  BurgerIngredients,
  ErrorPlaceholder,
  Loader,
  MainLayout,
} from '@/components';
import styles from './home.module.scss';
import { useIngredients } from './hooks';

export const Home: FC = () => {
  const { isError, errorMessage, isLoading } = useIngredients();

  return (
    <MainLayout>
      <section className={styles.app}>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <ErrorPlaceholder text={errorMessage as string} />
        ) : (
          <>
            <BurgerIngredients />
            <BurgerConstructor />
          </>
        )}
      </section>
    </MainLayout>
  );
};
