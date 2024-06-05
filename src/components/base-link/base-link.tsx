import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './base-link.module.scss';
import { Text } from '@/components';

type TBaseLinkProps = {
  children: ReactNode;
} & LinkProps;

export const BaseLink: FC<TBaseLinkProps> = ({ children, ...otherProps }) => {
  return (
    <Link {...otherProps} className={styles.link}>
      <Text>{children}</Text>
    </Link>
  );
};
