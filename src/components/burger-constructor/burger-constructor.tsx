import { FC } from 'react';
import styles from './burger-constructor.module.scss';
import classNames from 'classnames';
import { BurgerConstructorItem } from '@/components/burger-constructor/ui';
import { TDataItem } from '@/utils';

type TBurgerConstructorProps = {
  data: TDataItem[];
};

export const BurgerConstructor: FC<TBurgerConstructorProps> = ({ data }) => {
  const bun = data.find((item) => item.type === 'bun')!;
  const ingredients = data.filter((item) => item.type !== 'bun')!;

  return (
    <div className={classNames(styles.burgerConstructor, 'mt-25 pl-4 pr-4')}>
      <BurgerConstructorItem
        text={`${bun.name} (верх)`}
        thumbnail={bun.image}
        price={bun.price}
        type="top"
        isLocked
      />
      <ul className={styles.burgerConstructorContainer}>
        {ingredients.map((item) => (
          <BurgerConstructorItem
            key={item._id}
            text={item.name}
            thumbnail={item.image}
            price={item.price}
            isDraggable
          />
        ))}
      </ul>
      <BurgerConstructorItem
        text={`${bun.name} (низ)`}
        thumbnail={bun.image}
        price={bun.price}
        type="bottom"
        isLocked
      />
    </div>
  );
};
