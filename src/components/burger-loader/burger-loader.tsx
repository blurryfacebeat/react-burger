import { FC } from 'react';
import styles from './burger-loader.module.scss';

export const BurgerLoader: FC = () => {
  return (
    <div className={styles.load}>
      <div className={styles.hamburger}>
        <div className={styles.topBun}></div>
        <div className={styles.pickle}></div>
        <div className={styles.pickle}></div>
        <div className={styles.tomato}>
          <div></div>
        </div>
        <div className={styles.tomato}>
          <div></div>
        </div>
        <div className={styles.cheese}></div>
        <div className={styles.cheese}></div>
        <div className={styles.beef}></div>
        <div className={styles.bottomBun}></div>
      </div>
    </div>
  );
};
