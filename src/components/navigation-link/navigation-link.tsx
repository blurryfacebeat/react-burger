import { FC, ComponentType, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './navigation-link.module.scss';
import { Text } from '@/components';
import { NavLink } from 'react-router-dom';

type TIconProps = {
  type: 'primary' | 'secondary';
};

type TNavigationLinkProps = PropsWithChildren<{
  Icon: ComponentType<TIconProps>;
  to: string;
}>;

export const NavigationLink: FC<TNavigationLinkProps> = ({
  Icon,
  to,
  children,
}) => {
  return (
    <NavLink to={to} className={classNames(styles.navigationLink, 'p-5')}>
      {({ isActive }) => (
        <>
          <Icon type={isActive ? 'primary' : 'secondary'} />
          <Text textType={isActive ? 'default' : 'inactiveColor'}>
            {children}
          </Text>
        </>
      )}
    </NavLink>
  );
};
