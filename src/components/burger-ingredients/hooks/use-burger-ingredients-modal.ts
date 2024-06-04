import { TIngredientItem } from '@/api';
import { useDispatch } from 'react-redux';
import { setSelectedIngredient, TAppDispatch } from '@/store';

export const useBurgerIngredientsModal = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const handleItemClick = (item: TIngredientItem) => {
    dispatch(setSelectedIngredient(item));
  };

  return { handleItemClick };
};
