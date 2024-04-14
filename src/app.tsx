import { FC } from 'react';
import { BurgerConstructor, BurgerIngredients, MainLayout } from './components';
import styles from './app.module.scss';
import { dataItems, dataItemsConstructor } from '@/utils';

export const App: FC = () => {
  return (
    <MainLayout>
      <section className={styles.app}>
        <BurgerIngredients data={dataItems} />
        <BurgerConstructor data={dataItemsConstructor} />
      </section>
    </MainLayout>
  );
};
