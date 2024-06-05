import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader, MainLayout } from '@/components';
import { ProfileNavigation } from './ui';
import styles from './profile.module.scss';
import { useSelector } from 'react-redux';
import { TRootState } from '@/store';

export const Profile: FC = () => {
  const isLoading = useSelector((state: TRootState) => state.profile.isLoading);

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
