import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader, MainLayout } from '@/components';
import { ProfileNavigation } from './ui';
import styles from './profile.module.scss';
import { useCustomSelector } from '@/store';

export const Profile: FC = () => {
  const {
    storeState: { isLoading },
  } = useCustomSelector<'profile'>('profile');

  return (
    <MainLayout>
      <div className={styles.container}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ProfileNavigation />
            <Outlet />
          </>
        )}
      </div>
    </MainLayout>
  );
};
