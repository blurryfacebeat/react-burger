import { FC } from 'react';
import {
  BurgerConstructor,
  BurgerIngredients,
  ErrorPlaceholder,
  Loader,
  MainLayout,
} from '@/components';
import styles from './app.module.scss';
import { useIngredients } from './hooks';

export const App: FC = () => {
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
