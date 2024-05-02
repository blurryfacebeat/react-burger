import { useDispatch, useSelector } from 'react-redux';
import { closeCurrentOrderModal, TAppDispatch, TRootState } from '@/store';

export const useBurgerConstructorModal = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const isModalOpen = useSelector(
    (state: TRootState) => state.currentOrder.isModalOpen,
  );

  const handleModalClose = () => {
    dispatch(closeCurrentOrderModal());
  };

  return {
    isModalOpen,
    handleModalClose,
  };
};
