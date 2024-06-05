import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Text } from '@/components';
import styles from './profile-navigation-link.module.scss';

type TProfileNavigationLinkProps = {
  children: ReactNode;
  to?: string;
  end?: boolean;
  onClick?: () => void;
};

export const ProfileNavigationLink: FC<TProfileNavigationLinkProps> = ({
  to,
  end,
  children,
  onClick,
}) => {
  return (
    <>
      {to ? (
        <NavLink end={end} to={to} className={styles.container}>
          {({ isActive }) => (
            <Text textType={isActive ? 'default' : 'inactiveColor'}>
              {children}
            </Text>
          )}
        </NavLink>
      ) : (
        <Text
          textType="inactiveColor"
          className={styles.container}
          onClick={onClick}
        >
          {children}
        </Text>
      )}
    </>
  );
};
