import { FC } from 'react';
import { ProfileNavigationLink } from '@/components/profile/ui';
import styles from './profile-navigation.module.scss';
import { ROUTES } from '@/router';
import { Text } from '@/components';
import classNames from 'classnames';
import { useProfileNavigation } from './hooks';

export const ProfileNavigation: FC = () => {
  const { subtext, handleExitClick } = useProfileNavigation();

  return (
    <div className={styles.container}>
      <ul className={classNames(styles.itemsContainer, 'mb-20 mr-15')}>
        <li>
          <ProfileNavigationLink end to={ROUTES.PROFILE}>
            Профиль
          </ProfileNavigationLink>
        </li>
        <li>
          <ProfileNavigationLink to={ROUTES.PROFILE_ORDERS}>
            История заказов
          </ProfileNavigationLink>
        </li>
        <li>
          <ProfileNavigationLink onClick={handleExitClick}>
            Выход
          </ProfileNavigationLink>
        </li>
      </ul>
      <Text className={styles.subtext}>{subtext}</Text>
    </div>
  );
};
