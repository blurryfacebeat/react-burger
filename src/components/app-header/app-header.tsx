import { FC } from 'react';
import styles from './app-header.module.scss';
import {
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import { NavigationLink } from '@/components';
import { AppHeaderNavigation } from './ui';
import { ROUTES } from '@/router';

export const AppHeader: FC = () => {
  return (
    <header className={classNames(styles.header, 'pt-4', 'pb-4')}>
      <div className={styles.headerContainer}>
        <AppHeaderNavigation />
        <Logo />
        <span className={styles.profileLink}>
          <NavigationLink to={ROUTES.PROFILE} Icon={ProfileIcon}>
            Личный кабинет
          </NavigationLink>
        </span>
      </div>
    </header>
  );
};
