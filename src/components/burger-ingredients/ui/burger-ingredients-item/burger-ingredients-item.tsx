import { FC } from 'react';
import styles from './burger-ingredients-item.module.scss';
import { Text, Price } from '@/components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

type TBurgerIngredientsItemProps = {
  image: string;
  name: string;
  price: number;
  onClick: () => void;
  count?: number;
};

export const BurgerIngredientsItem: FC<TBurgerIngredientsItemProps> = ({
  image,
  price,
  name,
  count,
  onClick,
}) => {
  return (
    <li className={styles.burgerIngredientsItem} onClick={onClick}>
      {count && <Counter count={count} size="default" />}
      <img src={image} alt="burger ingredient" />
      <Price>{price}</Price>
      <Text>{name}</Text>
    </li>
  );
};
