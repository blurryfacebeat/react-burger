import { FC } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './tabs.module.scss';
import classNames from 'classnames';

export type TTabItem = {
  value: string;
  label: string;
};

type TTabs = {
  current: string;
  tabs: TTabItem[];
  onSetCurrent: (value: string) => void;
  className?: string;
  anchorTag?: string;
};

export const Tabs: FC<TTabs> = ({
  current,
  tabs,
  className,
  anchorTag,
  onSetCurrent,
}) => {
  return (
    <ul className={classNames(styles.tabs, className)}>
      {tabs.map(({ value, label }) => (
        <li key={value}>
          <a href={`#${value}-${anchorTag}`}>
            <Tab
              active={current === value}
              value={value}
              onClick={() => onSetCurrent(value)}
            >
              {label}
            </Tab>
          </a>
        </li>
      ))}
    </ul>
  );
};
