import { FC, ReactNode } from 'react';
import { AppHeader } from '@/components';
import styles from './main-layout.module.scss';
import classNames from 'classnames';

type TMainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<TMainLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main className={classNames(styles.main, 'pb-6')}>{children}</main>
    </>
  );
};
