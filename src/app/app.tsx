import { FC } from 'react';
import {
  BurgerConstructor,
  BurgerIngredients,
  ErrorPlaceholder,
  Loader,
  MainLayout,
} from '@/components';
import styles from './app.module.scss';
import { useApp } from './hooks';

export const App: FC = () => {
  const { isError, errorMessage, ingredients, isLoading } = useApp();

  return (
    <MainLayout>
      <section className={styles.app}>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <ErrorPlaceholder text={errorMessage as string} />
        ) : (
          <>
            <BurgerIngredients data={ingredients} />
            <BurgerConstructor data={ingredients} />
          </>
        )}
      </section>
    </MainLayout>
  );
};
