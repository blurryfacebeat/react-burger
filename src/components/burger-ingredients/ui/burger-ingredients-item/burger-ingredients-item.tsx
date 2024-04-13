import { FC } from 'react';
import styles from './burger-ingredients-item.module.scss';
import { Price } from '@/components/price/price.tsx';
import { Text } from '@/components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

type TBurgerIngredientsItemProps = {
  image: string;
  name: string;
  price: number;
  count?: number;
};

export const BurgerIngredientsItem: FC<TBurgerIngredientsItemProps> = ({
  image,
  price,
  name,
  count,
}) => {
  return (
    <li className={styles.burgerIngredientsItem}>
      {count && <Counter count={count} size="default" />}
      <img src={image} alt="burger ingredient" />
      <Price>{price}</Price>
      <Text>{name}</Text>
    </li>
  );
};
