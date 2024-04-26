import { useModal } from '@/components';
import { useRef } from 'react';
import { TIngredientItem } from '@/api';

type TUseBurgerIngredientsModalProps = {
  data: TIngredientItem[];
};

export const useBurgerIngredientsModal = ({
  data,
}: TUseBurgerIngredientsModalProps) => {
  const {
    isModalOpen,
    handleModalClose: handleModalCloseFromHook,
    handleModalOpen,
  } = useModal();

  const currentItem = useRef<TIngredientItem | null>(null);

  const handleItemClick = (itemId: string) => {
    handleModalOpen();
    currentItem.current = data.find((item) => item._id === itemId) || null;
  };

  const handleModalClose = () => {
    handleModalCloseFromHook();
    currentItem.current = null;
  };

  return { isModalOpen, currentItem, handleItemClick, handleModalClose };
};
