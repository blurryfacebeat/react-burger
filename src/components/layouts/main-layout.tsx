import { FC, ReactNode } from 'react';
import { AppHeader } from '@/components/app-header';

type TMainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<TMainLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
    </>
  );
};
