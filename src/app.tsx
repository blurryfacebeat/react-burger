import { FC } from 'react';
import { BurgerIngredients, MainLayout } from './components';
import styles from './app.module.scss';
import { dataItems } from '@/utils';

export const App: FC = () => {
  return (
    <MainLayout>
      <section className={styles.app}>
        <BurgerIngredients data={dataItems} />
      </section>
    </MainLayout>
  );
};
