import { FC, ComponentType, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './navigation-link.module.scss';
import { Text } from '@/components';

type TIconProps = {
  type: 'primary' | 'secondary';
};

type TNavigationLinkProps = {
  Icon: ComponentType<TIconProps>;
  children: ReactNode;
  isActive?: boolean;
};

export const NavigationLink: FC<TNavigationLinkProps> = ({
  isActive,
  Icon,
  children,
}) => {
  return (
    <div className={classNames(styles.navigationLink, 'p-5')}>
      <Icon type={isActive ? 'primary' : 'secondary'} />
      <Text textType={isActive ? 'default' : 'inactiveColor'}>{children}</Text>
    </div>
  );
};