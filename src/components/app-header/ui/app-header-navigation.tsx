import { FC } from 'react';
import { NavigationLink } from '@/components';
import {
  BurgerIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header-navigation.module.scss';

export const AppHeaderNavigation: FC = () => {
  return (
    <nav className="mr-30">
      <ul>
        <li className={styles.headerNavigation}>
          <NavigationLink isActive Icon={BurgerIcon}>
            Конструктор
          </NavigationLink>
          <NavigationLink Icon={ListIcon}>Лента заказов</NavigationLink>
        </li>
      </ul>
    </nav>
  );
};
