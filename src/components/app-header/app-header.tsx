import { FC } from 'react';
import styles from './app-header.module.scss';
import {
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import { NavigationLink } from '@/components';
import { AppHeaderNavigation } from './ui';

export const AppHeader: FC = () => {
  return (
    <header className={classNames(styles.header, 'pt-4', 'pb-4')}>
      <div className={styles.headerContainer}>
        <AppHeaderNavigation />
        <Logo />
        <span className={styles.profileLink}>
          <NavigationLink Icon={ProfileIcon}>Личный кабинет</NavigationLink>
        </span>
      </div>
    </header>
  );
};
