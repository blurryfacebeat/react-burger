import { FC, useEffect, useState } from 'react';
import {
  BurgerConstructor,
  BurgerIngredients,
  ErrorPlaceholder,
  Loader,
  MainLayout,
} from './components';
import styles from './app.module.scss';
import { getIngredients, TDataItem } from '@/api/get-ingredients.ts';

export const App: FC = () => {
  const [dataItems, setDataItems] = useState<TDataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getIngredients();

        if (response) {
          setDataItems(response);
        }
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        }

        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  });

  return (
    <MainLayout>
      <section className={styles.app}>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <ErrorPlaceholder text={errorMessage} />
        ) : (
          <>
            <BurgerIngredients data={dataItems} />
            <BurgerConstructor data={dataItems} />
          </>
        )}
      </section>
    </MainLayout>
  );
};
