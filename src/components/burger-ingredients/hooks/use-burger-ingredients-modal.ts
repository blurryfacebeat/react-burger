import { useModal } from '@/components';
import { TIngredientItem } from '@/api';
import { useDispatch } from 'react-redux';
import { setSelectedIngredient, TAppDispatch } from '@/store';

export const useBurgerIngredientsModal = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const {
    isModalOpen,
    handleModalClose: handleModalCloseFromHook,
    handleModalOpen,
  } = useModal();

  const handleItemClick = (item: TIngredientItem) => {
    dispatch(setSelectedIngredient(item));
    handleModalOpen();
  };

  const handleModalClose = () => {
    dispatch(setSelectedIngredient(null));
    handleModalCloseFromHook();
  };

  return { isModalOpen, handleItemClick, handleModalClose };
};
