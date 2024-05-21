import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader, MainLayout } from '@/components';
import { ProfileNavigation } from './ui';
import styles from './profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAsync, TAppDispatch, TRootState } from '@/store';

export const Profile: FC = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const isLoading = useSelector((state: TRootState) => state.profile.isLoading);

  useEffect(() => {
    dispatch(getProfileAsync());
  }, [dispatch]);

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
