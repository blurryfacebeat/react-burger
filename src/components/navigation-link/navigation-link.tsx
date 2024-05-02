import { FC, ComponentType, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './navigation-link.module.scss';
import { Text } from '@/components';

type TIconProps = {
  type: 'primary' | 'secondary';
};

type TNavigationLinkProps = PropsWithChildren<{
  Icon: ComponentType<TIconProps>;
  isActive?: boolean;
}>;

export const NavigationLink: FC<TNavigationLinkProps> = ({
  isActive,
  Icon,
  children,
}) => {
  return (
    <a href="#" className={classNames(styles.navigationLink, 'p-5')}>
      <Icon type={isActive ? 'primary' : 'secondary'} />
      <Text textType={isActive ? 'default' : 'inactiveColor'}>{children}</Text>
    </a>
  );
};
